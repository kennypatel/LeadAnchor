import { NextResponse } from "next/server";
import { detectUrgency, recommendNextAction, shouldEscalateToHuman, summarizeLead } from "@/lib/ai/lead-agent";
import { leadPayloadSchema, parseJson } from "@/lib/api";

export async function POST(request: Request) {
  const parsed = await parseJson(request, leadPayloadSchema);
  if (!parsed.ok) return parsed.response;

  const lead = parsed.data;
  const context = {
    name: lead.name,
    message: lead.message,
    serviceRequested: lead.serviceRequested,
    industry: lead.industry,
    source: lead.source
  };

  const [summary, urgency, nextAction, escalate] = await Promise.all([
    summarizeLead(context),
    detectUrgency(context),
    recommendNextAction(context),
    shouldEscalateToHuman(context)
  ]);

  return NextResponse.json(
    {
      lead: {
        id: crypto.randomUUID(),
        ...lead,
        status: escalate ? "Needs Human" : "New",
        urgency,
        leadSummary: summary,
        recommendedNextAction: nextAction,
        createdAt: new Date().toISOString()
      }
    },
    { status: 201 }
  );
}
