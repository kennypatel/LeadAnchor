import type { Lead } from "@/lib/types";
import { verticals } from "@/lib/config/verticals";

export const demoCompany = {
  name: "Summit Peak Roofing",
  location: "Denver metro service area",
  industry: "Roofing",
  modeLabel: "Demo Mode",
  owner: "Jason Miller"
};

export const metrics = [
  { label: "Total Leads Captured", value: "186", detail: "+24% vs prior 30 days" },
  { label: "Instant Response Rate", value: "96%", detail: "179 inquiries answered" },
  { label: "Average Response Time", value: "0:38", detail: "Down from 21 minutes" },
  { label: "Qualified Opportunities", value: "103", detail: "Ready for estimate or booking" },
  { label: "Appointments Booked", value: "47", detail: "Inspections and estimates" },
  { label: "Estimated Revenue Recovered", value: "$128.6k", detail: "Pipeline saved from missed leads" },
  { label: "Leads Needing Attention", value: "8", detail: "Owner or dispatcher review" },
  { label: "Missed Leads Saved", value: "36", detail: "Captured after hours or no-answer" }
];

export const leadsBySource = [
  { source: "Calls", leads: 74 },
  { source: "Forms", leads: 46 },
  { source: "Texts", leads: 28 },
  { source: "Chat", leads: 18 },
  { source: "Email", leads: 20 }
];

export const statusFunnel = [
  { status: "Captured", count: 186 },
  { status: "Responded", count: 179 },
  { status: "Qualified", count: 103 },
  { status: "Booked", count: 47 },
  { status: "Won", count: 19 }
];

export const revenueOverTime = [
  { week: "Jun 1", revenue: 18200 },
  { week: "Jun 8", revenue: 27400 },
  { week: "Jun 15", revenue: 36100 },
  { week: "Jun 22", revenue: 52400 },
  { week: "Jun 29", revenue: 62800 }
];

export const leads: Lead[] = [
  {
    id: "SP-2048",
    name: "Maya Carter",
    phone: "(720) 555-0184",
    email: "maya.carter@example.com",
    source: "Missed call",
    industry: "Roofing",
    serviceRequested: "Emergency roof leak",
    urgency: "Emergency",
    status: "Needs Human",
    estimatedValue: 7800,
    leadSummary: "Homeowner has active leaking around a skylight after overnight rain and wants the earliest inspection window.",
    qualificationDetails: ["Active leak confirmed", "Homeowner", "Residential property", "Wants same-day inspection"],
    conversationTimeline: [
      { role: "Lead", timestamp: "Today, 8:42 AM", message: "Water is coming through near the skylight. Can someone call me?" },
      { role: "LeadAnchor", timestamp: "Today, 8:42 AM", message: "We can help route this quickly. What is the property address and is water still coming in?" },
      { role: "Lead", timestamp: "Today, 8:44 AM", message: "Yes, still dripping. Address is 1842 Grove Street." }
    ],
    lastMessage: "Yes, still dripping. Address is 1842 Grove Street.",
    createdDate: "Today, 8:42 AM",
    responseTime: "8 sec",
    assignedTeamMember: "Jason Miller",
    followUpStatus: "Owner alerted",
    appointmentStatus: "Needs emergency slot",
    nextAction: "Call immediately and offer the first emergency inspection window.",
    suggestedReply: "Maya, we have your address and leak details. A team member is calling now to confirm the earliest inspection window.",
    internalNotes: "Escalated because active water intrusion is still happening."
  },
  {
    id: "SP-2047",
    name: "Ethan Brooks",
    phone: "(303) 555-0147",
    email: "ethan.brooks@example.com",
    source: "Website form",
    industry: "Roofing",
    serviceRequested: "Storm damage inspection",
    urgency: "High",
    status: "Qualified",
    estimatedValue: 11800,
    leadSummary: "Homeowner requested storm damage inspection after hail and has visible shingle damage.",
    qualificationDetails: ["Recent hail storm", "Visible shingle damage", "Insurance claim likely", "Available Thursday afternoon"],
    conversationTimeline: [
      { role: "Lead", timestamp: "Today, 7:18 AM", message: "We had hail last night and I can see shingles in the yard." },
      { role: "LeadAnchor", timestamp: "Today, 7:18 AM", message: "Thanks, Ethan. Are you the homeowner, and what inspection times work this week?" }
    ],
    lastMessage: "Thursday afternoon works if you have anything.",
    createdDate: "Today, 7:18 AM",
    responseTime: "11 sec",
    assignedTeamMember: "Ari Lane",
    followUpStatus: "Inspection time pending",
    appointmentStatus: "Ready to book",
    nextAction: "Send Thursday inspection options and confirm property address.",
    suggestedReply: "Ethan, Thursday afternoon is available. Please confirm the property address and we will send the inspection window.",
    internalNotes: "Likely insurance claim. Keep response factual and inspection-focused."
  },
  {
    id: "SP-2046",
    name: "Olivia Martinez",
    phone: "(970) 555-0192",
    email: "olivia.martinez@example.com",
    source: "Text message",
    industry: "Roofing",
    serviceRequested: "Roof replacement quote",
    urgency: "Normal",
    status: "Booked",
    estimatedValue: 24500,
    leadSummary: "Homeowner wants a replacement quote for a 22-year-old roof and booked an estimate for Friday.",
    qualificationDetails: ["Roof age 22 years", "Homeowner", "No active leak", "Interested in financing options"],
    conversationTimeline: [
      { role: "Lead", timestamp: "Yesterday, 5:04 PM", message: "Looking for a quote on a full roof replacement." },
      { role: "LeadAnchor", timestamp: "Yesterday, 5:04 PM", message: "Happy to help. Are you the homeowner and when would you like an estimate?" },
      { role: "Lead", timestamp: "Yesterday, 5:09 PM", message: "Yes, Friday morning is ideal." }
    ],
    lastMessage: "Friday morning is ideal.",
    createdDate: "Yesterday, 5:04 PM",
    responseTime: "14 sec",
    assignedTeamMember: "Mina Patel",
    followUpStatus: "Confirmation sent",
    appointmentStatus: "Booked Friday 10:00 AM",
    nextAction: "Send reminder and prep estimator notes.",
    suggestedReply: "Olivia, you are booked for Friday at 10:00 AM. We will send a reminder before the estimate.",
    internalNotes: "High-value replacement lead. Ask estimator to discuss material options."
  },
  {
    id: "SP-2045",
    name: "Noah Nguyen",
    phone: "(303) 555-0119",
    email: "noah.nguyen@example.com",
    source: "Chat",
    industry: "Roofing",
    serviceRequested: "Gutter repair",
    urgency: "Normal",
    status: "Responded",
    estimatedValue: 1800,
    leadSummary: "Homeowner needs gutter repair on the rear elevation and asked for a callback after 3 PM.",
    qualificationDetails: ["Residential gutter repair", "No roof leak reported", "Callback after 3 PM"],
    conversationTimeline: [
      { role: "Lead", timestamp: "Yesterday, 2:31 PM", message: "Can you repair gutters that pulled away from the house?" },
      { role: "LeadAnchor", timestamp: "Yesterday, 2:31 PM", message: "Yes, we can route that. What is the address and best callback time?" }
    ],
    lastMessage: "After 3 PM is best.",
    createdDate: "Yesterday, 2:31 PM",
    responseTime: "19 sec",
    assignedTeamMember: "Ari Lane",
    followUpStatus: "Follow-up due",
    appointmentStatus: "Not booked",
    nextAction: "Call after 3 PM and confirm photos or inspection need.",
    suggestedReply: "Noah, we will call after 3 PM. If you have photos of the gutter area, you can send them before the call.",
    internalNotes: "Lower urgency but good add-on job."
  },
  {
    id: "SP-2044",
    name: "Grace Wilson",
    phone: "(719) 555-0122",
    email: "grace.wilson@example.com",
    source: "Email",
    industry: "Roofing",
    serviceRequested: "Commercial flat roof inquiry",
    urgency: "High",
    status: "New",
    estimatedValue: 36500,
    leadSummary: "Property manager needs inspection for a commercial flat roof with ponding water.",
    qualificationDetails: ["Commercial property", "Ponding water", "Property manager", "Potential high-value repair"],
    conversationTimeline: [
      { role: "Lead", timestamp: "Mon, 9:12 AM", message: "We manage a small retail building and need someone to look at ponding water on the roof." }
    ],
    lastMessage: "We need someone to look at ponding water on the roof.",
    createdDate: "Mon, 9:12 AM",
    responseTime: "Awaiting response",
    assignedTeamMember: "Unassigned",
    followUpStatus: "Initial response drafted",
    appointmentStatus: "Not booked",
    nextAction: "Respond, confirm building address, and route to commercial estimator.",
    suggestedReply: "Grace, we can help with commercial flat roof inspections. What is the building address and who should our estimator call?",
    internalNotes: "High-value commercial opportunity. Assign before end of day."
  },
  {
    id: "SP-2043",
    name: "Daniel Price",
    phone: "(720) 555-0168",
    email: "daniel.price@example.com",
    source: "Missed call",
    industry: "Roofing",
    serviceRequested: "Insurance claim help",
    urgency: "High",
    status: "Needs Human",
    estimatedValue: 15400,
    leadSummary: "Homeowner has an open insurance claim and wants help understanding inspection documentation.",
    qualificationDetails: ["Insurance claim open", "Needs documentation guidance", "No pricing promised", "Owner review recommended"],
    conversationTimeline: [
      { role: "Lead", timestamp: "Sun, 6:48 PM", message: "My insurance adjuster came out. Can you help with the roof paperwork?" },
      { role: "LeadAnchor", timestamp: "Sun, 6:49 PM", message: "We can have a team member call to review the inspection process. What is the best callback number?" }
    ],
    lastMessage: "Please call tomorrow morning.",
    createdDate: "Sun, 6:48 PM",
    responseTime: "12 sec",
    assignedTeamMember: "Jason Miller",
    followUpStatus: "Morning callback scheduled",
    appointmentStatus: "Needs owner review",
    nextAction: "Owner should call and keep discussion focused on inspection documentation.",
    suggestedReply: "Daniel, Jason will call tomorrow morning to discuss the inspection process and what documentation may be helpful.",
    internalNotes: "Avoid claim advice. Keep language inspection-focused."
  },
  {
    id: "SP-2042",
    name: "Sarah Kim",
    phone: "(303) 555-0155",
    email: "sarah.kim@example.com",
    source: "After-hours call",
    industry: "Roofing",
    serviceRequested: "After-hours leak call",
    urgency: "Emergency",
    status: "Won",
    estimatedValue: 9200,
    leadSummary: "After-hours leak call was captured, escalated, and turned into a booked repair job.",
    qualificationDetails: ["After-hours", "Active leak", "Temporary repair booked", "Replacement conversation likely"],
    conversationTimeline: [
      { role: "Lead", timestamp: "Sat, 10:41 PM", message: "I know it is late, but rain is coming in through a bedroom ceiling." },
      { role: "LeadAnchor", timestamp: "Sat, 10:41 PM", message: "We received this and are alerting the emergency contact. What is the address?" },
      { role: "Team", timestamp: "Sat, 10:47 PM", message: "Emergency callback completed. Temporary repair scheduled." }
    ],
    lastMessage: "Emergency callback completed. Temporary repair scheduled.",
    createdDate: "Sat, 10:41 PM",
    responseTime: "6 sec",
    assignedTeamMember: "Jason Miller",
    followUpStatus: "Closed won",
    appointmentStatus: "Repair booked",
    nextAction: "Send post-repair replacement inspection follow-up.",
    suggestedReply: "Sarah, thanks for trusting Summit Peak Roofing. We will follow up after the temporary repair to discuss next steps.",
    internalNotes: "Great pilot proof point: after-hours lead recovered."
  }
];

export const priorityItems = [
  { title: "Hot lead waiting", detail: "Maya Carter has active water intrusion and needs a call now.", tone: "Emergency" },
  { title: "After-hours inquiry captured", detail: "Sarah Kim’s Saturday leak call became a booked repair.", tone: "Recovered" },
  { title: "Appointment needs confirmation", detail: "Ethan Brooks is ready for a Thursday storm inspection.", tone: "Booking" },
  { title: "High-value lead needs owner review", detail: "Grace Wilson’s commercial flat roof inquiry is worth an estimated $36.5k.", tone: "High Value" }
];

export const recoveryFeed = [
  "Missed call captured from website visitor",
  "Quote request responded to in 8 seconds",
  "Emergency roof leak escalated to owner",
  "Appointment booked for inspection",
  "Follow-up sent after no reply"
];

export const notifications = [
  { type: "Hot Lead", title: "Emergency roof leak", message: "Maya Carter needs an immediate owner callback.", read: false },
  { type: "Human Review Needed", title: "Insurance claim conversation", message: "Daniel Price should be handled by the owner.", read: false },
  { type: "Appointment Booked", title: "Roof replacement estimate", message: "Olivia Martinez booked Friday at 10:00 AM.", read: false },
  { type: "Follow-Up Due", title: "Gutter repair callback", message: "Noah Nguyen asked for a call after 3 PM.", read: true },
  { type: "Missed Call Recovered", title: "After-hours leak call", message: "Sarah Kim became a booked repair job.", read: true },
  { type: "High-Value Opportunity", title: "Commercial flat roof", message: "Grace Wilson’s inquiry is estimated at $36.5k.", read: false },
  { type: "Failed Follow-Up", title: "Email delivery issue", message: "Backup text message is ready to send.", read: true }
];

export const integrations = [
  { name: "Phone Calls", status: "Connected", description: "Captures missed calls and creates recovery tasks." },
  { name: "Text Messages", status: "Connected", description: "Sends and receives lead follow-up texts." },
  { name: "Website Forms", status: "Connected", description: "Turns form fills into qualified opportunities." },
  { name: "Email Inbox", status: "Not Connected", description: "Monitors quote requests and booking questions." },
  { name: "Calendar Booking", status: "Connected", description: "Books inspections and estimate appointments." },
  { name: "CRM", status: "Not Connected", description: "Syncs qualified leads into your sales workflow." },
  { name: "Webhooks", status: "Connected", description: "Receives leads from forms, landing pages, and partners." },
  { name: "Zapier", status: "Not Connected", description: "Connects LeadAnchor to common business tools." },
  { name: "Google Calendar", status: "Connected", description: "Checks appointment windows and adds bookings." },
  { name: "Calendly", status: "Not Connected", description: "Routes qualified leads into booking links." },
  { name: "HubSpot", status: "Coming Soon", description: "Sends qualified opportunities to HubSpot." },
  { name: "GoHighLevel", status: "Coming Soon", description: "Syncs lead activity with local service funnels." },
  { name: "Twilio", status: "Connected", description: "Powers phone and text message routing." },
  { name: "Resend", status: "Not Connected", description: "Sends email alerts and summaries to the team." }
] as const;

export const leadSources = ["Calls", "Forms", "Texts", "Chat", "Email", "Manual Entry"];

export const industryTemplates = Object.fromEntries(
  Object.values(verticals).map((vertical) => [
    vertical.displayName,
    {
      services: vertical.commonServices,
      qualificationQuestions: vertical.qualificationQuestions,
      escalationRules: vertical.escalationTriggers,
      faqs: [
        `What happens when a ${vertical.displayName.toLowerCase()} lead arrives after hours?`,
        "Can my team review the lead before booking?",
        "Can LeadAnchor send appointment reminders?"
      ],
      bookingLogic: "Collect the key details, recommend the next step, and route urgent or high-value leads to a human."
    }
  ])
);
