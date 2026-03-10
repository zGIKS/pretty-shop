import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import Footer from "@/components/footer";
import { ServiceCategoryHeader } from "@/components/services/service-category-header";
import { ServicesPageShell } from "@/components/services/services-page-shell";
import { ServiceTreatmentCard } from "@/components/services/service-treatment-card";
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

  return (
    <>
      <ServicesPageShell>
        <Button asChild variant="outline" className="w-fit">
          <Link href="/servicios">
            <ArrowLeft className="h-4 w-4" />
            Volver a categorías
          </Link>
        </Button>

        <ServiceCategoryHeader category={category} />

        {category.services ? (
          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {category.services.map((service) => (
              <ServiceTreatmentCard key={service.name} {...service} />
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
                    <ServiceTreatmentCard key={service.name} {...service} />
                  ))}
                </CardContent>
              </Card>
            ))}
          </section>
        ) : null}
      </ServicesPageShell>
      <Footer />
    </>
  );
}
