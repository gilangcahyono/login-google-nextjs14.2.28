"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  const handleLogin = () => signIn("google", { callbackUrl: "/" });

  return (
    <div className="login-container">
      {/* <h1>Login</h1> */}
      <button className="login-button" onClick={handleLogin}>
        Login with Google
      </button>
    </div>
  );
}
