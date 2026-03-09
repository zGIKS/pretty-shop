import type { Metadata } from "next";
import type { ReactNode } from "react";

import Header from "@/components/header";

import "./globals.css";

export const metadata: Metadata = {
  title: "Pretty Studio",
  description: "Pretty Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
