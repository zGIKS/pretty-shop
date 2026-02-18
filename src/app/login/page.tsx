"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthRequestError, login } from "@/lib/auth";

const formatAuthError = (error: unknown) => {
  if (!(error instanceof AuthRequestError)) {
    return "Ocurrió un error al iniciar sesión.";
  }

  switch (error.code) {
    case "invalid json body":
      return "El formato enviado es inválido.";
    case "username format is invalid":
      return "El username debe tener entre 3 y 32 caracteres: letras minúsculas, números, _, . o -.";
    case "password format is invalid":
      return "La contraseña debe tener entre 12 y 200 caracteres.";
    case "invalid credentials":
      return "Credenciales inválidas.";
    case "too many login attempts":
    case "login temporarily locked":
      return error.retryAfter
        ? `Demasiados intentos. Intenta nuevamente en ${error.retryAfter} segundos.`
        : "Demasiados intentos. Intenta nuevamente más tarde.";
    case "failed to login":
      return "No se pudo iniciar sesión.";
    default:
      return error.message || "No se pudo iniciar sesión.";
  }
};

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const canSubmit = useMemo(() => username.trim().length > 0 && password.length > 0, [username, password]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setError(null);

    try {
      await login({ username, password });
      router.replace("/admin");
    } catch (submitError) {
      setError(formatAuthError(submitError));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <section className="w-full max-w-sm rounded-xl border border-border bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold tracking-tight">Iniciar sesión</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Ingresa tu nombre de usuario y contraseña.
        </p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="username">Nombre de usuario</Label>
            <Input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contrasenia">Contraseña</Label>
            <Input
              id="contrasenia"
              name="contrasenia"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          {error ? <p className="text-sm text-destructive">{error}</p> : null}

          <Button type="submit" className="w-full" disabled={!canSubmit || submitting}>
            {submitting ? "Ingresando..." : "Ingresar"}
          </Button>
        </form>
      </section>
    </main>
  );
}
