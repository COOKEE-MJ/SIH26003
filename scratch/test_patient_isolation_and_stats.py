import unittest
import sys
import os
sys.path.insert(0, os.path.abspath(os.path.dirname(__file__) + '/..'))

from app import app
from database import init_db, get_connection, save_session

class TestPatientIsolationAndStats(unittest.TestCase):
    def setUp(self):
        self.client = app.test_client()
        init_db()

    def test_unregistered_patient_shows_no_scores_or_fake_status(self):
        """When no patient is registered, home page must NOT show 78/100 or 'Stable & Active'."""
        # Register a fresh caregiver with no patient
        import uuid
        email = f'empty_{uuid.uuid4().hex[:8]}@example.com'
        res_reg = self.client.post('/register', data={
            'name': 'Empty Caregiver',
            'email': email,
            'password': 'password123',
            'confirmation': 'password123',
            'contact': '+91 98765 43210'
        }, follow_redirects=True)
        html = res_reg.get_data(as_text=True)

        # 1. Must NOT show fake score 78
        self.assertNotIn('<span class="score-num">78</span>', html)
        self.assertNotIn('Consistent improvement over 14 days', html)
        self.assertIn('No patient registered', html)

        # 2. Must NOT show fake cognitive status
        self.assertNotIn('Low (Early-Stage)', html)
        self.assertIn('Not Registered', html)

        # 3. Note creation without patient must be rejected
        res_note = self.client.post('/api/notes/add', json={
            'author': 'Empty Caregiver',
            'text': 'Test note without patient'
        })
        self.assertEqual(res_note.status_code, 400)
        self.assertIn('Please register a patient first', res_note.get_json()['error'])

    def test_registered_patient_with_zero_sessions_shows_pending(self):
        """When a patient is registered but has not played, score must be '--' and status 'Baseline Pending'."""
        with get_connection() as conn:
            cg = conn.execute("SELECT id, name FROM caregivers LIMIT 1").fetchone()
            # Insert a patient with zero sessions
            conn.execute("INSERT INTO patients (caregiver_id, name, age, sex) VALUES (?, 'Fresh Patient', 68, 'Female')", (cg['id'],))
            conn.commit()
            pt = conn.execute("SELECT id, name FROM patients WHERE name = 'Fresh Patient'").fetchone()

        with self.client.session_transaction() as sess:
            sess['caregiver_id'] = cg['id']
            sess['caregiver_name'] = cg['name']
            sess['patient_id'] = pt['id']

        res = self.client.get('/home', follow_redirects=True)
        html = res.get_data(as_text=True)

        # Must show dashes, not 78
        self.assertNotIn('<span class="score-num">78</span>', html)
        self.assertIn('No sessions played yet', html)
        self.assertIn('Baseline Pending', html)
        self.assertIn('Welcome Back, Fresh Patient!', html)

    def test_registered_patient_with_sessions_shows_their_real_data_only(self):
        """When a patient plays, their real score is calculated from their sessions and isolated."""
        with get_connection() as conn:
            cg = conn.execute("SELECT id, name FROM caregivers LIMIT 1").fetchone()
            conn.execute("INSERT INTO patients (caregiver_id, name, age, sex) VALUES (?, 'Scored Patient', 75, 'Male')", (cg['id'],))
            conn.commit()
            pt = conn.execute("SELECT id, name FROM patients WHERE name = 'Scored Patient'").fetchone()

        # Save an exact session: score 85 out of 100
        save_session(pt['id'], 'matching', 2, 85, 100)

        with self.client.session_transaction() as sess:
            sess['caregiver_id'] = cg['id']
            sess['caregiver_name'] = cg['name']
            sess['patient_id'] = pt['id']

        res = self.client.get('/home', follow_redirects=True)
        html = res.get_data(as_text=True)

        # Must show 85 / 100 for this patient
        self.assertIn('<span class="score-num">85</span>', html)
        self.assertIn('Stable &amp; Active', html)
        self.assertIn('Welcome Back, Scored Patient!', html)

if __name__ == '__main__':
    unittest.main()
