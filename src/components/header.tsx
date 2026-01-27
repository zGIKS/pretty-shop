"use client";

import { usePathname } from "next/navigation";
import HeaderClient from "@/components/header-client";

export default function Header({ fixed = true }: { fixed?: boolean }) {
  const pathname = usePathname();
  if (pathname === "/login" || pathname === "/register") return null;

  return <HeaderClient fixed={fixed} />;
}
