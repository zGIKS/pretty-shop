import { BackendGoogleAuthResponse, AuthTokenPayload } from "@/lib/iam/types";

export function parseBackendResponse(response: unknown): AuthTokenPayload {
  if (
    typeof response !== "object" ||
    response === null ||
    !("token" in response) ||
    typeof (response as BackendGoogleAuthResponse).token !== "string"
  ) {
    throw new Error("Respuesta inválida del backend de IAM.");
  }

  const payload: BackendGoogleAuthResponse = response as BackendGoogleAuthResponse;

  return {
    token: payload.token,
    expiresAt: payload.expiresAt,
    refreshToken: payload.refreshToken,
  };
}
