"use client";

import { motion, useInView } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { techStacks } from "@/config/techStack/Data";
import { useState, useRef } from "react";

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

const TechStackSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isCarouselInView = useInView(carouselRef, { once: true, amount: 0.2 });

  // Card container animation variants
  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  // Individual card animation variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.8,
      rotateY: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 px-4 sm:px-6 md:px-8 py-6 md:py-8 mt-6 sm:mt-8 md:mt-10 relative"
    >
      {/* Neo-brutalist heading with highlighted box */}
      <div className="text-center mb-6 sm:mb-7 md:mb-8">
        <div className="relative inline-block mb-4 sm:mb-5">
          <div className="absolute inset-0 bg-orange-400 border-[2px] sm:border-[3px] border-black rounded-md translate-x-1.5 sm:translate-x-2 translate-y-1.5 sm:translate-y-2"></div>
          <motion.h1
            variants={itemVariants}
            initial="hidden"
            animate={isSectionInView ? "visible" : "hidden"}
            className="relative border-[2px] sm:border-[3px] border-black bg-white rounded-md font-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold px-4 sm:px-6 py-2 sm:py-3 text-black"
          >
            TECHNOLOGY STACK
          </motion.h1>
        </div>
      </div>

      <motion.div
        ref={carouselRef}
        initial="hidden"
        animate={isCarouselInView ? "visible" : "hidden"}
        variants={cardContainerVariants}
        className="w-full max-w-screen-xl mt-1 sm:mt-2 relative pl-2 sm:pl-4 md:pl-6 pr-2 sm:pr-4 md:pr-6"
      >
        <div className="py-2 sm:py-4 md:py-5 pl-1 pr-1">
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-3">
              {techStacks.map((tech, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-3 basis-1/3 xs:basis-1/4 sm:basis-1/5 md:basis-1/6 lg:basis-1/7"
                >
                  <div className="p-0.5 sm:p-1">
                    <motion.div
                      variants={cardVariants}
                      className="h-full"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <Card
                        className={`
                          border-[3px]
                          border-black 
                          rounded-md
                          bg-white 
                          hover:bg-gray-50
                          h-24 sm:h-28 md:h-32
                          transition-all 
                          duration-200
                          overflow-hidden
                          ${
                            hoveredIndex === index
                              ? "translate-y-1 translate-x-1"
                              : "shadow-[2px_2px_0px_0px_#000] sm:shadow-[3px_3px_0px_0px_#000]"
                          }
                        `}
                      >
                        <CardContent className="flex flex-col items-center justify-center p-1.5 sm:p-2 md:p-3 h-full">
                          <div
                            className={`
                              relative 
                              w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 
                              mb-1 sm:mb-1.5 md:mb-2 
                              transition-all 
                              duration-200
                              ${hoveredIndex === index ? "scale-105" : ""}
                            `}
                          >
                            {/* Colored background circle based on index */}
                            <div
                              className={`
                                absolute 
                                inset-0 
                                rounded-md 
                                border-[1px]
                                sm:border-[2px] 
                                border-black
                                transition-all
                                duration-200
                                ${
                                  index % 5 === 0
                                    ? "bg-blue-400"
                                    : index % 5 === 1
                                      ? "bg-yellow-400"
                                      : index % 5 === 2
                                        ? "bg-red-400"
                                        : index % 5 === 3
                                          ? "bg-purple-400"
                                          : "bg-cyan-400"
                                }
                              `}
                            ></div>

                            {/* Tech logo */}
                            <div className="absolute inset-0 flex items-center justify-center p-1.5 sm:p-2 md:p-2.5">
                              <Image
                                src={tech.logo}
                                alt={`${tech.name} logo`}
                                width={30}
                                height={30}
                                className="object-contain"
                              />
                            </div>
                          </div>

                          <div
                            className={`
                              text-black 
                              px-1 
                              py-0.5 
                              font-heading 
                              text-[10px] xs:text-xs sm:text-sm
                              font-bold 
                              uppercase
                              tracking-wide
                              transition-all
                              duration-200
                              text-center
                              line-clamp-1
                            `}
                          >
                            {tech.name}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Neo-brutalist navigation buttons */}
            <div className="flex justify-center gap-4 sm:gap-6 mt-3">
              <CarouselPrevious
                className="bg-orange-400 text-black hover:bg-black hover:text-white border-[2px] sm:border-[3px] border-black rounded-md h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 
                   transition-all duration-200 hidden sm:flex"
              />

              <CarouselNext
                className="bg-orange-400 text-black hover:bg-black hover:text-white border-[2px] sm:border-[3px] border-black rounded-md h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 
                   transition-all duration-200 hidden sm:flex"
              />
            </div>
          </Carousel>
        </div>
      </motion.div>
    </div>
  );
};

export default TechStackSection;
