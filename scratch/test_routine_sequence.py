"""
Test suite: Daily Routine Sequence activity
Tests patient isolation, routine length logic, score saving, and existing game stability.
"""
import sys, os, json
os.chdir(r'c:\Users\mahen\SIH26003')
sys.path.insert(0, r'c:\Users\mahen\SIH26003')

import app as flask_app
import unittest
import random, string

app = flask_app.app
app.config['TESTING'] = True
app.config['SECRET_KEY'] = 'test-routine'


def rand_str(n=6):
    return ''.join(random.choices(string.ascii_lowercase, k=n))


class TestRoutineSequence(unittest.TestCase):

    def setUp(self):
        """Register a caregiver and add a patient, return configured client."""
        self.client = app.test_client()
        tag = rand_str()
        # Register
        self.client.post('/register', data={
            'name': f'Routine CG {tag}',
            'email': f'routine_{tag}@test.local',
            'contact': '9876543210',
            'password': 'Test1234',
            'confirmation': 'Test1234',
        })
        # Add patient
        r = self.client.post('/patient/add', data={
            'name': f'Elder {tag}',
            'age': '73',
            'sex': 'Female',
        }, follow_redirects=False)
        with self.client.session_transaction() as sess:
            self.patient_id = sess.get('patient_id')
        self.assertIsNotNone(self.patient_id, "Patient ID must be set after add")

    def _save_routine_session(self, difficulty=1, score=2, total=2, accuracy=100):
        """Helper to POST a completed routine_sequence session."""
        return self.client.post('/api/score',
            data=json.dumps({
                'patient_id':       self.patient_id,
                'game_type':        'routine_sequence',
                'difficulty':       difficulty,
                'score':            score,
                'total':            total,
                'accuracy':         accuracy,
                'reaction_time':    1.0,
                'response_time':    4.0,
                'duration_seconds': 30,
            }),
            content_type='application/json',
        )

    # ── Test 1: New patient starts at Routine Length 1 ────────────────────
    def test_new_patient_starts_at_length_1(self):
        r = self.client.get(f'/game/routine/{self.patient_id}', follow_redirects=True)
        self.assertEqual(r.status_code, 200)
        body = r.data.decode('utf-8')
        # The Jinja badge renders "Routine Length 1" for a new patient
        self.assertIn('Routine Length 1', body, "New patient must see 'Routine Length 1' badge")
        # Must not show higher lengths on first visit
        self.assertNotIn('Routine Length 2', body)
        self.assertNotIn('Routine Length 3', body)

    # ── Test 2: Routine Length never exceeds 3 (= max 4 steps) ───────────
    def test_routine_length_never_exceeds_3(self):
        # Save 5 sessions all scoring perfectly at difficulty 3
        for _ in range(5):
            r = self._save_routine_session(difficulty=3, score=4, total=4, accuracy=100)
            self.assertEqual(r.status_code, 200)

        r = self.client.get(f'/game/routine/{self.patient_id}', follow_redirects=True)
        body = r.data.decode('utf-8')
        # Should never show Routine Length 4 or higher
        self.assertNotIn('Routine Length 4', body)
        self.assertNotIn('Routine Length 5', body)

    # ── Test 3: Score saves only for active patient ───────────────────────
    def test_session_saved_for_correct_patient(self):
        r = self._save_routine_session(difficulty=1, score=2, total=2)
        self.assertEqual(r.status_code, 200)
        resp = json.loads(r.data)
        self.assertIn('session_id', resp)
        self.assertEqual(resp['patient_id'], self.patient_id)

        # Confirm sessions API returns exactly 1 session for this patient
        r2 = self.client.get(f'/api/patient/{self.patient_id}/sessions')
        sessions = json.loads(r2.data)
        routine_sessions = [s for s in sessions if s['game_type'] == 'routine_sequence']
        self.assertEqual(len(routine_sessions), 1)

    # ── Test 4: Patient isolation ─────────────────────────────────────────
    def test_patient_isolation(self):
        # Save a session for patient 1
        self._save_routine_session()

        # Add a second patient
        tag2 = rand_str()
        self.client.post('/patient/add', data={
            'name': f'Elder2 {tag2}', 'age': '68', 'sex': 'Male',
        }, follow_redirects=False)
        with self.client.session_transaction() as sess:
            patient_id2 = sess.get('patient_id')

        self.assertNotEqual(patient_id2, self.patient_id, "Second patient must have different ID")

        # Second patient's sessions API must return nothing
        r = self.client.get(f'/api/patient/{patient_id2}/sessions')
        sessions = json.loads(r.data)
        self.assertEqual(len(sessions), 0, "Second patient must see zero sessions")

    # ── Test 5: Memory Match still works ─────────────────────────────────
    def test_memory_match_unaffected(self):
        r = self.client.get(f'/game/matching/{self.patient_id}', follow_redirects=True)
        self.assertEqual(r.status_code, 200)
        body = r.data.decode('utf-8')
        self.assertIn('Memory Match', body)
        self.assertIn('game-board', body)

    # ── Test 6: Routine game route returns 200 ────────────────────────────
    def test_routine_game_route_returns_200(self):
        r = self.client.get(f'/game/routine/{self.patient_id}', follow_redirects=True)
        self.assertEqual(r.status_code, 200)

    # ── Test 7: Score API accepts routine_sequence ────────────────────────
    def test_score_api_accepts_routine_sequence(self):
        r = self._save_routine_session()
        self.assertEqual(r.status_code, 200)
        resp = json.loads(r.data)
        self.assertIn('session_id', resp)
        self.assertIn('next_difficulty', resp)
        self.assertEqual(resp['patient_id'], self.patient_id)

    # ── Test 8: Games page shows both active games ────────────────────────
    def test_games_page_shows_both_active_games(self):
        r = self.client.get('/games', follow_redirects=True)
        self.assertEqual(r.status_code, 200)
        body = r.data.decode('utf-8')
        self.assertIn('Memory Match', body)
        self.assertIn('Daily Routine Sequence', body)
        # Unsplash image removed
        self.assertNotIn('unsplash.com', body)

    # ── Test 9: Routine page has correct wording ──────────────────────────
    def test_routine_page_safe_wording(self):
        r = self.client.get(f'/game/routine/{self.patient_id}', follow_redirects=True)
        body = r.data.decode('utf-8')
        self.assertIn('Daily Routine Sequence', body)
        self.assertIn('Take your time', body)
        self.assertIn('There is no rush', body)
        self.assertIn('not a medical assessment', body)
        # Badge must use our safe wording
        self.assertIn('Routine Length', body)
        # Must never show these clinical/pressure phrases in user-visible text
        self.assertNotIn('Difficulty Level', body)
        self.assertNotIn('Challenge Level', body)
        self.assertNotIn('Hard Mode', body)
        self.assertNotIn('Advanced Mode', body)
        # No celebratory confetti, timers, or pressure
        self.assertNotIn('countdown', body.lower())
        self.assertNotIn('confetti', body.lower())

    # ── Test 10: Progression logic — difficulty increases correctly ───────
    def test_progression_difficulty_increases(self):
        # Save a perfect session at difficulty 1 (score=2, total=2)
        r = self._save_routine_session(difficulty=1, score=2, total=2, accuracy=100)
        resp = json.loads(r.data)
        # compute_next_difficulty: accuracy=100% >= 80%, so next = 2
        self.assertEqual(resp['next_difficulty'], 2)

    # ── Test 11: Failed session does not increase difficulty ──────────────
    def test_failed_session_no_increase(self):
        # score=1 out of 3 = 33% accuracy < 50% — keep or decrease
        r = self._save_routine_session(difficulty=2, score=1, total=3, accuracy=33)
        resp = json.loads(r.data)
        # next_difficulty should be 1 (decreased, since accuracy < 50% and current > 1)
        self.assertLessEqual(resp['next_difficulty'], 2)

    # ── Test 12: No abandoned sessions for wrong order ────────────────────
    def test_abandoned_session_not_in_api(self):
        # Just GETting the game page does not add any sessions
        self.client.get(f'/game/routine/{self.patient_id}')
        r = self.client.get(f'/api/patient/{self.patient_id}/sessions')
        sessions = json.loads(r.data)
        self.assertEqual(len(sessions), 0, "No sessions saved from just visiting the game page")


if __name__ == '__main__':
    import warnings
    warnings.filterwarnings('ignore', category=ResourceWarning)
    unittest.main(verbosity=2)
