"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Package, Mail, Menu, Briefcase, ChevronDown } from "lucide-react";
import PrettyIcon from "@/components/icon/pretty";
import MobileHeaderMenu from "@/components/mobile-header-menu";

export default function Header({ fixed = true }: { fixed?: boolean }) {
  const [open, setOpen] = useState(false);

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
                <div className="p-2 text-sm text-muted-foreground">
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
                <div className="p-2 text-sm text-muted-foreground">
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

      <MobileHeaderMenu open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
