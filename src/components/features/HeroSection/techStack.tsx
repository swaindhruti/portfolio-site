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

const techStacks = [
  {
    name: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Hono",
    logo: "https://hono.dev/images/logo.svg",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Google Cloud",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Prisma",
    logo: "https://cdn.worldvectorlogo.com/logos/prisma-2.svg",
  },
  {
    name: "Vue.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
];

const TechStackSection = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4  px-4 sm:px-6 md:px-8 py-8 md:py-12 bg-gradient-to-b from-transparent to-white/5 mt-20">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="font-borel text-4xl sm:text-5xl md:text-6xl text-center mb-4"
      >
        Technology Stack
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="w-full max-w-screen-2xl"
      >
        <div className="py-6">
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
                  <div className="p-2 md:p-3">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      className="h-full"
                    >
                      <Card className="bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/30 transition-all duration-300 ease-in-out flex flex-col overflow-hidden group border-2 border-black/10 hover:border-black h-40 hover:scale-105">
                        <CardContent className="flex flex-col items-center justify-center p-4 h-full">
                          <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-3 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                            <div className="absolute inset-0 bg-white/30 group-hover:bg-white/50 rounded-full transition-colors duration-300"></div>
                            <div className="relative w-10 h-10 sm:w-12 sm:h-12 z-10 flex items-center justify-center">
                              <Image
                                src={tech.logo}
                                alt={`${tech.name} logo`}
                                width={48}
                                height={48}
                                className="object-contain"
                              />
                            </div>
                          </div>
                          <h3 className="text-center font-semibold tracking-wide font-sans text-md sm:text-lg md:text-xl text-black group-hover:text-black transition-colors duration-300">
                            {tech.name}
                          </h3>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:flex justify-center">
              <CarouselPrevious className="mr-2" />
              <CarouselNext className="ml-2" />
            </div>
          </Carousel>
        </div>
      </motion.div>
    </div>
  );
};

export default TechStackSection;
