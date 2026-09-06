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

# ---------------------------------------------------------------------------
# Config
# ---------------------------------------------------------------------------

# Project-relative path (works no matter where the app is launched from,
# and doesn't hardcode any machine-specific absolute path).
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, "app_data.db")

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
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS patients (
                id         INTEGER PRIMARY KEY AUTOINCREMENT,
                name       TEXT NOT NULL,
                age        INTEGER,
                sex        TEXT NOT NULL,
                created_at TEXT
            )
            """
        )

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

def get_all_patients():
    """
    Return a list of all patients (as plain dicts), ordered by id.

    Each dict has: id, name, age, sex, created_at
    """
    conn = get_connection()
    try:
        rows = conn.execute(
            "SELECT id, name, age, sex, created_at FROM patients ORDER BY id"
        ).fetchall()
        return [dict(row) for row in rows]
    finally:
        conn.close()


def add_patient(name, age, sex):
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

    if age is not None:
        age = int(age)

    created_at = datetime.now().isoformat(timespec="seconds")

    conn = get_connection()
    try:
        cursor = conn.execute(
            """
            INSERT INTO patients (name, age, sex, created_at)
            VALUES (?, ?, ?, ?)
            """,
            (str(name).strip(), age, sex, created_at),
        )
        conn.commit()
        return cursor.lastrowid
    finally:
        conn.close()


def get_patient(patient_id):
    """
    Return a single patient (as a dict) by id, or None if not found.
    """
    conn = get_connection()
    try:
        row = conn.execute(
            "SELECT id, name, age, sex, created_at FROM patients WHERE id = ?",
            (patient_id,),
        ).fetchone()
        return dict(row) if row else None
    finally:
        conn.close()


# ---------------------------------------------------------------------------
# Game sessions
# ---------------------------------------------------------------------------

def save_session(patient_id, game_type, difficulty, score, total):
    """
    Save a completed game session and return the newly created session id.

    Raises ValueError if patient_id does not refer to an existing patient,
    so an orphan session can never be created.
    """
    if get_patient(patient_id) is None:
        raise ValueError(f"Cannot save session: patient_id {patient_id} does not exist.")

    played_at = datetime.now().isoformat(timespec="seconds")

    conn = get_connection()
    try:
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