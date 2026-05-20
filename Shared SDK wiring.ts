// lib/jarvondisClient.ts
import { JarvondisClient } from "./sdk/client";

let singleton: JarvondisClient | null = null;

export function getJarvondisClient(endpoint: string, token?: string) {
  if (!singleton) {
    singleton = new JarvondisClient(endpoint, token);
  }
  return singleton;
}
