import { LeadInbox } from "@/components/lead-inbox";

export default function LeadsPage() {
  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-3xl font-semibold">Leads inbox</h1>
        <p className="mt-2 text-anchor-steel">Search, qualify, route, and close every opportunity from one revenue recovery workspace.</p>
      </div>
      <LeadInbox />
    </div>
  );
}
