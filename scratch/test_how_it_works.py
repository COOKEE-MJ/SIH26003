import sys, os
sys.path.insert(0, os.path.abspath('.'))
from app import app

client = app.test_client()
with client.session_transaction() as sess:
    sess['caregiver_id'] = 3
    sess['caregiver_name'] = 'Ananya Sharma'

res = client.get('/home')
print('Status:', res.status_code)
html = res.get_data(as_text=True)

hero_idx = html.find('home-hero')
how_idx = html.find('how-it-works')
cmd_idx = html.find('command-center-section')
journeys_idx = html.find('user-journeys-section')

print(f'Hero index: {hero_idx}')
print(f'How SmritiSetu Works index: {how_idx}')
print(f'Command Center index: {cmd_idx}')
print(f'Three Care Journeys index: {journeys_idx}')

assert hero_idx < how_idx < journeys_idx, 'Position check failed!'
print('POSITION CHECK PASSED: Hero < How SmritiSetu Works < Three Care Journeys!')

# Verify all 5 steps are present
for step in ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5']:
    assert step in html, f'{step} missing!'
print('ALL 5 STEPS PRESENT!')

# Check required texts
assert 'How SmritiSetu Works' in html
assert 'A simple journey from cognitive engagement to meaningful care insights.' in html
assert 'Choose Language' in html
assert 'Play Cognitive Activities' in html
assert 'AI Cognitive Analysis' in html
assert 'Family &amp; Caregiver Insights' in html or 'Family & Caregiver Insights' in html
assert 'Doctor-Ready Summary' in html

print('ALL REQUIRED TEXTS AND CONTENT VERIFIED!')

