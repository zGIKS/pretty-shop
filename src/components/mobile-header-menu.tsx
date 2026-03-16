"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { Briefcase, CreditCard, Mail, Package, Plus, Minus, Sparkles, X } from "lucide-react";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";

import Pretty from "@/components/icon/pretty/pretty";
import { getOrderedServiceCategories } from "@/data/service-categories";
import { categoryIcons } from "@/lib/category-icons";

type MobileHeaderMenuProps = {
  open: boolean;
  onClose: () => void;
};

interface MobileNavLinkProps {
  href: string;
  label: string;
  Icon: LucideIcon;
  onClick: () => void;
  pathname: string;
}

function MobileNavLink({ href, label, Icon, onClick, pathname }: MobileNavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={pathname === href ? "page" : undefined}
      className="flex w-full items-center gap-3 px-5 py-6 text-lg font-semibold sm:px-6"
    >
      <Icon className="h-5 w-5" />
      {label}
    </Link>
  );
}

export default function MobileHeaderMenu({
  open,
  onClose,
}: MobileHeaderMenuProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [experiencesOpen, setExperiencesOpen] = useState(false);
  const orderedCategories = getOrderedServiceCategories();
  const pathname = usePathname();

  const handleClose = () => {
    setServicesOpen(false);
    setExperiencesOpen(false);
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
          <Pretty size="md" className="shrink-0" />
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
          {/* Servicios con sub-categorías desplegables */}
          <div className="px-5 py-2 sm:px-6">
            <div className="flex items-center gap-3 py-4">
              <Link
                href="/servicios"
                onClick={handleClose}
                aria-current={pathname === "/servicios" ? "page" : undefined}
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
                className="p-2 text-muted-foreground transition-colors hover:bg-muted rounded-md"
              >
                {servicesOpen ? (
                  <Minus className="h-6 w-6" strokeWidth={1.5} />
                ) : (
                  <Plus className="h-6 w-6" strokeWidth={1.5} />
                )}
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
                  const href = `/servicios/${category.slug}`;
                  return (
                    <Link
                      key={category.slug}
                      href={href}
                      onClick={handleClose}
                      aria-current={pathname === href ? "page" : undefined}
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

          <div className="px-5 py-2 sm:px-6">
            <div className="flex items-center gap-3 py-4">
              <Link
                href="/membresias"
                onClick={handleClose}
                aria-current={pathname === "/membresias" || pathname === "/paquetes" ? "page" : undefined}
                className="flex min-w-0 flex-1 items-center gap-3 text-lg font-semibold"
              >
                <Sparkles className="h-5 w-5" />
                Experiencias
              </Link>
              <button
                type="button"
                onClick={() => setExperiencesOpen((current) => !current)}
                aria-expanded={experiencesOpen}
                aria-controls="mobile-experience-links"
                aria-label={
                  experiencesOpen
                    ? "Ocultar experiencias"
                    : "Mostrar experiencias"
                }
                className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted"
              >
                {experiencesOpen ? (
                  <Minus className="h-6 w-6" strokeWidth={1.5} />
                ) : (
                  <Plus className="h-6 w-6" strokeWidth={1.5} />
                )}
              </button>
            </div>

            <div
              id="mobile-experience-links"
              className={`grid overflow-hidden transition-all duration-200 ${
                experiencesOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0 space-y-4">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Membresías
                  </p>
                  <Link href="/membresias" onClick={handleClose} className="flex items-center gap-2 py-1 text-sm font-semibold text-foreground">
                    <CreditCard className="h-4 w-4 text-primary" />
                    Membresías
                  </Link>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Paquetes
                  </p>
                  <Link href="/paquetes" onClick={handleClose} className="block py-1 text-sm font-semibold text-foreground">
                    Paquete Ozono
                  </Link>
                  <Link href="/paquetes" onClick={handleClose} className="block py-1 text-sm font-semibold text-foreground">
                    Paquete Desintoxicación Iónica
                  </Link>
                  <Link href="/paquetes" onClick={handleClose} className="block py-1 text-sm font-semibold text-foreground">
                    Paquete Peeling Facial
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <MobileNavLink href="/productos" label="Productos" Icon={Package} onClick={handleClose} pathname={pathname} />
          <MobileNavLink href="/contacto" label="Contacto" Icon={Mail} onClick={handleClose} pathname={pathname} />
        </div>
      </nav>
    </div>,
    document.body
  );
}
