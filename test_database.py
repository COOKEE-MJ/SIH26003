"""
test_database.py

Temporary test script for the database layer.
Run with: python test_database.py

Uses a separate test database file so it never touches the real
app_data.db / demo data.
"""

import os
import sqlite3
import sys

import database

# Point the database module at a throwaway test file for this run.
TEST_DB_PATH = os.path.join(database.BASE_DIR, "test_app_data.db")
database.DB_PATH = TEST_DB_PATH

if os.path.exists(TEST_DB_PATH):
    os.remove(TEST_DB_PATH)

passed = 0
failed = 0


def check(condition, description):
    global passed, failed
    if condition:
        print(f"PASS: {description}")
        passed += 1
    else:
        print(f"FAIL: {description}")
        failed += 1


# Test 1 & 2: init_db creates tables
database.init_db()
conn = database.get_connection()
tables = {row["name"] for row in conn.execute(
    "SELECT name FROM sqlite_master WHERE type='table'"
).fetchall()}
conn.close()
check("patients" in tables, "Test 1/2: 'patients' table created")
check("sessions" in tables, "Test 1/2: 'sessions' table created")

# Test 3: add a patient
new_id = database.add_patient("Test Patient", 70, "Male")
check(isinstance(new_id, int) and new_id > 0, "Test 3: patient added, got valid id")

# Test 4: retrieve the newly created patient
fetched = database.get_patient(new_id)
check(fetched is not None, "Test 4: newly created patient retrievable")
check(fetched and fetched["name"] == "Test Patient", "Test 4: patient name matches")
check(fetched and fetched["age"] == 70, "Test 4: patient age matches")
check(fetched and fetched["sex"] == "Male", "Test 4: patient sex matches")

# Test 5: patient list contains the new patient
all_patients = database.get_all_patients()
check(any(p["id"] == new_id for p in all_patients), "Test 5: patient list contains new patient")

# Test 5b: blank age string (what Flask's request.form.get returns for an
# empty field) should be treated as "no age given", not crash
blank_age_id = database.add_patient("Blank Age Patient", "", "Male")
blank_age_patient = database.get_patient(blank_age_id)
check(blank_age_patient is not None, "Test 5b: patient with blank age saved")
check(blank_age_patient["age"] is None, "Test 5b: blank age string stored as None")

# Test 6: save a valid game session
session_id = database.save_session(new_id, "matching", 2, 8, 10)
check(isinstance(session_id, int) and session_id > 0, "Test 6: session saved, got valid id")

# Test 7: retrieve patient's sessions
sessions = database.get_patient_sessions(new_id)
check(len(sessions) == 1, "Test 7: patient has exactly 1 session")
check(sessions[0]["score"] == 8 and sessions[0]["total"] == 10, "Test 7: session data matches")

# Test 8: invalid patient_id cannot create a session
invalid_ok = False
try:
    database.save_session(999999, "matching", 1, 5, 10)
except ValueError:
    invalid_ok = True
check(invalid_ok, "Test 8: invalid patient_id rejected (no orphan session)")

# double check no orphan row was actually written
conn = database.get_connection()
orphan_count = conn.execute(
    "SELECT COUNT(*) as c FROM sessions WHERE patient_id = 999999"
).fetchone()["c"]
conn.close()
check(orphan_count == 0, "Test 8b: no orphan session row exists in db")

# Test 8c: total <= 0 must be rejected (prevents downstream ZeroDivisionError
# in compute_next_difficulty)
total_zero_rejected = False
try:
    database.save_session(new_id, "matching", 2, 0, 0)
except ValueError:
    total_zero_rejected = True
check(total_zero_rejected, "Test 8c: save_session rejects total<=0")

# Test 9: seed data runs successfully
import importlib
import seed_data
importlib.reload(seed_data)  # ensure it uses the patched database.DB_PATH
try:
    seed_data.run()
    seed_ok = True
except Exception as e:
    seed_ok = False
    print(f"  (seed error: {e})")
check(seed_ok, "Test 9: seed_data.run() completes without error")

# Test 10: seeded patients contain expected fields
seeded_patients = database.get_all_patients()
check(len(seeded_patients) == len(seed_data.DEMO_PATIENTS), "Test 10: correct number of seeded patients")
required_fields = {"id", "name", "age", "sex", "created_at"}
check(
    all(required_fields.issubset(p.keys()) for p in seeded_patients),
    "Test 10: each seeded patient has id/name/age/sex/created_at",
)
check(
    all(p["sex"] in ("Male", "Female") for p in seeded_patients),
    "Test 10: all seeded patients have valid sex value",
)

# Test 11: seeded session history exists and is chronologically ordered
first_seeded_patient_id = seeded_patients[0]["id"]
history = database.get_patient_sessions(first_seeded_patient_id)
check(len(history) >= 6, "Test 11: first seeded patient has >= 6 sessions")
played_dates = [h["played_at"] for h in history]
check(played_dates == sorted(played_dates), "Test 11: sessions are chronologically ordered")

# Test 12: connections are properly closed (no lingering locks -
# verified by being able to open a fresh connection & write immediately)
try:
    conn = database.get_connection()
    conn.execute("SELECT 1")
    conn.close()
    check(True, "Test 12: fresh connection opens/closes cleanly after all prior operations")
except sqlite3.OperationalError:
    check(False, "Test 12: fresh connection opens/closes cleanly after all prior operations")

print()
print(f"Total: {passed} passed, {failed} failed")

# Clean up the test database file
try:
    os.remove(TEST_DB_PATH)
except OSError:
    pass

sys.exit(1 if failed else 0)