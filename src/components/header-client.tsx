"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import PrettyIcon from "@/components/icon/pretty";
import MobileHeaderMenu from "@/components/mobile-header-menu";
import { NavigationMenu } from "@/components/header/NavigationMenu";

interface HeaderProps {
  fixed?: boolean;
}

export default function HeaderClient({ fixed = true }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${fixed ? "fixed top-0 left-0 right-0 z-50" : ""} shadow-md backdrop-blur-sm bg-background/95`}>
      <header className="max-w-7xl mx-auto flex items-center justify-between p-6">
        <Link href="/">
          <PrettyIcon className="w-18 h-16" />
        </Link>
        <NavigationMenu />
        <div className="md:hidden flex items-center gap-2">
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
