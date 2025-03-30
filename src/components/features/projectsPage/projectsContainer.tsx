"use client";

import { useState } from "react";
import ProjectCard from "@/components/shared/projectCard";
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
    <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-16 px-3 sm:px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-12 mt-28">
      <h1 className="text-4xl lg:text-6xl font-borel text-center mb-8">
        My Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8 md:px-8 w-full">
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
          className="mt-8"
        >
          <Button
            onClick={loadMoreProjects}
            size="lg"
            className="group bg-black backdrop-blur-lg hover:bg-white/30 hover:backdrop-blur-lg hover:text-black border-2 border-black transition-all duration-300 text-lg px-8 py-6 rounded-xl text-white font-sans flex items-center gap-2"
          >
            <span className="flex items-center gap-2 font-sans tracking-wide">
              Show More
              <ChevronDown className="w-7 h-7 transition-transform duration-300 group-hover:translate-y-1" />
            </span>
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectContainer;
