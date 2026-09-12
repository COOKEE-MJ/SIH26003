"""
database.py

SQLite database layer for the Cognitive Gaming & Memory Assistance Platform.

Responsibility (M4 - Database & Data Management Lead):
    - Create/initialize the SQLite database
    - Provide simple, reusable helper functions for patients & game sessions
    - Keep this file completely independent of Flask / any web framework,
      so the backend developer (M1) can simply do:

          from database import (
              get_all_patients,
              add_patient,
              get_patient,
              save_session,
              get_patient_sessions,
          )

No Flask, no HTML, no ML libraries here - just plain sqlite3.
"""

import sqlite3
import os
from datetime import datetime

if os.environ.get("DATABASE_URL"):
    import psycopg
    from psycopg.rows import dict_row

# ---------------------------------------------------------------------------
# Config
# ---------------------------------------------------------------------------

# Project-relative path (works no matter where the app is launched from,
# and doesn't hardcode any machine-specific absolute path).
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, "app_data.db")
DATABASE_URL = os.environ.get("DATABASE_URL", "")
USE_POSTGRES = bool(DATABASE_URL)

VALID_SEX_VALUES = ("Male", "Female")


# ---------------------------------------------------------------------------
# Connection
# ---------------------------------------------------------------------------

def get_connection():
    """
    Create and return a SQLite connection.

    - Points at the project-relative database file (DB_PATH)
    - Rows behave like dicts (sqlite3.Row) so callers can do row["name"]
    - Foreign key enforcement is turned on for this connection
    """
    if USE_POSTGRES:
        postgres_url = DATABASE_URL.replace("postgres://", "postgresql://", 1)
        return psycopg.connect(postgres_url, row_factory=dict_row)

    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON")
    return conn


# ---------------------------------------------------------------------------
# Initialization
# ---------------------------------------------------------------------------

def init_db():
    """
    Create the 'patients' and 'sessions' tables if they don't already exist.

    Safe to call every time the app starts - it never deletes existing data.
    """
    conn = get_connection()
    try:
        if USE_POSTGRES:
            conn.execute(
                """
                CREATE TABLE IF NOT EXISTS caregivers (
                    id BIGSERIAL PRIMARY KEY,
                    name TEXT NOT NULL,
                    email TEXT NOT NULL UNIQUE,
                    password_hash TEXT NOT NULL,
                    created_at TEXT NOT NULL
                )
                """
            )
            conn.execute(
                """
                CREATE TABLE IF NOT EXISTS patients (
                    id BIGSERIAL PRIMARY KEY,
                    name TEXT NOT NULL,
                    age INTEGER,
                    sex TEXT NOT NULL,
                    created_at TEXT,
                    caregiver_id BIGINT REFERENCES caregivers(id),
                    diagnosis_stage TEXT,
                    relation TEXT,
                    contact TEXT
                )
                """
            )
            conn.execute(
                """
                CREATE TABLE IF NOT EXISTS sessions (
                    id BIGSERIAL PRIMARY KEY,
                    patient_id BIGINT NOT NULL REFERENCES patients(id),
                    game_type TEXT NOT NULL,
                    difficulty INTEGER NOT NULL,
                    score INTEGER NOT NULL,
                    total INTEGER NOT NULL,
                    played_at TEXT NOT NULL
                )
                """
            )
            conn.commit()
            return

        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS caregivers (
                id            INTEGER PRIMARY KEY AUTOINCREMENT,
                name          TEXT NOT NULL,
                email         TEXT NOT NULL UNIQUE,
                password_hash TEXT NOT NULL,
                created_at    TEXT NOT NULL
            )
            """
        )

        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS patients (
                id         INTEGER PRIMARY KEY AUTOINCREMENT,
                name       TEXT NOT NULL,
                age        INTEGER,
                sex        TEXT NOT NULL,
                created_at TEXT,
                caregiver_id INTEGER REFERENCES caregivers(id),
                diagnosis_stage TEXT,
                relation TEXT,
                contact TEXT
            )
            """
        )

        patient_columns = {
            row[1] for row in conn.execute("PRAGMA table_info(patients)")
        }
        for column, definition in (
            ("caregiver_id", "INTEGER REFERENCES caregivers(id)"),
            ("diagnosis_stage", "TEXT"),
            ("relation", "TEXT"),
            ("contact", "TEXT"),
        ):
            if column not in patient_columns:
                conn.execute(f"ALTER TABLE patients ADD COLUMN {column} {definition}")

        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS sessions (
                id         INTEGER PRIMARY KEY AUTOINCREMENT,
                patient_id INTEGER NOT NULL,
                game_type  TEXT NOT NULL,
                difficulty INTEGER NOT NULL,
                score      INTEGER NOT NULL,
                total      INTEGER NOT NULL,
                played_at  TEXT NOT NULL,
                FOREIGN KEY (patient_id) REFERENCES patients (id)
            )
            """
        )
        conn.commit()
    finally:
        conn.close()


# ---------------------------------------------------------------------------
# Patients
# ---------------------------------------------------------------------------

def get_all_patients(caregiver_id=None):
    """
    Return a list of all patients (as plain dicts), ordered by id.

    Each dict has: id, name, age, sex, created_at
    """
    conn = get_connection()
    try:
        query = "SELECT id, name, age, sex, created_at FROM patients"
        params = ()
        if caregiver_id is not None:
            query += " WHERE caregiver_id = ?"
            params = (caregiver_id,)
        if USE_POSTGRES:
            query = query.replace("?", "%s")
        rows = conn.execute(query + " ORDER BY id", params).fetchall()
        return [dict(row) for row in rows]
    finally:
        conn.close()


def add_patient(
    name,
    age,
    sex,
    caregiver_id=None,
    diagnosis_stage=None,
    relation=None,
    contact=None,
):
    """
    Insert a new patient and return the newly created patient's id.

    Basic validation only (this is a hackathon MVP, not production code):
        - name must be a non-empty string
        - sex must be 'Male' or 'Female'
        - age, if provided, must be convertible to an int
    """
    if not name or not str(name).strip():
        raise ValueError("Patient name is required.")

    if sex not in VALID_SEX_VALUES:
        raise ValueError("Sex must be 'Male' or 'Female'.")

    if age not in (None, ""):
        age = int(age)
    else:
        age = None

    created_at = datetime.now().isoformat(timespec="seconds")

    conn = get_connection()
    try:
        if USE_POSTGRES:
            cursor = conn.execute(
                """
                INSERT INTO patients
                    (name, age, sex, created_at, caregiver_id, diagnosis_stage, relation, contact)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
                RETURNING id
                """,
                (
                    str(name).strip(), age, sex, created_at, caregiver_id,
                    diagnosis_stage, relation, contact,
                ),
            )
            conn.commit()
            return cursor.fetchone()["id"]

        cursor = conn.execute(
            """
            INSERT INTO patients
                (name, age, sex, created_at, caregiver_id, diagnosis_stage, relation, contact)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (
                str(name).strip(), age, sex, created_at, caregiver_id,
                diagnosis_stage, relation, contact,
            ),
        )
        conn.commit()
        return cursor.lastrowid
    finally:
        conn.close()


def get_patient(patient_id, caregiver_id=None):
    """
    Return a single patient (as a dict) by id, or None if not found.
    """
    conn = get_connection()
    try:
        query = "SELECT id, name, age, sex, created_at FROM patients WHERE id = ?"
        params = [patient_id]
        if caregiver_id is not None:
            query += " AND caregiver_id = ?"
            params.append(caregiver_id)
        if USE_POSTGRES:
            query = query.replace("?", "%s")
        row = conn.execute(query, params).fetchone()
        return dict(row) if row else None
    finally:
        conn.close()


def create_caregiver(name, email, password_hash):
    if not name or not str(name).strip():
        raise ValueError("Name is required.")
    if not email or not str(email).strip():
        raise ValueError("Email is required.")

    conn = get_connection()
    try:
        if USE_POSTGRES:
            cursor = conn.execute(
                """
                INSERT INTO caregivers (name, email, password_hash, created_at)
                VALUES (%s, %s, %s, %s)
                RETURNING id
                """,
                (
                    str(name).strip(),
                    str(email).strip().lower(),
                    password_hash,
                    datetime.now().isoformat(timespec="seconds"),
                ),
            )
            conn.commit()
            return cursor.fetchone()["id"]

        cursor = conn.execute(
            """
            INSERT INTO caregivers (name, email, password_hash, created_at)
            VALUES (?, ?, ?, ?)
            """,
            (
                str(name).strip(),
                str(email).strip().lower(),
                password_hash,
                datetime.now().isoformat(timespec="seconds"),
            ),
        )
        conn.commit()
        return cursor.lastrowid
    except (sqlite3.IntegrityError, psycopg.errors.UniqueViolation if USE_POSTGRES else sqlite3.IntegrityError) as error:
        raise ValueError("An account with that email already exists.") from error
    finally:
        conn.close()


def get_caregiver_by_email(email):
    conn = get_connection()
    try:
        if USE_POSTGRES:
            row = conn.execute(
                "SELECT id, name, email, password_hash FROM caregivers WHERE email = %s",
                (str(email or "").strip().lower(),),
            ).fetchone()
            return dict(row) if row else None

        row = conn.execute(
            "SELECT id, name, email, password_hash FROM caregivers WHERE email = ?",
            (str(email or "").strip().lower(),),
        ).fetchone()
        return dict(row) if row else None
    finally:
        conn.close()


# ---------------------------------------------------------------------------
# Game sessions
# ---------------------------------------------------------------------------

def save_session(patient_id, game_type, difficulty, score, total):
    if get_patient(patient_id) is None:
        raise ValueError(f"Cannot save session: patient_id {patient_id} does not exist.")

    if total is None or int(total) <= 0:
        raise ValueError("total must be greater than 0.")

    if score is None or int(score) < 0:
        raise ValueError("score cannot be negative.")

    played_at = datetime.now().isoformat(timespec="seconds")
    ...

    conn = get_connection()
    try:
        if USE_POSTGRES:
            cursor = conn.execute(
                """
                INSERT INTO sessions
                    (patient_id, game_type, difficulty, score, total, played_at)
                VALUES (%s, %s, %s, %s, %s, %s)
                RETURNING id
                """,
                (patient_id, game_type, difficulty, score, total, played_at),
            )
            conn.commit()
            return cursor.fetchone()["id"]

        cursor = conn.execute(
            """
            INSERT INTO sessions (patient_id, game_type, difficulty, score, total, played_at)
            VALUES (?, ?, ?, ?, ?, ?)
            """,
            (patient_id, game_type, difficulty, score, total, played_at),
        )
        conn.commit()
        return cursor.lastrowid
    finally:
        conn.close()


def get_patient_sessions(patient_id):
    """
    Return all sessions for a given patient, ordered chronologically
    (oldest first) - ready to feed straight into a score-over-time chart.

    Each dict has: played_at, game_type, score, total, difficulty
    """
    conn = get_connection()
    try:
        if USE_POSTGRES:
            rows = conn.execute(
                """
                SELECT played_at, game_type, score, total, difficulty
                FROM sessions
                WHERE patient_id = %s
                ORDER BY played_at ASC, id ASC
                """,
                (patient_id,),
            ).fetchall()
            return [dict(row) for row in rows]

        rows = conn.execute(
            """
            SELECT played_at, game_type, score, total, difficulty
            FROM sessions
            WHERE patient_id = ?
            ORDER BY played_at ASC, id ASC
            """,
            (patient_id,),
        ).fetchall()
        return [dict(row) for row in rows]
    finally:
        conn.close()


if __name__ == "__main__":
    # Quick manual sanity check: `python database.py`
    init_db()
    print(f"Database initialized at: {DB_PATH}")