import { clsx } from "clsx";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Button({
  className,
  variant = "primary",
  ...props
}: ComponentProps<"button"> & { variant?: "primary" | "secondary" | "ghost" }) {
  return (
    <button
      className={clsx(
        "focus-ring inline-flex h-10 items-center justify-center gap-2 rounded-lg px-4 text-sm font-semibold transition",
        variant === "primary" && "bg-anchor-blue text-white shadow-soft hover:bg-blue-700",
        variant === "secondary" && "border border-anchor-line bg-white text-anchor-ink hover:border-anchor-blue",
        variant === "ghost" && "text-anchor-steel hover:bg-white hover:text-anchor-ink",
        className
      )}
      {...props}
    />
  );
}

export function LinkButton({
  className,
  variant = "primary",
  ...props
}: ComponentProps<typeof Link> & { variant?: "primary" | "secondary" | "ghost" }) {
  return (
    <Link
      className={clsx(
        "focus-ring inline-flex h-10 items-center justify-center gap-2 rounded-lg px-4 text-sm font-semibold transition",
        variant === "primary" && "bg-anchor-blue text-white shadow-soft hover:bg-blue-700",
        variant === "secondary" && "border border-anchor-line bg-white text-anchor-ink hover:border-anchor-blue",
        variant === "ghost" && "text-anchor-steel hover:bg-white hover:text-anchor-ink",
        className
      )}
      {...props}
    />
  );
}

export function Panel({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <section className={clsx("rounded-lg border border-anchor-line bg-white shadow-soft", className)}>
      {children}
    </section>
  );
}

export function StatCard({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <Panel className="p-4">
      <p className="text-xs font-medium text-anchor-steel">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-anchor-ink">{value}</p>
      <p className="mt-1 text-xs text-anchor-steel">{detail}</p>
    </Panel>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    New: "bg-blue-50 text-blue-700",
    Responded: "bg-sky-50 text-sky-700",
    Qualified: "bg-emerald-50 text-emerald-700",
    Booked: "bg-green-100 text-green-800",
    "Needs Human": "bg-amber-50 text-amber-700",
    Lost: "bg-slate-100 text-slate-600",
    Won: "bg-anchor-lime text-green-900",
    Connected: "bg-emerald-50 text-emerald-700",
    "Not connected": "bg-slate-100 text-slate-600",
    "Coming soon": "bg-blue-50 text-blue-700"
  };

  return (
    <span className={clsx("inline-flex rounded-md px-2 py-1 text-xs font-semibold", styles[status] ?? "bg-slate-100 text-slate-700")}>
      {status}
    </span>
  );
}
