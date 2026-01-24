"use client";

import { Package, Briefcase } from "lucide-react";
import LotusFlower from "./LottieAnimation";

export default function Hero() {
  return (
    <section className="pt-48 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto a la izquierda */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Belleza Natural y Cuidado Premium
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              La belleza tendrá un impacto vasto en el mundo. Pretty Cosmetics es una empresa dedicada a ofrecer productos de calidad excepcional que realzan tu belleza natural y cuidan tu piel con los mejores ingredientes.
            </p>
          </div>

          {/* Animación a la derecha */}
          <div className="flex justify-center lg:justify-end">
            <LotusFlower />
          </div>
        </div>
      </div>
    </section>
  );
}