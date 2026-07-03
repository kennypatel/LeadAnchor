import { Button, Panel } from "@/components/ui";
import { demoCompany } from "@/lib/mock-data";

export default function SettingsPage() {
  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-3xl font-semibold">Settings</h1>
        <p className="mt-2 text-anchor-steel">Manage company details, team access, notifications, billing, webhooks, and security.</p>
      </div>
      <div className="grid gap-5 xl:grid-cols-2">
        <SettingsPanel title="Company Profile" fields={[
          ["Company name", demoCompany.name],
          ["Industry", demoCompany.industry],
          ["Service area", demoCompany.location],
          ["Website", "https://summitpeakroofing.example"]
        ]} />
        <SettingsPanel title="Team Members" fields={[
          ["Owner", "Jason Miller"],
          ["Dispatcher", "Ari Lane"],
          ["Estimator", "Mina Patel"]
        ]} />
        <SettingsPanel title="Notification Preferences" fields={[
          ["Hot lead alerts", "Text and email"],
          ["Daily recovery summary", "Enabled"],
          ["Failed follow-up alerts", "Enabled"]
        ]} />
        <SettingsPanel title="Billing" fields={[
          ["Plan", "Pilot"],
          ["Billing email", "billing@summitpeak.example"],
          ["Stripe customer ID", "Placeholder"]
        ]} />
        <SettingsPanel title="API / Webhook" fields={[
          ["Public webhook URL", "https://leadanchor.app/api/leads"],
          ["Signing secret", "••••••••••••"],
          ["Webhook status", "Ready"]
        ]} />
        <SettingsPanel title="Security" fields={[
          ["Role access", "Owner, dispatcher, estimator"],
          ["Session protection", "Supabase Auth"],
          ["Data scoping", "Company-level row security"]
        ]} />
      </div>
    </div>
  );
}

function SettingsPanel({ title, fields }: { title: string; fields: Array<[string, string]> }) {
  return (
    <Panel className="p-5">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-5 grid gap-3">
        {fields.map(([field, value]) => (
          <label key={field} className="grid gap-2 text-sm font-medium text-anchor-ink">
            {field}
            <input className="h-11 rounded-lg border border-anchor-line px-3 text-sm outline-none focus:border-anchor-blue" defaultValue={value} />
          </label>
        ))}
      </div>
      <Button variant="secondary" className="mt-4">Save</Button>
    </Panel>
  );
}
