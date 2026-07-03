# Decision Log

## 2026-07-03 — Use App Shell Architecture

### Decision

KCM will use a persistent app shell with a sidebar, header, and main content area.

### Reason

KCM is becoming a full learning hub, not a single-page diagnostic tool. A shared app shell keeps the experience consistent as we add Dashboard, Diagnostic, BrainBoost, Math Assist, Practice, Progress, AI Tutor, Homework Upload, and Premium features.

### Impact

All major features will render inside the app shell instead of living as disconnected pages.

## Public Site vs Student App

### Decision

Separate the marketing experience from the authenticated learning platform.

### Reason

Students and prospective users have different needs. A dedicated landing page allows us to market KCM effectively while the Learning Hub focuses on productivity and learning.

### Impact

The landing page will remain publicly accessible, while the Learning Hub will become the authenticated experience in future versions.

## Development Router

Decision

A temporary development router will be used until authentication is implemented.

Reason

Allows development of both the marketing site and the student application independently.

Future

Replace with authentication routing.