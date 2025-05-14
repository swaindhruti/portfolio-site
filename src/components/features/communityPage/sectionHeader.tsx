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
  // Get a consistent color based on the first letter of the title
  const colors = [
    "bg-yellow-400",
    "bg-blue-400",
    "bg-red-400",
    "bg-green-400",
    "bg-purple-400",
    "bg-pink-400",
  ];

  const colorIndex = title.charCodeAt(0) % colors.length;
  const accentColor = colors[colorIndex];

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="mb-10 md:mb-16"
    >
      <div className="relative inline-block">
        {/* Background accent */}
        <div
          className={`absolute inset-0 ${accentColor} border-[3px] border-black translate-x-2 translate-y-2 rounded-md`}
        ></div>

        {/* Main container */}
        <div className="relative border-[3px] border-black bg-white flex items-center py-2 px-4 md:py-3 md:px-5 rounded-md">
          {/* Icon with background */}
          <div className="relative mr-3 md:mr-4">
            <div
              className={`absolute inset-0 ${accentColor} border-[2px] border-black translate-x-1 translate-y-1 rounded-md`}
            ></div>
            <div className="relative border-[2px] border-black bg-white p-1.5 md:p-2 rounded-md">
              <Icon className="w-5 h-5 md:w-6 md:h-6 text-black" />
            </div>
          </div>

          {/* Header text */}
          <motion.h2
            variants={itemVariants}
            className="text-lg sm:text-3xl md:text-4xl font-bold font-heading text-black uppercase"
          >
            {title}
          </motion.h2>
        </div>
      </div>
    </motion.div>
  );
}
