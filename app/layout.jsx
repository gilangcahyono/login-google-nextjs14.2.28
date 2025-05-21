"use client";

import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Page Title</title>
        <meta
          name="Page"
          content="Login Google di NextJS 14.2.28 dengan NextAuth.js"
        />
      </head>
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
