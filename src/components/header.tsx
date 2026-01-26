import HeaderClient from "@/components/header-client";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/iam/services/auth-service";

export default async function Header({ fixed = true }: { fixed?: boolean }) {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get("authToken")?.value;
  let initialIsLoggedIn = false;

  if (authCookie) {
    try {
      const verification = await verifyToken(authCookie);
      initialIsLoggedIn = Boolean(verification?.is_valid);
    } catch {
      initialIsLoggedIn = false;
    }
  }

  return <HeaderClient fixed={fixed} initialIsLoggedIn={initialIsLoggedIn} />;
}
