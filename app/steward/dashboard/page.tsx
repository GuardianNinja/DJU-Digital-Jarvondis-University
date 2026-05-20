// app/steward/dashboard/page.tsx
"use client";

import { useIsSteward } from "@/lib/roleHelpers";
import { useSafetyQueue } from "@/lib/hooks/useSafetyQueue";

export default function StewardDashboard() {
  const isSteward = useIsSteward();
  const { missions } = useSafetyQueue();

  if (!isSteward) {
    return <div>You must be a Steward to access this dashboard.</div>;
  }

  return (
    <div>
      <h1>Steward Council Dashboard</h1>
      <ul>
        {missions.map(m => (
          <li key={m.id}>{m.title} — {m.domain.name}</li>
        ))}
      </ul>
    </div>
  );
}
