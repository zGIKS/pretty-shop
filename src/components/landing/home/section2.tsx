"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Section2() {
  return (
    <section className="py-8 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="bg-card border border-border rounded-lg p-6 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3 md:mb-4">Pretty Studio</h2>
            <p className="text-sm md:text-lg text-muted-foreground mb-4 md:mb-6">
              Descubre la belleza natural con nuestros productos premium de cuidado de la piel y cosméticos de alta calidad.
            </p>
            <Button className="text-sm md:text-base">Contáctanos</Button>
          </div>
          <div className="w-full md:w-1/2 flex flex-col space-y-3 md:space-y-4">
            <h3 className="text-lg md:text-2xl font-semibold text-primary mb-2 md:mb-4">Belleza y Cuidado</h3>
            <div className="flex items-center justify-between p-3 md:p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer">
              <span className="text-sm md:text-lg font-medium">Servicios</span>
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
            </div>
            <div className="flex items-center justify-between p-3 md:p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer">
              <span className="text-sm md:text-lg font-medium">Productos</span>
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}