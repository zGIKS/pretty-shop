"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";

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
        </Link>
      </Button>
    </div>
  );
}
