"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function LotoAnimation() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/animations/loto-animation.json")
      .then((response) => response.json())
      .then((data) => {
        setAnimationData(data);
      })
      .catch((error) => {
        console.error("Error loading animation:", error);
      });
  }, []);

  return (
    <div className="flex items-center justify-center w-[200px] h-[200px] mt-4">
      {animationData && (
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ width: '200px', height: '200px' }}
        />
      )}
    </div>
  );
}