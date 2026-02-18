"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogIn, Mail } from "lucide-react";
import { ServicesDropdown } from "./ServicesDropdown";
import { ProductsDropdown } from "./ProductsDropdown";

export function NavigationMenu() {
  return (
    <div className="hidden md:flex items-center gap-4">
      <ServicesDropdown />
      <ProductsDropdown />
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
        <Button
          variant="ghost"
          className="hover:bg-transparent"
          asChild
        >
          <Link
            href="/login"
            className="inline-flex"
            aria-label="Iniciar sesión"
          >
            <LogIn size={20} />
          </Link>
        </Button>
      </div>
    </div>
  );
}
