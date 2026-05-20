// app/steward/dashboard/page.tsx
"use client";

import { useSafetyQueue } from "@/lib/hooks/useSafetyQueue";
import { useMission } from "@/lib/hooks/useMission";
import { useRecordDecision } from "@/lib/hooks/useRecordDecision";

export default function StewardDashboard() {
  const { missions, loading } = useSafetyQueue();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { mission } = useMission(selectedId ?? "");
  const { recordDecision } = useRecordDecision();

  if (loading) return <div>Loading safety queue…</div>;

  return (
    <div className="grid grid-cols-3 gap-6">
      <section className="col-span-1">
        <h1>Safety Queue</h1>
        <ul>
          {missions.map(m => (
            <li key={m.id}>
              <button onClick={() => setSelectedId(m.id)}>
                {m.title} — {m.domain.name}
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="col-span-2">
        {mission ? (
          <div>
            <h2>{mission.title}</h2>
            {/* show risks, declarations, clauses, etc. */}
            <button
              onClick={() =>
                recordDecision({
                  missionId: mission.id,
                  type: "REVIEW",
                  outcome: "APPROVED",
                  date: new Date().toISOString(),
                  clauseIds: mission.charterClauses.map((c: any) => c.id),
                  stewardId: "current-steward-id"
                }).then(() => {
                  // optionally refetch queue
                })
              }
            >
              Approve Mission
            </button>
          </div>
        ) : (
          <div>Select a mission from the queue.</div>
        )}
      </section>
    </div>
  );
}
