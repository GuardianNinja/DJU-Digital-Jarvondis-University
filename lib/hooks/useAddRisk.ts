// lib/hooks/useAddRisk.ts
"use client";

import { useState } from "react";
import { useJarvondisClient } from "../JarvondisClientContext";

export function useAddRisk() {
  const client = useJarvondisClient();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const addRisk = async (input: {
    missionId: string;
    category: string;
    severity: string;
    likelihood?: number;
    description: string;
  }) => {
    try {
      setLoading(true);
      await client.addRisk(input);
      setError(null);
    } catch (e: any) {
      setError(e);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  return { addRisk, loading, error };
}
