"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import { workExperiences } from "@/config/experience/Data";

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

const WorkExperienceSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isCarouselInView = useInView(carouselRef, { once: true, amount: 0.2 });

  // Colors for neo-brutalist style
  const colors = [
    "bg-yellow-300",
    "bg-blue-300",
    "bg-red-300",
    "bg-green-300",
    "bg-purple-300",
    "bg-pink-300",
  ];

  // Card entry animation variants
  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8, // Reduced from 1 to 0.8
      },
    },
  };

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 md:space-y-6 px-4 sm:px-6 md:px-8 py-6 md:py-8 mt-6 sm:mt-8 md:mt-10 relative"
    >
      {/* Neo-brutalist heading with highlighted box */}
      <div className="text-center mb-6 sm:mb-8 md:mb-10">
        <div className="relative inline-block mb-4 sm:mb-5">
          <div className="absolute inset-0 bg-yellow-400 border-[2px] sm:border-[3px] border-black translate-x-1.5 sm:translate-x-2 translate-y-1.5 sm:translate-y-2 rounded-md"></div>
          <motion.h1
            variants={itemVariants}
            initial="hidden"
            animate={isSectionInView ? "visible" : "hidden"}
            className="relative border-[2px] sm:border-[3px] border-black bg-white font-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold px-4 sm:px-6 py-2 sm:py-3 text-black rounded-md"
          >
            WORK EXPERIENCE
          </motion.h1>
        </div>
      </div>

      <motion.div
        ref={carouselRef}
        initial="hidden"
        animate={isCarouselInView ? "visible" : "hidden"}
        variants={cardContainerVariants}
        className="w-full max-w-screen-xl mt-1 sm:mt-2 md:mt-3 relative px-2 sm:px-4 md:px-6 lg:px-8"
      >
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-3">
            {workExperiences.map((experience, index) => {
              // Get color for card based on index position for even distribution
              const colorIndex = index % colors.length;
              const accentColor = colors[colorIndex];

              return (
                <CarouselItem
                  key={index}
                  className="px-3 md:pl-3 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3 pb-3 sm:pb-4"
                >
                  <motion.div
                    variants={cardVariants}
                    className="h-full relative"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Colored shadow div */}
                    <div
                      className={`absolute inset-0 ${accentColor} border-[2px] sm:border-[3px] border-black translate-x-1.5 translate-y-1.5 rounded-md`}
                    ></div>

                    <Card
                      className={`
                        relative
                        h-[320px] sm:h-[340px] md:h-[400px] 
                        bg-white 
                        rounded-md
                        border-[2px] sm:border-[3px]
                        border-black
                        flex flex-col 
                        overflow-hidden
                        transition-all
                        duration-200
                        transform 
                        ${
                          hoveredIndex === index
                            ? "translate-y-[1px] translate-x-[1px] sm:translate-y-[2px] sm:translate-x-[2px]"
                            : ""
                        }
                      `}
                    >
                      {/* Rest of the card content */}
                      <CardHeader className="bg-yellow-300 border-b-[2px] sm:border-b-[3px] border-black p-3 sm:p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-base sm:text-lg md:text-2xl font-heading font-bold text-black line-clamp-1 tracking-wide">
                              {experience.title}
                            </CardTitle>
                            <p className="text-xs sm:text-sm md:text-lg tracking-wide text-black font-heading font-medium">
                              {experience.company}
                            </p>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="flex-1 p-3 sm:p-4">
                        <CardDescription className="text-xs sm:text-base mb-2 tracking-wide sm:mb-4 text-black">
                          {experience.description}
                        </CardDescription>
                        <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-2 sm:mt-4">
                          {experience.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-black text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 font-heading uppercase tracking-wider rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>

                      <CardFooter className="p-3 sm:p-4 mt-auto border-t-[2px] sm:border-t-[3px] border-black">
                        <Link
                          href={experience.link}
                          className="w-full relative group"
                        >
                          <Button
                            className={`
                              w-full
                              bg-black 
                              hover:bg-yellow-300
                              hover:text-black
                              text-white 
                              font-bold 
                              border-[2px] sm:border-[3px]
                              border-black 
                              rounded-md 
                              px-3 sm:px-4 py-1.5 sm:py-2
                              text-xs sm:text-sm
                              transition-all
                              duration-200
                              transform
                              active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0.5px_0.5px_0px_0px_#000] sm:active:shadow-[1px_1px_0px_0px_#000]
                              group-hover:translate-y-[1px] group-hover:translate-x-[1px] group-hover:shadow-[0.5px_0.5px_0px_0px_#000] sm:group-hover:shadow-[1px_1px_0px_0px_#000]
                              shadow-[1px_1px_0px_0px_#000] sm:shadow-[2px_2px_0px_0px_#000]
                            `}
                          >
                            <span className="flex items-center justify-center gap-1 sm:gap-2 font-heading uppercase tracking-wide">
                              {experience.duration}
                              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                            </span>
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </motion.div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          {/* Neo-brutalist navigation buttons */}
          <div className="flex justify-center gap-4 sm:gap-6">
            <CarouselPrevious
              className="bg-yellow-400 text-black hover:bg-black hover:text-white border-[2px] sm:border-[3px] border-black rounded-md h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 
                 transition-all duration-200 hidden sm:flex"
            />

            <CarouselNext
              className="bg-yellow-400 text-black hover:bg-black hover:text-white border-[2px] sm:border-[3px] border-black rounded-md h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 
                 transition-all duration-200 hidden sm:flex"
            />
          </div>
        </Carousel>
      </motion.div>
    </div>
  );
};

export default WorkExperienceSection;
