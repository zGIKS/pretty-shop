"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { X, ChevronDown, Briefcase, Package, Mail, LogIn, Phone, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import PrettyIcon from "@/components/icon/pretty";

type MobileHeaderMenuProps = {
  open: boolean;
  onClose: () => void;
  isLoggedIn?: boolean;
  onLogout?: () => void;
};

export default function MobileHeaderMenu({
  open,
  onClose,
  isLoggedIn = false,
  onLogout,
}: MobileHeaderMenuProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [open]);

  if (!open) return null;
  if (typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-[60] bg-white flex flex-col">
      <div className="max-w-7xl w-full mx-auto p-6 flex items-center justify-between">
        <Link href="/" onClick={onClose} aria-label="Ir al inicio">
          <PrettyIcon className="w-18 h-16" />
        </Link>
        <button
          type="button"
          onClick={onClose}
          className="rounded-md p-2 hover:bg-muted transition-colors"
          aria-label="Cerrar menú"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto border-t border-border">
        <div className="max-w-7xl w-full mx-auto">
          <div className="divide-y divide-border">
            <button
              type="button"
              className="w-full px-6 py-6 flex items-center justify-between text-left"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
            >
              <span className="flex items-center gap-3 text-lg font-semibold">
                <Briefcase className="h-5 w-5" />
                Servicios
              </span>
              <ChevronDown
                className={`h-5 w-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            {servicesOpen ? (
              <div className="px-6 pb-6">
                <div className="pt-6 pb-3 text-xs font-medium tracking-wide text-muted-foreground">
                  CATEGORÍAS
                </div>
                <div className="space-y-1">
                  <Link
                    className="block rounded-md px-3 py-3 text-base hover:bg-muted/60 transition-colors"
                    href="/servicios/faciales"
                    onClick={onClose}
                  >
                    Tratamientos Faciales
                  </Link>
                  <Link
                    className="block rounded-md px-3 py-3 text-base hover:bg-muted/60 transition-colors"
                    href="/servicios/corporales"
                    onClick={onClose}
                  >
                    Tratamientos Corporales
                  </Link>
                  <Link
                    className="block rounded-md px-3 py-3 text-base hover:bg-muted/60 transition-colors"
                    href="/servicios/podologia"
                    onClick={onClose}
                  >
                    Podología
                  </Link>
                </div>
                <div className="mt-4 border-t border-border pt-4">
                  <Link
                    className="block rounded-md px-3 py-3 text-sm text-foreground hover:bg-muted/60 transition-colors"
                    href="/servicios"
                    onClick={onClose}
                  >
                    Ver todos los servicios
                  </Link>
                </div>
              </div>
            ) : null}

            <button
              type="button"
              className="w-full px-6 py-6 flex items-center justify-between text-left"
              onClick={() => setProductsOpen((v) => !v)}
              aria-expanded={productsOpen}
            >
              <span className="flex items-center gap-3 text-lg font-semibold">
                <Package className="h-5 w-5" />
                Productos
              </span>
              <ChevronDown
                className={`h-5 w-5 transition-transform ${productsOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            {productsOpen ? (
              <div className="px-6 pb-6">
                <div className="pt-6 pb-3 text-xs font-medium tracking-wide text-foreground">
                  CATEGORÍAS
                </div>
                <div className="space-y-1">
                  <Link
                    className="block rounded-md px-3 py-3 text-base hover:bg-muted/60 transition-colors"
                    href={{ pathname: "/productos", query: { category: "Cuidado de la piel" } }}
                    onClick={onClose}
                  >
                    Cuidado de la piel
                  </Link>
                  <Link
                    className="block rounded-md px-3 py-3 text-base hover:bg-muted/60 transition-colors"
                    href={{ pathname: "/productos", query: { category: "Rostro" } }}
                    onClick={onClose}
                  >
                    Rostro
                  </Link>
                  <Link
                    className="block rounded-md px-3 py-3 text-base hover:bg-muted/60 transition-colors"
                    href={{ pathname: "/productos", query: { category: "Ojos" } }}
                    onClick={onClose}
                  >
                    Ojos
                  </Link>
                  <Link
                    className="block rounded-md px-3 py-3 text-base hover:bg-muted/60 transition-colors"
                    href={{ pathname: "/productos", query: { category: "Labios" } }}
                    onClick={onClose}
                  >
                    Labios
                  </Link>
                  <Link
                    className="block rounded-md px-3 py-3 text-base hover:bg-muted/60 transition-colors"
                    href={{ pathname: "/productos", query: { category: "Accesorios de belleza" } }}
                    onClick={onClose}
                  >
                    Accesorios de belleza
                  </Link>
                </div>
                <div className="mt-4 border-t border-border pt-4">
                  <Link
                    className="block rounded-md px-3 py-3 text-sm text-foreground hover:bg-muted/60 transition-colors"
                    href="/productos"
                    onClick={onClose}
                  >
                    Ver todos los productos
                  </Link>
                </div>
              </div>
            ) : null}

            <Link
              href="/contacto"
              onClick={onClose}
              className="w-full px-6 py-6 flex items-center justify-between"
            >
              <span className="flex items-center gap-3 text-lg font-semibold">
                <Mail className="h-5 w-5" />
                Contacto
              </span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="border-t border-border px-6 pb-8 pt-8 space-y-4 max-w-7xl w-full mx-auto">
        {isLoggedIn ? (
          <Button
            variant="default"
            className="w-full flex items-center gap-2 justify-center text-red-600 hover:text-red-500"
            onClick={() => {
              onClose();
              onLogout?.();
            }}
          >
            <LogOut className="h-5 w-5" />
            Cerrar sesión
          </Button>
        ) : (
          <Button
            variant="default"
            className="w-full flex items-center gap-2"
            asChild
          >
            <Link href="/login" onClick={onClose}>
              <LogIn className="h-5 w-5" />
              Iniciar Sesión
            </Link>
          </Button>
        )}
      </div>
    </div>
    ,
    document.body
  );
}
