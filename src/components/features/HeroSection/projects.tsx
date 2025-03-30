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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Project 1",
    description:
      "Project 1 description lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/project-1",
    github: "/project-1",
    image: "/api/placeholder/800/500", // Placeholder image - replace with your image paths
  },
  {
    title: "Project 2",
    description: "Project 2 description",
    link: "/project-2",
    github: "/project-2",
    image: "/api/placeholder/800/500",
  },
  {
    title: "Project 3",
    description: "Project 3 description",
    link: "/project-3",
    github: "/project-3",
    image: "/api/placeholder/800/500",
  },
  {
    title: "Project 4",
    description: "Project 4 description",
    link: "/project-4",
    github: "/project-4",
    image: "/api/placeholder/800/500",
  },
  {
    title: "Project 5",
    description: "Project 5 description",
    link: "/project-5",
    github: "/project-5",
    image: "/api/placeholder/800/500",
  },
];

const ProjectSection = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-16 px-3 sm:px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-12 mt-10 sm:mt-0">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="font-borel text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mt-12 xs:mt-0"
      >
        Selected Projects
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        className="w-full max-w-screen-2xl"
      >
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-1 sm:-ml-2 md:-ml-4">
            {projects.map((project, index) => (
              <CarouselItem
                key={index}
                className="pl-1 sm:pl-2 md:pl-4 basis-full lg:basis-1/2 xl:basis-1/3"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  className="h-full"
                >
                  <Card className="bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/40 transition-all duration-300 ease-in-out flex flex-col h-full overflow-hidden border-2 border-black/10 hover:border-black min-h-96">
                    <div className="relative w-full h-64 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover border-b-black/10 hover:border-black transition-all duration-300 ease-in-out"
                      />
                    </div>
                    <CardHeader className="pt-6 pb-0">
                      <CardTitle className="text-xl lg:text-2xl font-sans">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 pt-6 pb-6">
                      <CardDescription className="text-base md:text-base font-sans">
                        {project.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex flex-col sm:flex-row gap-3 xs:gap-6 justify-around p-6 mt-auto">
                      <Link href={project.link} className="w-full">
                        <Button className="w-full h-auto text-xs sm:text-sm md:text-base group relative overflow-hidden bg-white/10 border-2 border-black text-black backdrop-blur-lg hover:bg-black hover:text-white transition-all duration-300 ease-in-out py-2 sm:py-3 px-2 sm:px-3 rounded-xl">
                          <span className="flex items-center justify-center gap-1 sm:gap-2 text-lg xs:text-xl font-sans">
                            View Project
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                          </span>
                        </Button>
                      </Link>
                      <Link href={project.github} className="w-full">
                        <Button className="w-full h-auto text-xs sm:text-sm md:text-base group relative overflow-hidden bg-black border-2 border-black text-white hover:backdrop-blur-lg hover:bg-white/10 hover:text-black transition-all duration-300 ease-in-out py-2 sm:py-3 px-2 sm:px-3 rounded-xl">
                          <span className="flex items-center justify-center gap-1 sm:gap-2 text-lg xs:text-xl font-sans">
                            View Code
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                          </span>
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden 2xl:flex md:justify-center">
            <CarouselPrevious className="mr-4 bg-white/60" />
            <CarouselNext className="ml-4 bg-white/60" />
          </div>
        </Carousel>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        className="mt-4 sm:mt-6"
      >
        <Button className="group bg-transparent text-black hover:text-white rounded-xl hover:bg-black text-lg sm:text-xl md:text-2xl font-sans px-5 py-6 sm:px-5 sm:py-5 md:px-6 md:py-7 flex items-center gap-2 border-2 border-black transition-all duration-300 ease-in-out">
          See All Projects
          <ArrowRight className="w-5 h-5 md:w-7 md:h-7 transform group-hover:translate-x-2 transition-transform duration-300" />
        </Button>
      </motion.div>
    </div>
  );
};

export default ProjectSection;
