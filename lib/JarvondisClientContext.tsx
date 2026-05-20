// lib/JarvondisClientContext.tsx
"use client";

import React, { createContext, useContext, useMemo } from "react";
import { JarvondisClient } from "./sdk/client";

type JarvondisClientContextValue = JarvondisClient;

const JarvondisClientContext = createContext<JarvondisClientContextValue | null>(null);

type Props = {
  endpoint: string;
  token?: string;
  children: React.ReactNode;
};

export function JarvondisClientProvider({ endpoint, token, children }: Props) {
  const client = useMemo(
    () => new JarvondisClient(endpoint, token),
    [endpoint, token]
  );

  return (
    <JarvondisClientContext.Provider value={client}>
      {children}
    </JarvondisClientContext.Provider>
  );
}

export function useJarvondisClient() {
  const ctx = useContext(JarvondisClientContext);
  if (!ctx) throw new Error("useJarvondisClient must be used within JarvondisClientProvider");
  return ctx;
}
