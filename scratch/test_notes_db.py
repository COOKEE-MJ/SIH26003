import os
import sys
sys.path.insert(0, os.path.abspath('.'))

import database
database.init_db()

conn = database.get_connection()
tables = [r[0] for r in conn.execute("SELECT name FROM sqlite_master WHERE type='table'").fetchall()]
print("Tables in SQLite database:", tables)
assert 'family_notes' in tables, "family_notes table missing!"

# Test adding note
patient = database.get_all_patients()[0]
pid = patient['id']
print("Testing note insertion for patient:", pid, patient['name'])

note = database.add_family_note(
    patient_id=pid,
    author="Priya (Daughter)",
    text="Maa enjoyed her morning ginger tea and hummed along to the Bihu flute music. Recognised old family photo from Tezpur.",
    anchor_type="Tea & Music Routine"
)
print("Inserted note:", note)

notes = database.get_family_notes(pid)
print(f"Fetched {len(notes)} notes for patient {pid}:")
for n in notes:
    print(f"  - [{n['anchor_type']}] {n['author']} ({n['time']}): {n['text']}")

assert len(notes) >= 1
print("DATABASE TEST PASSED!")

