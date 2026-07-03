import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const form = await request.formData().catch(() => null);
  return NextResponse.json({
    received: true,
    callSid: form?.get("CallSid")?.toString() ?? null,
    from: form?.get("From")?.toString() ?? null,
    event: "missed_call_or_call_event",
    nextStep: "Create lead, send instant SMS, notify owner if urgent",
    twilioReady: Boolean(process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN)
  });
}
