import type { Metadata } from "next";

import Footer from "@/components/footer";
import { ServiceCategorySummaryCard } from "@/components/services/service-category-summary-card";
import { ServicesCatalogHero } from "@/components/services/services-catalog-hero";
import { ServicesPageShell } from "@/components/services/services-page-shell";
import { serviceCategories } from "@/data/service-categories";

export const metadata: Metadata = {
  title: "Servicios | Pretty Studio",
  description:
    "Explora las categorías de podología, tratamientos faciales y tratamientos corporales.",
};

export default function Servicios() {
  return (
    <>
      <ServicesPageShell>
        <ServicesCatalogHero />
        <section className="grid gap-5 lg:grid-cols-3">
          {serviceCategories.map((category) => (
            <ServiceCategorySummaryCard
              key={category.slug}
              category={category}
            />
          ))}
        </section>
      </ServicesPageShell>
      <Footer />
    </>
  );
}
