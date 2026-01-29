"use client";

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";

function GoogleCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    const refreshToken = searchParams.get("refresh_token");

    if (token) {
      // Store tokens in localStorage
      localStorage.setItem("access_token", token);
      if (refreshToken) {
        localStorage.setItem("refresh_token", refreshToken);
      }

      // Set cookie for authToken (as used in useAuth)
      document.cookie = `authToken=${encodeURIComponent(token)}; path=/; max-age=86400`; // 1 day

      // Redirect to home
      router.replace("/");
    } else {
      // If no token, redirect to login
      router.replace("/login");
    }
  }, [searchParams, router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Spinner size="lg" />
    </div>
  );
}

export default function GoogleCallbackPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <Spinner size="lg" />
      </div>
    }>
      <GoogleCallbackContent />
    </Suspense>
  );
}