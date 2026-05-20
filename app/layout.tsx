// app/layout.tsx (or app/(dashboard)/layout.tsx)
import { JarvondisClientProvider } from "@/lib/JarvondisClientContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!;
  // token from cookies/session/etc.
  const token = ""; 

  return (
    <html lang="en">
      <body>
        <JarvondisClientProvider endpoint={endpoint} token={token}>
          {children}
        </JarvondisClientProvider>
      </body>
    </html>
  );
}
