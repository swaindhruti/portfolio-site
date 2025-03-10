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
          highlightColor: 0xffd37b,
          midtoneColor: 0xffc2bd,
          lowlightColor: 0xcec4ff,
          baseColor: 0xffffff,
          blurFactor: 0.6,
          speed: 1,
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
    <>
      <div ref={vantaRef} className="fixed inset-0 -z-10" />
      <div
        className={`relative z-10 min-h-screen transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
}
