import { motion, Variants } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
  variants: Variants;
}

export default function StatCard({ value, label, variants }: StatCardProps) {
  return (
    <motion.div
      variants={variants}
      className="backdrop-blur-md bg-white/20 border border-white/30 rounded-xl p-4 sm:p-5 text-center"
    >
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
        {value}
      </p>
      <p className="text-xs sm:text-sm text-gray-700">{label}</p>
    </motion.div>
  );
}
