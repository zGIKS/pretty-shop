import type { AuthTokens } from "./types";

const STORAGE_KEY = "pretty_auth_tokens";

let memoryTokens: AuthTokens | null = null;

export const readTokens = (): AuthTokens | null => {
  if (memoryTokens) return memoryTokens;
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as AuthTokens;
    if (!parsed?.access_token || !parsed?.refresh_token) return null;
    memoryTokens = parsed;
    return parsed;
  } catch {
    return null;
  }
};

export const writeTokens = (tokens: AuthTokens) => {
  memoryTokens = tokens;
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tokens));
};

export const clearTokens = () => {
  memoryTokens = null;
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
};
