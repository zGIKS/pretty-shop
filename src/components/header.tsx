"use server";

import HeaderClient from "@/components/header-client";

interface HeaderProps {
  fixed?: boolean;
}

export default async function Header({ fixed = true }: HeaderProps) {
  return <HeaderClient fixed={fixed} />;
}
