import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Playfair_Display, Geist_Mono } from "next/font/google";

import Header from "@/components/header";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pretty Studio",
  description:
    "Pretty Studio — Estética y podología en Surquillo, Lima. Tratamientos faciales, corporales y podológicos con productos de calidad profesional.",
  icons: {
    icon: "/ico.svg",
    shortcut: "/ico.svg",
    apple: "/ico.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${manrope.variable} ${playfairDisplay.variable} ${geistMono.variable}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
