"use client";

import { Card } from "@/components/ui/card";
import { FootTreatment } from "@/components/icon/foot-treatment";
import { FacialTreatment } from "@/components/icon/facial-treatment";
import { BodyTreatment } from "@/components/icon/body-treatment";
import Link from "next/link";

const featuredServices = [
  {
    href: "/servicios/tratamientos-faciales",
    title: "Tratamientos Faciales",
    Icon: FacialTreatment,
  },
  {
    href: "/servicios/tratamientos-corporales",
    title: "Tratamientos Corporales",
    Icon: BodyTreatment,
  },
  {
    href: "/servicios/podologia",
    title: "Podología",
    Icon: FootTreatment,
  },
] as const;

export default function Section4() {
  return (
    <section className="py-8 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredServices.map(({ href, title, Icon }) => (
            <Link key={href} href={href} className="block">
              <Card className="group flex flex-col items-center justify-center p-6 transition-colors cursor-pointer hover:bg-muted/40">
                <Icon className="mb-4 h-36 w-36 text-brand-rose transition-transform duration-300 group-hover:scale-110" />
                <h3>{title}</h3>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
