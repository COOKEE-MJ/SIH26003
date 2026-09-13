import unittest
import json
import re
import sys
import os
sys.path.insert(0, os.path.abspath(os.path.dirname(__file__) + '/..'))
from app import app
from database import init_db, get_connection

class TestMusicSidebarGames(unittest.TestCase):
    def setUp(self):
        self.client = app.test_client()
        init_db()
        # Seed or get a caregiver and patient
        with get_connection() as conn:
            cg = conn.execute("SELECT id, name FROM caregivers LIMIT 1").fetchone()
            if not cg:
                conn.execute("INSERT INTO caregivers (name, email, password_hash, created_at) VALUES ('Test Caregiver', 'test@example.com', 'dummy', '2026-09-13 00:00:00')")
                conn.commit()
                cg = conn.execute("SELECT id, name FROM caregivers LIMIT 1").fetchone()
            self.caregiver_id = cg['id']

            pt = conn.execute("SELECT id, name FROM patients WHERE caregiver_id = ? LIMIT 1", (self.caregiver_id,)).fetchone()
            if not pt:
                conn.execute("INSERT INTO patients (caregiver_id, name, age, sex, diagnosis_stage, created_at) VALUES (?, 'Test Patient', 72, 'Female', 'Early stage', '2026-09-13 00:00:00')", (self.caregiver_id,))
                conn.commit()
                pt = conn.execute("SELECT id, name FROM patients WHERE caregiver_id = ? LIMIT 1", (self.caregiver_id,)).fetchone()
            self.patient_id = pt['id']

    def test_games_page_no_choose_a_gentle_game(self):
        """Verify that 'Choose a gentle game' has been completely removed from games screen."""
        with self.client.session_transaction() as sess:
            sess['caregiver_id'] = self.caregiver_id
            sess['caregiver_name'] = 'Test Caregiver'
            sess['patient_id'] = self.patient_id

        res = self.client.get('/games')
        self.assertEqual(res.status_code, 200)
        html = res.get_data(as_text=True)
        self.assertNotIn("Choose a gentle game", html, "Found 'Choose a gentle game' in /games HTML!")
        self.assertNotIn("Dementia-Focused Cognitive Activities", html, "Found 'Dementia-Focused Cognitive Activities' in /games HTML!")
        self.assertNotIn("pace-note", html, "Found 'pace-note' in /games HTML!")
        self.assertIn("games-mascot-section", html, "Missing games-mascot-section in /games HTML!")
        self.assertIn("games-mascot-bubble", html, "Missing games-mascot-bubble in /games HTML!")
        self.assertIn("mascot/cheerful.png", html, "Missing mascot cheerful.png in /games HTML!")
        self.assertIn("Memory Match", html)

    def test_music_dialog_presence_on_all_caregiver_pages(self):
        """Verify #music-dialog is included on Home, Games, and Dashboard pages."""
        with self.client.session_transaction() as sess:
            sess['caregiver_id'] = self.caregiver_id
            sess['caregiver_name'] = 'Test Caregiver'
            sess['patient_id'] = self.patient_id

        for route in ['/home', '/games', '/dashboard']:
            res = self.client.get(route, follow_redirects=True)
            self.assertEqual(res.status_code, 200, f"Failed on {route}")
            html = res.get_data(as_text=True)
            self.assertIn('id="music-dialog"', html, f"Missing #music-dialog on {route}")
            self.assertIn('class="music-dialog"', html, f"Missing .music-dialog on {route}")
            self.assertIn('music_player.js', html, f"Missing music_player.js on {route}")

    def test_sidebar_drawer_markup(self):
        """Verify sidebar drawer has floating button, close button, and proper onclick calls."""
        with self.client.session_transaction() as sess:
            sess['caregiver_id'] = self.caregiver_id
            sess['caregiver_name'] = 'Test Caregiver'
            sess['patient_id'] = self.patient_id

        res = self.client.get('/home', follow_redirects=True)
        html = res.get_data(as_text=True)
        self.assertIn('id="app-sidebar"', html)
        self.assertNotIn('id="floating-sidebar-btn"', html)
        self.assertIn('id="sidebar-toggle-btn"', html)
        self.assertIn('openSidebar(event)', html)
        self.assertIn('closeSidebar(event)', html)
        self.assertIn('data-open-music', html)

    def test_css_centering_for_music_dialog(self):
        """Verify polish.css contains center transform rules for .music-dialog."""
        with open('static/css/polish.css', 'r', encoding='utf-8') as f:
            css = f.read()

        self.assertIn('transform: translate(-50%, -50%) !important;', css)
        self.assertIn('top: 50% !important;', css)
        self.assertIn('left: 50% !important;', css)
        self.assertIn('position: fixed !important;', css)

    def test_music_tracks_have_no_duplicate_audios(self):
        """Verify that all music tracks in music_player.js have strictly unique audio URLs."""
        with open('static/js/music_player.js', 'r', encoding='utf-8') as f:
            js = f.read()

        urls = re.findall(r'url:\s*"([^"]+)"', js)
        self.assertGreater(len(urls), 0, "No music tracks found")
        self.assertEqual(len(urls), len(set(urls)), f"Found duplicate audio URLs in music tracks: {urls}")
        
        # Verify specific removed duplicates are not present
        self.assertNotIn("Hornbill gathering", js)
        self.assertNotIn("Loktak breeze", js)
        self.assertNotIn("Pena strings", js)
        self.assertNotIn("Bamboo evening", js)
        self.assertNotIn("Mizo lullaby", js)
        self.assertNotIn("Garia rhythm", js)

    def test_games_mascot_multilingual_support(self):
        """Verify that games.html contains mascot translations for all 7 supported languages."""
        with open('templates/games.html', 'r', encoding='utf-8') as f:
            html = f.read()

        # Check that all 7 languages are supported in MASCOT_LANG_DATA
        for lang in ['en', 'hi', 'as', 'bn', 'kh', 'mni', 'lus']:
            self.assertIn(f'{lang}:', html, f"Missing language '{lang}' in games.html mascot script!")

        # Check that smritisetu:language event listener is wired up
        self.assertIn('smritisetu:language', html)
        self.assertIn('language-select', html)

        # Check i18n.js has companionGirl key in all 7 languages
        with open('static/js/i18n.js', 'r', encoding='utf-8') as f:
            i18n = f.read()
        self.assertEqual(i18n.count('companionGirl:'), 7, "companionGirl should be in all 7 languages in i18n.js")

if __name__ == '__main__':
    unittest.main()
