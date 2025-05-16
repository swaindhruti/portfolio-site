import { motion, Variants } from "framer-motion";
import Image from "next/image";

interface EventCardProps {
  title: string;
  description: string;
  image: string;
  variants: Variants;
}

export default function EventCard({
  title,
  description,
  image,
  variants,
}: EventCardProps) {
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
      <div className="relative border-[3px] border-black bg-white flex flex-col h-full transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 rounded-md">
        {/* Image section */}
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

          {/* Event title bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t-[3px] border-black">
            <div className="relative px-4 py-3 min-h-[60px] flex items-center">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-black tracking-wide">
                {title.toUpperCase()}
              </h3>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="p-4 sm:p-5 flex flex-col flex-grow min-h-[180px]">
          {/* Description - Shifted slightly towards top but still somewhat centered */}
          <div className="flex items-center justify-center flex-grow min-h-[100px] -mt-4">
            <p className="text-sm sm:text-base text-black/70 font-medium line-clamp-4">
              {description}
            </p>
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
