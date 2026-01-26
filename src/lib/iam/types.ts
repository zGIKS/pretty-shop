"use server";

export interface BackendGoogleAuthResponse {
  token: string;
  expiresAt?: string;
  refreshToken?: string;
  scope?: string;
}

export interface AuthTokenPayload {
  token: string;
  expiresAt?: string;
  refreshToken?: string;
}

export interface TokenVerificationResponse {
  is_valid: boolean;
  sub?: string;
  error?: string;
}
