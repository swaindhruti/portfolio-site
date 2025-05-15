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
    <motion.div variants={variants} className="group relative h-full">
      {/* Neo-brutalist background accent */}
      <div
        className={`absolute inset-0 ${accentColor} border-[3px] border-black translate-x-2 translate-y-2 rounded-md`}
      ></div>

      {/* Main card */}
      <div className="relative border-[3px] border-black bg-white flex flex-col h-full transition-transform duration-300 group-hover:translate-x-[-1px] group-hover:translate-y-[-1px] rounded-md">
        {/* Image section - FIXED HEIGHT */}
        <div className="relative h-60 border-b-[3px] border-black overflow-hidden rounded-t-[5px]">
          {/* Using Next/Image for all images with different object-fit strategy */}
          <div className="flex items-center justify-center w-full h-[calc(100%-50px)]">
            <div className="relative w-4/5 h-4/5">
              <Image
                src={image}
                alt={title}
                fill
                className={"object-contain"}
                priority
              />
            </div>
          </div>

          {/* Neo-brutalist corner accent */}
          <div
            className={`absolute top-0 right-0 w-10 h-3 ${accentColor} border-l-[3px] border-b-[3px] border-black rounded-bl-md`}
          ></div>

          {/* Community title bar - Now matches the event card style - CONSISTENT HEIGHT */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t-[3px] border-black">
            <div className="relative px-4 py-3 min-h-[60px] flex items-center">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-black">
                {title.toUpperCase()}
              </h3>
            </div>
          </div>
        </div>

        {/* Content section - FIXED MIN-HEIGHT */}
        <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between min-h-[200px]">
          {/* Description - FIXED HEIGHT */}
          <div className="min-h-[100px]">
            <p className="text-sm sm:text-base text-black/80 font-medium line-clamp-4">
              {description}
            </p>
          </div>

          {/* Neo-brutalist link button - REDUCED SIZE */}
          <div className="mt-auto relative group/btn self-start mb-2">
            <div
              className={`absolute inset-0 ${accentColor} border-[2px] border-black translate-x-1 translate-y-1 transition-transform rounded-md group-hover/btn:translate-x-0.5 group-hover/btn:translate-y-0.5`}
            ></div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center rounded-md border-[2px] border-black bg-white px-3 py-2 font-bold text-sm sm:text-base transition-transform group-hover/btn:translate-x-[-0.5px] group-hover/btn:translate-y-[-0.5px]"
            >
              VISIT COMMUNITY
              <ExternalLink className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </a>
          </div>
        </div>

        {/* Bottom corner accent */}
        <div
          className={`absolute bottom-0 left-0 w-10 h-3 ${accentColor} border-r-[3px] border-t-[3px] border-black rounded-tr-md`}
        ></div>
      </div>
    </motion.div>
  );
}
