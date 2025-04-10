"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";

interface WorkExperience {
  company: string;
  title: string;
  duration: string;
  description: string;
  technologies: string[];
  link: string;
}

const ExperienceCard: React.FC<{
  experience: WorkExperience;
  index: number;
  isLast: boolean;
}> = ({ experience, index, isLast }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px 0px" });

  // Create reference for content animation
  const contentRef = useRef<HTMLDivElement>(null);
  const contentInView = useInView(contentRef, { once: true, margin: "-50px" });

  // Timeline progress for each card with optimized settings
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end end"],
  });

  // Smoother animation with optimized spring settings
  const dotScale = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex items-start group mb-6 sm:mb-7 md:mb-8 last:mb-0"
    >
      {/* Timeline dot and line */}
      <div className="absolute left-0 top-0 h-full">
        <motion.div
          className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-black rounded-full relative z-10"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <motion.div
            className="absolute w-full h-full bg-black/50 rounded-full"
            style={{
              scale: dotScale,
            }}
          />
        </motion.div>

        {/* Line connecting to the next card */}
        {!isLast && (
          <motion.div
            className="w-0.5 absolute left-1.25 sm:left-1.5 md:left-2 top-2.5 sm:top-3 md:top-4 bottom-0 transform -translate-x-1/2 bg-black/20"
            style={{
              height: "calc(100% + 1.5rem)",
            }}
          />
        )}
      </div>

      {/* Content with improved responsiveness */}
      <div className="ml-6 sm:ml-8 md:ml-12 relative w-full" ref={contentRef}>
        <motion.div
          initial={{ opacity: 0, y: 20, x: -10 }}
          animate={
            contentInView
              ? { opacity: 1, y: 0, x: 0 }
              : { opacity: 0, y: 20, x: -10 }
          }
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          className="rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-lg border-2 border-black/5 
                     hover:border-black/20 transition-all duration-300 ease-out 
                     group-hover:shadow-xl backdrop-blur-sm bg-white/5 
                     hover:bg-white/10 h-full"
          style={{
            transformOrigin: "left center",
          }}
          whileHover={{
            y: -5,
            transition: { duration: 0.2, ease: "easeOut" },
          }}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
            <div>
              <motion.h3
                className="font-borel text-lg sm:text-xl md:text-2xl lg:text-3xl mb-1 md:mb-2"
                initial={{ opacity: 0 }}
                animate={contentInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
              >
                {experience.company}
              </motion.h3>
              <motion.p
                className="text-gray-600 font-sans text-sm sm:text-base md:text-lg lg:text-xl"
                initial={{ opacity: 0 }}
                animate={contentInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
              >
                {experience.title}
              </motion.p>
            </div>
            <motion.span
              className="text-xs sm:text-sm md:text-base lg:text-lg font-sans text-gray-500 bg-black/5 px-2 py-1 sm:px-2.5 sm:py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2 rounded-full self-start"
              initial={{ opacity: 0, x: 10 }}
              animate={
                contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }
              }
              transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
            >
              {experience.duration}
            </motion.span>
          </div>

          <motion.p
            className="text-gray-700 mb-3 sm:mb-4 md:mb-5 lg:mb-6 font-sans text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={contentInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
          >
            {experience.description}
          </motion.p>

          {/* Technologies section - animations removed */}
          <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2">
            {experience.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-0.5 sm:px-2.5 sm:py-0.75 md:px-3 md:py-1 lg:px-4 lg:py-2 bg-black/5 rounded-full text-xs sm:text-xs md:text-sm lg:text-base font-sans hover:bg-black/10 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
