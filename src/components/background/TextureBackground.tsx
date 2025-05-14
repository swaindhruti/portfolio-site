"use client";

import { motion } from "framer-motion";

export default function NeoBrutalistBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full">
      {/* Neo-brutalist background container - fixed position */}
      <div className="fixed inset-0 -z-10 w-full h-full bg-white overflow-hidden">
        {/* Grid lines - neo-brutalist pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(to right, black 1px, transparent 1px),
              linear-gradient(to bottom, black 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Brutalist geometric shapes with reduced opacity */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {/* Yellow rectangle in top-right */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 0.2, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute top-[15%] right-[5%] w-28 h-28 md:w-40 md:h-40 lg:w-52 lg:h-52 bg-yellow-300 border-[1px] border-black/30"
          />

          {/* Red square in bottom-left */}
          <motion.div
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 0.2, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute bottom-[8%] left-[5%] w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-red-300 border-[1px] border-black/30 transform rotate-12"
          />

          {/* Gray square */}
          <div className="absolute top-[30%] left-[15%] w-16 h-16 bg-gray-200 opacity-20 transform -rotate-6"></div>

          {/* Blue rectangle mid-right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="absolute top-[60%] right-[15%] w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 bg-blue-200 border-[1px] border-black/30"
          />

          {/* Green circle in mid-left */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 0.15, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute top-[45%] left-[8%] w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full bg-green-200 border-[1px] border-black/30"
          />

          {/* Purple triangle shape using CSS */}
          <motion.div
            initial={{ opacity: 0, rotate: 45 }}
            animate={{ opacity: 0.15, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute top-[15%] left-[35%] w-0 h-0 border-l-[25px] md:border-l-[35px] lg:border-l-[45px] border-l-transparent border-b-[50px] md:border-b-[70px] lg:border-b-[90px] border-b-purple-200 border-r-[25px] md:border-r-[35px] lg:border-r-[45px] border-r-transparent"
          />

          {/* Orange rectangle in bottom-right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="absolute bottom-[20%] right-[30%] w-16 h-24 md:w-20 md:h-32 lg:w-24 lg:h-40 bg-orange-200 border-[1px] border-black/30 transform"
          />

          {/* Small cyan square top-center */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 0.15, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="absolute top-[12%] left-[48%] w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-cyan-200 border-[1px] border-black/30 transform"
          />

          {/* NEW: Zigzag shape (drawn with border) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="absolute top-[75%] left-[22%] w-32 md:w-40 lg:w-48 h-6 md:h-8 lg:h-10"
            style={{
              backgroundImage: "linear-gradient(45deg, transparent 33.333%, #a855f7 33.333%, #a855f7 66.667%, transparent 66.667%)",
              backgroundSize: "24px 12px",
              backgroundRepeat: "repeat-x"
            }}
          />

          {/* NEW: Half-circle shape */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 0.15, x: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="absolute top-[22%] left-[15%] w-32 md:w-40 lg:w-48 h-16 md:h-20 lg:h-24 bg-teal-200 border-[1px] border-black/30 rounded-tl-full rounded-tr-full"
          />

          {/* NEW: Cross-hatch pattern */}
          <motion.div
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 0.1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-[35%] left-[35%] w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44"
            style={{
              backgroundImage: `
                linear-gradient(45deg, #f87171 25%, transparent 25%),
                linear-gradient(-45deg, #f87171 25%, transparent 25%),
                linear-gradient(45deg, transparent 75%, #f87171 75%),
                linear-gradient(-45deg, transparent 75%, #f87171 75%)
              `,
              backgroundSize: '20px 20px',
              backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
            }}
          />

          {/* NEW: Dotted circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="absolute bottom-[5%] right-[5%] w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full"
            style={{
              background: 'radial-gradient(circle, #38bdf8 25%, transparent 25%)',
              backgroundSize: '12px 12px',
            }}
          />

          {/* NEW: Diamond shape using rotated square */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.2, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute bottom-[15%] left-[42%] w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-pink-200 border-[1px] border-black/30 transform"
          />

        </div>
      </div>

      {/* Content container with fade-in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  );
}