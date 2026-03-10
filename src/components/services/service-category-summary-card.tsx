import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { ServiceCategory } from "@/data/service-categories";

type ServiceCategorySummaryCardProps = {
  category: ServiceCategory;
};

export function ServiceCategorySummaryCard({
  category,
}: ServiceCategorySummaryCardProps) {
  return (
    <Card className="group border-border bg-card py-0 transition hover:-translate-y-1 hover:shadow-md">
      <CardHeader className="p-6 pb-4">
        <p className="text-sm font-semibold uppercase tracking-label text-muted-foreground">
          Categoría
        </p>
        <CardTitle className="text-2xl tracking-tight">
          {category.title}
        </CardTitle>
        <CardDescription className="leading-6">
          {category.subtitle}
        </CardDescription>
      </CardHeader>
      <CardFooter className="px-6 pb-6 pt-5">
        <Button asChild variant="outline" className="w-full">
          <Link href={`/servicios/${category.slug}`}>
            Ver servicios
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
