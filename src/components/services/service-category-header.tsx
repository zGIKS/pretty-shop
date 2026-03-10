import type { ComponentType } from "react";
import Link from "next/link";
import { MessageCircle, Stethoscope } from "lucide-react";

import { BodyTreatment } from "@/components/icon/body-treatment";
import { FacialTreatment } from "@/components/icon/facial-treatment";
import { FootTreatment } from "@/components/icon/foot-treatment";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { ServiceCategory } from "@/data/service-categories";
import { getWhatsAppLink } from "@/lib/whatsapp";

const categoryIcons: Record<string, ComponentType<{ className?: string }>> = {
  podologia: FootTreatment,
  "tratamientos-faciales": FacialTreatment,
  "tratamientos-corporales": BodyTreatment,
};

type ServiceCategoryHeaderProps = {
  category: ServiceCategory;
};

export function ServiceCategoryHeader({ category }: ServiceCategoryHeaderProps) {
  const CategoryIcon = categoryIcons[category.slug];

  return (
    <Card className="border-border bg-card py-0 shadow-sm">
      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:p-10">
        <div className="space-y-5">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-muted text-muted-foreground">
            <CategoryIcon className="h-5 w-5" />
          </div>
          <div className="space-y-3">
            <h1 className="font-semibold sm:text-5xl">{category.title}</h1>
            <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
              {category.description}
            </p>
          </div>
        </div>

        <Card className="border-border bg-muted/40 py-0">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Stethoscope className="h-4 w-4" />
              Agenda o consulta disponibilidad
            </div>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Revisa los tratamientos de esta categoría y escribe directo por
              WhatsApp para confirmar evaluación, horarios o reserva.
            </p>
            <Button asChild className="mt-5 w-full sm:w-fit">
              <Link
                href={getWhatsAppLink(
                  `Hola, quiero información sobre ${category.title}.`
                )}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                Agendar
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </Card>
  );
}
