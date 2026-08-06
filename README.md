# MurdoCodes Portfolio

Kinetic-portfolio redesign: Next.js 14 (App Router) + Tailwind + Framer Motion,
with a standalone Express service for the contact form and a data layer
that's pre-shaped for a future Payload CMS swap.

## Structure

```
app/                Next.js App Router pages
  page.tsx          Home (hero, about, skills, projects, contact)
  projects/[slug]/  Case-study page per project
  api/contact/      Route that forwards submissions to the Express service
components/         All UI pieces (Hero, Skills, ProjectCard, AscentRail, etc.)
data/projects.ts    Placeholder "database" — swap for Payload fetches later
lib/payload.ts      Fetch helper stub for the future Payload CMS instance
server/             Standalone Express API (contact form email sending)
```

## Run the frontend

```bash
npm install
cp .env.example .env.local
npm run dev
```

Visit http://localhost:3000.

## Run the backend (optional for local dev)

The contact form works without this — it just logs to the console if
`EXPRESS_API_URL` isn't set. To wire up real email sending:

```bash
cd server
npm install
cp .env.example .env
# add your Resend API key
npm run dev
```

Then set `EXPRESS_API_URL=http://localhost:3001` in the root `.env.local`.

## Adding Payload CMS later

1. `npx create-payload-app@latest` in a new `cms/` folder (or deploy separately)
2. Define a `Projects` collection with fields matching `data/projects.ts`
   (slug, name, summary, problem, role, outcome, stack, liveUrl)
3. Set `PAYLOAD_URL` in `.env.local`
4. Replace the bodies of `getProjects()` / `getProjectBySlug()` in
   `data/projects.ts` with calls through `lib/payload.ts` — no component
   changes needed since the `Project` type stays the same

## Deployment

- Frontend → Vercel (zero-config for Next.js)
- Express service → Railway or Render
- Payload CMS (when added) → Railway/Render with a managed Postgres instance
