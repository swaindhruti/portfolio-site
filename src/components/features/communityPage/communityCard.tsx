import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface CommunityCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  variants: Variants;
}

export default function CommunityCard({
  title,
  description,
  image,
  link,
  variants,
}: CommunityCardProps) {
  // Colors for neo-brutalist style - cycle through these for variety
  const colors = [
    "bg-yellow-400",
    "bg-blue-400",
    "bg-red-400",
    "bg-green-400",
    "bg-purple-400",
    "bg-pink-400",
  ];

  // Get a color based on the title's first letter to ensure consistent colors for the same card
  const colorIndex = title.charCodeAt(0) % colors.length;
  const accentColor = colors[colorIndex];

  return (
    <motion.div variants={variants} className="group relative">
      {/* Neo-brutalist background accent - REDUCED SIZE */}
      <div
        className={`absolute inset-0 ${accentColor} border-[3px] border-black translate-x-2 translate-y-2`}
      ></div>

      {/* Main card */}
      <div className="relative border-[3px] border-black bg-white shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] flex flex-col h-full transition-transform duration-300 group-hover:translate-x-[-1px] group-hover:translate-y-[-1px]">
        {/* Image section */}
        <div className="relative h-48 border-b-[3px] border-black overflow-hidden">
          <Image
            src={`https://source.unsplash.com/random/800x600?${encodeURIComponent(
              image
            )}`}
            alt={title}
            fill
            className="object-cover"
          />
          {/* Neo-brutalist overlay for title - REDUCED SIZE */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="relative">
              <div
                className={`absolute inset-0 ${accentColor} border-t-[3px] border-r-[3px] border-black translate-x-1 translate-y-0`}
              ></div>
              <h3 className="relative border-t-[3px] border-r-[3px] border-black bg-white text-black font-heading px-4 py-2 text-lg sm:text-xl font-bold inline-block">
                {title.toUpperCase()}
              </h3>
            </div>
          </div>

          {/* Neo-brutalist corner accent */}
          <div
            className={`absolute top-0 right-0 w-10 h-3 ${accentColor} border-l-[3px] border-b-[3px] border-black`}
          ></div>
        </div>

        {/* Content section */}
        <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
          <p className="text-sm sm:text-base text-black font-medium mb-6">
            {description}
          </p>

          {/* Neo-brutalist link button - REDUCED SIZE */}
          <div className="mt-auto relative group/btn self-start">
            <div
              className={`absolute inset-0 ${accentColor} border-[2px] border-black translate-x-1 translate-y-1 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:translate-y-0.5`}
            ></div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center border-[2px] border-black bg-white px-3 py-1 font-bold text-sm sm:text-base transition-transform group-hover/btn:translate-x-[-0.5px] group-hover/btn:translate-y-[-0.5px]"
            >
              VISIT COMMUNITY
              <ExternalLink className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </a>
          </div>
        </div>

        {/* Bottom corner accent - REDUCED SIZE */}
        <div
          className={`absolute bottom-0 left-0 w-10 h-3 ${accentColor} border-r-[3px] border-t-[3px] border-black`}
        ></div>
      </div>
    </motion.div>
  );
}
