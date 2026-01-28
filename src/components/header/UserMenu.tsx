"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogIn, User, LogOut } from "lucide-react";

interface UserMenuProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

export function UserMenu({ isLoggedIn, onLogout }: UserMenuProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeTimeout = useRef<number | null>(null);

  return (
    <div className="pb-2">
      {isLoggedIn ? (
        <div
          className="relative"
          onMouseEnter={() => {
            if (closeTimeout.current) {
              window.clearTimeout(closeTimeout.current);
              closeTimeout.current = null;
            }
            setMenuOpen(true);
          }}
          onMouseLeave={() => {
            closeTimeout.current = window.setTimeout(() => {
              setMenuOpen(false);
            }, 200);
          }}
        >
          <Button variant="ghost" className="p-2" aria-label="Perfil">
            <User size={20} />
            <span className="sr-only">Perfil</span>
          </Button>
          <div
            className={`absolute right-0 top-full mt-1 flex w-40 flex-col rounded-lg border bg-white p-2 text-sm shadow-lg transition-opacity ${
              menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Link
              href="/settings"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-left transition hover:bg-muted"
            >
              <User size={16} />
              Configuración
            </Link>
            <button
              type="button"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-left text-red-600 transition hover:bg-muted hover:text-red-500"
              onClick={onLogout}
            >
              <LogOut size={16} />
              Cerrar sesión
            </button>
          </div>
        </div>
      ) : (
        <Button
          variant="default"
          className="flex items-center gap-2"
          asChild
        >
          <Link href="/login">
            <LogIn size={20} />
            Iniciar Sesión
          </Link>
        </Button>
      )}
    </div>
  );
}