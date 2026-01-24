"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function LotusFlower() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/animations/flower-animation.json")
      .then((response) => response.json())
      .then((data) => {
        setAnimationData(data);
      })
      .catch((error) => {
        console.error("Error loading animation:", error);
      });
  }, []);

  return (
    <div className="flex items-center justify-center w-62.5 h-62.5">
      {animationData && (
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ width: '250px', height: '250px' }}
        />
      )}
    </div>
  );
}