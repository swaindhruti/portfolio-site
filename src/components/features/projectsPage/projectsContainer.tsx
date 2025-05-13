"use client";

import { useState } from "react";
import ProjectCard from "@/components/shared/projects/projectCard";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const projects = [
  {
    title: "Project 1",
    description:
      "Project 1 description lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/project-1",
    github: "/project-1",
    image: "/api/placeholder/800/500",
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
  {
    title: "Project 6",
    description:
      "An impressive project with advanced features and robust architecture.",
    link: "/project-6",
    github: "/project-6",
    image: "/api/placeholder/800/500",
  },
  {
    title: "Project 7",
    description: "A comprehensive solution for complex business problems.",
    link: "/project-7",
    github: "/project-7",
    image: "/api/placeholder/800/500",
  },
  {
    title: "Project 8",
    description: "An innovative approach to solving everyday challenges.",
    link: "/project-8",
    github: "/project-8",
    image: "/api/placeholder/800/500",
  },
  {
    title: "Project 9",
    description: "A cutting-edge implementation with modern technologies.",
    link: "/project-9",
    github: "/project-9",
    image: "/api/placeholder/800/500",
  },
  {
    title: "Project 10",
    description: "A scalable and efficient solution for growing businesses.",
    link: "/project-10",
    github: "/project-10",
    image: "/api/placeholder/800/500",
  },
];

const ProjectContainer = () => {
  // Initially show 4 projects, or fewer if on smaller screens
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreProjects = () => {
    // Show loading state
    setIsLoading(true);

    // Use setTimeout to simulate loading and reduce the delay perception
    setTimeout(() => {
      setVisibleProjects((prev) => Math.min(prev + 3, projects.length));
      setIsLoading(false);
    }, 100);
  };

  // Check if all projects are visible
  const allProjectsShown = visibleProjects >= projects.length;

  return (
    <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 px-3 sm:px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-10 mt-24 md:mt-28 mb-8 md:mb-10">
      {/* Centered header with underline */}
      <motion.div
        className="w-full text-center mb-10 "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 bg-blue-500 border-[3px] border-black translate-x-2 translate-y-2 rounded-md"></div>
          <h1 className="relative text-3xl sm:text-4xl lg:text-5xl font-heading font-bold z-10 bg-white border-[3px] border-black px-6 py-3 rounded-md">
            Projects
          </h1>
        </div>
      </motion.div>

      {/* Project grid with faster staggered animation */}
      <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10 w-full px-2 sm:px-4 md:px-6 ">
        <AnimatePresence mode="sync">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3, // Faster animation
                delay: Math.min(index * 0.05, 0.2), // Cap the delay to reduce waiting time
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Improved Show More Button with loading state */}
      {!allProjectsShown && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.2 }}
          className="mt-10 sm:mt-12"
        >
          <div
            className="relative"
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => {
              setIsButtonHovered(false);
              setIsButtonPressed(false);
            }}
            onMouseDown={() => setIsButtonPressed(true)}
            onMouseUp={() => setIsButtonPressed(false)}
          >
            <Button
              onClick={loadMoreProjects}
              disabled={isLoading}
              className={`
                bg-blue-500
                hover:bg-blue-600
                text-white 
                font-bold
                mt-8
                border-[3px]
                border-black 
                rounded-none 
                px-6 sm:px-8
                py-2 sm:py-6
                text-base sm:text-lg
                font-heading
                tracking-wide
                transition-all
                duration-200
                ${isLoading ? "opacity-80 cursor-not-allowed" : ""}
                ${
                  isButtonPressed
                    ? "translate-y-[2px] translate-x-[2px] shadow-[1px_1px_0px_0px_#000]"
                    : isButtonHovered
                    ? "translate-y-[-2px] translate-x-[-2px] shadow-[3px_3px_0px_0px_#000]"
                    : "shadow-[2px_2px_0px_0px_#000]"
                }
              `}
            >
              <span className="flex items-center gap-2">
                {isLoading ? "Loading..." : "Load more projects"}
                {!isLoading && (
                  <ChevronDown
                    className={`
                      w-4 h-4 
                      sm:w-5 sm:h-5 
                      transition-transform 
                      duration-200
                      ${isButtonHovered ? "translate-y-0.5" : ""}
                    `}
                  />
                )}
              </span>
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectContainer;
