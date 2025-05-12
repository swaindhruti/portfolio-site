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
  const [cardProps, setCardProps] = useState({
    shadowOffsetX: 3,
    shadowOffsetY: 3,
  });

  // Generate random properties only after component mounts on client
  useEffect(() => {
    setIsMounted(true);
    setCardProps({
      shadowOffsetX: Math.floor(Math.random() * 2) + 2, // Reduced from 5+5 to 2+2
      shadowOffsetY: Math.floor(Math.random() * 2) + 2, // Reduced from 5+5 to 2+2
    });
  }, []);

  // Only render dynamic content after client-side hydration
  if (!isMounted) {
    return (
      <Card className="bg-white border-[3px] border-black rounded-none flex flex-col overflow-hidden h-[440px] sm:h-[460px]">
        {/* Static placeholder without random elements */}
        <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px] overflow-hidden flex-shrink-0 border-b-[3px] border-black">
          <div className="w-full h-full bg-gray-200" />
        </div>
        <div className="flex flex-col flex-grow overflow-hidden p-4">
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
      <motion.div
        animate={{
          y: isHovered ? -5 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        style={{
          boxShadow: isHovered
            ? `${cardProps.shadowOffsetX + 1}px ${cardProps.shadowOffsetY + 1}px 0px 0px #000`
            : `${cardProps.shadowOffsetX}px ${cardProps.shadowOffsetY}px 0px 0px #000`,
        }}
        className="h-full w-full rounded-md"
      >
        <Card
          className={`
          bg-white 
          border-[3px] border-black 
          rounded-md 
          flex flex-col 
          overflow-hidden 
          h-[440px] sm:h-[460px]
          transition-all duration-200
          ${isHovered ? "transform-gpu" : ""}
        `}
        >
          {/* Image container */}
          <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px] overflow-hidden flex-shrink-0 border-b-[3px] border-black">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className={`
                object-cover 
                transition-transform duration-300
                ${isHovered ? "scale-110" : "scale-100"}
              `}
            />
          </div>

          {/* Content area */}
          <div className="flex flex-col flex-grow overflow-hidden">
            <CardHeader className="pl-4 pr-4 pt-4 pb-2">
              <CardTitle className="text-base sm:text-lg md:text-xl font-heading font-extrabold line-clamp-2">
                {project.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="px-4 flex-grow overflow-y-auto">
              <CardDescription className="text-xs sm:text-sm md:text-base font-code text-black">
                {project.description}
              </CardDescription>
            </CardContent>

            {/* Fixed position footer */}
            <CardFooter className="flex flex-col sm:flex-row gap-3 p-4 pt-2 flex-shrink-0">
              <Link href={project.link} className="w-full relative group">
                <Button
                  className={`
                    w-full
                    bg-blue-500 
                    hover:bg-blue-600
                    text-white 
                    font-bold 
                    border-[3px] 
                    border-black 
                    rounded-md 
                    px-4 py-2
                    transition-all
                    group-hover:translate-y-[-1px] group-hover:translate-x-[-1px] group-hover:shadow-[2px_2px_0px_0px_#000]
                    shadow-[1px_1px_0px_0px_#000]
                  `}
                >
                  <span className="flex items-center justify-center gap-2 font-heading uppercase tracking-wide">
                    View Project
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
              <Link href={project.github} className="w-full relative group">
                <Button
                  className={`
                    w-full
                    bg-black 
                    hover:bg-gray-800
                    text-white 
                    font-bold 
                    border-[3px] 
                    border-black 
                    rounded-md 
                    px-4 py-2
                    transition-all
                    group-hover:translate-y-[-1px] group-hover:translate-x-[-1px] group-hover:shadow-[2px_2px_0px_0px_#000]
                    shadow-[1px_1px_0px_0px_#000]
                  `}
                >
                  <span className="flex items-center justify-center gap-2 font-heading uppercase tracking-wide">
                    GitHub
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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