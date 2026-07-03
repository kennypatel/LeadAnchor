import Link from "next/link";
import { RecoveryCalculator } from "@/components/calculator";
import { LeadInbox } from "@/components/lead-inbox";
import { StatCard, Panel } from "@/components/ui";
import { demoCompany, leads, metrics } from "@/lib/mock-data";
import { BrandLogo } from "@/components/brand-logo";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-anchor-mist text-anchor-ink">
      <header className="border-b border-anchor-line bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" aria-label="LeadAnchor home">
            <BrandLogo markClassName="h-8 w-8" textClassName="text-anchor-ink" />
          </Link>
          <div className="flex items-center gap-3">
            <span className="rounded-md bg-anchor-lime px-2 py-1 text-xs font-semibold text-green-900">{demoCompany.modeLabel}</span>
            <Link href="/signup" className="rounded-lg bg-anchor-blue px-4 py-2 text-sm font-semibold text-white">Request a Pilot</Link>
          </div>
        </div>
      </header>
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <section>
          <h1 className="text-3xl font-semibold">Summit Peak Roofing Demo</h1>
          <p className="mt-2 text-anchor-steel">A read-only sales demo showing dashboard KPIs, lead inbox preview, calculator, and example lead detail.</p>
        </section>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => <StatCard key={metric.label} {...metric} />)}
        </div>
        <LeadInbox preview />
        <RecoveryCalculator />
        <Panel className="p-5">
          <h2 className="text-lg font-semibold">Example Lead Detail</h2>
          <p className="mt-2 text-sm leading-6 text-anchor-steel">{leads[0].leadSummary}</p>
          <p className="mt-4 text-sm font-semibold text-anchor-ink">Recommended next action: {leads[0].nextAction}</p>
        </Panel>
      </div>
    </main>
  );
}
