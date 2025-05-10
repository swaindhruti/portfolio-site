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

  // Colors to cycle through for neo-brutalist accents
  const colors = [
    "bg-yellow-400",
    "bg-blue-400",
    "bg-red-400",
    "bg-green-400",
    "bg-purple-400",
    "bg-pink-400",
  ];

  const accentColor = colors[index % colors.length];

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex items-start group mb-12 last:mb-0"
    >
      {/* Timeline dot and line */}
      <div className="absolute left-0 top-0 h-full">
        <motion.div
          className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${accentColor} border-[2px] border-black relative z-10`}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <motion.div
            className="absolute w-full h-full bg-black/50"
            style={{
              scale: dotScale,
            }}
          />
        </motion.div>

        {/* Line connecting to the next card */}
        {!isLast && (
          <motion.div
            className="w-1 absolute left-2 sm:left-2.5 md:left-3 top-4 sm:top-5 md:top-6 bottom-0 transform -translate-x-1/2 bg-black"
            style={{
              height: "calc(100% + 3rem)",
            }}
          />
        )}
      </div>

      {/* Content with improved responsiveness */}
      <div className="ml-8 sm:ml-10 md:ml-16 relative w-full" ref={contentRef}>
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
          className="relative bg-white border-[3px] border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] 
                     p-4 sm:p-6 md:p-8 transition-all duration-300 ease-out h-full"
          style={{
            transformOrigin: "left center",
          }}
          whileHover={{
            y: -5,
            transition: { duration: 0.2, ease: "easeOut" },
          }}
        >
          {/* Neo-brutalist corner accent */}
          <div
            className={`absolute top-0 right-0 w-16 h-3 ${accentColor} border-l-[3px] border-b-[3px] border-black`}
          ></div>
          <div
            className={`absolute bottom-0 left-0 w-12 h-3 ${accentColor} border-r-[3px] border-t-[3px] border-black`}
          ></div>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-6 mb-5 sm:mb-6 md:mb-7">
            <div>
              <motion.h3
                className="font-heading text-xl sm:text-2xl md:text-3xl font-bold mb-2 relative inline-block"
                initial={{ opacity: 0 }}
                animate={contentInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
              >
                {experience.company}
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-black"></div>
              </motion.h3>
              <motion.p
                className="text-black font-sans text-base sm:text-lg md:text-xl font-medium"
                initial={{ opacity: 0 }}
                animate={contentInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
              >
                {experience.title}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={
                contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }
              }
              transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
              className="relative self-start"
            >
              <div
                className={`absolute inset-0 ${accentColor} border-[2px] border-black translate-x-1 translate-y-1`}
              ></div>
              <span className="relative bg-white border-[2px] border-black px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 font-bold font-heading text-sm sm:text-base md:text-lg block">
                {experience.duration}
              </span>
            </motion.div>
          </div>

          <motion.p
            className="text-black mb-6 sm:mb-7 md:mb-8 font-sans text-sm sm:text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={contentInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
          >
            {experience.description}
          </motion.p>

          {/* Technologies section */}
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
            {experience.technologies.map((tech, i) => (
              <div key={i} className="relative group">
                <div
                  className={`absolute inset-0 ${
                    colors[(i + index) % colors.length]
                  } border-[2px] border-black translate-x-1 translate-y-1 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5`}
                ></div>
                <span className="relative block bg-white border-[2px] border-black px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-1.5 text-xs sm:text-sm md:text-base font-medium font-sans transition-transform group-hover:translate-x-[-0.5px] group-hover:translate-y-[-0.5px]">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
