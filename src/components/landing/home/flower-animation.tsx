"use client";

import dynamic from "next/dynamic";

import animationData from "../../../../public/animations/flower-animation.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function LotusFlower() {
  return (
    <div className="flex items-center justify-center w-[250px] h-[250px]">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: "250px", height: "250px" }}
      />
    </div>
  );
}
