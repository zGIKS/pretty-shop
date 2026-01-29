"use client";

import Link from "next/link";
import SignShampooIcon from "@/components/icon/shampoo";
import { Button } from "@/components/ui/button";

export default function Section5() {
  return (
    <section className="py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col gap-8 items-center text-center">
        <div className="flex justify-center">
          <SignShampooIcon className="h-64 w-64 md:h-96 md:w-96" />
        </div>
        <div className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-900">
            Belleza con intención
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Productos de calidad profesional para cuidar tu piel y cabello
          </h2>
          <p className="text-base md:text-lg text-slate-600">
            Cada fórmula combina ingredientes seleccionados, textura sensorial y empaques sostenibles para que disfrutes rutinas que realmente se sienten como un lujo diario.
          </p>
        </div>
        <Button asChild className="text-sm md:text-base">
          <Link href="/productos">Ver productos</Link>
        </Button>
      </div>
    </section>
  );
}
