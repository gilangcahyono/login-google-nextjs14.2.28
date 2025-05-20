"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div style={{ textAlign: "center", marginTop: 100 }}>
      <h1>Login</h1>
      <button onClick={() => signIn("google", { callbackUrl: "/" })}>
        Login with Google
      </button>
    </div>
  );
}
