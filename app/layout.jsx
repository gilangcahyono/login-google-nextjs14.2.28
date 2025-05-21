"use client";

import { SessionProvider } from "next-auth/react";

export const metadata = {
  title: "Page",
  description: "Login Google di NextJS 14.2.28 dengan NextAuth.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
