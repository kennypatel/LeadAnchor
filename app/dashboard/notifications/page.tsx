import { BellRing } from "lucide-react";
import { Panel } from "@/components/ui";
import { notifications } from "@/lib/mock-data";

export default function NotificationsPage() {
  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-3xl font-semibold">Notification center</h1>
        <p className="mt-2 text-anchor-steel">Prioritized alerts for hot leads, owner review, appointments, follow-up, and recovered opportunities.</p>
      </div>
      <Panel className="divide-y divide-anchor-line overflow-hidden">
        {notifications.map((notification) => (
          <div key={notification.title} className={notification.read ? "grid gap-4 bg-white p-5 md:grid-cols-[auto_1fr_auto] md:items-center" : "grid gap-4 bg-blue-50/70 p-5 md:grid-cols-[auto_1fr_auto] md:items-center"}>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-anchor-blue shadow-soft"><BellRing size={18} /></div>
            <div>
              <p className="text-sm font-semibold text-anchor-blue">{notification.type}</p>
              <h2 className="font-semibold">{notification.title}</h2>
              <p className="mt-1 text-sm text-anchor-steel">{notification.message}</p>
            </div>
            <span className={notification.read ? "text-sm text-anchor-steel" : "text-sm font-semibold text-anchor-green"}>{notification.read ? "Read" : "Unread"}</span>
          </div>
        ))}
      </Panel>
    </div>
  );
}
