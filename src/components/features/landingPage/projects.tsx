"use client";

import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "@/components/shared/projects/projectCard";
import { motion, useInView } from "framer-motion";
import { projects } from "@/config/projects/Data";

// Container animation variant
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Faster stagger for snappier loading
      delayChildren: 0.2,
    },
  },
};

// Individual card animation variant
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4, // Slightly faster animation
      ease: "easeOut",
    },
  },
};

// Item variants for heading animation
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ProjectSection = () => {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 md:space-y-6 px-3 sm:px-4 md:px-6 py-6 md:py-8 mt-6 sm:mt-8 md:mt-10 relative"
    >
      {/* Neo-brutalist heading with highlighted box */}
      <div className="text-center mb-6 sm:mb-8 md:mb-10">
        <div className="relative inline-block mb-4 sm:mb-5">
          <div className="absolute inset-0 bg-blue-500 border-[2px] sm:border-[3px] border-black translate-x-1.5 sm:translate-x-2 translate-y-1.5 sm:translate-y-2 rounded-md"></div>
          <motion.h1
            variants={itemVariants}
            initial="hidden"
            animate={isSectionInView ? "visible" : "hidden"}
            className="relative border-[2px] sm:border-[3px] border-black bg-white font-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold px-4 sm:px-6 py-2 sm:py-3 text-black rounded-md"
          >
            SELECTED PROJECTS
          </motion.h1>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="w-full max-w-screen-xl mt-1 sm:mt-2 md:mt-3 relative px-2 sm:px-4 md:px-6 lg:px-8"
      >
        {/* Border container */}
        <div className="pl-1 pr-1 py-2">
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-1 sm:-ml-2 md:-ml-3 mb-2 pt-2 sm:pt-3 ">
              {projects.map((project, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 sm:pl-2 md:pl-3 basis-full sm:basis-1/2 lg:basis-1/3 px-1 sm:px-2"
                >
                  <motion.div variants={cardVariants}>
                    <ProjectCard project={project} />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Neo-brutalist navigation buttons */}
            <div className="flex justify-center gap-4 sm:gap-5 md:gap-6 mt-3 sm:mt-4">
              <CarouselPrevious
                className="bg-blue-400 text-black hover:bg-black hover:text-white border-[2px] sm:border-[3px] border-black rounded-md h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 
                   transition-all duration-200 hidden sm:flex"
              />

              <CarouselNext
                className="bg-blue-400 text-black hover:bg-black hover:text-white border-[2px] sm:border-[3px] border-black rounded-md h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 
                   transition-all duration-200 hidden sm:flex"
              />
            </div>
          </Carousel>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectSection;
