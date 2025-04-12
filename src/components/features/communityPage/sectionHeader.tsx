import { motion, Variants } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  variants: Variants;
  itemVariants: Variants;
  inView: boolean;
}

export default function SectionHeader({
  icon: Icon,
  title,
  variants,
  itemVariants,
  inView,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="mb-10 md:mb-12 flex items-center"
    >
      <Icon className="w-6 h-6 md:w-8 md:h-8 mr-3" />
      <motion.h2
        variants={itemVariants}
        className="text-2xl sm:text-3xl md:text-4xl font-sans font-medium"
      >
        {title}
      </motion.h2>
    </motion.div>
  );
}
