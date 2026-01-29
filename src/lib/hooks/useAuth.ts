"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const SESSION_POLL_INTERVAL = 5 * 60 * 1000;
const ACCESS_TOKEN_COOKIE = "authToken";

export function useAuth(initialIsLoggedIn: boolean = false) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(initialIsLoggedIn);

  useEffect(() => {
    setIsLoggedIn(initialIsLoggedIn);
  }, [initialIsLoggedIn]);

  useEffect(() => {
    let isMounted = true;

    const getCookieValue = (name: string) => {
      if (typeof document === "undefined") return null;
      const value = document.cookie
        .split(";")
        .map((cookie) => cookie.trim())
        .find((cookie) => cookie.startsWith(`${name}=`));
      if (!value) return null;
      return decodeURIComponent(value.split("=")[1] ?? "");
    };

    const syncTokenFromCookie = () => {
      if (typeof window === "undefined") return null;

      const cookieToken = getCookieValue(ACCESS_TOKEN_COOKIE);
      if (cookieToken) {
        const currentStorageToken = localStorage.getItem("access_token");
        if (currentStorageToken !== cookieToken) {
          localStorage.setItem("access_token", cookieToken);
        }
        return cookieToken;
      }

      return localStorage.getItem("access_token");
    };

    const checkSession = async () => {
      const token = syncTokenFromCookie();
      if (!token) {
        setIsLoggedIn(false);
        return;
      }

      try {
        const response = await fetch("/api/v1/auth/verify?token=" + encodeURIComponent(token), {
          cache: "no-store",
        });
        if (!isMounted) return;

        if (!response.ok) {
          setIsLoggedIn(false);
          return;
        }

        const payload = await response.json();
        setIsLoggedIn(Boolean(payload?.is_valid));
      } catch {
        if (isMounted) setIsLoggedIn(false);
      }
    };

    checkSession();
    const intervalId = setInterval(checkSession, SESSION_POLL_INTERVAL);
    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, []);

  const handleLogout = useCallback(async () => {
    const refreshToken = localStorage.getItem("refresh_token");
    if (refreshToken) {
      await fetch("/api/v1/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh_token: refreshToken }),
      });
    }
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setIsLoggedIn(false);
    router.replace("/");
  }, [router]);

  return { isLoggedIn, handleLogout };
}