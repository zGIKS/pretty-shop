"use client";

import LoginCard from "@/components/app/login/login-card";
import LoginIconPanel from "@/components/app/login/login-icon-panel";

const legalText = (
  <>
    Al continuar, aceptas nuestra{" "}
    <a href="/privacy" className="underline">
      Política de Privacidad
    </a>{" "}
    y{" "}
    <a href="/terms" className="underline">
      Términos de Servicio
    </a>
    .
  </>
);

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="flex w-full max-w-5xl flex-col items-center gap-10 md:flex-row md:items-center md:justify-center md:gap-24">
        <LoginCard />
        <LoginIconPanel />
      </div>
    </div>
  );
}
