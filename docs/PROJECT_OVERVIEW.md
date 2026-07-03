# KCM Learning Hub Project Overview

## Product Vision

KCM Learning Hub is an all-in-one math learning platform that helps students diagnose weaknesses, practice consistently, receive support, and track progress over time.

## Current Build Phase

July 2026 V1 Foundation

## Architecture Direction

KCM will use a modular feature-based architecture.

### Frontend

- `components/` for shared UI
- `features/` for major product areas
- `stores/` for app and progress state
- `lib/` for constants, API helpers, and shared utilities

### Backend

- `routes/` for API endpoints
- `services/` for business logic
- `models/` for schemas
- `data/` for local question banks and sample content