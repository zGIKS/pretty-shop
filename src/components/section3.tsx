"use client";

import LotoAnimation from "./loto-animation";

export default function Section3() {
  return (
    <section className="py-8 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
            <LotoAnimation />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-lg md:text-2xl font-semibold text-primary mb-2 md:mb-4">
              En Pretty Studio, celebramos la belleza natural
            </h3>
            <p className="text-sm md:text-lg text-muted-foreground mb-4 md:mb-6">
              Creemos que la verdadera belleza viene de dentro y se refleja en el exterior. Nuestros productos están diseñados para realzar tu belleza natural sin compromisos.
            </p>
            <p className="text-sm md:text-lg text-muted-foreground">
              Desde cremas hidratantes hasta tratamientos especializados, cada producto es elaborado con ingredientes de alta calidad para cuidar tu piel de manera efectiva y segura.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}