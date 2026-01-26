"use server";

import { parseBackendResponse } from "@/lib/iam/assemblers/google-auth-assembler";
import {
  AuthTokenPayload,
  TokenVerificationResponse,
} from "@/lib/iam/types";
import { IAM_BACKEND_URL } from "@/lib/env";

export async function exchangeCodeForToken(code: string): Promise<AuthTokenPayload> {
  const params = new URLSearchParams({ code });

  const response = await fetch(`${IAM_BACKEND_URL}/api/v1/auth/google/callback?${params.toString()}`, {
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
  const response = await fetch(`${IAM_BACKEND_URL}/api/v1/auth/verify?${params.toString()}`, {
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
  const response = await fetch(`${IAM_BACKEND_URL}/api/v1/auth/logout`, {
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
