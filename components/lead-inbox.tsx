"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Button, Panel, StatusBadge } from "@/components/ui";
import { leads as seedLeads } from "@/lib/mock-data";
import type { Lead, LeadStatus } from "@/lib/types";
import { currency } from "@/lib/calculator";

const statuses: Array<LeadStatus | "All"> = ["All", "New", "Responded", "Qualified", "Booked", "Needs Human", "Lost", "Won"];
const sources = ["All", "Missed call", "Website form", "Text message", "Chat", "Email", "After-hours call"];
const urgencies = ["All", "Low", "Normal", "High", "Emergency"];
const assignees = ["All", "Jason Miller", "Ari Lane", "Mina Patel", "Unassigned"];

export function LeadInbox({ preview = false }: { preview?: boolean }) {
  const [leads, setLeads] = useState(seedLeads);
  const [selectedId, setSelectedId] = useState(seedLeads[0].id);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");
  const [source, setSource] = useState("All");
  const [urgency, setUrgency] = useState("All");
  const [assigned, setAssigned] = useState("All");
  const [note, setNote] = useState(seedLeads[0].internalNotes);

  const filtered = useMemo(
    () =>
      leads.filter((lead) => {
        const matchesQuery = [lead.name, lead.email, lead.phone, lead.serviceRequested, lead.leadSummary]
          .join(" ")
          .toLowerCase()
          .includes(query.toLowerCase());
        return (
          matchesQuery &&
          (status === "All" || lead.status === status) &&
          (source === "All" || lead.source === source) &&
          (urgency === "All" || lead.urgency === urgency) &&
          (assigned === "All" || lead.assignedTeamMember === assigned)
        );
      }),
    [leads, query, status, source, urgency, assigned]
  );

  const selected = leads.find((lead) => lead.id === selectedId) ?? filtered[0] ?? leads[0];
  const visibleLeads = preview ? filtered.slice(0, 4) : filtered;

  function updateSelected(patch: Partial<Lead>) {
    setLeads((items) => items.map((lead) => (lead.id === selected.id ? { ...lead, ...patch } : lead)));
  }

  return (
    <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_420px]">
      <Panel className="overflow-hidden">
        {!preview && (
          <div className="border-b border-anchor-line p-4">
            <div className="grid gap-3 lg:grid-cols-[minmax(240px,1fr)_repeat(4,150px)]">
              <div className="flex h-10 items-center gap-2 rounded-lg border border-anchor-line bg-white px-3">
                <Search size={16} className="text-anchor-steel" />
                <input
                  className="min-w-0 flex-1 border-0 bg-transparent text-sm outline-none"
                  placeholder="Search name, phone, email, service"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </div>
              <Filter value={status} setValue={setStatus} options={statuses} />
              <Filter value={urgency} setValue={setUrgency} options={urgencies} />
              <Filter value={source} setValue={setSource} options={sources} />
              <Filter value={assigned} setValue={setAssigned} options={assignees} />
            </div>
          </div>
        )}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1120px] text-left text-sm">
            <thead className="bg-anchor-mist text-xs uppercase text-anchor-steel">
              <tr>
                {["Lead", "Source", "Service", "Urgency", "Status", "Response", "Value", "Assigned", "Follow-up"].map((heading) => (
                  <th key={heading} className="px-4 py-3 font-semibold">{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-anchor-line">
              {visibleLeads.map((lead) => (
                <tr
                  key={lead.id}
                  onClick={() => {
                    setSelectedId(lead.id);
                    setNote(lead.internalNotes);
                  }}
                  className={selected.id === lead.id ? "bg-blue-50/70" : "hover:bg-anchor-mist/70"}
                >
                  <td className="px-4 py-4">
                    <p className="font-semibold text-anchor-ink">{lead.name}</p>
                    <p className="text-xs text-anchor-steel">{lead.phone}</p>
                    <p className="text-xs text-anchor-steel">{lead.email}</p>
                  </td>
                  <td className="px-4 py-4"><SourceBadge source={lead.source} /></td>
                  <td className="px-4 py-4 text-anchor-ink">{lead.serviceRequested}</td>
                  <td className="px-4 py-4"><UrgencyBadge urgency={lead.urgency} /></td>
                  <td className="px-4 py-4"><StatusBadge status={lead.status} /></td>
                  <td className="px-4 py-4 font-semibold text-anchor-ink">{lead.responseTime}</td>
                  <td className="px-4 py-4 font-semibold text-anchor-ink">{currency(lead.estimatedValue)}</td>
                  <td className="px-4 py-4 text-anchor-steel">{lead.assignedTeamMember}</td>
                  <td className="px-4 py-4 text-anchor-steel">{lead.followUpStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>

      <Panel className="p-5">
        <div className="flex items-start justify-between gap-3 border-b border-anchor-line pb-4">
          <div>
            <p className="text-xs font-semibold text-anchor-steel">{selected.id}</p>
            <h2 className="mt-1 text-2xl font-semibold text-anchor-ink">{selected.name}</h2>
            <p className="mt-1 text-sm text-anchor-steel">{selected.serviceRequested}</p>
          </div>
          <StatusBadge status={selected.status} />
        </div>

        <div className="mt-5 grid gap-4 text-sm">
          <Info label="Lead Summary" value={selected.leadSummary} />
          <div>
            <p className="text-xs font-semibold uppercase text-anchor-steel">Qualification Details</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {selected.qualificationDetails.map((detail) => (
                <span key={detail} className="rounded-md bg-anchor-mist px-2 py-1 text-xs font-semibold text-anchor-ink">{detail}</span>
              ))}
            </div>
          </div>
          <Info label="Recommended Next Action" value={selected.nextAction} />
          <Info label="Contact Info" value={`${selected.phone} · ${selected.email}`} />
          <div className="grid grid-cols-2 gap-3">
            <Info label="Source" value={selected.source} />
            <Info label="Estimated Value" value={currency(selected.estimatedValue)} />
            <Info label="Urgency Level" value={selected.urgency} />
            <Info label="Response Status" value={selected.responseTime} />
            <Info label="Appointment Status" value={selected.appointmentStatus} />
            <Info label="Created" value={selected.createdDate} />
          </div>
        </div>

        <div className="mt-5 rounded-lg border border-anchor-line bg-anchor-mist p-4">
          <p className="text-xs font-semibold uppercase text-anchor-steel">Suggested Reply</p>
          <p className="mt-2 text-sm leading-6 text-anchor-ink">{selected.suggestedReply}</p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2">
          <Button variant="secondary" onClick={() => updateSelected({ status: "Responded", followUpStatus: "Responded" })}>Mark Responded</Button>
          <Button variant="secondary" onClick={() => updateSelected({ status: "Qualified", followUpStatus: "Qualified" })}>Mark Qualified</Button>
          <Button variant="secondary" onClick={() => updateSelected({ status: "Booked", appointmentStatus: "Booked", followUpStatus: "Appointment booked" })}>Mark Booked</Button>
          <Button onClick={() => updateSelected({ status: "Needs Human", followUpStatus: "Human review needed" })}>Needs Human Review</Button>
          <Button variant="secondary" onClick={() => updateSelected({ status: "Won", followUpStatus: "Closed won" })}>Mark Won</Button>
          <Button variant="secondary" onClick={() => updateSelected({ status: "Lost", followUpStatus: "Closed lost" })}>Mark Lost</Button>
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-semibold text-anchor-ink">Conversation Timeline</h3>
          <div className="mt-3 space-y-3">
            {selected.conversationTimeline.map((item) => (
              <Timeline key={`${item.timestamp}-${item.message}`} {...item} />
            ))}
          </div>
        </div>

        <div className="mt-6">
          <label className="text-sm font-semibold text-anchor-ink">Internal Notes</label>
          <textarea
            className="mt-2 min-h-24 w-full rounded-lg border border-anchor-line p-3 text-sm outline-none focus:border-anchor-blue"
            value={note}
            onChange={(event) => setNote(event.target.value)}
          />
          <Button className="mt-3 w-full" onClick={() => updateSelected({ internalNotes: note })}>Save note</Button>
        </div>
      </Panel>
    </div>
  );
}

function Filter({ value, setValue, options }: { value: string; setValue: (value: string) => void; options: readonly string[] }) {
  return (
    <select className="h-10 rounded-lg border border-anchor-line bg-white px-3 text-sm font-medium text-anchor-ink outline-none focus:border-anchor-blue" value={value} onChange={(event) => setValue(event.target.value)}>
      {options.map((option) => <option key={option}>{option}</option>)}
    </select>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase text-anchor-steel">{label}</p>
      <p className="mt-1 leading-6 text-anchor-ink">{value}</p>
    </div>
  );
}

function Timeline({ role, message, timestamp }: { role: string; message: string; timestamp: string }) {
  return (
    <div className="rounded-lg border border-anchor-line bg-white p-3">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-semibold text-anchor-steel">{role}</p>
        <p className="text-xs text-anchor-steel">{timestamp}</p>
      </div>
      <p className="mt-1 text-sm text-anchor-ink">{message}</p>
    </div>
  );
}

function UrgencyBadge({ urgency }: { urgency: string }) {
  const className = urgency === "Emergency"
    ? "bg-red-50 text-red-700"
    : urgency === "High"
      ? "bg-amber-50 text-amber-700"
      : "bg-slate-100 text-slate-700";
  return <span className={`inline-flex rounded-md px-2 py-1 text-xs font-semibold ${className}`}>{urgency}</span>;
}

function SourceBadge({ source }: { source: string }) {
  return <span className="inline-flex rounded-md bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-700">{source}</span>;
}
