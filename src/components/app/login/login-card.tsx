"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent, useCallback, useState } from "react";
import { GoogleLoginButton } from "./GoogleLoginButton";
import { PasswordInput } from "./PasswordInput";
import { LegalText } from "./LegalText";

export interface SignUpNotification {
  type: "success" | "destructive";
  title?: string;
  description: string;
}

interface LoginCardProps {
  onNotify: (notification: SignUpNotification | null) => void;
  isLogin?: boolean;
}

export default function LoginCard({ onNotify, isLogin = false }: LoginCardProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const startGoogleLogin = useCallback(() => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_GATEWAY}/api/v1/auth/google`;
  }, []);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onNotify(null);
      setIsSubmitting(true);

      if (!isLogin && password !== confirmPassword) {
        onNotify({
          type: "destructive",
          description: "Las contraseñas no coinciden.",
        });
        setIsSubmitting(false);
        return;
      }

      try {
        const endpoint = isLogin ? "/api/v1/auth/sign-in" : "/api/v1/auth/sign-up";
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data?.message ?? `Error al ${isLogin ? "iniciar sesión" : "registrarse"} con correo electrónico.`,
          );
        }

        if (isLogin) {
          // Store tokens
          localStorage.setItem("access_token", data.token);
          localStorage.setItem("refresh_token", data.refresh_token);
          // Redirect to home or dashboard
          window.location.href = "/";
        } else {
          onNotify({
            type: "success",
            description:
              data?.message ??
              "Revisa tu correo y confirma el enlace antes de iniciar sesión.",
          });
        }
      } catch (error) {
        onNotify({
          type: "destructive",
          description:
            error instanceof Error
              ? error.message
              : `Error desconocido al ${isLogin ? "iniciar sesión" : "registrarse"}.`,
        });
      } finally {
        setIsSubmitting(false);
      }
    },
    [email, password, confirmPassword, isLogin, onNotify],
  );
  return (
    <div className="relative w-full max-w-sm z-10">
      <div className="relative rounded-[32px] border px-6 py-8">
        <div className="space-y-6">
          <GoogleLoginButton onClick={startGoogleLogin} />

          <div className="flex items-center justify-center text-[11px] uppercase tracking-[0.4em]">
            O
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>

            <Input
              placeholder="Ingresa tu correo electrónico"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              maxLength={254}
              autoComplete="email"
            />

            <div className="relative">
              <PasswordInput
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={setPassword}
                autoComplete="new-password"
              />
            </div>

            {!isLogin && (
              <div className="relative">
                <PasswordInput
                  placeholder="Confirma tu contraseña"
                  value={confirmPassword}
                  onChange={setConfirmPassword}
                  autoComplete="new-password"
                />
              </div>
            )}

            <Button
              variant="default"
              className="w-full"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Procesando..."
                : isLogin
                ? "Iniciar sesión con correo electrónico"
                : "Continuar con correo electrónico"}
            </Button>

            <div className="text-center text-[12px]">
              <LegalText isLogin={isLogin} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
