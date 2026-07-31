# KAKX Arena — Website & API

Monorepo for the KAKX Arena website (Wave City, Ghaziabad).
**Frontend and backend are separated** — independent folders, independent builds, one git repo.

```
kakx-arena/
├── frontend/   React 18 + Vite + Tailwind (the website — same look as before)
├── backend/    Express + TypeScript REST API (content + booking log)
├── vercel.json Vercel config (builds frontend/)
└── README.md
```

## 🚀 Run locally

```bash
# Frontend (http://localhost:5173)
cd frontend
npm install
npm run dev

# Backend (http://localhost:4000)
cd backend
npm install
npm run dev
```

Optional: point the frontend at the backend for booking logging:
```bash
# frontend/.env.local
VITE_API_URL=http://localhost:4000
```

## 📦 Deploy

- **Frontend** → Vercel (project `kakx-arena`). Root directory `frontend/` is set in `vercel.json`, so GitHub pushes auto-deploy.
- **Backend** → any Node host. `npm run build && npm start` (or Vercel serverless via `api/index.ts`). Add its URL to the frontend as `VITE_API_URL` in Vercel env vars.

## 📝 Editing website content (sports, pricing, gallery, FAQ…)

All content lives in one place: **`frontend/src/data/site.ts`**.
After editing it, keep the backend API in sync:

```bash
cd backend && npm run sync-data
```

## 🔌 API endpoints

| Method | Endpoint        | Purpose                                   |
|--------|-----------------|-------------------------------------------|
| GET    | /api/health     | Health check                              |
| GET    | /api/site       | Site config (contact, hours, maps…)       |
| GET    | /api/sports     | Sports, pricing, features                 |
| GET    | /api/timeslots  | Bookable time slots                       |
| GET    | /api/gallery    | Gallery images                            |
| GET    | /api/reviews    | Reviews                                   |
| GET    | /api/stats      | Stats counters                            |
| GET    | /api/marquee    | Hero marquee items                        |
| GET    | /api/faqs       | FAQ list                                  |
| GET    | /api/areas      | Local areas                               |
| POST   | /api/booking    | Log a booking `{ sport, date, slot, name? }` |
| POST   | /api/contact    | Log a contact `{ name, phone?, message }` |

Booking/contact submissions are appended to `backend/data/bookings.json` / `contacts.json` (git-ignored).
