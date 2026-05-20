// lib/hooks/useMission.ts
"use client";

import { useEffect, useState } from "react";
import { useJarvondisClient } from "../JarvondisClientContext";

export function useMission(id: string) {
  const client = useJarvondisClient();
  const [mission, setMission] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchMission = async () => {
    try {
      setLoading(true);
      const data = await client.getMission(id);
      setMission(data);
      setError(null);
    } catch (e: any) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMission();
  }, [id]);

  return { mission, loading, error, refetch: fetchMission };
}
