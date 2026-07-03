import { NextResponse } from "next/server";
import { appointmentSchema, parseJson } from "@/lib/api";

export async function POST(request: Request) {
  const parsed = await parseJson(request, appointmentSchema);
  if (!parsed.ok) return parsed.response;

  return NextResponse.json(
    {
      appointment: {
        id: crypto.randomUUID(),
        status: "Booked",
        ...parsed.data,
        createdAt: new Date().toISOString()
      }
    },
    { status: 201 }
  );
}
