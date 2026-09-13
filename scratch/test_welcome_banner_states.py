import unittest
import sys
import os
sys.path.insert(0, os.path.abspath(os.path.dirname(__file__) + '/..'))

from app import app
from database import init_db, get_connection

class TestWelcomeBanner(unittest.TestCase):
    def setUp(self):
        self.client = app.test_client()
        init_db()

    def test_banner_shown_when_patient_registered(self):
        """When patient is registered, banner is shown with 'Welcome Back, <Name>!', girl character, and no flower emoji."""
        with get_connection() as conn:
            cg = conn.execute("SELECT id, name FROM caregivers LIMIT 1").fetchone()
            pt = conn.execute("SELECT id, name FROM patients WHERE caregiver_id = ? LIMIT 1", (cg['id'],)).fetchone()
            patient_name = pt['name']

        with self.client.session_transaction() as sess:
            sess['caregiver_id'] = cg['id']
            sess['caregiver_name'] = cg['name']
            sess['patient_id'] = pt['id']

        res = self.client.get('/home', follow_redirects=True)
        self.assertEqual(res.status_code, 200)
        html = res.get_data(as_text=True)

        # 1. Banner must be present
        self.assertIn('id="emotional-welcome-banner"', html)

        # 2. Must say "Welcome Back, <Patient name>!"
        self.assertIn(f"Welcome Back, {patient_name}!", html)
        self.assertNotIn("Welcome Home", html)

        # 3. Genda phool must be removed, replaced with cheerful mascot girl
        self.assertNotIn("marigold.svg", html)
        self.assertNotIn("genda", html.lower())
        self.assertIn("mascot/cheerful.png", html)

        # 4. No flower emoji 🌸 in the banner
        banner_chunk = html.split('id="emotional-welcome-banner"')[1].split('</section>')[0]
        self.assertNotIn("🌸", banner_chunk)

    def test_banner_hidden_when_no_patient(self):
        """When a newly registered caregiver has no patient, the box is completely removed from the screen."""
        self.client.post('/register', data={
            'name': 'New Solo Caregiver',
            'email': 'newsolo@example.com',
            'password': 'password123',
            'confirmation': 'password123'
        })
        res = self.client.get('/home', follow_redirects=True)
        self.assertEqual(res.status_code, 200)
        html = res.get_data(as_text=True)

        # Banner box must NOT be present
        self.assertNotIn('id="emotional-welcome-banner"', html)
        self.assertNotIn('emotional-welcome-card', html)

if __name__ == '__main__':
    unittest.main()
