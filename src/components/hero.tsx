"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const images = [
    { src: "/assets/pack1/1.png", alt: "Pack 1 - Image 1", height: "h-[28vh]" },
    { src: "/assets/pack1/2.png", alt: "Pack 1 - Image 2", height: "h-[35vh]" },
    { src: "/assets/pack2/1.png", alt: "Pack 2 - Image 1", height: "h-[31vh]" },
    { src: "/assets/pack2/2.png", alt: "Pack 2 - Image 2", height: "h-[26vh]" },
    { src: "/assets/pack3/1.png", alt: "Pack 3 - Image 1", height: "h-[38vh]" },
    { src: "/assets/pack3/2.png", alt: "Pack 3 - Image 2", height: "h-[30vh]" },
    { src: "/assets/pack4/1.png", alt: "Pack 4 - Image 1", height: "h-[33vh]" },
    { src: "/assets/pack4/2.png", alt: "Pack 4 - Image 2", height: "h-[28vh]" },
  ];

  // Duplicar imágenes muchas veces para efecto infinito suave
  const allImages = [...images, ...images, ...images, ...images, ...images, ...images];

  // Auto-scroll horizontal infinito sin saltos
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    const scrollSpeed = 1; // Velocidad del scroll

    const scroll = () => {
      if (!scrollContainer) return;

      scrollContainer.scrollLeft += scrollSpeed;
      
      // Resetear suavemente cuando llegue a 1/3 del contenido (después de 2 copias completas)
      const maxScroll = scrollContainer.scrollWidth / 3;
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
                  />
                </div>
              ))}
          </div>
        ))}
      </div>
    </section>
  );
}
