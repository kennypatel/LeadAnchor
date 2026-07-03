"use client";

import { useMemo, useState } from "react";
import { calculateRecovery, currency } from "@/lib/calculator";
import { Button, Panel } from "@/components/ui";
import { verticals } from "@/lib/config/verticals";

export function RecoveryCalculator({ compact = false }: { compact?: boolean }) {
  const [input, setInput] = useState({
    averageLeadValue: verticals.roofing.estimatedAverageJobValue,
    monthlyLeadVolume: compact ? 85 : 140,
    missedLeadPercentage: 24,
    currentResponseTime: 21,
    currentCloseRate: 31,
    improvedResponseRate: 62
  });

  const result = useMemo(() => calculateRecovery(input), [input]);

  const fields = [
    ["averageLeadValue", "Average job value", "$"],
    ["monthlyLeadVolume", "Monthly lead volume", ""],
    ["missedLeadPercentage", "Current missed lead rate", "%"],
    ["currentResponseTime", "Current response time", "min"],
    ["currentCloseRate", "Close rate", "%"],
    ["improvedResponseRate", "Expected improvement from faster response", "%"]
  ] as const;

  return (
    <Panel className="overflow-hidden">
      <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="p-5">
          <h3 className="text-lg font-semibold text-anchor-ink">Revenue recovery calculator</h3>
          <p className="mt-1 text-sm text-anchor-steel">Most businesses underestimate how expensive slow response really is.</p>
          <div className="mt-5 grid gap-4">
            {fields.map(([key, label, suffix]) => (
              <label key={key} className="grid gap-2 text-sm font-medium text-anchor-ink">
                {label}
                <div className="flex h-11 items-center rounded-lg border border-anchor-line bg-white px-3 focus-within:border-anchor-blue">
                  <span className="text-anchor-steel">{suffix === "$" ? "$" : ""}</span>
                  <input
                    className="min-w-0 flex-1 border-0 bg-transparent px-1 text-sm outline-none"
                    type="number"
                    value={input[key]}
                    onChange={(event) => setInput({ ...input, [key]: Number(event.target.value) })}
                  />
                  <span className="text-anchor-steel">{suffix === "%" ? "%" : suffix === "min" ? "min" : ""}</span>
                </div>
              </label>
            ))}
          </div>
        </div>
        <div className="bg-anchor-navy p-5 text-white">
          <p className="text-sm font-medium text-slate-300">Missed Lead Audit Summary</p>
          <div className="mt-5 grid gap-3">
            {[
              ["Estimated monthly lost revenue", result.monthlyLostRevenue],
              ["Estimated recovered revenue", result.recoveredRevenue],
              ["Annual revenue opportunity", result.annualOpportunity]
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-slate-300">{label}</p>
                <p className="mt-1 text-2xl font-semibold">{currency(Number(value))}</p>
              </div>
            ))}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-slate-300">Break-even point</p>
                <p className="mt-1 text-2xl font-semibold">{result.breakEvenPoint.toFixed(2)} mo</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-slate-300">ROI multiple</p>
                <p className="mt-1 text-2xl font-semibold">{result.roiMultiple.toFixed(1)}x</p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-300">{result.report}</p>
          {!compact && <Button className="mt-5 w-full bg-anchor-green hover:bg-green-700">Export audit summary</Button>}
        </div>
      </div>
    </Panel>
  );
}
