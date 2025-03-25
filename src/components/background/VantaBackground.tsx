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
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current!,
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
          speed: 1.5,
          zoom: 1,
        })
      );
      setTimeout(() => setIsLoaded(true), 100);
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="w-full h-full">
      {/* Vanta background container - fixed position */}
      <div ref={vantaRef} className="fixed inset-0 -z-10" />

      {/* Content container - scrollable */}
      <div
        className={`relative z-10 min-h-screen w-full overflow-y-auto transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
