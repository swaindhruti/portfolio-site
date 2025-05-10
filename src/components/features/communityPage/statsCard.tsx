import { motion, Variants } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
  variants: Variants;
  index?: number;
}

export default function StatCard({
  value,
  label,
  variants,
  index = 0,
}: StatCardProps) {
  // Colors for neo-brutalist style - cycle through these for variety
  const colors = [
    "bg-yellow-400",
    "bg-blue-400",
    "bg-red-400",
    "bg-green-400",
    "bg-purple-400",
    "bg-pink-400",
  ];

  const accentColor = colors[index % colors.length];

  return (
    <motion.div variants={variants} className="group relative">
      {/* Neo-brutalist background accent */}
      <div
        className={`absolute inset-0 ${accentColor} border-[3px] border-black translate-x-2 translate-y-2`}
      ></div>

      {/* Main card */}
      <div className="relative border-[3px] border-black bg-white shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] p-4 sm:p-5 text-center transition-transform duration-300 group-hover:translate-x-[-1px] group-hover:translate-y-[-1px]">
        {/* Decorative corner accents */}
        <div
          className={`absolute top-0 right-0 w-10 h-3 ${accentColor} border-l-[3px] border-b-[3px] border-black`}
        ></div>
        <div
          className={`absolute bottom-0 left-0 w-10 h-3 ${accentColor} border-r-[3px] border-t-[3px] border-black`}
        ></div>

        {/* Value with underline */}
        <div className="relative inline-block mb-3">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-black relative z-10">
            {value}
          </p>
          <div
            className={`absolute -bottom-1 left-0 right-0 h-1.5 ${accentColor} border-[1px] border-black`}
          ></div>
        </div>

        {/* Label */}
        <p className="text-xs sm:text-sm md:text-base font-medium text-black uppercase font-heading">
          {label}
        </p>
      </div>
    </motion.div>
  );
}
