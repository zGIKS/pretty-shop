"use server";

import { cookies } from "next/headers";
import HeaderClient from "@/components/header-client";
import { verifyToken } from "@/lib/iam/services/auth-service";

interface HeaderProps {
  fixed?: boolean;
}

export default async function Header({ fixed = true }: HeaderProps) {
  const cookieStore = await cookies();
  const token = cookieStore.get("authToken")?.value ?? null;
  let initialIsLoggedIn = false;

  if (token) {
    try {
      const verification = await verifyToken(token);
      initialIsLoggedIn = verification.is_valid;
    } catch {
      initialIsLoggedIn = false;
    }
  }

  return <HeaderClient fixed={fixed} initialIsLoggedIn={initialIsLoggedIn} />;
}
