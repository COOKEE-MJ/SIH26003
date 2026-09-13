import sys
import os
import json

sys.path.insert(0, os.path.abspath('.'))
from app import app
from database import init_db

init_db()
client = app.test_client()

print("=== Testing Sidebar Menu & Profile Modals Presence ===")

# Set up authenticated session
with client.session_transaction() as sess:
    sess['caregiver_id'] = 3
    sess['caregiver_name'] = 'Ananya Sharma'

pages_to_test = [
    ('/home', 'Home Page'),
    ('/dashboard', 'Dashboard (Caregiver View)'),
    ('/dashboard/12', 'Dashboard for Patient 12'),
    ('/doctor', 'Doctor Report View'),
    ('/doctor/12', 'Doctor Report for Patient 12'),
    ('/games', 'Games Page'),
]

for url, label in pages_to_test:
    res = client.get(url)
    assert res.status_code == 200, f"Failed to load {url}, got status {res.status_code}"
    html = res.get_data(as_text=True)

    # 1. Navbar / Header toggle button
    assert 'sidebar-toggle-btn' in html, f"Missing sidebar-toggle-btn in {label} ({url})"
    assert 'sidebar-menu-tag' in html, f"Missing sidebar-menu-tag in {label} ({url})"

    # 2. Floating quick-access menu button (always visible)
    assert 'floating-sidebar-trigger' in html or 'floating-sidebar-btn' in html, f"Missing floating button in {label} ({url})"

    # 3. Sidebar slide-over drawer
    assert 'app-sidebar' in html, f"Missing app-sidebar in {label} ({url})"
    assert 'sidebar-backdrop' in html, f"Missing sidebar-backdrop in {label} ({url})"

    # 4. Profile blocks & line-art pencil edit modals
    assert 'modal-edit-caregiver' in html, f"Missing modal-edit-caregiver in {label} ({url})"
    assert 'modal-edit-patient' in html, f"Missing modal-edit-patient in {label} ({url})"

    # 5. Sidebar script
    assert 'sidebar.js' in html, f"Missing sidebar.js script in {label} ({url})"

    print(f"  [PASS] {label:30} has all sidebar components, floating button, modals, and JS.")

print("\n=== Testing Caregiver Profile API Endpoint ===")
# Test valid update
res_cg = client.post('/api/profile/caregiver', json={
    'name': 'Ananya Sharma',
    'email': 'ananya@example.com'
})
assert res_cg.status_code == 200, f"Caregiver update failed: {res_cg.status_code} {res_cg.get_data(as_text=True)}"
cg_data = res_cg.get_json()
assert cg_data['name'] == 'Ananya Sharma'
assert cg_data['email'] == 'ananya@example.com'
print("  [PASS] Caregiver update endpoint works.")

# Test caregiver validation (empty name)
res_cg_bad = client.post('/api/profile/caregiver', json={
    'name': '',
    'email': 'ananya@example.com'
})
assert res_cg_bad.status_code == 400
print("  [PASS] Caregiver validation for empty name rejected with 400.")

print("\n=== Testing Patient Profile API Endpoint ===")
# Test valid patient update
res_pt = client.post('/api/profile/patient', json={
    'name': 'Durgadas Sharma',
    'age': 75,
    'sex': 'Male',
    'diagnosis_stage': 'Middle stage',
    'relation': 'Daughter',
    'contact': '+91 9876543210'
})
assert res_pt.status_code == 200, f"Patient update failed: {res_pt.status_code} {res_pt.get_data(as_text=True)}"
pt_data = res_pt.get_json()
assert pt_data['name'] == 'Durgadas Sharma'
assert pt_data['age'] == 75
print("  [PASS] Patient update endpoint works.")

# Test patient validation (empty name)
res_pt_bad = client.post('/api/profile/patient', json={
    'name': ''
})
assert res_pt_bad.status_code == 400
print("  [PASS] Patient validation for empty name rejected with 400.")

print("\nALL SIDEBAR AND NAVIGATION VERIFICATIONS PASSED!")

