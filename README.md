# SIH26003
Cognitive Gaming & Memory Assistance Platform for Elderly Dementia Patients (NER) - SIH 2026

## Run locally

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python seed_data.py
python app.py
```

Open `http://127.0.0.1:5000/`.

Without `DATABASE_URL`, the app uses the local SQLite file `app_data.db`.

## Deploy on Vercel

Vercel runs Flask as a serverless function through `api/index.py`. Production
data must use PostgreSQL because Vercel's function filesystem is not persistent.
Neon PostgreSQL is a good fit for this MVP because it is hosted, serverless,
has a generous free tier, and provides a standard `DATABASE_URL` connection
string. The app automatically uses PostgreSQL when `DATABASE_URL` is set.

1. Create a PostgreSQL database at Neon and copy its pooled connection string.
2. Push this project to GitHub.
3. Import the repository in Vercel.
4. Add these Vercel environment variables for Production and Preview:

	- `DATABASE_URL`: Neon PostgreSQL connection string
	- `FLASK_SECRET_KEY`: a long random secret

5. Deploy. The first serverless request creates the required tables.

The deploy entry point is `api/index.py`, and `vercel.json` routes all web
requests to the Flask application. Keep SQLite for local tests; never use the
local `app_data.db` as the production database.
