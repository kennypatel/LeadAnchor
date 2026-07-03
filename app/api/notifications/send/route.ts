import { NextResponse } from "next/server";
import { notificationSchema, parseJson } from "@/lib/api";

export async function POST(request: Request) {
  const parsed = await parseJson(request, notificationSchema);
  if (!parsed.ok) return parsed.response;

  return NextResponse.json({
    queued: true,
    providerReady: {
      resend: Boolean(process.env.RESEND_API_KEY),
      twilio: Boolean(process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN)
    },
    notification: {
      id: crypto.randomUUID(),
      ...parsed.data,
      createdAt: new Date().toISOString()
    }
  });
}
