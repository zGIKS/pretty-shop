"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Package, ChevronDown } from "lucide-react";

export function ProductsDropdown() {
  return (
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
  );
}