import sys, os
sys.path.insert(0, os.path.abspath('.'))
from app import app

client = app.test_client()
with client.session_transaction() as sess:
    sess['caregiver_id'] = 3
    sess['caregiver_name'] = 'Ananya Sharma'

res = client.get('/home')
assert res.status_code == 200, f'Unexpected status: {res.status_code}'
html = res.get_data(as_text=True)

# 1. Tab block with How It Works button
assert 'how-it-works-tab-block' in html, 'how-it-works-tab-block missing!'
assert 'open-how-it-works' in html, 'open-how-it-works button ID missing!'
assert 'How It Works' in html, '"How It Works" button text missing!'

# 2. Pop-up modal overlay and card
assert 'how-modal-overlay' in html, 'how-modal-overlay missing!'
assert 'how-modal-card' in html, 'how-modal-card missing!'

# 3. All 5 step slides
for i in range(1, 6):
    assert f'id="how-step-{i}"' in html, f'how-step-{i} missing!'
    assert f'Step {i}' in html, f'Step {i} label missing!'

# 4. Back arrow and Next arrow buttons
assert 'how-step-prev' in html, 'how-step-prev button missing!'
assert 'how-step-next' in html, 'how-step-next button missing!'
assert '←' in html or '&larr;' in html, 'Back arrow symbol missing!'
assert '→' in html or '&rarr;' in html, 'Next arrow symbol missing!'
assert 'Back' in html, 'Back text missing!'
assert 'Next' in html, 'Next text missing!'

# 5. "I Got It" button on last step
assert 'how-step-got-it' in html, 'how-step-got-it button missing!'
assert 'I Got It' in html, '"I Got It" text missing!'

# 6. JavaScript functions
assert 'openHowItWorksModal' in html, 'openHowItWorksModal JS function missing!'
assert 'closeHowItWorksModal' in html, 'closeHowItWorksModal JS function missing!'
assert 'nextHowStep' in html, 'nextHowStep JS function missing!'
assert 'prevHowStep' in html, 'prevHowStep JS function missing!'

print('ALL MODAL REQUIREMENTS AND ASSERTIONS PASSED PERFECTLY!')

