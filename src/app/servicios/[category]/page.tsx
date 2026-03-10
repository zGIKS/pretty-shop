import type { Metadata } from "next";
import type { ComponentType } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle, Stethoscope } from "lucide-react";

import { BodyTreatment } from "@/components/icon/body-treatment";
import Footer from "@/components/footer";
import { FacialTreatment } from "@/components/icon/facial-treatment";
import { FootTreatment } from "@/components/icon/foot-treatment";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  getServiceCategory,
  serviceCategories,
} from "@/data/service-categories";
import { getWhatsAppLink } from "@/lib/whatsapp";

const categoryIcons: Record<string, ComponentType<{ className?: string }>> = {
  podologia: FootTreatment,
  "tratamientos-faciales": FacialTreatment,
  "tratamientos-corporales": BodyTreatment,
};

type PageProps = {
  params: Promise<{
    category: string;
  }>;
};

export async function generateStaticParams() {
  return serviceCategories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getServiceCategory(categorySlug);

  if (!category) {
    return {
      title: "Servicios | Pretty Studio",
    };
  }

  return {
    title: `${category.title} | Pretty Studio`,
    description: category.description,
  };
}

export default async function ServiceCategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const category = getServiceCategory(categorySlug);

  if (!category) {
    notFound();
  }

  const CategoryIcon = categoryIcons[category.slug];

  return (
    <>
      <main className="bg-background pt-40 pb-10 sm:pt-44 sm:pb-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
          <Button asChild variant="outline" className="w-fit">
            <Link href="/servicios">
              <ArrowLeft className="h-4 w-4" />
              Volver a categorías
            </Link>
          </Button>

          <Card className="border-border bg-card py-0 shadow-sm">
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:p-10">
              <div className="space-y-5">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-muted text-muted-foreground">
                  <CategoryIcon className="h-5 w-5" />
                </div>
                <div className="space-y-3">
                  <h1 className="font-semibold sm:text-5xl">
                    {category.title}
                  </h1>
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
                    Revisa los tratamientos de esta categoría y escribe directo
                    por WhatsApp para confirmar evaluación, horarios o reserva.
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
                      Consultar esta categoría
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </Card>

          {category.services ? (
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {category.services.map((service) => (
                <ServiceCard key={service.name} {...service} />
              ))}
            </section>
          ) : null}

          {category.subcategories ? (
            <section className="space-y-8">
              {category.subcategories.map((subcategory) => (
                <Card
                  key={subcategory.name}
                  className="border-border bg-card py-0 shadow-sm"
                >
                  <CardHeader className="p-6 pb-4 sm:p-8">
                    <CardTitle className="text-xl tracking-tight">
                      {subcategory.name}
                    </CardTitle>
                    <CardDescription>
                      Servicios disponibles dentro de esta subcategoría.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4 px-6 pb-6 sm:px-8 sm:pb-8 md:grid-cols-2 xl:grid-cols-3">
                    {subcategory.services.map((service) => (
                      <ServiceCard key={service.name} {...service} />
                    ))}
                  </CardContent>
                </Card>
              ))}
            </section>
          ) : null}
        </div>
      </main>
      <Footer />
    </>
  );
}

type ServiceCardProps = {
  name: string;
  price: string;
  description: string;
};

function ServiceCard({ name, price, description }: ServiceCardProps) {
  const isEvaluation = price.toLowerCase().includes("evaluación");

  return (
    <Card className="h-full border-border bg-muted/30 py-0">
      <CardHeader className="p-5 pb-3">
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-lg leading-6 tracking-tight">
            {name}
          </CardTitle>
          <span
            className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
              isEvaluation
                ? "bg-secondary text-secondary-foreground"
                : "bg-primary/10 text-primary"
            }`}
          >
            {price}
          </span>
        </div>
      </CardHeader>
      <CardContent className="p-5 pt-0">
        <p className="text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
