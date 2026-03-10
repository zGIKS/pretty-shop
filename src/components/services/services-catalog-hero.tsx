import Link from "next/link";
import { MessageCircle, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function ServicesCatalogHero() {
  return (
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
  );
}
