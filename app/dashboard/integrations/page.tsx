import { PlugZap } from "lucide-react";
import { Panel, StatusBadge, Button } from "@/components/ui";
import { integrations, leadSources } from "@/lib/mock-data";

export default function IntegrationsPage() {
  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-3xl font-semibold">Integrations</h1>
        <p className="mt-2 text-anchor-steel">Connect the places where new revenue starts. These setup actions are ready for the production integration flow.</p>
      </div>

      <Panel className="p-5">
        <h2 className="text-lg font-semibold">Lead Sources</h2>
        <p className="mt-1 text-sm text-anchor-steel">The channels LeadAnchor can monitor for missed lead recovery.</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {leadSources.map((source) => (
            <div key={source} className="rounded-lg border border-anchor-line bg-anchor-mist p-4 text-sm font-semibold">{source}</div>
          ))}
        </div>
      </Panel>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {integrations.map((integration) => (
          <Panel key={integration.name} className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-anchor-mist text-anchor-blue">
                  <PlugZap size={18} />
                </div>
                <div>
                  <h2 className="font-semibold">{integration.name}</h2>
                  <p className="mt-1 text-sm leading-6 text-anchor-steel">{integration.description}</p>
                </div>
              </div>
              <StatusBadge status={integration.status} />
            </div>
            <Button variant="secondary" className="mt-5 w-full">Setup</Button>
          </Panel>
        ))}
      </div>
    </div>
  );
}
