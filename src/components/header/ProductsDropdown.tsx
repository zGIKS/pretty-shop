"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";

export function ProductsDropdown() {
  return (
    <div className="pb-2">
      <Button
        variant="ghost"
        className="flex items-center gap-2 hover:bg-transparent hover:underline underline-offset-4"
        asChild
      >
        <Link href="/productos">
          <Package size={20} />
          Productos
        </Link>
      </Button>
    </div>
  );
}