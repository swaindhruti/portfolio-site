"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "@/components/shared/projectCard";
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
                <ProjectCard project={project} />
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
