# GitHub Adding Instructions

## Option A: Create a new GitHub repository from Cursor / terminal

1. Unzip `kcm-diagnostic-hub.zip`.
2. Open the `kcm-diagnostic-hub` folder in Cursor.
3. Open the terminal in Cursor.
4. Run:

```bash
git init
git add .
git commit -m "Initial KCM Diagnostic Hub MVP"
```

5. Go to GitHub and create a new empty repository named:

```text
kcm-diagnostic-hub
```

Do not add a README, .gitignore, or license on GitHub because this zip already has them.

6. Copy the repository commands from GitHub. They will look like this:

```bash
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/kcm-diagnostic-hub.git
git push -u origin main
```

## Option B: Add this into an existing KCM repository

1. Unzip this file.
2. Copy these folders into your existing repo:

```text
backend/
frontend/
docs/
.gitignore
README.md
```

3. Then run:

```bash
git status
git add .
git commit -m "Add KCM Diagnostic Hub MVP"
git push
```

## Run Commands

Backend:

```bash
cd backend
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
copy .env.example .env
uvicorn main:app --reload --port 8000
```

Frontend:

```bash
cd frontend
npm install
npm run dev
```

## Deployment Notes

- Frontend: Vercel
- Backend: Render
- Set `VITE_API_BASE` in Vercel to your Render backend URL.
- Set `ALLOWED_ORIGINS` in Render to your Vercel frontend URL.
- Add `OPENAI_API_KEY` in Render only, not in GitHub.
