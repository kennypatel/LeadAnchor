import { NextResponse } from "next/server";
import { generateSuggestedReply } from "@/lib/ai/lead-agent";

export async function POST(request: Request) {
  const form = await request.formData().catch(() => null);
  const from = form?.get("From")?.toString() ?? "unknown";
  const body = form?.get("Body")?.toString() ?? "";
  const reply = await generateSuggestedReply({ message: body, source: "Twilio SMS" });

  return NextResponse.json({
    received: true,
    from,
    reply,
    twilioReady: Boolean(process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN)
  });
}
