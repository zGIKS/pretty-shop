"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Package } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ExperiencesDropdown } from "./ExperiencesDropdown";
import { ServicesDropdown } from "./ServicesDropdown";

interface NavItemProps {
  href: string;
  label: string;
  Icon: LucideIcon;
}

function NavItem({ href, label, Icon }: NavItemProps) {
  return (
    <div className="pb-2">
      <Button
        variant="ghost"
        className="flex items-center gap-2 hover:bg-transparent"
        asChild
      >
        <Link href={href} className="hover:underline underline-offset-4">
          <Icon size={20} />
          {label}
        </Link>
      </Button>
    </div>
  );
}

export function NavigationMenu() {
  return (
    <div className="hidden md:flex items-center gap-4">
      <ServicesDropdown />
      <ExperiencesDropdown />
      <NavItem href="/productos" label="Productos" Icon={Package} />
      <NavItem href="/contacto" label="Contacto" Icon={Mail} />
    </div>
  );
}
