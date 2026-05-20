// lib/hooks/useMyMissions.ts
"use client";

import { useEffect, useState } from "react";
import { useJarvondisClient } from "../JarvondisClientContext";

export function useMyMissions(leadId: string) {
  const client = useJarvondisClient();
  const [missions, setMissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchMissions = async () => {
    try {
      setLoading(true);
      const data = await client.getMissionsByLead(leadId);
      setMissions(data);
      setError(null);
    } catch (e: any) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMissions();
  }, [leadId]);

  return { missions, loading, error, refetch: fetchMissions };
}
