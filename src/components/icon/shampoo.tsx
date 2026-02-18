"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

interface SignShampooIconProps {
  className?: string;
}

export default function SignShampooIcon({ className }: SignShampooIconProps) {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/animations/sign-shampoo.json")
      .then((response) => response.json())
      .then((data) => {
        setAnimationData(data);
      })
      .catch((error) => {
        console.error("Error loading animation:", error);
      });
  }, []);

  if (!animationData) return null;

  return <Lottie animationData={animationData} loop={true} className={className} />;
}