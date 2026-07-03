"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Bot, Calculator, Gauge, Inbox, Plug, Settings } from "lucide-react";
import { clsx } from "clsx";

const nav = [
  [Gauge, "Dashboard", "/dashboard"],
  [Inbox, "Leads", "/dashboard/leads"],
  [Bot, "Response Settings", "/dashboard/agent"],
  [Calculator, "Calculator", "/dashboard/calculator"],
  [Plug, "Integrations", "/dashboard/integrations"],
  [Bell, "Notifications", "/dashboard/notifications"],
  [Settings, "Settings", "/dashboard/settings"]
] as const;

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-1 overflow-x-auto px-3 pb-3 lg:block lg:space-y-1 lg:overflow-visible">
      {nav.map(([Icon, label, href]) => {
        const isActive = href === "/dashboard" ? pathname === href : pathname.startsWith(href);

        return (
          <Link
            key={href}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={clsx(
              "flex shrink-0 items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition",
              isActive
                ? "bg-white/12 text-white ring-1 ring-white/10"
                : "text-slate-300 hover:bg-white/10 hover:text-white"
            )}
          >
            <Icon size={17} />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
