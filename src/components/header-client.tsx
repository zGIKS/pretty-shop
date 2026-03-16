"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import MobileHeaderMenu from "@/components/mobile-header-menu";
import { NavigationMenu } from "@/components/header/NavigationMenu";
import Pretty from "@/components/icon/pretty/pretty";

interface HeaderProps {
  fixed?: boolean;
}

export default function HeaderClient({ fixed = true }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${fixed ? "fixed top-0 left-0 right-0 z-50" : ""} shadow-md backdrop-blur-sm bg-background/95`}>
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 sm:py-5">
        <Link href="/" aria-label="Ir al inicio">
          <Pretty
            size="md"
            className="shrink-0"
          />
        </Link>
        <NavigationMenu />
        <div className="flex items-center gap-2 md:hidden">
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
