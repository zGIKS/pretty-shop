import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getWhatsAppLink } from "@/lib/whatsapp";

const packages = [
  {
    title: "Paquete de Ozono",
    price: "S/ 360",
    description: "Ideal para la oxigenación y revitalización celular.",
    features: ["12 sesiones de Ozono"],
    whatsappMessage: "Hola, me gustaría más información sobre el Paquete de Ozono por S/ 360.",
  },
  {
    title: "Paquete de Desintoxicación Iónica",
    price: "S/ 400",
    description: "Ayuda a eliminar toxinas y mejorar la circulación.",
    features: ["10 sesiones de Desintoxicación Iónica"],
    whatsappMessage: "Hola, me gustaría más información sobre el Paquete de Desintoxicación Ionica por S/ 400.",
  },
  {
    title: "Paquete de Peeling Facial",
    price: "S/ 530",
    description: "Tratamiento intensivo para renovar y aclarar la piel.",
    features: [
      "4 sesiones de Peeling Facial",
      "Protector Solar incluido",
      "Crema Despigmentante incluida",
    ],
    whatsappMessage: "Hola, me gustaría más información sobre el Paquete de Peeling Facial por S/ 530.",
  },
];

export function PackagesSection() {
  return (
    <section className="space-y-12 py-12 md:py-20">
      <SectionHeader
        subtitle="Promociones"
        title="Nuestros Paquetes"
        description="Aprovecha nuestras promociones exclusivas en paquetes de tratamiento diseñados para brindarte los mejores resultados."
      />

      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {packages.map((pkg) => (
          <Card
            key={pkg.title}
            className="relative flex h-full flex-col overflow-hidden border-border/70 bg-card py-0 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <CardHeader className="px-8 pb-6 pt-10 text-center">
              <CardTitle className="text-2xl font-semibold mb-2">{pkg.title}</CardTitle>
              <div className="mt-4 flex items-baseline justify-center gap-x-1">
                <span className="text-5xl font-bold tracking-tight">{pkg.price}</span>
              </div>
              <CardDescription className="mt-4 text-base">
                {pkg.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="grow px-8 pb-8">
              <ul className="space-y-4">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3 items-center">
                    <CheckCircle2 className="h-5 w-5 flex-none text-primary" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="mt-auto px-8 pb-8">
              <Button asChild className="h-11 w-full text-base">
                <Link
                  href={getWhatsAppLink(pkg.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar Paquete
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
