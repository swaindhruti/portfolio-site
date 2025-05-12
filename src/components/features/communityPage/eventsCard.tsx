import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  link: string;
  variants: Variants;
}

export default function EventCard({
  title,
  description,
  date,
  location,
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
      <div className="relative border-[3px] border-black bg-white shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] flex flex-col h-full transition-transform duration-300 group-hover:translate-x-[-1px] group-hover:translate-y-[-1px] rounded-md">
        {/* Image section */}
        <div className="relative h-48 border-b-[3px] border-black overflow-hidden rounded-t-[5px]">
          <Image
            src={`https://source.unsplash.com/random/800x600?${encodeURIComponent(
              image
            )}`}
            alt={title}
            fill
            className="object-cover"
          />
          {/* Neo-brutalist corner accent */}
          <div
            className={`absolute top-0 right-0 w-10 h-3 ${accentColor} border-l-[3px] border-b-[3px] border-black rounded-bl-md`}
          ></div>

          {/* Event title bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t-[3px] border-black">
            <div className="relative px-4 py-3 min-h-[60px] flex items-center">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-black">
                {title.toUpperCase()}
              </h3>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between min-h-[200px]">
          {/* Date and location with neo-brutalist styling */}
          <div className="flex flex-col sm:flex-row gap-2 mb-4">
            <div className="relative group/date">
              <div
                className={`absolute inset-0 ${accentColor} border-[2px] border-black translate-x-1 translate-y-1 rounded-md`}
              ></div>
              <div className="relative border-[2px] border-black bg-white px-2 py-1 inline-flex items-center rounded-md">
                <Calendar className="w-3.5 h-3.5 mr-1.5" />
                <span className="text-xs sm:text-sm font-medium">{date}</span>
              </div>
            </div>

            <div className="relative group/location">
              <div
                className={`absolute inset-0 ${accentColor} border-[2px] border-black translate-x-1 translate-y-1 rounded-md`}
              ></div>
              <div className="relative border-[2px] border-black bg-white px-2 py-1 inline-flex items-center truncate rounded-md">
                <MapPin className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium truncate">
                  {location}
                </span>
              </div>
            </div>
          </div>

          {/* Description - Now with fixed height */}
          <div className="min-h-[100px]">
            <p className="text-sm sm:text-base text-black font-medium line-clamp-4">
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