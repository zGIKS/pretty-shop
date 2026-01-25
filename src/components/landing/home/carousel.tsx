"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { beautyImages } from "@/data/images";

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Duplicar imágenes para efecto infinito suave
  const allImages = [...beautyImages, ...beautyImages];

  // Detectar si el componente está visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Al menos 10% visible
    );

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-scroll horizontal infinito sin saltos, solo cuando es visible
  useEffect(() => {
    if (!isVisible) return;

    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    const scrollSpeed = 1; // Velocidad del scroll

    const scroll = () => {
      if (!scrollContainer || !isVisible) return;

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
  }, [isVisible]);

  return (
    <section className="relative h-[900px] md:h-[1200px] w-full overflow-hidden bg-background py-12 md:py-16 mt-6 md:mt-16">
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
                  className={`relative ${image.height} flex-shrink-0 overflow-hidden rounded-lg shadow-xl transition-transform hover:scale-105`}
                  style={{ width: '240px' }}
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

    </section>
  );
}
