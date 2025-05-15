"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

interface Project {
  title: string;
  description: string;
  link: string;
  github: string;
  image: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  // Client-side only state to prevent hydration mismatch
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Colors for neo-brutalist style
  const colors = [
    "bg-yellow-300",
    "bg-blue-300",
    "bg-red-300",
    "bg-green-300",
    "bg-violet-300",
    "bg-pink-300",
  ];

  // Get a color based on an even distribution using string length
  const getEvenlyDistributedColor = () => {
    // Use string length + sum of character codes for better distribution
    const sum =
      project.title.length +
      project.title
        .split("")
        .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[sum % colors.length];
  };

  const accentColor = getEvenlyDistributedColor();

  // Generate random properties only after component mounts on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only render dynamic content after client-side hydration
  if (!isMounted) {
    return (
      <Card className="bg-white border-[2px] sm:border-[3px] border-black rounded-md flex flex-col overflow-hidden h-[380px] sm:h-[400px] md:h-[420px]">
        {/* Static placeholder without random elements */}
        <div className="relative w-full h-[150px] sm:h-[170px] md:h-[190px] overflow-hidden flex-shrink-0 border-b-[2px] sm:border-b-[3px] border-black">
          <div className="w-full h-full bg-gray-200" />
        </div>
        <div className="flex flex-col flex-grow overflow-hidden p-3 sm:p-4">
          <div className="h-full" />
        </div>
      </Card>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="h-full w-full"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Colored shadow background */}
      <div
        className={`absolute inset-0 ${accentColor} border-[2px] sm:border-[3px] border-black translate-x-1.5 translate-y-1.5 rounded-md`}
      ></div>

      <motion.div
        animate={{
          y: isHovered ? -3 : 0, // Reduced from -5 to -3 for less dramatic movement
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="h-full w-full rounded-md relative"
      >
        <Card
          className={`
          bg-white 
          border-[2px] sm:border-[3px] border-black 
          rounded-md 
          flex flex-col 
          overflow-hidden 
          h-[380px] sm:h-[400px] md:h-[420px]
          transition-all duration-200
          ${isHovered ? "transform-gpu" : ""}
          ${isHovered ? "translate-x-[-1px] translate-y-[-1px]" : ""}
        `}
        >
          {/* Rest of card content remains unchanged */}
          {/* Image container - reduced height */}
          <div className="relative w-full h-[150px] sm:h-[170px] md:h-[190px] overflow-hidden flex-shrink-0 border-b-[2px] sm:border-b-[3px] border-black">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className={`
                object-cover 
                transition-transform duration-300
                ${
                  isHovered ? "scale-105" : "scale-100"
                } // Reduced from 110 to 105
              `}
            />
          </div>

          {/* Content area */}
          <div className="flex flex-col flex-grow overflow-hidden">
            <CardHeader className="pl-3 pr-3 sm:pl-4 sm:pr-4 pt-3 pb-1 sm:pt-4 sm:pb-2">
              <CardTitle className="text-sm sm:text-base md:text-xl tracking-wide font-heading font-extrabold line-clamp-2">
                {project.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="px-3 sm:px-4 flex-grow overflow-y-auto">
              <CardDescription className="text-xs sm:text-base tracking-wide text-black">
                {project.description}
              </CardDescription>
            </CardContent>

            {/* Fixed position footer - improved for mobile */}
            <CardFooter className="flex flex-col sm:flex-row gap-2 p-3 sm:p-4 pt-1 sm:pt-2 flex-shrink-0">
              <Link
                href={project.link}
                target="_blank"
                className="w-full relative group"
              >
                <Button
                  className={`
                    w-full
                    bg-green-300
                    hover:bg-orange-400
                    text-black 
                    font-bold 
                    border-[2px] sm:border-[3px] 
                    border-black 
                    rounded-md 
                    px-2 py-1.5 sm:px-3 sm:py-5
                    text-xs sm:text-sm
                    transition-all
                    group-hover:translate-y-[-1px] group-hover:translate-x-[-1px] group-hover:shadow-[1px_1px_0px_0px_#000] sm:group-hover:shadow-[2px_2px_0px_0px_#000]
                    shadow-[0.5px_0.5px_0px_0px_#000] sm:shadow-[1px_1px_0px_0px_#000]
                  `}
                >
                  <span className="flex items-center justify-center gap-1 sm:gap-2 font-heading uppercase tracking-wide">
                    View Project
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
              <Link href={project.github} className="w-full relative group">
                <Button
                  className={`
                    w-full
                    bg-black 
                    hover:bg-white
                    text-white 
                    hover:text-black
                    font-bold 
                    border-[2px] sm:border-[3px] 
                    border-black 
                    rounded-md 
                    px-2 py-1.5 sm:px-3 sm:py-5
                    text-xs sm:text-sm
                    transition-all
                    group-hover:translate-y-[-1px] group-hover:translate-x-[-1px] group-hover:shadow-[1px_1px_0px_0px_#000] sm:group-hover:shadow-[2px_2px_0px_0px_#000]
                    shadow-[0.5px_0.5px_0px_0px_#000] sm:shadow-[1px_1px_0px_0px_#000]
                  `}
                >
                  <span className="flex items-center justify-center gap-1 sm:gap-2 font-heading uppercase tracking-wide">
                    GitHub
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
            </CardFooter>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
