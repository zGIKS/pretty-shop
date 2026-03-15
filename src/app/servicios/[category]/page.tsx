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
  getServiceCategory,
  getResolvedServices,
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

  const services = getResolvedServices(category);

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

        {services.length > 0 ? (
          <section className="grid gap-x-6 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceTreatmentCard key={service.name} {...service} />
            ))}
          </section>
        ) : null}
      </ServicesPageShell>
      <Footer />
    </>
  );
}
