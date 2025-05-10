"use client";

import { motion } from "framer-motion";
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
import { useState } from "react";

const TechStackSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center justify-center space-y-4 px-4 sm:px-6 md:px-8 py-6 md:py-10 mt-8 sm:mt-10 md:mt-12 relative">
      {/* Neo-brutalist heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-heading font-bold text-center relative inline-block">
          Technology Stack
          <span className="block h-1 bg-black mt-2 sm:mt-3"></span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="w-full max-w-screen-xl mt-2 sm:mt-4 relative pl-4 sm:pl-6 md:pl-8 pr-4 sm:pr-6 md:pr-8"
      >
        <div className="py-4 sm:py-6 pl-1 pr-1">
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {techStacks.map((tech, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-1/2 xs:basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="p-1 sm:p-2">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.2, delay: index * 0.03 }}
                      className="h-full"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <Card
                        className={`
                          rounded-none 
                          border-[2px] 
                          border-black 
                          bg-white 
                          hover:bg-gray-50
                          h-32 sm:h-36 md:h-40
                          transition-all 
                          duration-200
                          overflow-hidden
                          ${
                            hoveredIndex === index
                              ? "translate-y-[2px] translate-x-[2px] shadow-[1px_1px_0px_0px_#000]"
                              : "shadow-[3px_3px_0px_0px_#000]"
                          }
                        `}
                      >
                        <CardContent className="flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 h-full">
                          <div
                            className={`
                              relative 
                              w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 
                              mb-2 sm:mb-3 
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
                                rounded-none 
                                border-[2px] 
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
                                    ? "bg-green-400"
                                    : "bg-purple-400"
                                }
                              `}
                            ></div>

                            {/* Tech logo */}
                            <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-3">
                              <Image
                                src={tech.logo}
                                alt={`${tech.name} logo`}
                                width={40}
                                height={40}
                                className="object-contain"
                              />
                            </div>
                          </div>

                          <div
                            className={`
                              bg-black 
                              text-white 
                              px-2 
                              py-0.5 
                              font-heading 
                              text-xs sm:text-sm 
                              font-bold 
                              uppercase
                              tracking-wide
                              transition-all
                              duration-200
                              ${hoveredIndex === index ? "scale-105" : ""}
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
            <div className="flex justify-center gap-4 mt-6">
              <CarouselPrevious
                className="bg-black text-white hover:bg-gray-800 border-[3px] border-black rounded-none h-10 w-10 
                  shadow-[2px_2px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000]
                  hover:translate-y-[1px] hover:translate-x-[1px] transition-all"
              />

              <CarouselNext
                className="bg-black text-white hover:bg-gray-800 border-[3px] border-black rounded-none h-10 w-10 
                  shadow-[2px_2px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000]
                  hover:translate-y-[1px] hover:translate-x-[1px] transition-all"
              />
            </div>
          </Carousel>
        </div>
      </motion.div>
    </div>
  );
};

export default TechStackSection;
