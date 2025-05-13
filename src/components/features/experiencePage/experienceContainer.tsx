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
    <div className="min-h-screen pt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-12 mb-12">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 lg:mb-20"
        >
          {/* Section title with neo-brutalist styling */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-red-400 border-[3px] border-black translate-x-2 translate-y-2 rounded-md"></div>
              <motion.h1
                className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold relative border-[3px] border-black bg-white px-6 py-3 text-center rounded-md"
                initial={{ opacity: 0, y: 15 }}
                animate={
                  headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
                }
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                PROFESSIONAL JOURNEY
              </motion.h1>
            </div>
          </div>
        </motion.div>

        {/* Timeline Container with improved mobile responsiveness */}
        <div className="relative pl-4 sm:pl-6 md:pl-8 lg:pl-10">
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
