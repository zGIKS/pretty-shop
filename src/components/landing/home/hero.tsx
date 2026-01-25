"use client";

import LotusFlower from "./flower-animation";

export default function Hero() {
  return (
    <section className="pt-36 md:pt-40 lg:pt-48 pb-8 md:pb-12 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Texto a la izquierda */}
          <div className="text-center lg:text-left">
            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-3 md:mb-6">
              Belleza Natural y Cuidado Premium
            </h1>
            <p className="text-xs md:text-base lg:text-lg xl:text-xl text-muted-foreground mb-4 md:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              La belleza tendrá un impacto vasto en el mundo. Pretty Studio es una empresa dedicada a ofrecer productos de calidad excepcional que realzan tu belleza natural y cuidan tu piel con los mejores ingredientes.
            </p>
          </div>

          {/* Animación a la derecha */}
          <div className="flex justify-center items-center">
            <LotusFlower />
          </div>
        </div>
      </div>
    </section>
  );
}