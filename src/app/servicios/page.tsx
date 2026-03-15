import type { Metadata } from "next";

import Footer from "@/components/footer";
import { ServiceCategorySummaryCard } from "@/components/services/service-category-summary-card";
import { ServicesCatalogHero } from "@/components/services/services-catalog-hero";
import { ServicesPageShell } from "@/components/services/services-page-shell";
import { getOrderedServiceCategories } from "@/data/service-categories";

export const metadata: Metadata = {
  title: "Servicios | Pretty Studio",
  description:
    "Explora las categorías de tratamientos faciales, tratamientos corporales y podología.",
};

export default function Servicios() {
  const orderedCategories = getOrderedServiceCategories();

  return (
    <>
      <ServicesPageShell>
        <ServicesCatalogHero />
        <section className="grid gap-5 lg:grid-cols-3">
          {orderedCategories.map((category) => (
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
