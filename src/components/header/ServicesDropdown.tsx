"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Briefcase, ChevronDown } from "lucide-react";

export function ServicesDropdown() {
  return (
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
  );
}