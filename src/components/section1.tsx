"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { beautyImages } from "@/data/images";

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Duplicar imágenes para efecto infinito suave
  const allImages = [...beautyImages, ...beautyImages];

  // Auto-scroll horizontal infinito sin saltos
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    const scrollSpeed = 1; // Velocidad del scroll

    const scroll = () => {
      if (!scrollContainer) return;

      scrollContainer.scrollLeft += scrollSpeed;
      
      // Resetear suavemente cuando llegue a la mitad (después de 1 copia completa)
      const maxScroll = scrollContainer.scrollWidth / 2;
      if (scrollContainer.scrollLeft >= maxScroll) {
        // Resetear al inicio sin salto visual
        scrollContainer.scrollLeft = 0;
      }
      
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background pt-20">
      <div
        ref={scrollRef}
        className="flex h-full items-center gap-6 overflow-x-hidden overflow-y-hidden px-8"
        style={{ scrollBehavior: "auto" }}
      >
        {/* Generar columnas dinámicamente */}
        {Array.from({ length: Math.ceil(allImages.length / 3) }).map((_, colIndex) => (
          <div 
            key={`col-${colIndex}`} 
            className="flex flex-col gap-4 flex-shrink-0"
            style={{ paddingTop: `${(colIndex % 3) * 60}px` }}
          >
            {allImages
              .slice(colIndex * 3, colIndex * 3 + 3)
              .map((image, imgIndex) => (
                <div
                  key={`img-${colIndex}-${imgIndex}`}
                  className={`relative ${image.height} w-[180px] md:w-[240px] flex-shrink-0 overflow-hidden rounded-lg shadow-xl transition-transform hover:scale-105`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="240px"
                    priority={colIndex < 2}
                    unoptimized
                  />
                </div>
              ))}
          </div>
        ))}
      </div>

      {/* Texto centrado sobre las imágenes */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center bg-black/40 p-6 rounded-lg backdrop-blur-sm">
          <h1 className="text-4xl font-bold text-white">Belleza Sin Esfuerzo</h1>
          <p className="text-lg text-gray-200 mt-4">
            Luces y te sientes lo mejor sin complicaciones, mantén estas piezas a mano.
          </p>
        </div>
      </div>
    </section>
  );
}
