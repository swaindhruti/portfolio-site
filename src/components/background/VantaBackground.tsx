"use client";

import { useEffect, useRef, useState } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

export default function VantaBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  const [vantaEffect, setVantaEffect] = useState<ReturnType<typeof FOG> | null>(
    null
  );
  const [isLoaded, setIsLoaded] = useState(false);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0xb3e5fc, // Light blue
          midtoneColor: 0xe1f5fe, // Lighter blue
          lowlightColor: 0xb3e5fc, // Light blue (similar to highlight)
          baseColor: 0xffffff, // White
          blurFactor: 0.6,
          speed: 1.5, // Slightly reduced for better performance on laptops
          zoom: 1,
        })
      );
      // Reduce fade-in time for better responsiveness
      setTimeout(() => setIsLoaded(true), 75);
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="w-full h-full">
      {/* Vanta background container - fixed position */}
      <div ref={vantaRef} className="fixed inset-0 -z-10 w-full h-full" />

      {/* Content container - scrollable */}
      <div
        className={`relative z-10 duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
