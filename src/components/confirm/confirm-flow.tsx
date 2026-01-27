"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type ConfirmationState = {
  status: "idle" | "loading" | "success" | "error";
  message: string;
};

type ConfirmFlowProps = {
  successRedirect?: string;
};

export default function ConfirmFlow({ successRedirect = "/register" }: ConfirmFlowProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");
  const [state, setState] = useState<ConfirmationState>(() => {
    if (!token) {
      return {
        status: "error",
        message: "Token faltante. Revisa el enlace que te enviamos.",
      };
    }
    return { status: "loading", message: "Verificando..." };
  });

  useEffect(() => {
    if (!token) {
      return;
    }
    let isActive = true;

    const verify = async () => {
      const response = await fetch(`/api/v1/identity/confirm-registration?token=${token}`, {
        cache: "no-store",
      });
      const result = await response.json();
      if (!isActive) return;

      if (response.ok && result.success) {
        setState({
          status: "success",
          message: "Cuenta confirmada. Redirigiendo...",
        });
        setTimeout(() => {
          router.replace(successRedirect);
        }, 2000);
        return;
      }

      setState({
        status: "error",
        message:
          result?.message ??
          "No se pudo confirmar la cuenta. Intenta registrarte nuevamente.",
      });
    };

    verify();
    return () => {
      isActive = false;
    };
  }, [token, router, successRedirect]);

  const textColor = state.status === "success" ? "text-green-600" : "text-red-600";

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-16">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Confirmación de cuenta</CardTitle>
        </CardHeader>
        <CardContent>
          <p className={`text-base ${textColor}`}>
            {state.message ||
              "Estamos verificando tu cuenta. Si esto tarda mucho, revisa el enlace del correo."}
          </p>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full">
            <Link href={state.status === "success" ? successRedirect : "/login"}>
              {state.status === "success" ? "Ir al login" : "Volver al login"}
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
