"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { FormEvent, useCallback, useState } from "react";
import { IAM_BACKEND_URL } from "@/lib/env";

console.log("🔗 API Swagger disponible en:", `${IAM_BACKEND_URL}/swagger-ui.html`);

const legalText = (isLogin: boolean) =>
  isLogin ? (
    <div className="space-y-1">
      <span>¿No tienes cuenta?</span>{" "}
      <a href="/register" className="underline">
        Regístrate
      </a>
    </div>
  ) : (
    <div className="space-y-1">
      <div>
        ¿Ya tienes una cuenta?{" "}
        <a href="/login" className="underline">
          Inicia sesión
        </a>
      </div>
      <div>
        Al continuar, aceptas nuestra{" "}
        <a href="/privacy" className="underline">
          Política de Privacidad
        </a>{" "}
        y{" "}
        <a href="/terms" className="underline">
          Términos de Servicio
        </a>
        .
      </div>
    </div>
  );

const GOOGLE_AUTH_URL = `${IAM_BACKEND_URL}/api/v1/auth/google`;

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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const startGoogleLogin = useCallback(() => {
    window.location.href = GOOGLE_AUTH_URL;
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
    [email, password, confirmPassword, isLogin],
  );
  return (
    <div className="relative w-full max-w-sm z-10">
      <div className="relative rounded-[32px] border px-6 py-8">
        <div className="space-y-6">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-full border px-4 py-3 text-base font-semibold"
            onClick={startGoogleLogin}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continuar con Google
          </button>

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
              <Input
                placeholder="Ingresa tu contraseña"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                maxLength={128}
                autoComplete="new-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>

            {!isLogin && (
              <div className="relative">
                <Input
                  placeholder="Confirma tu contraseña"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  maxLength={128}
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
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

            <div className="text-center text-[12px]">{legalText(isLogin)}</div>
          </form>
        </div>
      </div>
    </div>
  );
}
