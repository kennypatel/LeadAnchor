import OpenAI from "openai";

type LeadContext = {
  name?: string;
  message: string;
  serviceRequested?: string;
  industry?: string;
  source?: string;
};

const safetyRules =
  "Prioritize fast response, appointment booking, contact capture, and concise qualification. Do not hallucinate pricing, availability, legal, medical, or financial claims. Escalate urgent or sensitive issues.";

function getOpenAI() {
  if (!process.env.OPENAI_API_KEY) return null;
  return new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
}

async function complete(prompt: string, fallback: string) {
  const openai = getOpenAI();
  if (!openai) return fallback;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0.3,
    messages: [
      { role: "system", content: `You are LeadAnchor's response engine for missed lead recovery. ${safetyRules}` },
      { role: "user", content: prompt }
    ]
  });

  return response.choices[0]?.message.content?.trim() ?? fallback;
}

export async function summarizeLead(lead: LeadContext) {
  return complete(
    `Summarize this lead in one owner-friendly sentence: ${JSON.stringify(lead)}`,
    `${lead.name ?? "This lead"} asked about ${lead.serviceRequested ?? "service"} and needs a quick follow-up.`
  );
}

export async function qualifyLead(lead: LeadContext) {
  return complete(
    `Qualify this lead. Return JSON with fit, missing_info, booking_readiness, and risk_notes: ${JSON.stringify(lead)}`,
    JSON.stringify({
      fit: "Good fit",
      missing_info: ["preferred appointment time"],
      booking_readiness: "Needs one follow-up",
      risk_notes: []
    })
  );
}

export async function generateSuggestedReply(lead: LeadContext) {
  return complete(
    `Write a short reply that captures the next needed detail and moves toward booking: ${JSON.stringify(lead)}`,
    "Thanks for reaching out. I can help get you to the right person quickly. What is the service address and the best time for a call today?"
  );
}

export const generateReply = generateSuggestedReply;

export async function detectUrgency(lead: LeadContext) {
  const text = `${lead.message} ${lead.serviceRequested ?? ""}`.toLowerCase();
  if (["emergency", "leak", "now", "pain", "deadline", "no heat", "no ac"].some((word) => text.includes(word))) {
    return "Emergency";
  }
  return complete(
    `Classify urgency as Low, Normal, High, or Emergency: ${JSON.stringify(lead)}`,
    "Normal"
  );
}

export async function recommendNextAction(lead: LeadContext) {
  return complete(
    `Recommend the next action for the owner in one sentence: ${JSON.stringify(lead)}`,
    "Reply now, confirm the key details, and offer the earliest booking window."
  );
}

export async function shouldEscalateToHuman(lead: LeadContext) {
  const text = lead.message.toLowerCase();
  const sensitive = ["legal", "lawsuit", "medical", "injury", "refund", "angry", "emergency", "leak", "bleeding"];
  if (sensitive.some((word) => text.includes(word))) return true;

  const answer = await complete(
    `Should this lead be escalated to a human? Answer only true or false: ${JSON.stringify(lead)}`,
    "false"
  );
  return answer.toLowerCase().includes("true");
}
