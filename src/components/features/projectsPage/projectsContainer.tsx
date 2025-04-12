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
  const [visibleProjects, setVisibleProjects] = useState(4);

  const loadMoreProjects = () => {
    // Increase visible projects by 4 each time, but don't exceed total projects
    setVisibleProjects((prev) => Math.min(prev + 4, projects.length));
  };

  // Check if all projects are visible
  const allProjectsShown = visibleProjects >= projects.length;

  return (
    <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 px-3 sm:px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-10 mt-20 sm:mt-24 md:mt-28">
      <div className="space-y-3 sm:space-y-4 md:space-y-6 mb-2 sm:mb-4">
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-borel text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          My Projects
        </motion.h1>

        <motion.div
          className="text-center max-w-3xl mx-auto text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <p className="text-base sm:text-lg md:text-xl font-sans px-4">
            Explore my portfolio of web development projects showcasing my
            skills and expertise. Additionally, delve into my DevOps projects,
            highlighting my experience in CI/CD pipelines, cloud infrastructure,
            and automation tools.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full px-2 sm:px-4 md:px-6">
        <AnimatePresence>
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Show More Button */}
      {!allProjectsShown && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-6 sm:mt-8"
        >
          <Button
            onClick={loadMoreProjects}
            size="lg"
            className="group bg-black backdrop-blur-lg hover:bg-white/30 hover:backdrop-blur-lg hover:text-black border-2 border-black transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-xl text-white font-sans flex items-center gap-2"
          >
            <span className="flex items-center gap-2 font-sans tracking-wide">
              Show More
              <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-transform duration-300 group-hover:translate-y-1" />
            </span>
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectContainer;
