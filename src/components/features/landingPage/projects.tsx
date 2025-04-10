"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "@/components/features/projectsPage/projectCard";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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

// Container animation variant
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each child animation
      delayChildren: 0.3, // Delay before starting the first child animation
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
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ProjectSection = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-10 mt-6 sm:mt-8 md:mt-10">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="font-borel text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-center mt-8 sm:mt-4 md:mt-0"
      >
        Selected Projects
      </motion.h1>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="w-full max-w-screen-2xl mt-2 sm:mt-4"
      >
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-1 sm:-ml-2 md:-ml-4 mb-2">
            {projects.map((project, index) => (
              <CarouselItem
                key={index}
                className="pl-1 sm:pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/2 xl:basis-1/3"
              >
                <motion.div variants={cardVariants}>
                  <ProjectCard project={project} />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden xl:flex justify-center mt-4">
            <CarouselPrevious className="mr-4 bg-white/60" />
            <CarouselNext className="ml-4 bg-white/60" />
          </div>
        </Carousel>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.8 }} // Increased delay to allow cards to animate first
        className="mt-4 sm:mt-6"
      >
        <Link href="/projects">
          <Button className="group bg-transparent text-black hover:text-white rounded-xl hover:bg-black text-base sm:text-lg md:text-xl lg:text-2xl font-sans px-4 py-5 sm:px-5 sm:py-5 md:px-6 md:py-6 flex items-center gap-2 border-2 border-black transition-all duration-300 ease-in-out">
            See All Projects
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transform group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default ProjectSection;
