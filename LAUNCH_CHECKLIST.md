# LeadAnchor Launch Checklist

## Must Do Before Demo

- Add real Supabase project values to `.env.local`.
- Run `supabase/migrations/001_initial_schema.sql` in Supabase SQL Editor.
- Add `OPENAI_API_KEY` if you want the backend response engine to generate live suggested replies.
- Stop the dev server and run `npm run check`.
- Start with `npm run dev`.
- Test `/`, `/demo`, `/signup`, `/dashboard`, `/dashboard/leads`, and `/api/ai/respond`.

## Must Do Before Selling

- Build company onboarding after signup.
- Store leads, conversations, notifications, and appointments in Supabase instead of mock data.
- Add real lead source connection flow for website forms.
- Configure Twilio inbound SMS and missed-call webhooks.
- Configure Resend owner notifications.
- Add Stripe subscription checkout and billing portal.
- Add audit logging for lead status changes.
- Add dashboard loading, error, and empty states for real data.

## Recommended First Pilot

Start with one vertical, one offer, and one lead source.

Best first vertical: roofing or HVAC.

Best first offer: free missed lead audit.

Best first integration: missed calls plus website form capture.

Track these pilot metrics:

- Leads captured
- Instant response rate
- Average response time
- Qualified opportunities
- Appointments booked
- Missed leads saved
- Estimated recovered revenue
- Leads needing attention
