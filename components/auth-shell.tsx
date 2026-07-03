import Link from "next/link";
import { Panel } from "@/components/ui";
import { BrandLogo } from "@/components/brand-logo";

export function AuthShell({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <main className="grid min-h-screen place-items-center bg-anchor-mist px-4">
      <Panel className="w-full max-w-md p-6">
        <Link href="/" aria-label="LeadAnchor home">
          <BrandLogo markClassName="h-8 w-8" textClassName="text-anchor-ink" />
        </Link>
        <h1 className="mt-8 text-3xl font-semibold text-anchor-ink">{title}</h1>
        <p className="mt-2 text-sm leading-6 text-anchor-steel">{subtitle}</p>
        <div className="mt-6">{children}</div>
      </Panel>
    </main>
  );
}
