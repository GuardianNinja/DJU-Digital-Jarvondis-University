// lib/hooks/useSafetyQueue.ts
"use client";

import { useEffect, useState } from "react";
import { useJarvondisClient } from "../JarvondisClientContext";

export function useSafetyQueue() {
  const client = useJarvondisClient();
  const [missions, setMissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchQueue = async () => {
    try {
      setLoading(true);
      const data = await client.getSafetyQueue();
      setMissions(data);
      setError(null);
    } catch (e: any) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQueue();
  }, []);

  return { missions, loading, error, refetch: fetchQueue };
}
