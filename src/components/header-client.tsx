"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart } from "lucide-react";
import PrettyIcon from "@/components/icon/pretty";
import MobileHeaderMenu from "@/components/mobile-header-menu";
import { NavigationMenu } from "@/components/header/NavigationMenu";
import { useCart } from "@/lib/cart/cart-context";

interface HeaderProps {
  fixed?: boolean;
}

export default function HeaderClient({ fixed = true }: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();

  if (pathname === "/login" || pathname === "/register") {
    return null;
  }

  return (
    <div className={`${fixed ? "fixed top-0 left-0 right-0 z-50" : ""} shadow-md backdrop-blur-sm bg-white/95`}>
      <header className="max-w-7xl mx-auto flex items-center justify-between p-6">
        <Link href="/">
          <PrettyIcon className="w-18 h-16" />
        </Link>
        <NavigationMenu cartItemCount={totalItems} />
        <div className="md:hidden flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative" asChild>
            <Link href="/carrito" aria-label="Ver carrito">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </Button>
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

      <MobileHeaderMenu
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
