"use client";

import { Sparkles, UserRound } from "lucide-react";
import { redirectToGoogleOAuth, logoutUser } from "@/lib/services";
import { getUserSession, removeUserSession } from "@/lib/session";
import { useEffect, useState } from "react";

export default function Header() {
  const [session, setSession] = useState<{ name: string } | null>(null);

  useEffect(() => {
    setSession(getUserSession());
  }, []);

  const handleLogout = async () => {
    await logoutUser();
    removeUserSession();
    setSession(null);
    window.location.reload();
  };

  return (
    <header className="sticky top-0 z-20 border-b border-white/70 bg-white/80 shadow-sm shadow-sky-100/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:gap-6 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/40">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-slate-500">
              Pretty Market
            </p>
            <p className="text-xl font-semibold text-slate-900">Tu tienda digital</p>
          </div>
        </div>

        <div className="w-full sm:flex-1">
          <input
            className="w-full rounded-2xl border border-slate-200 bg-white/80 py-3 px-4 text-sm font-medium text-slate-800 shadow-inner shadow-slate-100/80 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
            placeholder="Busca sneakers, audio, cuidado personal..."
            type="search"
          />
        </div>

        <div className="flex items-center justify-start gap-2 sm:w-auto sm:justify-end">
          {session ? (
            <>
              <span>Hola, {session.name}</span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-sky-300 hover:shadow"
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <button
              onClick={redirectToGoogleOAuth}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-sky-300 hover:shadow"
            >
              <UserRound className="h-5 w-5 text-slate-600" />
              <span>Iniciar sesión</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}