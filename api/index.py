import os
import sys

# Ensure repository root is on sys.path for Vercel serverless functions
ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if ROOT_DIR not in sys.path:
    sys.path.insert(0, ROOT_DIR)

if not os.environ.get("DATABASE_URL"):
    raise RuntimeError("DATABASE_URL must be configured for the Vercel deployment.")

from app import app
from database import init_db

init_db()

# Vercel discovers this Flask application as the serverless function entry point.
