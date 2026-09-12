import os

if not os.environ.get("DATABASE_URL"):
	raise RuntimeError("DATABASE_URL must be configured for the Vercel deployment.")

from app import app
from database import init_db

init_db()

# Vercel discovers this Flask application as the serverless function entry point.
