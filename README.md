# LeadAnchor

LeadAnchor is revenue recovery software for businesses that cannot afford to miss leads.

Core promise: **Never miss another lead.**

The product captures calls, forms, texts, and quote requests, responds instantly, qualifies each opportunity, routes urgent leads, and helps teams book more appointments before customers call a competitor.

## Positioning

LeadAnchor is built for local service businesses where speed-to-lead turns into booked revenue:

- Roofing
- HVAC
- Dental
- Med Spa
- Law Firms
- Hotels
- Home Services

The current demo is configured for **Summit Peak Roofing**.

## What Is Implemented

- Public landing page at `/`
- Read-only sales demo at `/demo`
- Supabase auth pages at `/login`, `/signup`, `/forgot-password`
- Revenue dashboard at `/dashboard`
- Lead inbox at `/dashboard/leads`
- Response settings at `/dashboard/agent`
- Revenue calculator at `/dashboard/calculator`
- Integrations, notifications, and settings screens
- Mock API routes for lead capture, suggested replies, Twilio webhooks, notifications, and appointment booking
- Vertical config in `lib/config/verticals.ts`
- Supabase schema with row-level security in `supabase/migrations/001_initial_schema.sql`

## What Is Placeholder

- Real lead persistence is not wired to Supabase queries yet.
- Integration setup buttons are UI placeholders.
- Stripe billing is represented in settings but not connected.
- Calendar booking is represented in UI but not connected to Google Calendar or Calendly.
- Demo data is static and lives in `lib/mock-data.ts`.

## Local Setup

Install dependencies:

```bash
npm install
```

Create a local env file:

```bash
cp .env.example .env.local
```

Fill in values as needed:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
OPENAI_API_KEY=
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=
RESEND_API_KEY=
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

Only `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are required for Supabase auth. `OPENAI_API_KEY` enables the backend response engine. Twilio, Resend, and Stripe values are ready for production integrations.

Run the dev server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Demo Mode

Open:

```text
http://localhost:3000/demo
```

The demo page shows:

- Dashboard KPIs
- Lead inbox preview
- Revenue calculator preview
- Example lead detail

## Supabase Setup

Create a Supabase project, then run:

```text
supabase/migrations/001_initial_schema.sql
```

The schema creates:

- `users`
- `companies`
- `leads`
- `conversations`
- `agent_settings`
- `notifications`
- `appointments`
- `events`

Row-level security is enabled so company data is scoped to the logged-in owner.

## Quality Checks

Stop `npm run dev` first, then run:

```bash
npm run check
```

This clears the generated Next.js cache, creates a production build, and runs TypeScript validation.

If Next.js shows a missing chunk error such as `Cannot find module './331.js'`, run:

```bash
npm run clean
npm run dev
```

## API Smoke Test

```bash
curl -s -X POST http://localhost:3000/api/ai/respond \
  -H 'content-type: application/json' \
  -d '{"name":"Maya","message":"Water is leaking through my ceiling right now","serviceRequested":"Emergency roof leak","industry":"Roofing","source":"Missed call"}'
```

Expected behavior: returns `leadSummary`, `qualification`, `urgency`, `suggestedReply`, `nextAction`, and `humanHandoffNeeded`.

## Deploying To Vercel

1. Push the repo to GitHub.
2. Import the project into Vercel.
3. Add all required environment variables in Vercel.
4. Run the Supabase migration.
5. Deploy.

## Next Production Steps

1. Connect Supabase auth and company onboarding.
2. Replace mock data with Supabase queries scoped to the logged-in company.
3. Persist lead status changes, notes, conversations, and appointments.
4. Connect Twilio SMS and Voice webhooks.
5. Connect Resend for owner and team notifications.
6. Connect Stripe checkout and billing portal.
7. Add Google Calendar or Calendly booking.
8. Add loading, empty, and error states for real data.
