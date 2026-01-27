"use client";

import { Suspense } from "react";
import ConfirmFlow from "@/components/confirm/confirm-flow";

export default function VerifyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Verificando...</div>}>
      <ConfirmFlow successRedirect="/login" />
    </Suspense>
  );
}
