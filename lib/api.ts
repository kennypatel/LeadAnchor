import { NextResponse } from "next/server";
import { z } from "zod";

export const leadPayloadSchema = z.object({
  companyId: z.string().optional(),
  name: z.string().min(1),
  phone: z.string().optional(),
  email: z.string().email().optional(),
  source: z.string().min(1).default("Website form"),
  industry: z.string().optional(),
  serviceRequested: z.string().optional(),
  message: z.string().min(1)
});

export const aiRespondSchema = z.object({
  name: z.string().optional(),
  message: z.string().min(1),
  serviceRequested: z.string().optional(),
  industry: z.string().optional(),
  source: z.string().optional()
});

export const notificationSchema = z.object({
  companyId: z.string().optional(),
  leadId: z.string().optional(),
  type: z.string().min(1),
  title: z.string().min(1),
  message: z.string().min(1),
  channel: z.enum(["email", "sms", "both"]).default("email")
});

export const appointmentSchema = z.object({
  companyId: z.string().optional(),
  leadId: z.string().min(1),
  appointmentTime: z.string().min(1),
  notes: z.string().optional()
});

export async function parseJson<T extends z.ZodTypeAny>(request: Request, schema: T) {
  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return {
      ok: false as const,
      response: NextResponse.json(
        { error: "Invalid request payload", issues: parsed.error.flatten() },
        { status: 400 }
      )
    };
  }

  return { ok: true as const, data: parsed.data as z.infer<T> };
}
