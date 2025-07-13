"use client";

import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <button className="logout-button" onClick={() => signOut()}>
      Logout
    </button>
  );
};

export default LogoutButton;
