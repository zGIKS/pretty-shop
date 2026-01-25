"use client";

import { Card } from "@/components/ui/card";
import { FootTreatment } from "@/components/icon/foot-treatment";
import { FacialTreatment } from "@/components/icon/facial-treatment";
import { BodyTreatment } from "@/components/icon/body-treatment";
import Link from "next/link";

export default function Section4() {
  return (
    <section className="py-8 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/servicios/faciales" className="block">
            <Card className="group flex flex-col items-center justify-center p-6 hover:bg-muted/40 transition-colors cursor-pointer">
              <FacialTreatment className="h-36 w-36 mb-4 text-[#D78589] group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold">Tratamientos Faciales</h3>
            </Card>
          </Link>
          <Link href="/servicios/corporales" className="block">
            <Card className="group flex flex-col items-center justify-center p-6 hover:bg-muted/40 transition-colors cursor-pointer">
              <BodyTreatment className="h-36 w-36 mb-4 text-[#D78589] group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold">Tratamientos Corporales</h3>
            </Card>
          </Link>
          <Link href="/servicios/podologia" className="block">
            <Card className="group flex flex-col items-center justify-center p-6 hover:bg-muted/40 transition-colors cursor-pointer">
              <FootTreatment className="h-36 w-36 mb-4 text-[#D78589] group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold">Podología</h3>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
}
