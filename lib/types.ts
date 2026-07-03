export type LeadStatus = "New" | "Responded" | "Qualified" | "Booked" | "Needs Human" | "Lost" | "Won";
export type LeadUrgency = "Low" | "Normal" | "High" | "Emergency";

export type Lead = {
  id: string;
  name: string;
  phone: string;
  email: string;
  source: string;
  industry: string;
  serviceRequested: string;
  urgency: LeadUrgency;
  status: LeadStatus;
  estimatedValue: number;
  leadSummary: string;
  qualificationDetails: string[];
  conversationTimeline: Array<{ role: string; message: string; timestamp: string }>;
  lastMessage: string;
  createdDate: string;
  responseTime: string;
  assignedTeamMember: string;
  followUpStatus: string;
  appointmentStatus: string;
  nextAction: string;
  suggestedReply: string;
  internalNotes: string;
};

export type CalculatorInput = {
  averageLeadValue: number;
  monthlyLeadVolume: number;
  missedLeadPercentage: number;
  currentResponseTime: number;
  currentCloseRate: number;
  improvedResponseRate: number;
};
