"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FacialTreatment as FacialTreatmentIcon } from "@/components/icon/facial-treatment";

export default function FacialTreatment() {
  return (
    <div className="bg-card border border-border rounded-lg p-6 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
      <div className="w-full md:w-1/2 flex items-center justify-center order-1 md:order-2">
        <FacialTreatmentIcon
          className="h-[8.25rem] w-[8.25rem] md:h-[13.5rem] md:w-[13.5rem] text-[#D78589]"
          aria-hidden="true"
        />
      </div>
      <div className="w-full md:w-1/2 order-2 md:order-1">
        <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
          Tratamientos Faciales
        </h2>
        <p className="text-sm md:text-lg text-muted-foreground mb-4 md:mb-6">
          Spa para tu rostro. Descubre tratamientos premium para iluminar,
          hidratar y rejuvenecer tu piel con protocolos personalizados.
        </p>
        <Button asChild variant="outline" className="text-sm md:text-base">
          <Link href="/servicios/faciales">Ver más</Link>
        </Button>
      </div>
    </div>
  );
}
