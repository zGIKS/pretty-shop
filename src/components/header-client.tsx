"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Package, Mail, Menu, Briefcase, ChevronDown, LogIn, User, LogOut } from "lucide-react";
import PrettyIcon from "@/components/icon/pretty";
import MobileHeaderMenu from "@/components/mobile-header-menu";

const SESSION_POLL_INTERVAL = 5 * 60 * 1000;
const ACCESS_TOKEN_COOKIE = "authToken";

interface HeaderProps {
  fixed?: boolean;
  initialIsLoggedIn?: boolean;
}

export default function HeaderClient({
  fixed = true,
  initialIsLoggedIn = false,
}: HeaderProps) {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/login" || pathname === "/register") {
    return null;
  }
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(initialIsLoggedIn);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeTimeout = useRef<number | null>(null);

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

  useEffect(() => {
    return () => {
      if (closeTimeout.current) {
        window.clearTimeout(closeTimeout.current);
      }
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

  return (
    <div className={`${fixed ? 'fixed top-0 left-0 right-0 z-50' : ''} shadow-md backdrop-blur-sm bg-white/95`}>
      <header className="max-w-7xl mx-auto flex items-center justify-between p-6">
        <Link href="/">
          <PrettyIcon className="w-18 h-16" />
        </Link>
         <div className="hidden md:flex items-center gap-4">
            <div className="relative group pb-2">
              <Button
                variant="ghost"
                className="flex items-center gap-2 hover:bg-transparent hover:underline underline-offset-4"
                asChild
              >
                <Link href="/servicios">
                  <Briefcase size={20} />
                  Servicios
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:-rotate-180" />
                </Link>
              </Button>
              <div className="absolute left-0 top-full hidden min-w-56 rounded-xl border border-border bg-background shadow-lg group-hover:block group-focus-within:block z-50">
                <div className="p-2 text-sm text-foreground">
                  <Link className="block rounded-lg px-3 py-2 hover:bg-muted hover:text-foreground" href="/servicios/faciales">
                    Tratamientos Faciales
                  </Link>
                  <Link className="block rounded-lg px-3 py-2 hover:bg-muted hover:text-foreground" href="/servicios/corporales">
                    Tratamientos Corporales
                  </Link>
                  <Link className="block rounded-lg px-3 py-2 hover:bg-muted hover:text-foreground" href="/servicios/podologia">
                    Podología
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group pb-2">
              <Button
                variant="ghost"
                className="flex items-center gap-2 hover:bg-transparent hover:underline underline-offset-4"
                asChild
              >
                <Link href="/productos">
                  <Package size={20} />
                  Productos
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:-rotate-180" />
                </Link>
              </Button>
              <div className="absolute left-0 top-full hidden min-w-64 rounded-xl border border-border bg-background shadow-lg group-hover:block group-focus-within:block z-50">
                <div className="p-2 text-sm text-foreground">
                  <Link className="block rounded-lg px-3 py-2 hover:bg-muted hover:text-foreground" href="/productos?category=Cuidado%20de%20la%20piel">
                    Cuidado de la piel
                  </Link>
                  <Link className="block rounded-lg px-3 py-2 hover:bg-muted hover:text-foreground" href="/productos?category=Rostro">
                    Rostro
                  </Link>
                  <Link className="block rounded-lg px-3 py-2 hover:bg-muted hover:text-foreground" href="/productos?category=Ojos">
                    Ojos
                  </Link>
                  <Link className="block rounded-lg px-3 py-2 hover:bg-muted hover:text-foreground" href="/productos?category=Labios">
                    Labios
                  </Link>
                  <Link className="block rounded-lg px-3 py-2 hover:bg-muted hover:text-foreground" href="/productos?category=Accesorios%20de%20belleza">
                    Accesorios de belleza
                  </Link>
                </div>
              </div>
            </div>

            <div className="pb-2">
              <Button
                variant="ghost"
                className="flex items-center gap-2 hover:bg-transparent"
                asChild
              >
                <Link href="/contacto" className="hover:underline underline-offset-4">
                  <Mail size={20} />
                  Contacto
                </Link>
              </Button>
            </div>

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
                      onClick={handleLogout}
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
         </div>
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            type="button"
            aria-label="Abrir menú"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <MobileHeaderMenu
        open={open}
        onClose={() => setOpen(false)}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />
    </div>
  );
}
