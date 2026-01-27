"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import PrettyIcon from "@/components/icon/pretty";
import MobileHeaderMenu from "@/components/mobile-header-menu";
import { useAuth } from "@/lib/hooks/useAuth";
import { NavigationMenu } from "@/components/header/NavigationMenu";

interface HeaderProps {
  fixed?: boolean;
  initialIsLoggedIn?: boolean;
}

export default function HeaderClient({
  fixed = true,
  initialIsLoggedIn = false,
}: HeaderProps) {
  const pathname = usePathname();

  if (pathname === "/login" || pathname === "/register") {
    return null;
  }

  const { isLoggedIn, handleLogout } = useAuth(initialIsLoggedIn);
  const [open, setOpen] = useState(false);
  const closeTimeout = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (closeTimeout.current) {
        window.clearTimeout(closeTimeout.current);
      }
    };
  }, []);

  return (
    <div className={`${fixed ? 'fixed top-0 left-0 right-0 z-50' : ''} shadow-md backdrop-blur-sm bg-white/95`}>
      <header className="max-w-7xl mx-auto flex items-center justify-between p-6">
        <Link href="/">
          <PrettyIcon className="w-18 h-16" />
        </Link>
        <NavigationMenu isLoggedIn={isLoggedIn} onLogout={handleLogout} />
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

      <MobileHeaderMenu
        open={open}
        onClose={() => setOpen(false)}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />
    </div>
  );
}
