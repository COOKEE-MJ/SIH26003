import os
import sys
sys.path.insert(0, os.path.abspath('.'))

from app import app
import database

database.init_db()
client = app.test_client()

print("=== 1. Verify 'Dementia-Friendly Pathway' has been removed ===")
with client.session_transaction() as sess:
    sess['caregiver_id'] = 3
    sess['caregiver_name'] = 'Ananya Sharma'

res_home = client.get('/home')
assert res_home.status_code == 200
home_html = res_home.get_data(as_text=True)
assert "Dementia-Friendly Pathway" not in home_html, "Dementia-Friendly Pathway should NOT be in home.html!"
print("  [PASS] 'Dementia-Friendly Pathway' is removed from home.html.")

print("\n=== 2. Verify Family Memory Notes API & Database Storage ===")
patient = database.get_all_patients(3)[0]
pid = patient['id']
print(f"Testing for patient ID: {pid}, Name: {patient['name']}")

# Add a test note via API
test_note_text = "Maa smiled softly and remembered visiting the tea gardens in Tezpur with her sister."
res_add = client.post('/api/notes/add', json={
    'patient_id': pid,
    'author': 'Ananya (Daughter)',
    'text': test_note_text,
    'anchor_type': 'Tea & Hometown Routine'
})
assert res_add.status_code in (200, 201), f"Failed adding note: {res_add.status_code} {res_add.get_data(as_text=True)}"
data_add = res_add.get_json()
assert data_add.get('success') is True
assert data_add['note']['text'] == test_note_text
print("  [PASS] Note successfully stored via /api/notes/add.")

# Query notes via API
res_get = client.get(f'/api/patient/{pid}/notes')
assert res_get.status_code == 200
notes_list = res_get.get_json()
assert any(n['text'] == test_note_text for n in notes_list), "Added note missing from GET /api/patient/<id>/notes"
print(f"  [PASS] Retrieved {len(notes_list)} notes from database for patient.")

print("\n=== 3. Verify Notes in Home Page Feed ===")
res_home_updated = client.get('/home')
html_home_updated = res_home_updated.get_data(as_text=True)
assert 'home-notes-feed' in html_home_updated, "home-notes-feed missing on home page"
assert test_note_text in html_home_updated, "New note not found in home feed HTML"
print("  [PASS] Note is visible in Family Memory Notes & Anchors card on Home page.")

print("\n=== 4. Verify Notes Tab on Dashboard ===")
res_dash = client.get(f'/dashboard/{pid}?tab=notes')
assert res_dash.status_code == 200
dash_html = res_dash.get_data(as_text=True)

# 4a. Tab button
assert 'id="tab-notes"' in dash_html, "tab-notes button missing in dashboard"
assert 'Family Memory Notes &amp; Anchors' in dash_html or 'Family Memory Notes & Anchors' in dash_html

# 4b. Notes view section
assert 'id="view-notes"' in dash_html, "view-notes section missing in dashboard"
assert 'dashboard-notes-grid' in dash_html, "dashboard-notes-grid missing in dashboard"
assert test_note_text in dash_html, "New note not found in dashboard notes tab HTML"

# 4c. Caregiver feed also has note
assert 'caregiver-notes-feed' in dash_html, "caregiver-notes-feed missing in dashboard"

print("  [PASS] Notes tab and view-notes section exist and display stored patient notes on Dashboard.")

print("\n=== 5. Verify Sidebar Link to Notes Tab ===")
assert 'tab=notes' in dash_html, "Link to ?tab=notes missing in sidebar"
print("  [PASS] Sidebar Care Modules contains direct link to Memory Notes & Anchors.")

print("\nALL FAMILY NOTES & REMOVAL ASSERTIONS PASSED PERFECTLY!")
