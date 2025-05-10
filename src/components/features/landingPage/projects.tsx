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

const ProjectSection = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 md:space-y-8 px-3 sm:px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-10 mt-8 sm:mt-10 md:mt-12 relative">
      {/* Neo-brutalist heading with highlighted box */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mb-6 sm:mb-8 md:mb-10"
      >
        <div className="absolute -inset-3 -top-4 -z-10"></div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-heading font-bold text-center px-6 py-2">
          Selected Projects
          <span className="block h-1 bg-black mt-2 sm:mt-3"></span>
        </h1>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="w-full max-w-screen-xl mt-2 sm:mt-4 relative pl-4 sm:pl-6 md:pl-8 pr-4 sm:pr-6 md:pr-8"
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
            <CarouselContent className="-ml-1 sm:-ml-2 md:-ml-4 mb-2">
              {projects.map((project, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 sm:pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3 px-2"
                >
                  <motion.div variants={cardVariants}>
                    <ProjectCard project={project} />
                  </motion.div>
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

export default ProjectSection;
