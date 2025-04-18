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

const TechStackSection = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 px-4 sm:px-6 md:px-8 py-6 md:py-10 bg-transparent mt-8 sm:mt-10">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="font-borel text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-center mb-2 "
      >
        Technology Stack
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="w-full max-w-screen-xl mt-2 sm:mt-4 relative pl-4 sm:pl-6 md:pl-8  pr-4 sm:pr-6 md:pr-8"
      >
        <div className="py-4 sm:py-6">
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
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                      className="h-full"
                    >
                      <Card className="bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/30 transition-all duration-300 ease-in-out flex flex-col overflow-hidden group border-2 border-black/10 hover:border-black h-32 sm:h-36 md:h-40 hover:scale-105">
                        <CardContent className="flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 h-full">
                          <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                            <div className="absolute inset-0 bg-white/30 group-hover:bg-white/50 rounded-full transition-colors duration-300"></div>
                            <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 z-10 flex items-center justify-center">
                              <Image
                                src={tech.logo}
                                alt={`${tech.name} logo`}
                                width={40}
                                height={40}
                                className="object-contain"
                              />
                            </div>
                          </div>
                          <h3 className="text-center font-semibold tracking-wide font-sans text-sm sm:text-md md:text-lg text-black group-hover:text-black transition-colors duration-300">
                            {tech.name}
                          </h3>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hover:border-2 bg-white/30 backdrop-blur-md border-black h-8 w-8 sm:h-10 sm:w-10" />

            <CarouselNext className="hover:border-2 bg-white/30 backdrop-blur-md border-black h-8 w-8 sm:h-10 sm:w-10" />
          </Carousel>
        </div>
      </motion.div>
    </div>
  );
};

export default TechStackSection;
