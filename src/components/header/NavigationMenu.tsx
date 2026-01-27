"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { ServicesDropdown } from "./ServicesDropdown";
import { ProductsDropdown } from "./ProductsDropdown";
import { UserMenu } from "./UserMenu";

interface NavigationMenuProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

export function NavigationMenu({ isLoggedIn, onLogout }: NavigationMenuProps) {
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
      <UserMenu isLoggedIn={isLoggedIn} onLogout={onLogout} />
    </div>
  );
}