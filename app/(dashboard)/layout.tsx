// app/(dashboard)/layout.tsx
import { CurrentUserProvider } from "@/lib/CurrentUserContext";
import { JarvondisClientProvider } from "@/lib/JarvondisClientContext";

export default function DashboardLayout({ children }) {
  const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!;
  const token = ""; // from cookies/session
  const user = {
    id: "user-123",
    name: "CAPTAIN LEIF W. SOGGE",
    roles: ["MISSION_LEAD"] // or STEWARD, etc.
  };

  return (
    <JarvondisClientProvider endpoint={endpoint} token={token}>
      <CurrentUserProvider user={user}>
        {children}
      </CurrentUserProvider>
    </JarvondisClientProvider>
  );
}
