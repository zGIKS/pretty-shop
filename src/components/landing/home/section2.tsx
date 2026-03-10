"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { serviceCategories } from "@/data/service-categories";

export default function Section2() {
  return (
    <section className="bg-background py-8 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-start justify-between gap-8 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:p-16">
          <div className="w-full md:w-[45%]">
            <h2 className="mb-3 text-2xl font-bold text-primary md:mb-4 md:text-4xl">
              Pretty Studio
            </h2>
            <p className="mb-4 text-sm text-muted-foreground md:mb-6 md:text-lg">
              Descubre nuestras categorías de servicios y entra directo al
              tratamiento que buscas.
            </p>
            <Button asChild className="text-sm md:text-base">
              <Link href="/contacto">Contáctanos</Link>
            </Button>
          </div>

          <div className="flex w-full flex-col space-y-3 md:w-[55%] md:space-y-4">
            <h3 className="mb-2 text-primary md:mb-4 md:text-2xl">
              Servicios
            </h3>

            {serviceCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/servicios/${category.slug}`}
                className="flex items-center justify-between rounded-lg border border-primary/25 bg-primary/10 p-3 transition-colors hover:bg-primary/20 md:p-4"
              >
                <div>
                  <span className="block text-sm font-medium text-foreground md:text-lg">
                    {category.title}
                  </span>
                  <span className="block text-xs text-muted-foreground md:text-sm">
                    {category.summary}
                  </span>
                </div>
                <ArrowRight className="h-4 w-4 text-primary md:h-5 md:w-5" />
              </Link>
            ))}

            <Link
              href="/productos"
              className="flex items-center justify-between rounded-lg border border-primary/25 bg-primary/10 p-3 transition-colors hover:bg-primary/20 md:p-4"
            >
              <span className="text-sm font-medium text-foreground md:text-lg">
                Productos
              </span>
              <ArrowRight className="h-4 w-4 text-primary md:h-5 md:w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
