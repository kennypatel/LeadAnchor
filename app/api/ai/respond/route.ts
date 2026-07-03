import { NextResponse } from "next/server";
import { detectUrgency, generateSuggestedReply, qualifyLead, recommendNextAction, shouldEscalateToHuman, summarizeLead } from "@/lib/ai/lead-agent";
import { aiRespondSchema, parseJson } from "@/lib/api";

export async function POST(request: Request) {
  const parsed = await parseJson(request, aiRespondSchema);
  if (!parsed.ok) return parsed.response;

  const [summary, qualification, urgency, nextAction, reply, escalate] = await Promise.all([
    summarizeLead(parsed.data),
    qualifyLead(parsed.data),
    detectUrgency(parsed.data),
    recommendNextAction(parsed.data),
    generateSuggestedReply(parsed.data),
    shouldEscalateToHuman(parsed.data)
  ]);

  return NextResponse.json({
    leadSummary: summary,
    qualification,
    urgency,
    nextAction,
    suggestedReply: reply,
    humanHandoffNeeded: escalate
  });
}
