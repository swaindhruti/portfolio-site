"use client";

import { useEffect, useState } from "react";

export default function StaticBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simple fade-in effect
    setTimeout(() => setIsLoaded(true), 75);
  }, []);

  return (
    <div className="w-full h-full">
      {/* Static gradient background container - fixed position */}
      <div className="fixed inset-0 -z-10 w-full h-full bg-gradient-to-br from-white via-blue-50 to-blue-100">
        {/* Subtle noise texture overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Subtle blue blur effect in the corner */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl"></div>
      </div>

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
