"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { Briefcase, ChevronDown, Mail, Package, X } from "lucide-react";
import { usePathname } from "next/navigation";

import Pretty from "@/components/icon/pretty/pretty";
import { getOrderedServiceCategories } from "@/data/service-categories";
import { categoryIcons } from "@/lib/category-icons";

type MobileHeaderMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileHeaderMenu({
  open,
  onClose,
}: MobileHeaderMenuProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const orderedCategories = getOrderedServiceCategories();
  const pathname = usePathname();

  const handleClose = () => {
    setServicesOpen(false);
    onClose();
  };

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  if (!open) return null;
  if (typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-60 flex flex-col bg-background">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-6 sm:py-5">
        <Link href="/" onClick={handleClose} aria-label="Ir al inicio">
          <Pretty
            size="md"
            className="shrink-0"
          />
        </Link>
        <button
          type="button"
          onClick={handleClose}
          className="rounded-md p-2 transition-colors hover:bg-muted"
          aria-label="Cerrar menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto border-t border-border">
        <div className="mx-auto w-full max-w-7xl divide-y divide-border">
          <div className="px-5 py-2 sm:px-6">
            <div className="flex items-center gap-3 py-4">
              <Link
                href="/servicios"
                onClick={handleClose}
                className="flex min-w-0 flex-1 items-center gap-3 text-lg font-semibold"
              >
                <Briefcase className="h-5 w-5" />
                Servicios
              </Link>
              <button
                type="button"
                onClick={() => setServicesOpen((current) => !current)}
                aria-expanded={servicesOpen}
                aria-controls="mobile-service-categories"
                aria-label={
                  servicesOpen
                    ? "Ocultar categorías de servicios"
                    : "Mostrar categorías de servicios"
                }
                className="rounded-md border border-border p-2 transition-colors hover:bg-muted"
              >
                <ChevronDown
                  className={`h-5 w-5 transition ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            <div
              id="mobile-service-categories"
              className={`grid overflow-hidden transition-all duration-200 ${
                servicesOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0">
                {orderedCategories.map((category) => {
                  const Icon = categoryIcons[category.slug];

                  return (
                    <Link
                      key={category.slug}
                      href={`/servicios/${category.slug}`}
                      onClick={handleClose}
                      aria-current={pathname === `/servicios/${category.slug}` ? "page" : undefined}
                      className="flex items-start gap-3 py-3"
                    >
                      <span className="rounded-full border border-border p-2 text-foreground">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-foreground">
                          {category.title}
                        </span>
                        <span className="block text-xs leading-5 text-muted-foreground">
                          {category.summary}
                        </span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <Link
            href="/productos"
            onClick={handleClose}
            className="flex w-full items-center justify-between px-5 py-6 sm:px-6"
          >
            <span className="flex items-center gap-3 text-lg font-semibold">
              <Package className="h-5 w-5" />
              Productos
            </span>
          </Link>

          <Link
            href="/contacto"
            onClick={handleClose}
            className="flex w-full items-center justify-between px-5 py-6 sm:px-6"
          >
            <span className="flex items-center gap-3 text-lg font-semibold">
              <Mail className="h-5 w-5" />
              Contacto
            </span>
          </Link>
        </div>
      </nav>
    </div>,
    document.body
  );
}
