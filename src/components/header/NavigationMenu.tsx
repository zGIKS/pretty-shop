"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, ShoppingCart } from "lucide-react";
import { ServicesDropdown } from "./ServicesDropdown";
import { ProductsDropdown } from "./ProductsDropdown";
import { UserMenu } from "./UserMenu";

interface NavigationMenuProps {
  isLoggedIn: boolean;
  onLogout: () => void;
  cartItemCount?: number;
}

export function NavigationMenu({
  isLoggedIn,
  onLogout,
  cartItemCount = 0,
}: NavigationMenuProps) {
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
        <Button variant="ghost" className="relative p-2" aria-label="Carrito" asChild>
          <Link href="/carrito" className="inline-flex">
            {cartItemCount > 0 && (
              <span className="pointer-events-none absolute -top-1 -right-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-semibold text-white">
                {cartItemCount}
              </span>
            )}
            <ShoppingCart size={20} />
          </Link>
        </Button>
      </div>
      <UserMenu isLoggedIn={isLoggedIn} onLogout={onLogout} />
    </div>
  );
}
