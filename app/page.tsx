"use client";

import Header from "@/components/Header";
import { getCurrentUser } from "@/lib/services";
import { getUserSession, setUserSession } from "@/lib/session";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const localSession = getUserSession();

      if (localSession) {
        setUser(localSession);
        setLoading(false);
        return;
      }

      const userData = await getCurrentUser();

      if (userData) {
        setUserSession(userData);
        setUser(userData);
      }

      setLoading(false);
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-lg font-semibold text-slate-600">Cargando...</div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-white to-sky-50 text-slate-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-20 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl" />
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute left-1/3 bottom-0 h-72 w-72 rounded-full bg-indigo-200/40 blur-[120px]" />
      </div>

      <Header />

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {user ? (
          <div className="rounded-3xl border border-sky-200/60 bg-white/80 p-8 shadow-lg shadow-sky-100/50 backdrop-blur">
            <h1 className="mb-4 text-4xl font-bold text-slate-900">
              ¡Bienvenido, {user.name}!
            </h1>
            <p className="text-lg text-slate-600">
              Has iniciado sesión correctamente con {user.email}
            </p>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              Bienvenido a Pretty Market
            </h2>
            <p className="text-lg text-slate-600">
              Inicia sesión para continuar
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
