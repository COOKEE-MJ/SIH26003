import sqlite3
import re
from html.parser import HTMLParser
from app import app

from database import get_connection
con = get_connection()
cur = con.cursor()
caregiver = cur.execute('SELECT id, name, email FROM caregivers LIMIT 1').fetchone()
print('Caregiver:', caregiver)
patient = cur.execute('SELECT id, name, caregiver_id FROM patients LIMIT 1').fetchone()
print('Patient:', patient)

class TextExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.texts = []
        self.in_skip = False
    def handle_starttag(self, tag, attrs):
        if tag in ['script', 'style', 'select', 'noscript']:
            self.in_skip = True
    def handle_endtag(self, tag):
        if tag in ['script', 'style', 'select', 'noscript']:
            self.in_skip = False
    def handle_data(self, data):
        if not self.in_skip:
            t = data.strip()
            if t and len(t) > 1 and not re.match(r'^[\d\s\.,;:!?\-\+•%/\(\)]+$', t):
                self.texts.append(t)

with open('static/js/i18n.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

client = app.test_client()
if caregiver:
    with client.session_transaction() as sess:
        sess['caregiver_id'] = caregiver[0]
        sess['caregiver_name'] = caregiver[1]
        if patient:
            sess['patient_id'] = patient[0]

routes = ['/home', '/games', '/dashboard', '/doctor', f'/patient/{patient[0]}/play' if patient else '/games', f'/game/matching/{patient[0]}' if patient else '/games', '/dashboard/register-patient', '/login', '/register', '/']
all_untranslated = set()

for r in routes:
    res = client.get(r)
    parser = TextExtractor()
    parser.feed(res.data.decode('utf-8'))
    untranslated = []
    for t in parser.texts:
        if f'"{t}"' not in js_content and f"'{t}'" not in js_content and f'{t}:' not in js_content:
            untranslated.append(t)
            all_untranslated.add(t)
    print(f'Route {r}: status {res.status_code}, {len(parser.texts)} strings, {len(untranslated)} untranslated')

print(f'\nTotal unique untranslated candidates: {len(all_untranslated)}')
with open('scratch_untranslated.txt', 'w', encoding='utf-8') as out:
    for item in sorted(all_untranslated):
        out.write(item + '\n')
