// app/missions/[id]/MissionPage.tsx
import {
  useIsSteward,
  useIsMissionLead
} from "@/lib/roleHelpers";

export default function MissionPage({ missionId }) {
  const isSteward = useIsSteward();
  const isLead = useIsMissionLead();

  return (
    <div>
      <h1>{mission.title}</h1>

      {isLead && (
        <button onClick={() => updateStatus(mission.id, "UNDER_REVIEW")}>
          Submit for Steward Review
        </button>
      )}

      {isSteward && (
        <button onClick={() => recordDecision({...})}>
          Approve Mission
        </button>
      )}
    </div>
  );
}
