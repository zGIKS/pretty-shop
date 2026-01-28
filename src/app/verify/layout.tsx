import type { ReactNode } from "react";

export default function VerifyLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}
