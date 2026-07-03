import { AlertTriangle, CheckCircle2, Clock, TrendingUp } from "lucide-react";
import { LeadsBySourceChart, FunnelChart, RevenueChart } from "@/components/charts";
import { Panel, StatCard, StatusBadge } from "@/components/ui";
import { demoCompany, leads, metrics, priorityItems, recoveryFeed } from "@/lib/mock-data";
import { currency } from "@/lib/calculator";

export default function DashboardPage() {
  return (
    <div className="grid gap-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="mb-3 inline-flex rounded-md bg-anchor-lime px-2 py-1 text-xs font-semibold text-green-900">{demoCompany.modeLabel}</div>
          <h1 className="text-3xl font-semibold">Revenue Recovery Dashboard</h1>
          <p className="mt-2 text-anchor-steel">Track every inquiry, response, appointment, and recovered opportunity in one place.</p>
        </div>
        <StatusBadge status="Connected" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => <StatCard key={metric.label} {...metric} />)}
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <Panel className="p-5">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            <div>
              <h2 className="text-lg font-semibold">Today’s Priority</h2>
              <p className="text-sm text-anchor-steel">The leads and recovery moments the owner should see first.</p>
            </div>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {priorityItems.map((item) => (
              <div key={item.title} className="rounded-lg border border-anchor-line bg-anchor-mist p-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold text-anchor-ink">{item.title}</h3>
                  <span className="rounded-md bg-white px-2 py-1 text-xs font-semibold text-anchor-steel">{item.tone}</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-anchor-steel">{item.detail}</p>
              </div>
            ))}
          </div>
        </Panel>

        <Panel className="p-5">
          <div className="flex items-center gap-3">
            <TrendingUp className="h-5 w-5 text-anchor-green" />
            <div>
              <h2 className="text-lg font-semibold">Revenue Recovery Feed</h2>
              <p className="text-sm text-anchor-steel">Recent events from the follow-up engine.</p>
            </div>
          </div>
          <div className="mt-5 space-y-3">
            {recoveryFeed.map((event, index) => (
              <div key={event} className="flex gap-3 rounded-lg border border-anchor-line p-3">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-anchor-lime text-green-900">
                  {index % 2 === 0 ? <CheckCircle2 size={15} /> : <Clock size={15} />}
                </div>
                <div>
                  <p className="text-sm font-semibold text-anchor-ink">{event}</p>
                  <p className="text-xs text-anchor-steel">{index + 4} minutes ago</p>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <ChartPanel title="Leads by source"><LeadsBySourceChart /></ChartPanel>
        <ChartPanel title="Lead status funnel"><FunnelChart /></ChartPanel>
        <ChartPanel title="Revenue recovered over time"><RevenueChart /></ChartPanel>
      </div>

      <Panel className="overflow-hidden">
        <div className="border-b border-anchor-line p-5">
          <h2 className="text-lg font-semibold">Leads Needing Attention</h2>
          <p className="mt-1 text-sm text-anchor-steel">Urgent, sensitive, or high-value opportunities that should not wait.</p>
        </div>
        <div className="divide-y divide-anchor-line">
          {leads.filter((lead) => lead.status === "Needs Human" || lead.urgency === "High" || lead.urgency === "Emergency").map((lead) => (
            <div key={lead.id} className="grid gap-3 p-5 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-semibold">{lead.name}</p>
                  <StatusBadge status={lead.status} />
                  <span className="text-sm text-anchor-steel">{lead.urgency}</span>
                </div>
                <p className="mt-1 text-sm text-anchor-steel">{lead.leadSummary}</p>
              </div>
              <p className="font-semibold text-anchor-green">{currency(lead.estimatedValue)}</p>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}

function ChartPanel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Panel className="p-5">
      <h2 className="text-sm font-semibold text-anchor-ink">{title}</h2>
      <div className="mt-4">{children}</div>
    </Panel>
  );
}
