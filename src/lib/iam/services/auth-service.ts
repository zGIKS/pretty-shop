"use server";

import { parseBackendResponse } from "@/lib/iam/assemblers/google-auth-assembler";
import { AuthTokenPayload } from "@/lib/iam/types";
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
