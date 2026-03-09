"use client";

import { useEffect } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import {
  X,
  Briefcase,
  Package,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PrettyIcon from "@/components/icon/pretty";
import { getWhatsAppLink } from "@/lib/whatsapp";

type MobileHeaderMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileHeaderMenu({
  open,
  onClose,
}: MobileHeaderMenuProps) {
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
    <div className="fixed inset-0 z-60 bg-white flex flex-col">
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
            <Link
              href="/servicios"
              onClick={onClose}
              className="w-full px-6 py-6 flex items-center justify-between"
            >
              <span className="flex items-center gap-3 text-lg font-semibold">
                <Briefcase className="h-5 w-5" />
                Servicios
              </span>
            </Link>

            <Link
              href="/productos"
              onClick={onClose}
              className="w-full px-6 py-6 flex items-center justify-between"
            >
              <span className="flex items-center gap-3 text-lg font-semibold">
                <Package className="h-5 w-5" />
                Productos
              </span>
            </Link>

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
        <Button className="w-full" asChild>
          <Link
            href={getWhatsAppLink("Hola, quiero comprar un producto.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
          >
            Comprar
          </Link>
        </Button>
      </div>
    </div>,
    document.body
  );
}
