"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Gift, Star } from "lucide-react";
import { ServicesDropdown } from "./ServicesDropdown";
import { ProductsDropdown } from "./ProductsDropdown";

export function NavigationMenu() {
  return (
    <div className="hidden md:flex items-center gap-4">
      <ServicesDropdown />
      
      <div className="pb-2">
        <Button
          variant="ghost"
          className="flex items-center gap-2 hover:bg-transparent"
          asChild
        >
          <Link href="/membresias" className="hover:underline underline-offset-4">
            <Star size={20} />
            Membresías
          </Link>
        </Button>
      </div>

      <div className="pb-2">
        <Button
          variant="ghost"
          className="flex items-center gap-2 hover:bg-transparent"
          asChild
        >
          <Link href="/paquetes" className="hover:underline underline-offset-4">
            <Gift size={20} />
            Paquetes
          </Link>
        </Button>
      </div>

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
    </div>
  );
}
