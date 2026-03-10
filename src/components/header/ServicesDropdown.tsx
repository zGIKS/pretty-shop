"use client";

import type { ComponentType } from "react";
import Link from "next/link";
import { Briefcase, ChevronDown } from "lucide-react";

import { BodyTreatment } from "@/components/icon/body-treatment";
import { FacialTreatment } from "@/components/icon/facial-treatment";
import { FootTreatment } from "@/components/icon/foot-treatment";
import { Button } from "@/components/ui/button";
import { serviceCategories } from "@/data/service-categories";

const categoryIcons: Record<string, ComponentType<{ className?: string }>> = {
  podologia: FootTreatment,
  "tratamientos-faciales": FacialTreatment,
  "tratamientos-corporales": BodyTreatment,
};

export function ServicesDropdown() {
  return (
    <div className="group relative pb-2">
      <Button
        asChild
        variant="ghost"
        className="flex items-center gap-2 hover:bg-transparent hover:underline underline-offset-4"
      >
        <Link href="/servicios">
          <Briefcase size={20} />
          Servicios
          <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
        </Link>
      </Button>

      <div className="pointer-events-none absolute left-0 top-full z-50 w-80 pt-3 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
        <div className="rounded-3xl border border-border bg-popover p-3 shadow-[0_24px_80px_-36px_rgba(28,25,23,0.45)]">
          <div className="space-y-1">
            {serviceCategories.map((category) => {
              const Icon = categoryIcons[category.slug];

              return (
                <Link
                  key={category.slug}
                  href={`/servicios/${category.slug}`}
                  className="flex items-start gap-3 rounded-2xl px-4 py-3 transition hover:bg-muted/50"
                >
                  <span className="rounded-full bg-muted p-2 text-foreground">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="space-y-1">
                    <span className="block text-sm font-semibold text-foreground">
                      {category.title}
                    </span>
                    <span className="block text-xs leading-5 text-muted-foreground">
                      {category.summary}
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
