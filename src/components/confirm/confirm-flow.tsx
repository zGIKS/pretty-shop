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

export default function ConfirmFlow({ successRedirect = "/login" }: ConfirmFlowProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [state, setState] = useState<ConfirmationState>({
    status: "idle",
    message: "",
  });

  useEffect(() => {
    const token = searchParams.get("token");
    if (!token) {
      setState({
        status: "error",
        message: "Token faltante. Revisa el enlace que te enviamos.",
      });
      return;
    }

    setState({ status: "loading", message: "Verificando..." });

    const verify = async () => {
      const response = await fetch(`/api/v1/identity/confirm-registration?token=${token}`, {
        cache: "no-store",
      });
      const result = await response.json();
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
  }, [router, searchParams, successRedirect]);

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
