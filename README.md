# ANIMAFORM

Anime-inspired (original archetypes) gamified fitness app.

## Tech
- Frontend: Vue 3 + Vite + Tailwind CSS + Pinia + Vue Router
- Backend: Node.js + Express + PostgreSQL
- Auth: JWT
- ORM/Schema: Prisma (sample seed included)

## Local setup (web)
1. Start Postgres (required for backend).
2. Backend (from `backend/`):
   ```sh
   npm install
   npx prisma generate
   npx prisma db push
   npx prisma db seed
   npm run dev
   ```
   Seed admin user:
   - Email: `admin@animafrom.local`
   - Password: `admin123`
3. Frontend (from repo root):
   ```sh
   npm install
   npm run dev
   ```

Frontend API base URL defaults to `http://localhost:3000`. If you use a different backend URL, set `VITE_API_URL` in an `.env` file at the repo root.

## Core API endpoints (MVP)
- `POST /api/auth/register` (email, password) -> token + user
- `POST /api/auth/login` (email, password) -> token + user
- `GET /api/me`
- `GET /api/characters`
- `GET /api/profile` / `PUT /api/profile`
- `GET /api/workouts/today`
- `POST /api/workouts/complete` (workoutId, completedSets)
- `GET /api/progress` (xp, rank, streak)
- `GET /api/missions/daily`
- `GET /api/achievements` (unlocked achievements)
- `GET/POST /api/admin/characters` (admin-only)

## Mobile-ready
The UI is responsive (card-based layout + neon dark theme). Capacitor wrapping is not generated yet; we can add a Capacitor scaffold next if you want.
