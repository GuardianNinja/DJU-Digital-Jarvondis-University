// lib/roleHelpers.ts
import { useCurrentUser } from "./CurrentUserContext";

export function useIsSteward() {
  return useCurrentUser().hasRole("STEWARD");
}

export function useIsMissionLead() {
  return useCurrentUser().hasRole("MISSION_LEAD");
}

export function useIsMentor() {
  return useCurrentUser().hasRole("MENTOR");
}

export function useIsLearner() {
  return useCurrentUser().hasRole("LEARNER");
}
