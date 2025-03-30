"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ExperienceCard from "./experienceCard";

const workExperiences = [
  {
    company: "TechInnovate Solutions",
    title: "Senior Full Stack Developer",
    duration: "Jan 2022 - Present",
    description:
      "Led development of scalable web applications using React, Next.js, and Node.js, implementing GraphQL APIs and optimizing performance.",
    technologies: ["React", "Next.js", "Node.js", "GraphQL", "PostgreSQL"],
    link: "#",
  },
  {
    company: "CloudNative Enterprises",
    title: "Full Stack Engineer",
    duration: "Jun 2019 - Dec 2021",
    description:
      "Developed microservices architecture and built interactive user interfaces using modern web technologies.",
    technologies: ["Express.js", "Ruby on Rails", "Firebase", "Supabase"],
    link: "#",
  },
  {
    company: "StartUp Innovators",
    title: "Junior Web Developer",
    duration: "Jan 2018 - May 2019",
    description:
      "Contributed to innovative web solutions, gaining expertise in full-stack development and agile methodologies.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
];

function ExperienceContainer() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <div className="min-h-screen pt-16 sm:pt-20 md:pt-24 lg:pt-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 lg:py-16">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.h1
            className="font-borel text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 md:mb-12"
            initial={{ opacity: 0, y: 15 }}
            animate={
              headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
            }
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            Professional Journey
          </motion.h1>
          <motion.p
            className="text-gray-600 font-sans text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={
              headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
            }
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Explore my career path through the tech industry, showcasing growth,
            achievements, and the evolution of my expertise.
          </motion.p>
        </motion.div>

        {/* Timeline Container with improved mobile responsiveness */}
        <div className="relative pl-4 sm:pl-6 md:pl-8">
          {workExperiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              index={index}
              isLast={index === workExperiences.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceContainer;
