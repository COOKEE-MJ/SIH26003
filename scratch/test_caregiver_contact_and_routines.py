import unittest
import sys
import os
import uuid
sys.path.insert(0, os.path.abspath(os.path.dirname(__file__) + '/..'))

from app import app
from database import (
    init_db,
    get_connection,
    add_care_routine,
    get_care_routines,
    toggle_care_routine,
    reset_daily_routines,
    delete_care_routine,
    get_caregiver_by_email,
)

class TestCaregiverContactAndRoutines(unittest.TestCase):
    def setUp(self):
        self.client = app.test_client()
        init_db()

    def test_caregiver_registration_requires_and_saves_contact(self):
        """Registering a caregiver requires contact number and saves it in database."""
        # 1. Missing contact should fail
        email = f"cg_{uuid.uuid4().hex[:8]}@example.com"
        res_fail = self.client.post('/register', data={
            'name': 'Caregiver Without Contact',
            'email': email,
            'password': 'password123',
            'confirmation': 'password123',
            'contact': ''
        })
        self.assertEqual(res_fail.status_code, 400)
        self.assertIn('contact number', res_fail.get_data(as_text=True).lower())

        # 2. Valid contact should succeed and store in database
        phone = '+91 98765 43210'
        res_ok = self.client.post('/register', data={
            'name': 'Caregiver With Contact',
            'email': email,
            'password': 'password123',
            'confirmation': 'password123',
            'contact': phone
        }, follow_redirects=True)
        self.assertEqual(res_ok.status_code, 200)

        cg = get_caregiver_by_email(email)
        self.assertIsNotNone(cg)
        self.assertEqual(cg.get('contact'), phone)

    def test_sidebar_and_dashboard_tab_names(self):
        """Sidebar and dashboard must display exact clean tab names with no extra subtitles."""
        with get_connection() as conn:
            cg = conn.execute("SELECT id, name FROM caregivers LIMIT 1").fetchone()
            pt = conn.execute("SELECT id, name FROM patients WHERE caregiver_id = ? LIMIT 1", (cg['id'],)).fetchone()
            if not pt:
                conn.execute("INSERT INTO patients (caregiver_id, name, age, sex) VALUES (?, 'Test Patient', 70, 'Female')", (cg['id'],))
                conn.commit()
                pt = conn.execute("SELECT id, name FROM patients WHERE caregiver_id = ? LIMIT 1", (cg['id'],)).fetchone()

        with self.client.session_transaction() as sess:
            sess['caregiver_id'] = cg['id']
            sess['caregiver_name'] = cg['name']
            sess['patient_id'] = pt['id']

        res = self.client.get('/home')
        html = res.get_data(as_text=True)

        # Check sidebar tab names
        self.assertIn('HOME', html)
        self.assertIn('GAMES', html)
        self.assertIn('FAMILY CARE', html)
        self.assertIn('MEMORY NOTES', html)
        self.assertIn('DOCTOR REPORT', html)
        self.assertIn('MUSIC', html)

        # Check that sidebar navigation tab arrows are removed
        self.assertNotIn('sidebar-nav-arrow', html)

        # Check that old subtitles are removed
        self.assertNotIn('Care circle &amp; daily overview', html)
        self.assertNotIn('Culturally-rooted cognitive play', html)
        self.assertNotIn('Longitudinal engagement trends', html)
        self.assertNotIn('Comforting routines &amp; family notes', html)
        self.assertNotIn('Clinical neurological summary', html)
        self.assertNotIn('Calming regional melodies', html)

        # Check dashboard tab names
        res_dash = self.client.get('/dashboard')
        dash_html = res_dash.get_data(as_text=True)
        self.assertIn('FAMILY CARE', dash_html)
        self.assertIn('MEMORY NOTES', dash_html)
        self.assertIn('DOCTOR REPORT', dash_html)
        self.assertIn('GAMES', dash_html)

    def test_routine_scheduling_completion_refresh_and_delete(self):
        """Test routine management: add daily/one-time, interactive toggle, reset, and delete."""
        with get_connection() as conn:
            cg = conn.execute("SELECT id, name FROM caregivers LIMIT 1").fetchone()
            unique_name = f"Routine Pt {uuid.uuid4().hex[:6]}"
            conn.execute("INSERT INTO patients (caregiver_id, name, age, sex) VALUES (?, ?, 72, 'Male')", (cg['id'], unique_name))
            conn.commit()
            pt = conn.execute("SELECT id, name FROM patients WHERE name = ?", (unique_name,)).fetchone()

        with self.client.session_transaction() as sess:
            sess['caregiver_id'] = cg['id']
            sess['caregiver_name'] = cg['name']
            sess['patient_id'] = pt['id']

        # 1. Add Daily Routine
        res_add1 = self.client.post('/api/routines/add', json={
            'title': 'Morning Memory Drops',
            'time': '8:30 AM',
            'category': 'med',
            'frequency': 'daily'
        })
        self.assertEqual(res_add1.status_code, 201)
        r1_id = res_add1.get_json()['routine']['id']

        # 2. Add One-Time Task
        res_add2 = self.client.post('/api/routines/add', json={
            'title': 'Collect Eye Drops from Clinic',
            'time': '11:00 AM',
            'category': 'general',
            'frequency': 'one_time'
        })
        self.assertEqual(res_add2.status_code, 201)
        r2_id = res_add2.get_json()['routine']['id']

        # 3. Check home page renders routines with checkboxes
        res_home = self.client.get('/home')
        html_home = res_home.get_data(as_text=True)
        self.assertIn('Morning Memory Drops', html_home)
        self.assertIn('Collect Eye Drops from Clinic', html_home)
        self.assertIn(f'chk-routine-{r1_id}', html_home)
        self.assertIn(f'chk-routine-{r2_id}', html_home)
        self.assertIn('Daily Care &amp; Medication Routine', html_home)

        # 4. Toggle completion checkbox for Daily Routine
        res_tog1 = self.client.post(f'/api/routines/{r1_id}/toggle', json={'is_completed': True})
        self.assertEqual(res_tog1.status_code, 200)
        self.assertTrue(res_tog1.get_json()['routine']['done'])

        # Toggle completion checkbox for One-Time Task
        res_tog2 = self.client.post(f'/api/routines/{r2_id}/toggle', json={'is_completed': True})
        self.assertEqual(res_tog2.status_code, 200)
        self.assertTrue(res_tog2.get_json()['routine']['done'])

        # 5. Refresh Daily Routines
        # Daily task resets to unchecked (done=False), completed one-time task is cleaned up
        res_reset = self.client.post('/api/routines/reset-daily')
        self.assertEqual(res_reset.status_code, 200)
        routines = res_reset.get_json()['routines']

        # Daily task should still exist and be reset to scheduled
        daily_task = next((r for r in routines if r['id'] == r1_id), None)
        self.assertIsNotNone(daily_task)
        self.assertFalse(daily_task['done'])

        # Finished one-time task should be removed from active routine block
        onetime_task = next((r for r in routines if r['id'] == r2_id), None)
        self.assertIsNone(onetime_task)

        # 6. Delete routine
        res_del = self.client.post(f'/api/routines/{r1_id}/delete')
        self.assertEqual(res_del.status_code, 200)
        remaining = get_care_routines(pt['id'])
        self.assertEqual(len(remaining), 0)

    def test_unregistered_patient_cannot_add_routines(self):
        """Caregivers with no registered patient are blocked from adding routines."""
        email = f"empty_{uuid.uuid4().hex[:8]}@example.com"
        self.client.post('/register', data={
            'name': 'Empty Caregiver',
            'email': email,
            'password': 'password123',
            'confirmation': 'password123',
            'contact': '9876543210'
        })
        # Try to add routine without patient
        res = self.client.post('/api/routines/add', json={
            'title': 'Test Routine',
            'time': '9:00 AM'
        })
        self.assertEqual(res.status_code, 400)
        self.assertIn('Please register a patient first', res.get_json()['error'])

if __name__ == '__main__':
    unittest.main()

