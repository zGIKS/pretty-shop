import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    title: "Paquete de Desintoxicación Ionica",
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
      "Protector Solar incluído",
      "Crema Despigmentante incluída",
    ],
    whatsappMessage: "Hola, me gustaría más información sobre el Paquete de Peeling Facial por S/ 530.",
  },
];

export function PackagesSection() {
  return (
    <section className="space-y-12 py-12 md:py-20">
      <div className="text-center w-full flex flex-col items-center">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-foreground mb-4">
          Promociones
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
          Nuestros Paquetes
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Aprovecha nuestras promociones exclusivas en paquetes de tratamiento
          diseñados para brindarte los mejores resultados.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {packages.map((pkg, index) => (
          <Card key={index} className="flex flex-col h-full bg-background relative overflow-hidden transition-all hover:shadow-md border border-muted/50">
            <CardHeader className="text-center pb-8 pt-10">
              <CardTitle className="text-2xl font-semibold mb-2">{pkg.title}</CardTitle>
              <div className="mt-4 flex items-baseline justify-center gap-x-1">
                <span className="text-5xl font-bold tracking-tighter">{pkg.price}</span>
              </div>
              <CardDescription className="mt-4 text-base px-2">
                {pkg.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="flex-grow px-8 pb-8">
              <ul className="space-y-4">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex gap-x-3 items-center">
                    <CheckCircle2 className="h-5 w-5 flex-none text-primary" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <div className="mt-auto px-8 pb-8">
              <Button asChild className="w-full text-base py-6">
                <Link href={getWhatsAppLink(pkg.whatsappMessage)} target="_blank" rel="noopener noreferrer">
                  Solicitar Paquete
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}