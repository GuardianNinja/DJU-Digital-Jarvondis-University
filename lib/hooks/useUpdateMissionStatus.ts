// lib/hooks/useUpdateMissionStatus.ts
"use client";

import { useState } from "react";
import { useJarvondisClient } from "../JarvondisClientContext";

export function useUpdateMissionStatus() {
  const client = useJarvondisClient();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const updateStatus = async (id: string, status: string) => {
    try {
      setLoading(true);
      await client.updateMissionStatus(id, status);
      setError(null);
    } catch (e: any) {
      setError(e);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  return { updateStatus, loading, error };
}
