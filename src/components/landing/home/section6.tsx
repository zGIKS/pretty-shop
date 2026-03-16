import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export interface Membership {
  name: string;
  price: string;
  description: string;
  features: string[];
  whatsappMessage: string;
  isPopular?: boolean;
}

const defaultMemberships: Membership[] = [
  {
    name: "Membresía Basic",
    price: "S/ 200",
    description: "Ideal para el cuidado constante de tus pies y bienestar.",
    features: [
      "5 podologías mensuales",
      "10% en productos de pies",
      "Prioridad en citas",
    ],
    whatsappMessage: "Hola, me interesa adquirir la Membresía Basic por S/ 200 mensuales.",
  },
  {
    name: "Membresía Gold",
    price: "S/ 280",
    description: "Cuidado facial profundo para mantener tu piel impecable.",
    features: [
      "3 limpiezas faciales profundas mensuales",
      "10% en productos para el rostro",
      "Prioridad en citas",
    ],
    whatsappMessage: "Hola, me interesa adquirir la Membresía Gold por S/ 280 mensuales.",
    isPopular: true,
  },
];

interface Section6Props {
  title?: string;
  subtitle?: string;
  description?: string;
  memberships?: Membership[];
  className?: string;
}

export default function Section6({
  title = "Nuestras Membresías",
  subtitle = "Para ti",
  description = "Disfruta de beneficios exclusivos y mantén tu cuidado personal al día con nuestros planes pensados en ti.",
  memberships = defaultMemberships,
  className,
}: Section6Props) {
  return (
    <section className={cn("py-12 md:py-20 bg-muted/20", className)}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeader title={title} subtitle={subtitle} description={description} />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {memberships.map((plan) => (
            <Card
              key={plan.name}
              className="relative flex h-full flex-col overflow-hidden border-border/70 bg-card py-0 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-foreground text-background px-4 py-1 text-xs font-semibold uppercase tracking-label rounded-bl-lg">
                  Popular
                </div>
              )}
              <CardHeader className="px-8 pb-6 pt-10 text-center">
                <CardTitle className="text-2xl font-semibold">{plan.name}</CardTitle>
                <div className="mt-4 flex items-baseline justify-center gap-x-1">
                  <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
                  <span className="text-sm font-semibold leading-6 text-muted-foreground">/mes</span>
                </div>
                <CardDescription className="mt-4 text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="grow px-8 pb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3 items-center">
                      <Check className="h-5 w-5 flex-none text-primary" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto px-8 pb-8">
                <Button
                  asChild
                  className="h-11 w-full text-base"
                >
                  <Link
                    href={getWhatsAppLink(plan.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Adquirir Plan
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
