"use server";

import { parseBackendResponse } from "@/lib/iam/assemblers/google-auth-assembler";
import {
  AuthTokenPayload,
  SignUpRequest,
  SignUpResponse,
  TokenVerificationResponse,
} from "@/lib/iam/types";

export async function exchangeCodeForToken(code: string): Promise<AuthTokenPayload> {
  const params = new URLSearchParams({ code });

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY}/api/v1/auth/google/callback?${params.toString()}`, {
    method: "GET",
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(
      `Error al intercambiar el código de Google: ${response.status} ${errorMessage}`,
    );
  }

  const payload = await response.json();
  return parseBackendResponse(payload);
}

export async function verifyToken(token: string): Promise<TokenVerificationResponse> {
  const params = new URLSearchParams({ token });
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY}/api/v1/auth/verify?${params.toString()}`, {
    method: "GET",
  });

  if (!response.ok && response.status !== 401) {
    const errorMessage = await response.text();
    throw new Error(
      `Error verificando el token en IAM: ${response.status} ${errorMessage}`,
    );
  }

  const payload = await response.json();
  return payload as TokenVerificationResponse;
}

export async function logout(refreshToken?: string): Promise<void> {
  const body = JSON.stringify({ refresh_token: refreshToken ?? "" });
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY}/api/v1/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Error al cerrar sesión: ${response.status} ${errorText}`);
  }
}

export async function signUp(payload: SignUpRequest): Promise<SignUpResponse> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY}/api/v1/auth/sign-up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const status = response.status;
    const errorText = await response.text();
    let parsedMessage: string | undefined;
    try {
      const parsed = JSON.parse(errorText);
      if (typeof parsed?.message === "string") {
        parsedMessage = parsed.message;
      }
    } catch {
      parsedMessage = undefined;
    }

    const message =
      status === 409
        ? parsedMessage ?? "El usuario ya existe."
        : parsedMessage ??
          `Error al registrarse: ${status} ${
            errorText ? errorText : response.statusText
          }`;
    throw new Error(message);
  }

  const data = await response.json();
  return data as SignUpResponse;
}

export async function signIn(payload: { email: string; password: string }): Promise<{ token: string; refresh_token: string }> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY}/api/v1/auth/sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const status = response.status;
    const errorText = await response.text();
    let parsedMessage: string | undefined;
    try {
      const parsed = JSON.parse(errorText);
      if (typeof parsed?.message === "string") {
        parsedMessage = parsed.message;
      }
    } catch {
      parsedMessage = undefined;
    }

    const message =
      status === 401
        ? parsedMessage ?? "Credenciales inválidas."
        : parsedMessage ??
          `Error al iniciar sesión: ${status} ${
            errorText ? errorText : response.statusText
          }`;
    throw new Error(message);
  }

  const data = await response.json();
  return data as { token: string; refresh_token: string };
}
