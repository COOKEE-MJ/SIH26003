"""
seed_data.py

Standalone script that (re)creates fictional demo data for the platform.

Run manually with:
    python seed_data.py

This script is NEVER imported or run automatically by the Flask app -
it only runs when a developer executes it directly.

It will:
    1. Initialize the database (creates tables if missing)
    2. Clear out any existing demo data (patients + sessions)
    3. Insert fictional demo patients
    4. Insert a realistic, gently-improving history of game sessions
       spread over the last ~2 weeks for the patients
    5. Commit and close properly
"""

from datetime import datetime, timedelta

from database import get_connection, init_db


# Completely fictional patients - no real patient data / PII.
DEMO_PATIENTS = [
    {"name": "Meera Sharma", "age": 68, "sex": "Female"},
    {"name": "Ramesh Das", "age": 74, "sex": "Male"},
    {"name": "Anita Roy", "age": 71, "sex": "Female"},
    {"name": "Tenzin Wangdi", "age": 69, "sex": "Male"},
    {"name": "Lalrinpuii Chhangte", "age": 66, "sex": "Female"},
    {"name": "Nokseng Ao", "age": 73, "sex": "Male"},
    {"name": "Kezhalhoulie Angami", "age": 70, "sex": "Female"},
    {"name": "Biren Konwar", "age": 77, "sex": "Male"},
]


def clear_demo_data(conn):
    """Remove existing demo records so the seed script can be re-run safely."""
    conn.execute("DELETE FROM sessions")
    conn.execute("DELETE FROM patients")
    # Reset autoincrement counters so IDs look clean each time this runs.
    conn.execute("DELETE FROM sqlite_sequence WHERE name IN ('patients', 'sessions')")
    conn.commit()


def insert_demo_patients(conn):
    """Insert the fictional demo patients and return their new ids."""
    patient_ids = []
    now = datetime.now()

    for i, patient in enumerate(DEMO_PATIENTS):
        # Stagger "created_at" so patients look like they joined over time.
        created_at = (now - timedelta(days=(len(DEMO_PATIENTS) - i) * 3)).isoformat(
            timespec="seconds"
        )
        cursor = conn.execute(
            """
            INSERT INTO patients (name, age, sex, created_at)
            VALUES (?, ?, ?, ?)
            """,
            (patient["name"], patient["age"], patient["sex"], created_at),
        )
        patient_ids.append(cursor.lastrowid)

    conn.commit()
    return patient_ids


def insert_demo_sessions(conn, patient_ids):
    """
    Create a fake history of Memory Matching sessions for the demo patients.

    - At least one patient gets 6-8 sessions spread over the previous 2 weeks.
    - Scores show a gentle improving trend (dementia patients slowly getting
      more comfortable with the game as difficulty is tuned to them).
    - Difficulty increases as the score improves (simple rule-based feel).
    """
    now = datetime.now()

    # Give the first three patients a full session history for a richer demo.
    session_plans = {
        patient_ids[0]: [
            (13, 1, 6, 10), (12, 1, 7, 10), (10, 2, 6, 10),
            (8, 2, 7, 10), (6, 2, 8, 10), (4, 3, 7, 10),
            (2, 3, 8, 10), (0, 3, 9, 10),
        ],
        patient_ids[1]: [
            (12, 1, 5, 10), (9, 1, 6, 10), (6, 2, 6, 10),
            (3, 2, 7, 10), (1, 2, 8, 10),
        ],
        patient_ids[2]: [
            (11, 1, 6, 10), (8, 2, 6, 10), (5, 2, 7, 10),
            (2, 3, 8, 10),
        ],
    }

    for patient_id, sessions in session_plans.items():
        for days_ago, difficulty, score, total in sessions:
            played_at = (now - timedelta(days=days_ago)).isoformat(timespec="seconds")
            conn.execute(
                """
                INSERT INTO sessions
                    (patient_id, game_type, difficulty, score, total, played_at)
                VALUES (?, 'matching', ?, ?, ?, ?)
                """,
                (patient_id, difficulty, score, total, played_at),
            )

    conn.commit()


def run():
    init_db()
    conn = get_connection()
    try:
        clear_demo_data(conn)
        patient_ids = insert_demo_patients(conn)
        insert_demo_sessions(conn, patient_ids)
    finally:
        conn.close()

    print(f"Seed complete: {len(DEMO_PATIENTS)} demo patients inserted.")
    print("Sample game-session history created for the first 3 patients.")


if __name__ == "__main__":
    run()