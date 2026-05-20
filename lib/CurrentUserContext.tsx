// lib/CurrentUserContext.tsx
"use client";

import React, { createContext, useContext, useMemo } from "react";

export type UserRole =
  | "STEWARD"
  | "MISSION_LEAD"
  | "MENTOR"
  | "LEARNER";

export type CurrentUser = {
  id: string;
  name: string;
  roles: UserRole[];
  hasRole: (role: UserRole) => boolean;
};

const CurrentUserContext = createContext<CurrentUser | null>(null);

export function CurrentUserProvider({
  user,
  children
}: {
  user: { id: string; name: string; roles: UserRole[] };
  children: React.ReactNode;
}) {
  const value: CurrentUser = useMemo(
    () => ({
      ...user,
      hasRole: (role: UserRole) => user.roles.includes(role)
    }),
    [user]
  );

  return (
    <CurrentUserContext.Provider value={value}>
      {children}
    </CurrentUserContext.Provider>
  );
}

export function useCurrentUser() {
  const ctx = useContext(CurrentUserContext);
  if (!ctx) throw new Error("useCurrentUser must be used inside CurrentUserProvider");
  return ctx;
}
