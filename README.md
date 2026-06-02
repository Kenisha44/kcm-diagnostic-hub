# KCM Diagnostic Hub

A starter MVP for Keni Can Math that combines:

- Diagnostic quiz
- Skill report
- BrainBoost-style daily practice recommendations
- Math Assist step-by-step help
- Tutoring/membership funnel foundation

## Project Structure

```text
kcm-diagnostic-hub/
├── backend/      # FastAPI + Math Assist API
├── frontend/     # Svelte + Vite app
└── docs/         # GitHub and build notes
```

## Run Locally

### 1. Backend

```bash
cd backend
python -m venv .venv
# Windows PowerShell:
.venv\Scripts\Activate.ps1
# Mac/Linux:
# source .venv/bin/activate
pip install -r requirements.txt
copy .env.example .env
uvicorn main:app --reload --port 8000
```

Open: http://localhost:8000

The app works in demo mode without an OpenAI key. Add your key in `backend/.env` when ready.

### 2. Frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Open: http://localhost:5173

## MVP Features

- 20-question diagnostic
- Topic scoring by skill
- Recommended level
- Missed question review
- “Explain with Math Assist” button
- BrainBoost preview plan
- Mobile-friendly UI

## Next Build Steps

1. Add Supabase auth and database.
2. Save diagnostic reports.
3. Add parent/student report email capture.
4. Convert BrainBoost extension into in-app daily practice.
5. Add paid KCM membership and async tutoring CTA.
