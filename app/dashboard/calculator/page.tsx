import { RecoveryCalculator } from "@/components/calculator";

export default function CalculatorPage() {
  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-3xl font-semibold">Revenue recovery calculator</h1>
        <p className="mt-2 text-anchor-steel">Most businesses underestimate how expensive slow response really is. Build a missed-lead audit summary a prospect can understand.</p>
      </div>
      <RecoveryCalculator />
    </div>
  );
}
