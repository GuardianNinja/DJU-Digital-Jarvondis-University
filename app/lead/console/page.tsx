// app/lead/console/page.tsx
"use client";

import { useIsMissionLead } from "@/lib/roleHelpers";
import { useMyMissions } from "@/lib/hooks/useMyMissions";

export default function MissionLeadConsole() {
  const isLead = useIsMissionLead();
  const { missions } = useMyMissions("user-123");

  return (
    <div>
      <h1>Mission Lead Console</h1>

      {!isLead && (
        <p>You do not have permission to lead missions.</p>
      )}

      {isLead && (
        <ul>
          {missions.map(m => (
            <li key={m.id}>
              {m.title} — {m.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
