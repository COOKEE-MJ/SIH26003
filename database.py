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
                    accuracy REAL,
                    reaction_time REAL,
                    response_time REAL,
                    duration_seconds REAL,
                    played_at TEXT NOT NULL
                )
                """
            )
            conn.execute("ALTER TABLE sessions ADD COLUMN IF NOT EXISTS accuracy REAL")
            conn.execute("ALTER TABLE sessions ADD COLUMN IF NOT EXISTS reaction_time REAL")
            conn.execute("ALTER TABLE sessions ADD COLUMN IF NOT EXISTS response_time REAL")
            conn.execute("ALTER TABLE sessions ADD COLUMN IF NOT EXISTS duration_seconds REAL")
            conn.execute(
                """
                CREATE TABLE IF NOT EXISTS family_notes (
                    id BIGSERIAL PRIMARY KEY,
                    patient_id BIGINT NOT NULL REFERENCES patients(id),
                    caregiver_id BIGINT REFERENCES caregivers(id),
                    author TEXT NOT NULL,
                    text TEXT NOT NULL,
                    anchor_type TEXT DEFAULT 'Memory Note',
                    created_at TEXT NOT NULL
                )
                """
            )
            conn.execute(
                """
                CREATE TABLE IF NOT EXISTS care_routines (
                    id BIGSERIAL PRIMARY KEY,
                    patient_id BIGINT NOT NULL REFERENCES patients(id),
                    caregiver_id BIGINT REFERENCES caregivers(id),
                    title TEXT NOT NULL,
                    time_str TEXT NOT NULL,
                    category TEXT DEFAULT 'general',
                    is_completed INTEGER DEFAULT 0,
                    completed_at TEXT,
                    created_at TEXT NOT NULL
                )
                """
            )
            conn.execute("ALTER TABLE caregivers ADD COLUMN IF NOT EXISTS contact TEXT")
            conn.commit()
            return

        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS caregivers (
                id            INTEGER PRIMARY KEY AUTOINCREMENT,
                name          TEXT NOT NULL,
                email         TEXT NOT NULL UNIQUE,
                password_hash TEXT NOT NULL,
                created_at    TEXT NOT NULL,
                contact       TEXT
            )
            """
        )

        caregiver_columns = {
            row[1] for row in conn.execute("PRAGMA table_info(caregivers)")
        }
        if "contact" not in caregiver_columns:
            conn.execute("ALTER TABLE caregivers ADD COLUMN contact TEXT")

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
                id               INTEGER PRIMARY KEY AUTOINCREMENT,
                patient_id       INTEGER NOT NULL,
                game_type        TEXT NOT NULL,
                difficulty       INTEGER NOT NULL,
                score            INTEGER NOT NULL,
                total            INTEGER NOT NULL,
                accuracy         REAL,
                reaction_time    REAL,
                response_time    REAL,
                duration_seconds REAL,
                played_at        TEXT NOT NULL,
                FOREIGN KEY (patient_id) REFERENCES patients (id)
            )
            """
        )

        session_columns = {
            row[1] for row in conn.execute("PRAGMA table_info(sessions)")
        }
        for column, definition in (
            ("accuracy", "REAL"),
            ("reaction_time", "REAL"),
            ("response_time", "REAL"),
            ("duration_seconds", "REAL"),
        ):
            if column not in session_columns:
                conn.execute(f"ALTER TABLE sessions ADD COLUMN {column} {definition}")

        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS family_notes (
                id           INTEGER PRIMARY KEY AUTOINCREMENT,
                patient_id   INTEGER NOT NULL,
                caregiver_id INTEGER,
                author       TEXT NOT NULL,
                text         TEXT NOT NULL,
                anchor_type  TEXT DEFAULT 'Memory Note',
                created_at   TEXT NOT NULL,
                FOREIGN KEY (patient_id) REFERENCES patients (id),
                FOREIGN KEY (caregiver_id) REFERENCES caregivers (id)
            )
            """
        )

        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS care_routines (
                id             INTEGER PRIMARY KEY AUTOINCREMENT,
                patient_id     INTEGER NOT NULL,
                caregiver_id   INTEGER,
                title          TEXT NOT NULL,
                time_str       TEXT NOT NULL,
                category       TEXT DEFAULT 'general',
                frequency      TEXT DEFAULT 'daily',
                is_completed   INTEGER DEFAULT 0,
                completed_at   TEXT,
                completed_date TEXT,
                created_at     TEXT NOT NULL,
                FOREIGN KEY (patient_id) REFERENCES patients (id),
                FOREIGN KEY (caregiver_id) REFERENCES caregivers (id)
            )
            """
        )

        routine_columns = {
            row[1] for row in conn.execute("PRAGMA table_info(care_routines)")
        }
        for column, definition in (
            ("frequency", "TEXT DEFAULT 'daily'"),
            ("completed_date", "TEXT"),
        ):
            if column not in routine_columns:
                conn.execute(f"ALTER TABLE care_routines ADD COLUMN {column} {definition}")

        # Baseline check for demo patient 12: if no care routines exist, seed standard 4
        existing_routines = conn.execute("SELECT COUNT(*) as count FROM care_routines WHERE patient_id = 12").fetchone()
        if existing_routines and existing_routines[0] == 0:
            patient_12_row = conn.execute("SELECT id, caregiver_id FROM patients WHERE id = 12").fetchone()
            if patient_12_row:
                cg_id = patient_12_row['caregiver_id']
                now_str = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                conn.execute(
                    "INSERT INTO care_routines (patient_id, caregiver_id, title, time_str, category, is_completed, completed_at, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                    (12, cg_id, 'Morning Memory Medication', '9:00 AM', 'med', 1, now_str, now_str)
                )
                conn.execute(
                    "INSERT INTO care_routines (patient_id, caregiver_id, title, time_str, category, is_completed, completed_at, created_at) VALUES (?, ?, ?, ?, ?, 0, NULL, ?)",
                    (12, cg_id, 'Afternoon Hydration & Tea', '2:30 PM', 'water', now_str)
                )
                conn.execute(
                    "INSERT INTO care_routines (patient_id, caregiver_id, title, time_str, category, is_completed, completed_at, created_at) VALUES (?, ?, ?, ?, ?, 0, NULL, ?)",
                    (12, cg_id, 'Gentle Picture Memory Activity', '4:00 PM', 'game', now_str)
                )
                conn.execute(
                    "INSERT INTO care_routines (patient_id, caregiver_id, title, time_str, category, is_completed, completed_at, created_at) VALUES (?, ?, ?, ?, ?, 0, NULL, ?)",
                    (12, cg_id, 'Evening Folk Music & Relaxation', '6:30 PM', 'music', now_str)
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

    Each dict has: id, name, age, sex, created_at, caregiver_id, diagnosis_stage, relation, contact
    """
    conn = get_connection()
    try:
        query = "SELECT id, name, age, sex, created_at, caregiver_id, diagnosis_stage, relation, contact FROM patients"
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
        query = "SELECT id, name, age, sex, created_at, caregiver_id, diagnosis_stage, relation, contact FROM patients WHERE id = ?"
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


def update_patient(
    patient_id,
    name,
    age=None,
    sex="Female",
    diagnosis_stage=None,
    relation=None,
    contact=None,
    caregiver_id=None,
):
    """
    Update an existing patient's details.
    """
    if not name or not str(name).strip():
        raise ValueError("Patient name is required.")

    if sex not in VALID_SEX_VALUES:
        raise ValueError("Sex must be 'Male' or 'Female'.")

    if age not in (None, ""):
        age = int(age)
    else:
        age = None

    conn = get_connection()
    try:
        query = """
            UPDATE patients
            SET name = ?, age = ?, sex = ?, diagnosis_stage = ?, relation = ?, contact = ?
            WHERE id = ?
        """
        params = [str(name).strip(), age, sex, diagnosis_stage, relation, contact, patient_id]
        if caregiver_id is not None:
            query += " AND caregiver_id = ?"
            params.append(caregiver_id)
        if USE_POSTGRES:
            query = query.replace("?", "%s")
        conn.execute(query, params)
        conn.commit()
        return True
    finally:
        conn.close()


def create_caregiver(name, email, password_hash, contact=""):
    if not name or not str(name).strip():
        raise ValueError("Name is required.")
    if not email or not str(email).strip():
        raise ValueError("Email is required.")

    conn = get_connection()
    try:
        clean_contact = str(contact or "").strip()
        if USE_POSTGRES:
            cursor = conn.execute(
                """
                INSERT INTO caregivers (name, email, password_hash, created_at, contact)
                VALUES (%s, %s, %s, %s, %s)
                RETURNING id
                """,
                (
                    str(name).strip(),
                    str(email).strip().lower(),
                    password_hash,
                    datetime.now().isoformat(timespec="seconds"),
                    clean_contact,
                ),
            )
            conn.commit()
            return cursor.fetchone()["id"]

        cursor = conn.execute(
            """
            INSERT INTO caregivers (name, email, password_hash, created_at, contact)
            VALUES (?, ?, ?, ?, ?)
            """,
            (
                str(name).strip(),
                str(email).strip().lower(),
                password_hash,
                datetime.now().isoformat(timespec="seconds"),
                clean_contact,
            ),
        )
        conn.commit()
        return cursor.lastrowid
    except sqlite3.IntegrityError as error:
        raise ValueError("An account with that email already exists.") from error
    except Exception as error:
        # Catches psycopg UniqueViolation when USE_POSTGRES is True
        if USE_POSTGRES and "unique" in str(error).lower():
            raise ValueError("An account with that email already exists.") from error
        raise
    finally:
        conn.close()


def get_caregiver_by_email(email):
    conn = get_connection()
    try:
        if USE_POSTGRES:
            row = conn.execute(
                "SELECT id, name, email, contact, password_hash FROM caregivers WHERE email = %s",
                (str(email or "").strip().lower(),),
            ).fetchone()
            return dict(row) if row else None

        row = conn.execute(
            "SELECT id, name, email, contact, password_hash FROM caregivers WHERE email = ?",
            (str(email or "").strip().lower(),),
        ).fetchone()
        return dict(row) if row else None
    finally:
        conn.close()


def get_caregiver_by_id(caregiver_id):
    """
    Return a single caregiver (as a dict) by id, or None if not found.
    """
    conn = get_connection()
    try:
        if USE_POSTGRES:
            row = conn.execute(
                "SELECT id, name, email, contact, created_at FROM caregivers WHERE id = %s",
                (caregiver_id,),
            ).fetchone()
            return dict(row) if row else None

        row = conn.execute(
            "SELECT id, name, email, contact, created_at FROM caregivers WHERE id = ?",
            (caregiver_id,),
        ).fetchone()
        return dict(row) if row else None
    finally:
        conn.close()


def update_caregiver(caregiver_id, name, email, contact=None):
    """
    Update caregiver's name, email and contact.
    """
    if not name or not str(name).strip():
        raise ValueError("Caregiver name is required.")
    if not email or not str(email).strip():
        raise ValueError("Email address is required.")

    clean_email = str(email).strip().lower()
    clean_name = str(name).strip()
    clean_contact = str(contact).strip() if contact is not None else None

    conn = get_connection()
    try:
        if clean_contact is not None:
            if USE_POSTGRES:
                conn.execute(
                    "UPDATE caregivers SET name = %s, email = %s, contact = %s WHERE id = %s",
                    (clean_name, clean_email, clean_contact, caregiver_id),
                )
            else:
                conn.execute(
                    "UPDATE caregivers SET name = ?, email = ?, contact = ? WHERE id = ?",
                    (clean_name, clean_email, clean_contact, caregiver_id),
                )
        else:
            if USE_POSTGRES:
                conn.execute(
                    "UPDATE caregivers SET name = %s, email = %s WHERE id = %s",
                    (clean_name, clean_email, caregiver_id),
                )
            else:
                conn.execute(
                    "UPDATE caregivers SET name = ?, email = ? WHERE id = ?",
                    (clean_name, clean_email, caregiver_id),
                )
        conn.commit()
        return True
    except sqlite3.IntegrityError as error:
        raise ValueError("An account with that email already exists.") from error
    except Exception as error:
        if USE_POSTGRES and "unique" in str(error).lower():
            raise ValueError("An account with that email already exists.") from error
        raise
    finally:
        conn.close()


# ---------------------------------------------------------------------------
# Game sessions
# ---------------------------------------------------------------------------

def save_session(
    patient_id,
    game_type,
    difficulty,
    score,
    total,
    accuracy=None,
    reaction_time=None,
    response_time=None,
    duration_seconds=None,
):
    if get_patient(patient_id) is None:
        raise ValueError(f"Cannot save session: patient_id {patient_id} does not exist.")

    if total is None or int(total) <= 0:
        raise ValueError("total must be greater than 0.")

    if score is None or int(score) < 0:
        raise ValueError("score cannot be negative.")

    if accuracy is None:
        calc_acc = round((float(score) / float(total)) * 100.0, 1)
    else:
        calc_acc = round(float(accuracy), 1)

    clean_rx = round(float(reaction_time), 2) if reaction_time is not None else None
    clean_resp = round(float(response_time), 2) if response_time is not None else None
    clean_dur = round(float(duration_seconds), 1) if duration_seconds is not None else None

    played_at = datetime.now().isoformat(timespec="seconds")

    conn = get_connection()
    try:
        if USE_POSTGRES:
            cursor = conn.execute(
                """
                INSERT INTO sessions
                    (patient_id, game_type, difficulty, score, total, accuracy, reaction_time, response_time, duration_seconds, played_at)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                RETURNING id
                """,
                (
                    patient_id,
                    game_type,
                    difficulty,
                    score,
                    total,
                    calc_acc,
                    clean_rx,
                    clean_resp,
                    clean_dur,
                    played_at,
                ),
            )
            conn.commit()
            return cursor.fetchone()["id"]

        cursor = conn.execute(
            """
            INSERT INTO sessions
                (patient_id, game_type, difficulty, score, total, accuracy, reaction_time, response_time, duration_seconds, played_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (
                patient_id,
                game_type,
                difficulty,
                score,
                total,
                calc_acc,
                clean_rx,
                clean_resp,
                clean_dur,
                played_at,
            ),
        )
        conn.commit()
        return cursor.lastrowid
    finally:
        conn.close()


def get_patient_sessions(patient_id):
    """
    Return all sessions for a given patient, ordered chronologically
    (oldest first) - ready to feed straight into performance charts and summaries.

    Each dict has: id, patient_id, played_at, game_type, score, total, difficulty,
                   accuracy, reaction_time, response_time, duration_seconds
    """
    conn = get_connection()
    try:
        if USE_POSTGRES:
            rows = conn.execute(
                """
                SELECT id, patient_id, played_at, game_type, score, total, difficulty,
                       accuracy, reaction_time, response_time, duration_seconds
                FROM sessions
                WHERE patient_id = %s
                ORDER BY played_at ASC, id ASC
                """,
                (patient_id,),
            ).fetchall()
        else:
            rows = conn.execute(
                """
                SELECT id, patient_id, played_at, game_type, score, total, difficulty,
                       accuracy, reaction_time, response_time, duration_seconds
                FROM sessions
                WHERE patient_id = ?
                ORDER BY played_at ASC, id ASC
                """,
                (patient_id,),
            ).fetchall()

        results = []
        for r in rows:
            d = dict(r)
            if d.get("accuracy") is None and d.get("total"):
                d["accuracy"] = round((d["score"] / d["total"]) * 100.0, 1)
            results.append(d)
        return results
    finally:
        conn.close()


# ---------------------------------------------------------------------------
# Family Memory Notes & Anchors
# ---------------------------------------------------------------------------

def _format_note_time(dt_str):
    """Convert timestamp to calm human readable label like 'Today, 11:30 AM'."""
    if not dt_str:
        return "Recent"
    try:
        dt = None
        for fmt in ("%Y-%m-%d %H:%M:%S", "%Y-%m-%dT%H:%M:%S", "%Y-%m-%d"):
            try:
                dt = datetime.strptime(dt_str.split(".")[0], fmt)
                break
            except ValueError:
                pass
        if not dt:
            return dt_str

        now = datetime.now()
        if dt.date() == now.date():
            return f"Today, {dt.strftime('%I:%M %p').lstrip('0')}"
        elif (now.date() - dt.date()).days == 1:
            return f"Yesterday, {dt.strftime('%I:%M %p').lstrip('0')}"
        else:
            return dt.strftime("%d %b %Y, %I:%M %p").lstrip("0")
    except Exception:
        return dt_str


def add_family_note(patient_id, author, text, caregiver_id=None, anchor_type="Memory Note"):
    """
    Save a new family memory note or anchor for a patient.
    """
    if not isinstance(author, str) or not author.strip():
        raise ValueError("Author name is required.")
    if not isinstance(text, str) or not text.strip():
        raise ValueError("Note text cannot be empty.")

    author = author.strip()
    text = text.strip()
    anchor_type = (anchor_type or "Memory Note").strip()
    created_at = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    conn = get_connection()
    try:
        if USE_POSTGRES:
            cursor = conn.execute(
                """
                INSERT INTO family_notes (patient_id, caregiver_id, author, text, anchor_type, created_at)
                VALUES (%s, %s, %s, %s, %s, %s)
                RETURNING id
                """,
                (patient_id, caregiver_id, author, text, anchor_type, created_at),
            )
            row = cursor.fetchone()
            conn.commit()
            note_id = row["id"] if isinstance(row, dict) else row[0]
        else:
            cursor = conn.execute(
                """
                INSERT INTO family_notes (patient_id, caregiver_id, author, text, anchor_type, created_at)
                VALUES (?, ?, ?, ?, ?, ?)
                """,
                (patient_id, caregiver_id, author, text, anchor_type, created_at),
            )
            conn.commit()
            note_id = cursor.lastrowid

        return {
            "id": note_id,
            "patient_id": patient_id,
            "caregiver_id": caregiver_id,
            "author": author,
            "text": text,
            "anchor_type": anchor_type,
            "time": "Just now",
            "created_at": created_at,
        }
    finally:
        conn.close()


def get_family_notes(patient_id):
    """
    Retrieve all family memory notes and anchors for a given patient, newest first.
    """
    conn = get_connection()
    try:
        if USE_POSTGRES:
            rows = conn.execute(
                """
                SELECT id, patient_id, caregiver_id, author, text, anchor_type, created_at
                FROM family_notes
                WHERE patient_id = %s
                ORDER BY id DESC
                """,
                (patient_id,),
            ).fetchall()
        else:
            rows = conn.execute(
                """
                SELECT id, patient_id, caregiver_id, author, text, anchor_type, created_at
                FROM family_notes
                WHERE patient_id = ?
                ORDER BY id DESC
                """,
                (patient_id,),
            ).fetchall()

        results = []
        for r in rows:
            d = dict(r)
            d["time"] = _format_note_time(d.get("created_at"))
            results.append(d)
        return results
    finally:
        conn.close()


# ---------------------------------------------------------------------------
# Daily Care & Medication Routines
# ---------------------------------------------------------------------------

def add_care_routine(patient_id, title, time_str, category="general", frequency="daily", caregiver_id=None, is_completed=0):
    """
    Save a new daily care or medication routine activity for a patient.
    """
    if not isinstance(title, str) or not title.strip():
        raise ValueError("Routine activity name is required.")
    if not isinstance(time_str, str) or not time_str.strip():
        raise ValueError("Routine scheduled time is required.")

    title = title.strip()
    time_str = time_str.strip()
    category = (category or "general").strip()
    frequency = "one_time" if str(frequency).strip().lower() in ("one_time", "once", "single") else "daily"
    is_completed_int = 1 if is_completed else 0
    now = datetime.now()
    now_str = now.strftime("%Y-%m-%d %H:%M:%S")
    today_date = now.strftime("%Y-%m-%d")
    completed_at = now_str if is_completed_int else None
    completed_date = today_date if is_completed_int else None

    conn = get_connection()
    try:
        if USE_POSTGRES:
            cursor = conn.execute(
                """
                INSERT INTO care_routines
                    (patient_id, caregiver_id, title, time_str, category, frequency, is_completed, completed_at, completed_date, created_at)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                RETURNING id
                """,
                (patient_id, caregiver_id, title, time_str, category, frequency, is_completed_int, completed_at, completed_date, now_str),
            )
            row = cursor.fetchone()
            conn.commit()
            routine_id = row["id"] if isinstance(row, dict) else row[0]
        else:
            cursor = conn.execute(
                """
                INSERT INTO care_routines
                    (patient_id, caregiver_id, title, time_str, category, frequency, is_completed, completed_at, completed_date, created_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                """,
                (patient_id, caregiver_id, title, time_str, category, frequency, is_completed_int, completed_at, completed_date, now_str),
            )
            conn.commit()
            routine_id = cursor.lastrowid

        return {
            "id": routine_id,
            "patient_id": patient_id,
            "caregiver_id": caregiver_id,
            "title": title,
            "time": time_str,
            "time_str": time_str,
            "category": category,
            "frequency": frequency,
            "done": bool(is_completed_int),
            "is_completed": is_completed_int,
            "completed_at": completed_at,
            "completed_date": completed_date,
            "created_at": now_str,
        }
    finally:
        conn.close()


def get_care_routines(patient_id):
    """
    Retrieve all care routines for a patient, auto-refreshing daily routines for the new day.
    """
    conn = get_connection()
    try:
        today_date = datetime.now().strftime("%Y-%m-%d")
        if USE_POSTGRES:
            rows = conn.execute(
                """
                SELECT id, patient_id, caregiver_id, title, time_str, category, frequency, is_completed, completed_at, completed_date, created_at
                FROM care_routines
                WHERE patient_id = %s
                ORDER BY id ASC
                """,
                (patient_id,),
            ).fetchall()
        else:
            rows = conn.execute(
                """
                SELECT id, patient_id, caregiver_id, title, time_str, category, frequency, is_completed, completed_at, completed_date, created_at
                FROM care_routines
                WHERE patient_id = ?
                ORDER BY id ASC
                """,
                (patient_id,),
            ).fetchall()

        results = []
        stale_daily_ids = []
        for r in rows:
            d = dict(r)
            d["time"] = d.get("time_str", "")
            freq = d.get("frequency") or "daily"
            d["frequency"] = freq
            is_done = bool(d.get("is_completed"))
            c_date = d.get("completed_date")

            # If daily routine was completed on a previous date, auto-refresh for today
            if freq == "daily" and is_done and c_date and c_date != today_date:
                is_done = False
                d["is_completed"] = 0
                d["completed_at"] = None
                d["completed_date"] = None
                stale_daily_ids.append(d["id"])

            d["done"] = is_done
            results.append(d)

        # Batch update stale daily routines if day changed
        if stale_daily_ids:
            if USE_POSTGRES:
                placeholders = ", ".join(["%s"] * len(stale_daily_ids))
                conn.execute(
                    f"UPDATE care_routines SET is_completed = 0, completed_at = NULL, completed_date = NULL WHERE id IN ({placeholders})",
                    tuple(stale_daily_ids),
                )
            else:
                placeholders = ", ".join(["?"] * len(stale_daily_ids))
                conn.execute(
                    f"UPDATE care_routines SET is_completed = 0, completed_at = NULL, completed_date = NULL WHERE id IN ({placeholders})",
                    tuple(stale_daily_ids),
                )
            conn.commit()

        return results
    finally:
        conn.close()


def toggle_care_routine(routine_id, patient_id, is_completed=None):
    """
    Toggle or update the completion status of a patient's routine.
    """
    conn = get_connection()
    try:
        if USE_POSTGRES:
            row = conn.execute(
                "SELECT id, patient_id, caregiver_id, title, time_str, category, frequency, is_completed FROM care_routines WHERE id = %s AND patient_id = %s",
                (routine_id, patient_id),
            ).fetchone()
        else:
            row = conn.execute(
                "SELECT id, patient_id, caregiver_id, title, time_str, category, frequency, is_completed FROM care_routines WHERE id = ? AND patient_id = ?",
                (routine_id, patient_id),
            ).fetchone()

        if not row:
            raise ValueError(f"Routine #{routine_id} not found for patient #{patient_id}.")

        current_val = row["is_completed"]
        if is_completed is None:
            new_val = 0 if current_val else 1
        else:
            new_val = 1 if is_completed else 0

        now = datetime.now()
        now_str = now.strftime("%Y-%m-%d %H:%M:%S")
        today_date = now.strftime("%Y-%m-%d")
        completed_at = now_str if new_val else None
        completed_date = today_date if new_val else None

        if USE_POSTGRES:
            conn.execute(
                "UPDATE care_routines SET is_completed = %s, completed_at = %s, completed_date = %s WHERE id = %s AND patient_id = %s",
                (new_val, completed_at, completed_date, routine_id, patient_id),
            )
        else:
            conn.execute(
                "UPDATE care_routines SET is_completed = ?, completed_at = ?, completed_date = ? WHERE id = ? AND patient_id = ?",
                (new_val, completed_at, completed_date, routine_id, patient_id),
            )
        conn.commit()

        d = dict(row)
        d["time"] = d.get("time_str", "")
        d["frequency"] = d.get("frequency") or "daily"
        d["is_completed"] = new_val
        d["done"] = bool(new_val)
        d["completed_at"] = completed_at
        d["completed_date"] = completed_date
        return d
    finally:
        conn.close()


def update_care_routine(routine_id, patient_id, title, time_str, category="general", frequency="daily"):
    """
    Edit an existing routine's title, time, category, or frequency.
    """
    if not isinstance(title, str) or not title.strip():
        raise ValueError("Routine activity name is required.")
    if not isinstance(time_str, str) or not time_str.strip():
        raise ValueError("Routine scheduled time is required.")

    clean_title = title.strip()
    clean_time = time_str.strip()
    clean_cat = (category or "general").strip()
    clean_freq = "one_time" if str(frequency).strip().lower() in ("one_time", "once", "single") else "daily"

    conn = get_connection()
    try:
        if USE_POSTGRES:
            conn.execute(
                "UPDATE care_routines SET title = %s, time_str = %s, category = %s, frequency = %s WHERE id = %s AND patient_id = %s",
                (clean_title, clean_time, clean_cat, clean_freq, routine_id, patient_id),
            )
        else:
            conn.execute(
                "UPDATE care_routines SET title = ?, time_str = ?, category = ?, frequency = ? WHERE id = ? AND patient_id = ?",
                (clean_title, clean_time, clean_cat, clean_freq, routine_id, patient_id),
            )
        conn.commit()
        return {
            "id": routine_id,
            "patient_id": patient_id,
            "title": clean_title,
            "time": clean_time,
            "time_str": clean_time,
            "category": clean_cat,
            "frequency": clean_freq,
        }
    finally:
        conn.close()


def reset_daily_routines(patient_id):
    """
    Refresh routine block:
    - Retains all daily routines and resets their completion to uncompleted (ready for today).
    - Removes finished one-time tasks so only active items remain.
    """
    conn = get_connection()
    try:
        if USE_POSTGRES:
            conn.execute(
                "UPDATE care_routines SET is_completed = 0, completed_at = NULL, completed_date = NULL WHERE patient_id = %s AND (frequency = 'daily' OR frequency IS NULL)",
                (patient_id,),
            )
            conn.execute(
                "DELETE FROM care_routines WHERE patient_id = %s AND frequency = 'one_time' AND is_completed = 1",
                (patient_id,),
            )
        else:
            conn.execute(
                "UPDATE care_routines SET is_completed = 0, completed_at = NULL, completed_date = NULL WHERE patient_id = ? AND (frequency = 'daily' OR frequency IS NULL)",
                (patient_id,),
            )
            conn.execute(
                "DELETE FROM care_routines WHERE patient_id = ? AND frequency = 'one_time' AND is_completed = 1",
                (patient_id,),
            )
        conn.commit()
        return True
    finally:
        conn.close()


def delete_care_routine(routine_id, patient_id):
    """
    Delete a routine item for a patient.
    """
    conn = get_connection()
    try:
        if USE_POSTGRES:
            conn.execute("DELETE FROM care_routines WHERE id = %s AND patient_id = %s", (routine_id, patient_id))
        else:
            conn.execute("DELETE FROM care_routines WHERE id = ? AND patient_id = ?", (routine_id, patient_id))
        conn.commit()
        return True
    finally:
        conn.close()


if __name__ == "__main__":
    # Quick manual sanity check: `python database.py`
    init_db()
    print(f"Database initialized at: {DB_PATH}")