"use client";

import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { leadsBySource, revenueOverTime, statusFunnel } from "@/lib/mock-data";
import { currency } from "@/lib/calculator";

const colors = ["#2563eb", "#0ea5e9", "#18a957", "#84cc16", "#94a3b8"];

export function LeadsBySourceChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={leadsBySource}>
        <CartesianGrid stroke="#e8eef5" vertical={false} />
        <XAxis dataKey="source" tick={{ fontSize: 12, fill: "#5f7084" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 12, fill: "#5f7084" }} axisLine={false} tickLine={false} />
        <Tooltip cursor={{ fill: "#f4f8fb" }} />
        <Bar dataKey="leads" radius={[6, 6, 0, 0]}>
          {leadsBySource.map((entry, index) => (
            <Cell key={entry.source} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export function FunnelChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={statusFunnel} layout="vertical">
        <CartesianGrid stroke="#e8eef5" horizontal={false} />
        <XAxis type="number" hide />
        <YAxis type="category" dataKey="status" tick={{ fontSize: 12, fill: "#5f7084" }} axisLine={false} tickLine={false} width={76} />
        <Tooltip cursor={{ fill: "#f4f8fb" }} />
        <Bar dataKey="count" fill="#18a957" radius={[0, 6, 6, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={revenueOverTime}>
        <CartesianGrid stroke="#e8eef5" vertical={false} />
        <XAxis dataKey="week" tick={{ fontSize: 12, fill: "#5f7084" }} axisLine={false} tickLine={false} />
        <YAxis tickFormatter={(value) => `$${Number(value) / 1000}k`} tick={{ fontSize: 12, fill: "#5f7084" }} axisLine={false} tickLine={false} />
        <Tooltip formatter={(value) => currency(Number(value))} />
        <Line type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={3} dot={{ r: 4, fill: "#2563eb" }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
