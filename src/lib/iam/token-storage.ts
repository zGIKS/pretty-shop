"use client";

export function getStoredAccessToken(): string | null {
  if (typeof window === "undefined") {
    return null;
  }

  const storageToken = window.localStorage.getItem("access_token");
  if (storageToken) {
    return storageToken;
  }

  if (typeof document !== "undefined") {
    const cookieToken = document.cookie
      .split(";")
      .map((cookie) => cookie.trim())
      .find((cookie) => cookie.startsWith("authToken="));

    if (cookieToken) {
      return decodeURIComponent(cookieToken.split("=")[1] ?? "");
    }
  }

  return null;
}
