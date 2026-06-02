import os
from enum import Enum
from typing import Optional

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

load_dotenv()

try:
    from openai import OpenAI
except Exception:  # pragma: no cover
    OpenAI = None


class Mode(str, Enum):
    hint = "hint"
    full_solution = "full_solution"
    simple_explanation = "simple_explanation"


class SolveRequest(BaseModel):
    problem: str = Field(..., min_length=2, max_length=3000)
    mode: Mode
    student_level: Optional[str] = Field(default="middle school / early algebra")


class SolveResponse(BaseModel):
    mode: Mode
    problem: str
    answer: str
    used_demo_mode: bool = False


app = FastAPI(title="KCM Math Assist API", version="0.1.0")

allowed_origins = os.getenv("ALLOWED_ORIGINS", "http://localhost:5173").split(",")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[origin.strip() for origin in allowed_origins if origin.strip()],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def build_prompt(problem: str, mode: Mode, student_level: str) -> str:
    base = f"""
You are KCM Math Assist, a warm, beginner-friendly math tutor for Keni Can Math.
The student level is: {student_level}.

Rules:
- Be clear, encouraging, and concise.
- Do not just give the answer unless the chosen mode requires it.
- Use numbered steps when solving.
- Explain any math vocabulary simply.
- End with one quick check question for the student.

Student problem:
{problem}
""".strip()

    if mode == Mode.hint:
        return base + "\n\nMode: Give 2-3 helpful hints only. Do not fully solve it."
    if mode == Mode.full_solution:
        return base + "\n\nMode: Give a full step-by-step solution and final answer."
    return base + "\n\nMode: Explain it like the student is 10, using plain language and a simple example."


def demo_answer(problem: str, mode: Mode) -> str:
    label = {
        Mode.hint: "Hint Mode",
        Mode.full_solution: "Full Solution",
        Mode.simple_explanation: "Simple Explanation",
    }[mode]
    return f"""## {label} Demo Response

I received your problem:

**{problem}**

This local demo response means your app is working, but no OpenAI API key is connected yet.

### What to do next
1. Open `backend/.env`.
2. Add your `OPENAI_API_KEY`.
3. Restart the backend.

### Student check
Can you identify what the problem is asking you to find?"""


@app.get("/")
def health_check():
    return {"status": "ok", "service": "KCM Math Assist API"}


@app.post("/solve", response_model=SolveResponse)
def solve_math(payload: SolveRequest):
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key or OpenAI is None:
        return SolveResponse(
            mode=payload.mode,
            problem=payload.problem,
            answer=demo_answer(payload.problem, payload.mode),
            used_demo_mode=True,
        )

    try:
        client = OpenAI(api_key=api_key)
        completion = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "You are a careful math tutor. Avoid hallucinating. Ask the student to verify unclear inputs."},
                {"role": "user", "content": build_prompt(payload.problem, payload.mode, payload.student_level or "beginner")},
            ],
            temperature=0.2,
        )
        answer = completion.choices[0].message.content or "I could not generate an answer. Please try again."
        return SolveResponse(mode=payload.mode, problem=payload.problem, answer=answer, used_demo_mode=False)
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"AI request failed: {exc}")


@app.get("/diagnostic/health")
def diagnostic_health():
    return {"status": "ok", "service": "KCM Diagnostic Hub API"}
