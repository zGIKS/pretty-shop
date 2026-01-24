"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function LotusFlower() {
  const [animationData, setAnimationData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/animations/flower-animation.json")
      .then((response) => response.json())
      .then((data) => {
        setAnimationData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error loading animation:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="flex items-center justify-center">
      {isLoading ? (
        <div className="w-80 h-80 bg-muted rounded-lg animate-pulse flex items-center justify-center">
          <span className="text-muted-foreground">Cargando animación...</span>
        </div>
      ) : animationData ? (
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
          className="object-contain"
        />
      ) : (
        <div className="w-80 h-80 bg-muted rounded-lg flex items-center justify-center">
          <span className="text-muted-foreground">Error al cargar la animación</span>
        </div>
      )}
    </div>
  );
}