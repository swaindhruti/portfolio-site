"use client";

import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";

import { ReactNode } from "react";

export default function VantaBackground({ children }: { children: ReactNode }) {
  const [vantaEffect, setVantaEffect] = useState<ReturnType<typeof FOG> | null>(
    null
  );
  const vantaRef = useRef(null);

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
          highlightColor: 0xffeccc,
          midtoneColor: 0xffc2bd,
          lowlightColor: 0xcec4ff,
          baseColor: 0xffffff,
          blurFactor: 0.6,
          speed: 1,
          zoom: 1,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      {/* Fixed background */}
      <div ref={vantaRef} className="fixed inset-0 -z-10" />

      {/* Scrollable content container */}
      <div className="relative z-10">{children}</div>
    </>
  );
}
