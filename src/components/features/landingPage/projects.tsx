"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "@/components/shared/projects/projectCard";
import { motion } from "framer-motion";

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
    <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 md:space-y-8 px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 mt-6 sm:mt-8 md:mt-10">
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
        className="w-full max-w-screen-xl mt-2 sm:mt-4 relative pl-4 sm:pl-6 md:pl-8  pr-4 sm:pr-6 md:pr-8 "
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
                className="pl-1 sm:pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3"
              >
                <motion.div variants={cardVariants}>
                  <ProjectCard project={project} />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Custom styled navigation buttons for better visibility */}

          <CarouselPrevious className="hover:border-2 bg-white/30 backdrop-blur-md border-black h-8 w-8 sm:h-10 sm:w-10" />

          <CarouselNext className="hover:border-2 bg-white/30 backdrop-blur-md border-black h-8 w-8 sm:h-10 sm:w-10" />
        </Carousel>
      </motion.div>
    </div>
  );
};

export default ProjectSection;
