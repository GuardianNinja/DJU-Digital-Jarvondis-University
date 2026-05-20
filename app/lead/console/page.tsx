// app/lead/console/page.tsx
"use client";

import { useMyMissions } from "@/lib/hooks/useMyMissions";

export default function MissionLeadConsole() {
  const leadId = "current-user-id"; // from auth/session
  const { missions, loading } = useMyMissions(leadId);

  if (loading) return <div>Loading your missions…</div>;

  return (
    <div>
      <h1>Mission Lead Console</h1>
      <section>
        <h2>My Missions</h2>
        <ul>
          {missions.map(m => (
            <li key={m.id}>
              {m.title} — {m.status} — {m.domain.name}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
