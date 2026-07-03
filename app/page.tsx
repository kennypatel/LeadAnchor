import { ArrowRight, Building2, CheckCircle2, Clock, PhoneCall, TrendingUp } from "lucide-react";
import Image from "next/image";
import { LinkButton, Panel, StatCard, StatusBadge } from "@/components/ui";
import { RecoveryCalculator } from "@/components/calculator";
import { leads, metrics } from "@/lib/mock-data";
import { currency } from "@/lib/calculator";
import { verticalList } from "@/lib/config/verticals";
import { BrandLogo } from "@/components/brand-logo";

export default function LandingPage() {
  return (
    <main className="bg-anchor-mist text-anchor-ink">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-anchor-navy/95 text-white backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#" aria-label="LeadAnchor home">
            <BrandLogo markClassName="h-8 w-8" />
          </a>
          <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#problem" className="hover:text-white">Problem</a>
            <a href="#works" className="hover:text-white">How It Works</a>
            <a href="#industries" className="hover:text-white">Industries</a>
            <a href="#pilot" className="hover:text-white">Pilot</a>
          </nav>
          <LinkButton href="/demo" variant="secondary" className="hidden border-white bg-white !text-anchor-navy hover:bg-slate-100 sm:inline-flex">View Demo Dashboard</LinkButton>
        </div>
      </header>

      <section className="border-b border-white/10 bg-anchor-navy px-4 py-3 text-center text-sm font-medium text-slate-300">
        Built for roofers, HVAC companies, law firms, med spas, dental practices, hotels, and service teams.
      </section>

      <section className="overflow-hidden bg-anchor-navy text-white">
        <div className="mx-auto grid min-h-[calc(100vh-188px)] max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-16">
          <div className="min-w-0 flex max-w-full flex-col justify-center">
            <div className="mb-8 hidden w-full max-w-[390px] overflow-hidden rounded-lg border border-white/10 bg-[#071421] shadow-[0_18px_55px_rgba(0,0,0,0.32)] sm:block sm:max-w-[430px]">
              <Image
                alt="LeadAnchor. Secure today, trust forever."
                className="h-auto w-full"
                height={224}
                priority
                src="/brand/logo-wordmark.png"
                width={720}
              />
            </div>
            <h1 className="max-w-[320px] break-words text-4xl font-semibold leading-[1.04] tracking-normal min-[430px]:max-w-[calc(100vw-3rem)] min-[430px]:text-5xl sm:max-w-3xl sm:text-6xl lg:text-7xl">
              <span className="block">Never miss</span>
              <span className="block">another lead.</span>
            </h1>
            <p className="mt-6 max-w-[340px] text-base leading-7 text-slate-300 min-[430px]:max-w-[calc(100vw-3rem)] sm:max-w-2xl sm:text-lg sm:leading-8">
              LeadAnchor captures calls, forms, texts, and quote requests, responds instantly, qualifies each opportunity, and helps your team book more appointments before customers call a competitor.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/signup" className="w-full max-w-[340px] bg-anchor-green hover:bg-green-700 sm:w-auto">Get a Free Missed Lead Audit</LinkButton>
              <LinkButton href="#works" variant="secondary" className="w-full max-w-[340px] border-white/15 bg-white/5 text-white hover:bg-white/10 sm:w-auto">See How It Works</LinkButton>
              <LinkButton href="/demo" variant="ghost" className="w-full max-w-[340px] text-white hover:bg-white/10 sm:w-auto">View Demo Dashboard</LinkButton>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["0:38", "avg response time"],
                ["36", "missed leads saved"],
                ["$128.6k", "recovered revenue"]
              ].map(([value, label]) => (
                <div key={label} className="border-l border-white/15 pl-4">
                  <p className="text-2xl font-semibold">{value}</p>
                  <p className="text-sm text-slate-300">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <HeroDashboard />
        </div>
      </section>

      <section id="problem" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-semibold">Revenue Leak Problem</h2>
            <p className="mt-4 text-lg leading-8 text-anchor-steel">
              Most businesses do not lose revenue because demand is missing. They lose revenue because calls, quote forms, texts, and after-hours inquiries are not handled fast enough.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              [PhoneCall, "Calls go unanswered", "Crews are in the field and office staff are already busy."],
              [Clock, "Follow-up is too slow", "Customers keep calling until someone books the job."],
              [TrendingUp, "Revenue goes untracked", "Owners rarely see the actual value of missed opportunities."]
            ].map(([Icon, title, text]) => (
              <Panel key={title as string} className="p-5">
                <Icon className="h-6 w-6 text-anchor-blue" />
                <h3 className="mt-5 font-semibold">{title as string}</h3>
                <p className="mt-2 text-sm leading-6 text-anchor-steel">{text as string}</p>
              </Panel>
            ))}
          </div>
        </div>
      </section>

      <section id="works" className="border-y border-anchor-line bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold">How LeadAnchor Works</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {[
              ["1", "Capture every inquiry", "Calls, forms, texts, chat, and email land in one recovery workflow."],
              ["2", "Respond instantly", "Every inquiry gets a fast, professional response while intent is high."],
              ["3", "Qualify the opportunity", "LeadAnchor collects service need, urgency, location, and booking readiness."],
              ["4", "Route or book the lead", "Hot, sensitive, or high-value opportunities are sent to the right person."],
              ["5", "Track recovered revenue", "Owners see saved leads, booked appointments, and estimated revenue recovered."]
            ].map(([step, title, text]) => (
              <Panel key={step} className="p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-anchor-navy text-sm font-semibold text-white">{step}</div>
                <h3 className="mt-5 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-anchor-steel">{text}</p>
              </Panel>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <RecoveryCalculator compact />
      </section>

      <section id="industries" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold">Industries Served</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {verticalList.map((vertical) => (
            <Panel key={vertical.id} className="p-5">
              <Building2 className="h-5 w-5 text-anchor-blue" />
              <h3 className="mt-4 font-semibold">{vertical.displayName}</h3>
              <p className="mt-3 text-xs font-semibold uppercase text-anchor-steel">Common missed lead type</p>
              <p className="mt-1 text-sm text-anchor-ink">{vertical.commonMissedLeadType}</p>
              <p className="mt-3 text-xs font-semibold uppercase text-anchor-steel">Typical urgency</p>
              <p className="mt-1 text-sm text-anchor-ink">{vertical.typicalUrgency}</p>
              <p className="mt-3 text-xs font-semibold uppercase text-anchor-steel">Why fast response matters</p>
              <p className="mt-1 text-sm leading-6 text-anchor-steel">{vertical.fastResponseReason}</p>
            </Panel>
          ))}
        </div>
      </section>

      <section className="border-y border-anchor-line bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-semibold">Live Dashboard Preview</h2>
            <p className="mt-4 text-lg leading-8 text-anchor-steel">Summit Peak Roofing can see captured inquiries, booked appointments, high-value leads, and revenue recovered from one command center.</p>
            <LinkButton href="/demo" className="mt-6 bg-anchor-green hover:bg-green-700">View Demo Dashboard</LinkButton>
          </div>
          <Panel className="p-5">
            <div className="grid grid-cols-2 gap-3">
              {metrics.slice(0, 4).map((metric) => <StatCard key={metric.label} {...metric} />)}
            </div>
          </Panel>
        </div>
      </section>

      <section id="pilot" className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <h2 className="text-3xl font-semibold">Prove the leak before you commit.</h2>
          <p className="mt-4 text-lg leading-8 text-anchor-steel">We start with a missed-lead audit, then run a focused pilot to show how many opportunities your business can recover with faster response and better follow-up.</p>
          <LinkButton href="/signup" className="mt-6 bg-anchor-green hover:bg-green-700">Request a Pilot</LinkButton>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {["Recovered after-hours leak calls", "Booked more roof inspections", "Created owner-ready recovery reporting", "Reduced slow follow-up risk"].map((text) => (
            <Panel key={text} className="flex items-start gap-3 p-5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-anchor-green" />
              <p className="font-semibold">{text}</p>
            </Panel>
          ))}
        </div>
      </section>

      <FAQ />

      <footer className="bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <BrandLogo markClassName="h-8 w-8" textClassName="text-anchor-ink" />
            <p className="text-sm text-anchor-steel">Revenue recovery software for businesses that cannot afford to miss leads.</p>
          </div>
          <LinkButton href="/signup">Get a Free Missed Lead Audit</LinkButton>
        </div>
      </footer>
    </main>
  );
}

function HeroDashboard() {
  return (
    <div className="min-w-0 flex items-center">
      <div className="min-w-0 w-full max-w-[calc(100vw-2rem)] overflow-hidden rounded-lg border border-white/10 bg-white p-4 text-anchor-ink shadow-panel sm:max-w-none">
        <div className="flex items-center justify-between border-b border-anchor-line pb-3">
          <div>
            <p className="text-sm font-semibold">Revenue recovery</p>
            <p className="text-xs text-anchor-steel">Summit Peak Roofing · Today</p>
          </div>
          <StatusBadge status="Connected" />
        </div>
        <div className="mt-4 grid grid-cols-1 gap-3 min-[430px]:grid-cols-2 lg:grid-cols-4">
          {metrics.slice(0, 4).map((metric) => (
            <div key={metric.label} className="min-w-0 rounded-lg bg-anchor-mist p-3">
              <p className="break-words text-xs text-anchor-steel">{metric.label}</p>
              <p className="mt-1 text-xl font-semibold">{metric.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 overflow-hidden rounded-lg border border-anchor-line">
          {leads.slice(0, 4).map((lead) => (
            <div key={lead.id} className="grid gap-2 border-b border-anchor-line p-3 last:border-b-0 sm:grid-cols-[1fr_auto] sm:gap-4">
              <div>
                <p className="text-sm font-semibold">{lead.name}</p>
                <p className="text-xs text-anchor-steel">{lead.serviceRequested} · {lead.source}</p>
              </div>
              <div className="sm:text-right">
                <StatusBadge status={lead.status} />
                <p className="mt-1 text-xs font-semibold text-anchor-green">{currency(lead.estimatedValue)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg bg-anchor-navy p-4 text-white">
          <div className="flex items-center justify-between">
            <p className="font-semibold">Recommended next action</p>
            <ArrowRight size={18} />
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-300">{leads[0].nextAction}</p>
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  const items = [
    ["What does LeadAnchor do?", "LeadAnchor captures inquiries, responds quickly, qualifies opportunities, routes urgent leads, and tracks estimated recovered revenue."],
    ["Is this a call center?", "No. It is a lead response system that helps your existing team catch and prioritize opportunities."],
    ["Can it work with my website forms?", "Yes. Website forms can send lead details into LeadAnchor through an API route or webhook."],
    ["Can it alert my team?", "Yes. Hot, urgent, or high-value leads can trigger team notifications by email, text, or connected workflows."],
    ["Can I review every lead?", "Yes. The lead inbox keeps every inquiry, status, timeline, notes, and recommended next action in one place."],
    ["What businesses is this best for?", "LeadAnchor is best for local service businesses where fast response turns into booked appointments and real revenue."],
    ["How does the 14-day pilot work?", "We start with a missed-lead audit, connect one or two lead sources, and measure captured opportunities, bookings, and recovered revenue."]
  ];

  return (
    <section className="bg-anchor-navy py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-semibold">FAQ</h2>
          <p className="mt-4 text-slate-300">Plain answers for owners who care about booked appointments.</p>
        </div>
        <div className="grid gap-4">
          {items.map(([question, answer]) => (
            <div key={question} className="border-b border-white/10 pb-4">
              <h3 className="font-semibold">{question}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
