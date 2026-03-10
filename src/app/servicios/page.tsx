import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { serviceCategories } from "@/data/service-categories";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Servicios | Pretty Studio",
  description:
    "Explora las categorías de podología, tratamientos faciales y tratamientos corporales.",
};

export default function Servicios() {
  return (
    <>
      <main className="bg-background pt-40 pb-10 sm:pt-44 sm:pb-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden border-border/70 bg-card py-0 shadow-sm">
            <div className="grid gap-8 p-6 sm:p-8 lg:p-10">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 text-xs font-semibold uppercase tracking-label text-muted-foreground">
                  <Sparkles className="h-3.5 w-3.5" />
                  Catálogo de Servicios
                </span>

                <div className="space-y-4">
                  <h1 className="max-w-3xl font-semibold sm:text-5xl">
                    Conoce nuestros servicios.
                  </h1>
                  <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                    Encuentra la categoría que mejor se adapta a tu necesidad y
                    revisa cada tratamiento de forma clara y ordenada.
                  </p>
                </div>

                <Button asChild className="w-fit">
                  <Link
                    href={getWhatsAppLink(
                      "Hola, deseo recibir información sobre sus servicios."
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Consultar por WhatsApp
                  </Link>
                </Button>
              </div>
            </div>
          </Card>

          <section className="grid gap-5 lg:grid-cols-3">
            {serviceCategories.map((category) => (
              <Card
                key={category.slug}
                className="group border-border bg-card py-0 transition hover:-translate-y-1 hover:shadow-md"
              >
                <CardHeader className="p-6 pb-4">
                  <p className="text-sm font-semibold uppercase tracking-label text-muted-foreground">
                    Categoría
                  </p>
                  <CardTitle className="text-2xl tracking-tight">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-6">
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
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
