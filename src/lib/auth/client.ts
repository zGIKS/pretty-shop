import type { AuthError, AuthTokens, LoginPayload } from "./types";
import { clearTokens, readTokens, writeTokens } from "./storage";

const USERNAME_REGEX = /^[a-z0-9_.-]{3,32}$/;

export class AuthRequestError extends Error {
  status: number;
  code?: string;
  retryAfter?: string | null;

  constructor(message: string, status: number, code?: string, retryAfter?: string | null) {
    super(message);
    this.name = "AuthRequestError";
    this.status = status;
    this.code = code;
    this.retryAfter = retryAfter;
  }
}

const parseError = async (response: Response): Promise<AuthError | null> => {
  try {
    const data = (await response.json()) as AuthError;
    if (typeof data?.error === "string") return data;
    return null;
  } catch {
    return null;
  }
};

const toAuthError = async (response: Response, fallback: string) => {
  const payload = await parseError(response);
  const code = payload?.error;
  const retryAfter = response.headers.get("Retry-After");
  return new AuthRequestError(code ?? fallback, response.status, code, retryAfter);
};

export const validateLoginInput = (payload: LoginPayload) => {
  const username = payload.username.trim();
  if (!USERNAME_REGEX.test(username)) {
    throw new AuthRequestError("username format is invalid", 400, "username format is invalid");
  }

  if (payload.password.length < 12 || payload.password.length > 200) {
    throw new AuthRequestError("password format is invalid", 400, "password format is invalid");
  }
};

export const login = async (payload: LoginPayload): Promise<AuthTokens> => {
  validateLoginInput(payload);

  const response = await fetch("/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: payload.username.trim(),
      password: payload.password,
    }),
  });

  if (!response.ok) {
    throw await toAuthError(response, "failed to login");
  }

  const tokens = (await response.json()) as AuthTokens;
  writeTokens(tokens);
  return tokens;
};

export const refreshAccessToken = async (refreshToken?: string): Promise<AuthTokens> => {
  const source = refreshToken ?? readTokens()?.refresh_token;
  if (!source) {
    throw new AuthRequestError("invalid refresh token", 401, "invalid refresh token");
  }

  const response = await fetch("/api/v1/auth/refresh", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refresh_token: source }),
  });

  if (!response.ok) {
    clearTokens();
    throw await toAuthError(response, "failed to refresh token");
  }

  const tokens = (await response.json()) as AuthTokens;
  writeTokens(tokens);
  return tokens;
};

export const getAccessToken = () => readTokens()?.access_token;

export const getRefreshToken = () => readTokens()?.refresh_token;

export const logout = () => clearTokens();
