"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BodyTreatment as BodyTreatmentIcon } from "@/components/icon/body-treatment";

export default function BodyTreatment() {
  return (
    <div className="bg-card border border-border rounded-lg p-5 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div className="w-full md:w-1/2 flex items-center justify-center order-1 md:order-2">
        <BodyTreatmentIcon
          className="h-[8.25rem] w-[8.25rem] md:h-[13.5rem] md:w-[13.5rem] text-[#D78589]"
          aria-hidden="true"
        />
      </div>
      <div className="w-full md:w-1/2 order-2 md:order-1">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3 md:mb-4">
          Tratamientos Corporales
        </h2>
        <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
          Moldea, reafirma y relaja tu cuerpo con tratamientos pensados para
          mejorar tu bienestar y tu piel.
        </p>
        <Button asChild variant="outline" className="text-sm md:text-base">
          <Link href="/contacto">Ver más</Link>
        </Button>
      </div>
    </div>
  );
}
