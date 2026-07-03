export type VerticalConfig = {
  id: string;
  displayName: string;
  mainPainPoint: string;
  commonServices: string[];
  leadSources: string[];
  qualificationQuestions: string[];
  escalationTriggers: string[];
  estimatedAverageJobValue: number;
  landingHeadlineVariant: string;
  auditHook: string;
  commonMissedLeadType: string;
  typicalUrgency: string;
  fastResponseReason: string;
};

export const verticals: Record<string, VerticalConfig> = {
  roofing: {
    id: "roofing",
    displayName: "Roofing",
    mainPainPoint: "Storms, leaks, and insurance deadlines create urgent leads that go cold fast.",
    commonServices: ["Emergency leak repair", "Storm damage inspection", "Roof replacement", "Gutter repair", "Commercial flat roof"],
    leadSources: ["Calls", "Quote forms", "Texts", "After-hours voicemail", "Google Business Profile"],
    qualificationQuestions: [
      "What roofing service do you need?",
      "Is there active leaking?",
      "Was this caused by a recent storm?",
      "What is the property address?",
      "Are you the homeowner or property manager?",
      "When would you like an inspection?"
    ],
    escalationTriggers: ["Active leak", "Storm damage", "Commercial property", "Insurance deadline", "Job value above $10,000"],
    estimatedAverageJobValue: 8500,
    landingHeadlineVariant: "Recover every roofing lead before another contractor gets the call.",
    auditHook: "Find missed calls, storm inquiries, and roof replacement quotes that never got a fast reply.",
    commonMissedLeadType: "After-hours leak call",
    typicalUrgency: "High to emergency",
    fastResponseReason: "Homeowners often call the next roofer if the first company does not answer quickly."
  },
  hvac: {
    id: "hvac",
    displayName: "HVAC",
    mainPainPoint: "No-heat and no-cooling calls turn into booked jobs for whoever responds first.",
    commonServices: ["AC repair", "Furnace repair", "System replacement", "Maintenance", "Emergency service"],
    leadSources: ["Calls", "Forms", "Texts", "Chat", "Google ads"],
    qualificationQuestions: ["Is the system heating or cooling?", "Is this an emergency?", "What is the system age?", "What is the service address?", "When can a technician arrive?"],
    escalationTriggers: ["No heat", "No AC", "Elderly resident", "Commercial outage", "Job value above $7,500"],
    estimatedAverageJobValue: 6500,
    landingHeadlineVariant: "Book HVAC calls while customers still need help.",
    auditHook: "Show how many no-heat, no-cooling, and replacement leads were missed or delayed.",
    commonMissedLeadType: "No-cooling call",
    typicalUrgency: "High",
    fastResponseReason: "Comfort emergencies create immediate buying intent and short decision windows."
  },
  dental: {
    id: "dental",
    displayName: "Dental",
    mainPainPoint: "New patient inquiries and urgent pain calls are easy to lose when phones get busy.",
    commonServices: ["New patient exam", "Cleaning", "Emergency visit", "Cosmetic consult", "Implant consult"],
    leadSources: ["Calls", "Website forms", "Chat", "Email", "Referrals"],
    qualificationQuestions: ["Are you a new or existing patient?", "What appointment do you need?", "Are you in pain?", "What insurance do you have?", "What times work best?"],
    escalationTriggers: ["Pain", "Broken tooth", "Same-day request", "High-value consult", "Medical sensitivity"],
    estimatedAverageJobValue: 900,
    landingHeadlineVariant: "Turn more patient inquiries into booked appointments.",
    auditHook: "Reveal patient inquiries that waited too long for a callback.",
    commonMissedLeadType: "New patient form",
    typicalUrgency: "Normal to high",
    fastResponseReason: "Patients compare availability and book with the practice that responds first."
  },
  medspa: {
    id: "medspa",
    displayName: "Med Spa",
    mainPainPoint: "Consult requests can disappear when prospects do not get quick answers and booking options.",
    commonServices: ["Injectables", "Laser treatment", "Facials", "Body contouring", "Consultation"],
    leadSources: ["Instagram", "Forms", "Texts", "Chat", "Email"],
    qualificationQuestions: ["Which treatment are you interested in?", "Have you visited before?", "What result do you want?", "When would you like to come in?", "Do you prefer a consultation first?"],
    escalationTriggers: ["Medical concern", "Adverse reaction", "High-value package", "Same-day request"],
    estimatedAverageJobValue: 1200,
    landingHeadlineVariant: "Book more consults from every treatment inquiry.",
    auditHook: "Find consults and treatment requests that did not get fast follow-up.",
    commonMissedLeadType: "Treatment consult request",
    typicalUrgency: "Normal",
    fastResponseReason: "Prospects often contact multiple providers before booking."
  },
  law: {
    id: "law",
    displayName: "Law Firms",
    mainPainPoint: "Sensitive inquiries and deadline-driven matters need fast routing without giving advice.",
    commonServices: ["Consultation", "Intake", "Contract review", "Family law inquiry", "Injury intake"],
    leadSources: ["Calls", "Forms", "Email", "Chat", "Referrals"],
    qualificationQuestions: ["What type of matter is this?", "Is there an urgent deadline?", "What is the best callback number?", "Have you worked with the firm before?", "Would you like an intake consultation?"],
    escalationTriggers: ["Legal deadline", "Court date", "Injury", "Threatening language", "Sensitive matter"],
    estimatedAverageJobValue: 4500,
    landingHeadlineVariant: "Route every legal inquiry before it becomes a missed case.",
    auditHook: "Show intake requests that waited too long for human review.",
    commonMissedLeadType: "Consultation form",
    typicalUrgency: "High",
    fastResponseReason: "Prospects usually call several firms and choose the first credible response."
  },
  hotel: {
    id: "hotel",
    displayName: "Hotels",
    mainPainPoint: "Room blocks, group stays, and guest requests are expensive to miss or delay.",
    commonServices: ["Room block", "Group stay", "Event inquiry", "Front desk callback", "Reservation question"],
    leadSources: ["Calls", "Forms", "Email", "Chat", "Booking partners"],
    qualificationQuestions: ["What dates are you looking for?", "How many rooms?", "Is this for a group or individual stay?", "Do you have a preferred room type?", "Should the front desk call you back?"],
    escalationTriggers: ["Large group", "Same-day stay", "Guest complaint", "VIP request", "Revenue above $5,000"],
    estimatedAverageJobValue: 5500,
    landingHeadlineVariant: "Recover group and reservation inquiries before they book elsewhere.",
    auditHook: "Find room blocks and guest inquiries that never received a quick response.",
    commonMissedLeadType: "Group room block inquiry",
    typicalUrgency: "Normal to high",
    fastResponseReason: "Groups and guests often move to another property when replies are slow."
  },
  "home-services": {
    id: "home-services",
    displayName: "Home Services",
    mainPainPoint: "Calls, forms, and texts arrive while crews are in the field and office staff are busy.",
    commonServices: ["Repair", "Estimate", "Inspection", "Maintenance", "Emergency service"],
    leadSources: ["Calls", "Forms", "Texts", "Chat", "Manual entry"],
    qualificationQuestions: ["What service do you need?", "Where is the service location?", "How urgent is it?", "What is the best callback number?", "When would you like service?"],
    escalationTriggers: ["Emergency", "High-value estimate", "Repeat customer", "After-hours request"],
    estimatedAverageJobValue: 2800,
    landingHeadlineVariant: "Capture every service inquiry before the customer moves on.",
    auditHook: "Show the inquiries your team missed while handling the day-to-day work.",
    commonMissedLeadType: "Quote request form",
    typicalUrgency: "Normal to high",
    fastResponseReason: "Local service buyers reward the company that responds clearly and quickly."
  }
};

export const verticalList = Object.values(verticals);
