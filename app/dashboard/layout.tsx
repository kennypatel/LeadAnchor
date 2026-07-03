import Link from "next/link";
import { DashboardNav } from "@/components/dashboard-nav";
import { demoCompany } from "@/lib/mock-data";
import { BrandLogo } from "@/components/brand-logo";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-anchor-mist text-anchor-ink lg:grid lg:grid-cols-[260px_1fr]">
      <aside className="border-b border-anchor-line bg-anchor-navy text-white lg:min-h-screen lg:border-b-0 lg:border-r lg:border-white/10">
        <div className="flex h-16 items-center justify-between px-5 lg:h-20">
          <Link href="/dashboard" aria-label="LeadAnchor dashboard">
            <BrandLogo markClassName="h-8 w-8" />
          </Link>
          <span className="rounded-md bg-anchor-green px-2 py-1 text-xs font-semibold">Pilot</span>
        </div>
        <DashboardNav />
        <div className="hidden p-4 lg:block">
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-semibold">Never miss another lead.</p>
            <p className="mt-2 text-xs leading-5 text-slate-300">9 leads need attention before close of business.</p>
          </div>
        </div>
      </aside>
      <div className="min-w-0">
        <header className="flex h-16 items-center justify-between border-b border-anchor-line bg-white px-4 sm:px-6 lg:h-20 lg:px-8">
          <div>
            <p className="text-sm font-semibold text-anchor-ink">{demoCompany.name}</p>
            <p className="text-xs text-anchor-steel">{demoCompany.location} · All lead sources monitored</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden rounded-md bg-anchor-lime px-2 py-1 text-xs font-semibold text-green-900 sm:inline-flex">{demoCompany.modeLabel}</span>
            <button className="hidden rounded-lg border border-anchor-line bg-white px-3 py-2 text-sm font-semibold text-anchor-ink sm:inline-flex">Reset Demo Data</button>
            <Link href="/dashboard/leads" className="rounded-lg bg-anchor-blue px-4 py-2 text-sm font-semibold text-white shadow-soft">Review hot leads</Link>
          </div>
        </header>
        <main className="p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
