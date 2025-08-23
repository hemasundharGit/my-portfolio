

"use client";

import Lottie from "lottie-react";
import { useState, useEffect } from "react";

interface LottieAnimationProps {
  animationData: any;
  className?: string;
}

export function LottieAnimation({ animationData, className }: LottieAnimationProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Only render Lottie component on the client and if data is valid
  if (isClient && animationData) {
    return <Lottie animationData={animationData} className={className} />;
  }

  return <div className={className} />; // Render a placeholder on the server or if no data
}

    