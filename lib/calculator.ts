import type { CalculatorInput } from "@/lib/types";

export function calculateRecovery(input: CalculatorInput) {
  const missedLeads = input.monthlyLeadVolume * (input.missedLeadPercentage / 100);
  const monthlyLostRevenue = missedLeads * input.averageLeadValue * (input.currentCloseRate / 100);
  const speedPenalty = input.currentResponseTime > 30 ? 1.15 : input.currentResponseTime > 10 ? 1.05 : 1;
  const recoveredRevenue = monthlyLostRevenue * (input.improvedResponseRate / 100) * speedPenalty;
  const annualOpportunity = recoveredRevenue * 12;
  const monthlySubscriptionAssumption = 1200;
  const breakEvenPoint = monthlySubscriptionAssumption / Math.max(recoveredRevenue, 1);
  const roiMultiple = recoveredRevenue / monthlySubscriptionAssumption;

  return {
    missedLeads: Math.round(missedLeads),
    monthlyLostRevenue: Math.round(monthlyLostRevenue),
    recoveredRevenue: Math.round(recoveredRevenue),
    annualOpportunity: Math.round(annualOpportunity),
    breakEvenPoint,
    roiMultiple,
    report: `Recovering ${Math.round(input.improvedResponseRate)}% of missed opportunities could add about $${Math.round(
      recoveredRevenue
    ).toLocaleString()} per month before hiring another coordinator.`
  };
}

export function currency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}
