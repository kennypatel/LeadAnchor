import { Bell, BookOpen, Clock, MapPin, MessageSquare, Phone, ShieldAlert } from "lucide-react";
import { Button, Panel } from "@/components/ui";
import { demoCompany, industryTemplates } from "@/lib/mock-data";

const sections = [
  ["Business Profile", "Company name, industry, website, and primary contact."],
  ["Services Offered", "Emergency leak repair, storm damage, roof replacement, gutters, commercial flat roof."],
  ["Service Area", "Denver metro, Boulder, Aurora, Lakewood, and surrounding suburbs."],
  ["Business Hours", "Mon-Fri 8 AM-6 PM, Sat 9 AM-2 PM."],
  ["After-Hours Handling", "Capture details, send immediate response, and escalate active leaks."],
  ["Qualification Questions", "Service need, active leak, address, homeowner status, inspection timing."],
  ["FAQs", "Inspection process, emergency handling, financing, and warranty basics."],
  ["Booking Rules", "Book inspections for qualified homeowners and route commercial leads to owner review."],
  ["Escalation Rules", "Active leaks, insurance claims, commercial jobs, and estimated value above $10,000."],
  ["Team Notifications", "Send hot leads to owner and dispatcher by text and email."],
  ["Handoff Rules", "Include lead summary, phone, urgency, last message, and next action."],
  ["Voice and Tone", "Professional, calm, concise, and appointment-focused."]
];

export default function ResponseSettingsPage() {
  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-3xl font-semibold">Response Settings</h1>
        <p className="mt-2 text-anchor-steel">Control how LeadAnchor captures, qualifies, routes, and follows up with new opportunities.</p>
      </div>
      <div className="grid gap-5 xl:grid-cols-[1fr_430px]">
        <Panel className="p-5">
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Business Profile" value={`${demoCompany.name} · ${demoCompany.industry}`} icon={<BookOpen size={16} />} />
            <Field label="Services Offered" value="Emergency leak repair, storm damage, roof replacement, gutters, commercial flat roof" />
            <Field label="Service Area" value={demoCompany.location} icon={<MapPin size={16} />} />
            <Field label="Business Hours" value="Mon-Fri 8 AM-6 PM, Sat 9 AM-2 PM" icon={<Clock size={16} />} />
            <Field label="After-Hours Handling" value="Respond instantly, collect address, alert owner for active leaks" icon={<Phone size={16} />} />
            <Field label="Team Notifications" value="owner@summitpeak.example, dispatch@summitpeak.example" icon={<Bell size={16} />} />
            <Field label="Booking Rules" value="Offer inspection windows after service, address, and owner status are captured" />
            <Field label="Voice and Tone" value="Calm, direct, professional, appointment-focused" icon={<MessageSquare size={16} />} />
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <TextArea label="Qualification Questions" value={industryTemplates.Roofing.qualificationQuestions.join("\n")} />
            <TextArea label="FAQs" value={industryTemplates.Roofing.faqs.join("\n")} />
            <TextArea label="Escalation Rules" value={industryTemplates.Roofing.escalationRules.join("\n")} />
            <TextArea label="Handoff Rules" value="Send the owner the lead summary, phone number, urgency level, last message, estimated value, and recommended next action." />
          </div>
          <Button className="mt-6">Save response settings</Button>
        </Panel>
        <Panel className="p-5">
          <div className="flex items-center gap-3">
            <ShieldAlert className="h-5 w-5 text-anchor-blue" />
            <h2 className="font-semibold">Industry Templates</h2>
          </div>
          <div className="mt-5 grid gap-3">
            {Object.entries(industryTemplates).map(([industry, template]) => (
              <details key={industry} className="rounded-lg border border-anchor-line p-4">
                <summary className="cursor-pointer text-sm font-semibold">{industry}</summary>
                <div className="mt-4 grid gap-4 text-sm">
                  <TemplateList title="Suggested services" items={template.services} />
                  <TemplateList title="Qualification questions" items={template.qualificationQuestions} />
                  <TemplateList title="Escalation rules" items={template.escalationRules} />
                  <TemplateList title="Common FAQs" items={template.faqs} />
                  <p className="text-anchor-steel"><span className="font-semibold text-anchor-ink">Booking/handoff logic:</span> {template.bookingLogic}</p>
                </div>
              </details>
            ))}
          </div>
        </Panel>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {sections.slice(8).map(([title, detail]) => (
          <Panel key={title} className="p-5">
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-anchor-steel">{detail}</p>
          </Panel>
        ))}
      </div>
    </div>
  );
}

function Field({ label, value, icon }: { label: string; value: string; icon?: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-anchor-ink">
      <span className="flex items-center gap-2">{icon}{label}</span>
      <input className="h-11 rounded-lg border border-anchor-line px-3 text-sm outline-none focus:border-anchor-blue" defaultValue={value} />
    </label>
  );
}

function TextArea({ label, value }: { label: string; value: string }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-anchor-ink">
      {label}
      <textarea className="min-h-36 rounded-lg border border-anchor-line p-3 text-sm outline-none focus:border-anchor-blue" defaultValue={value} />
    </label>
  );
}

function TemplateList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase text-anchor-steel">{title}</p>
      <ul className="mt-2 space-y-1 text-anchor-steel">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}
