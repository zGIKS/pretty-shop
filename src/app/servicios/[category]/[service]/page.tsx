import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import Footer from "@/components/footer";
import { ServicesPageShell } from "@/components/services/services-page-shell";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { ServiceTreatmentCard } from "@/components/services/service-treatment-card";
import {
  getServiceCategory,
  getResolvedServices,
  serviceCategories,
} from "@/data/service-categories";
import { slugify } from "@/lib/utils";

type PageProps = {
  params: Promise<{
    category: string;
    service: string;
  }>;
};

export async function generateStaticParams() {
  const params: { category: string; service: string }[] = [];

  for (const category of serviceCategories) {
    const services = getResolvedServices(category);
    for (const service of services) {
      params.push({
        category: category.slug,
        service: slugify(service.name),
      });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category: categorySlug, service: serviceSlug } = await params;
  const category = getServiceCategory(categorySlug);

  if (!category) {
    return {
      title: "Servicio | Pretty Studio",
    };
  }

  const services = getResolvedServices(category);
  const service = services.find((s) => slugify(s.name) === serviceSlug);

  if (!service) {
    return {
      title: "Servicio | Pretty Studio",
    };
  }

  return {
    title: `${service.name} | ${category.title} | Pretty Studio`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { category: categorySlug, service: serviceSlug } = await params;
  const category = getServiceCategory(categorySlug);

  if (!category) {
    notFound();
  }

  const services = getResolvedServices(category);
  const service = services.find((s) => slugify(s.name) === serviceSlug);

  if (!service) {
    notFound();
  }

  const otherServices = services
    .filter((s) => slugify(s.name) !== serviceSlug)
    .slice(0, 2);

  const whatsappLink = getWhatsAppLink(`Hola, quiero agendar una cita para el servicio: ${service.name}`);

  return (
    <>
      <ServicesPageShell>
        <Button asChild variant="outline" className="w-fit">
          <Link href={`/servicios/${categorySlug}`}>
            <ArrowLeft className="h-4 w-4" />
            Volver a {category.title}
          </Link>
        </Button>

        <div className="grid gap-8 lg:grid-cols-2 items-start">
          {service.image ? (
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl bg-muted/40">
              <Image
                src={service.image}
                alt={service.name}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : null}
          <div className="flex h-full flex-col gap-4">
            <h1 className="text-3xl font-bold tracking-tight">{service.name}</h1>
            <p className="text-lg text-muted-foreground">{service.description}</p>
            {service.details && (
              <p className="text-base leading-relaxed text-muted-foreground">
                {service.details}
              </p>
            )}
            <Button asChild className="w-fit mt-4">
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Agendar Cita
              </Link>
            </Button>

            {otherServices.length > 0 && (
              <div className="mt-auto pt-10 pb-4">
                <h2 className="mb-4 text-xl font-semibold tracking-tight">
                  Descubre más servicios
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  {otherServices.map((other) => (
                    <div key={other.name} className="max-w-70">
                      <ServiceTreatmentCard
                        {...other}
                        href={`/servicios/${categorySlug}/${slugify(other.name)}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </ServicesPageShell>
      <Footer />
    </>
  );
}
