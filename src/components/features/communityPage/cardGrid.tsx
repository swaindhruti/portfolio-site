import { motion } from "framer-motion";
import { ReactNode } from "react";

import { Variants } from "framer-motion";

interface CardGridProps {
  children: ReactNode;
  variants: Variants;
  inView: boolean;
}

export default function CardGrid({
  children,
  variants,
  inView,
}: CardGridProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-5 md:gap-6 lg:gap-5 xl:gap-6"
    >
      {children}
    </motion.div>
  );
}
