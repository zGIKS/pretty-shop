"use client";

import dynamic from "next/dynamic";

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import animationData from "../../../../public/animations/loto-animation.json";

export default function LotoAnimation() {
  return (
    <div className="w-full max-w-50 mx-auto">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        className="w-full h-auto"
      />
    </div>
  );
}