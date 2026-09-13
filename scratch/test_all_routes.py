import sys, os
sys.path.insert(0, os.path.abspath('.'))
import json
from app import app

client = app.test_client()

print("=== 1. Testing Unauthenticated Routes ===")
unauth_routes = ['/dashboard', '/home', '/games', '/doctor', '/game/matching/12']
for r in unauth_routes:
    res = client.get(r)
    loc = res.headers.get("Location", "none")
    print(f"{r:25} -> {res.status_code} (Redirect: {loc})")
    assert res.status_code in (302, 200)

print("\n=== 2. Testing Authenticated Routes ===")
with client.session_transaction() as sess:
    sess['caregiver_id'] = 3
    sess['caregiver_name'] = 'Ananya Sharma'

auth_routes = [
    '/',
    '/home',
    '/games',
    '/dashboard',
    '/dashboard/12',
    '/doctor',
    '/doctor/12',
    '/game/matching/12',
]
for r in auth_routes:
    res = client.get(r)
    print(f"{r:25} -> {res.status_code} ({len(res.get_data())} bytes)")
    assert res.status_code in (200, 302), f"Failed on {r}: {res.status_code}"

print("\n=== 3. Testing API Routes ===")
# Sessions API
res_sess = client.get('/api/patient/12/sessions')
print(f"/api/patient/12/sessions  -> {res_sess.status_code} (Sessions: {len(res_sess.json)})")
assert res_sess.status_code == 200

# Invalid patient ID
res_inv = client.get('/api/patient/99999/sessions')
print(f"/api/patient/99999/sessions -> {res_inv.status_code} (JSON: {res_inv.json})")
assert res_inv.status_code == 404

# Submit score API (valid)
res_score = client.post('/api/score', data=json.dumps({
    'patient_id': 12,
    'game_type': 'matching',
    'difficulty': 1,
    'score': 2,
    'total': 2
}), content_type='application/json')
print(f"/api/score (valid)        -> {res_score.status_code} (Next: {res_score.json.get('next_difficulty')})")
assert res_score.status_code == 200

# Submit score API (bad payload)
res_bad_score = client.post('/api/score', data=json.dumps({'junk': 123}), content_type='application/json')
print(f"/api/score (bad payload)  -> {res_bad_score.status_code} (JSON: {res_bad_score.json})")
assert res_bad_score.status_code == 400

print("\nALL BACKEND & API TESTS PASSED!")
