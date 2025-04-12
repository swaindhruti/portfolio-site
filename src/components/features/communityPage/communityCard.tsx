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
  return (
    <motion.div
      variants={variants}
      className="backdrop-blur-md bg-white/20 border border-white/30 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group aspect-[4/4.4] sm:aspect-[4/5] md:aspect-[4/4.6] lg:aspect-[4/4.8] xl:aspect-[4/4.5] flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-10" />
        <Image
          src={`https://source.unsplash.com/random/800x600?${encodeURIComponent(
            image
          )}`}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 p-4 z-20">
          <h3 className="text-white text-lg sm:text-xl font-medium font-sans">
            {title}
          </h3>
        </div>
      </div>
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
        <p className="text-sm sm:text-base text-gray-700 mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-black font-medium hover:underline mt-auto text-sm sm:text-base"
        >
          Visit Community
          <ExternalLink className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </a>
      </div>
    </motion.div>
  );
}
