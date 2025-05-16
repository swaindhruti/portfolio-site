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
    <motion.div variants={variants} className="group relative h-full">
      {/* Neo-brutalist background accent */}
      <div
        className={`absolute inset-0 ${accentColor} border-[3px] border-black translate-x-2 translate-y-2 rounded-md`}
      ></div>

      {/* Main card */}
      <div className="relative border-[3px] border-black bg-white p-4 sm:p-5 text-center transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 rounded-md h-full flex flex-col justify-center min-h-[150px]">
        {/* Decorative corner accents */}
        <div
          className={`absolute top-0 right-0 w-10 h-3 ${accentColor} border-l-[3px] border-b-[3px] border-black rounded-bl-md`}
        ></div>
        <div
          className={`absolute bottom-0 left-0 w-10 h-3 ${accentColor} border-r-[3px] border-t-[3px] border-black rounded-tr-md`}
        ></div>

        {/* Value with underline */}
        <div className="relative inline-block mb-2">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-black relative z-10">
            {value}
          </p>
        </div>

        {/* Label */}
        <p className="text-xs sm:text-sm md:text-base font-medium text-black uppercase font-heading">
          {label}
        </p>
      </div>
    </motion.div>
  );
}
