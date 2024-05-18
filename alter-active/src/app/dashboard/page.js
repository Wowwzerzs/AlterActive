"use client";
import React from "react";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();

  /*if (status === "authenticated") {
    return <p>Signed in as {session.user.email}</p>;
  }

  return <a href="/api/auth/signin">Sign in</a>; */

  return (
    <div className="bg-black">
      <h1>Dashboard: signed in as {session.user.email} </h1>
    </div>
  );
}
