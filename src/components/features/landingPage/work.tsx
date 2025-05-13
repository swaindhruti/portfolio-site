"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

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
  {
    company: "StartUp Innovators",
    title: "Junior Web Developer",
    duration: "Jan 2018 - May 2019",
    description:
      "Contributed to innovative web solutions, gaining expertise in full-stack development and agile methodologies.",
    technologies: ["React", "Node.js", "MongoDB"],
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
  {
    company: "StartUp Innovators",
    title: "Junior Web Developer",
    duration: "Jan 2018 - May 2019",
    description:
      "Contributed to innovative web solutions, gaining expertise in full-stack development and agile methodologies.",
    technologies: ["React", "Node.js", "MongoDB"],
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

// Item variants for heading animation
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const WorkExperienceSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [shadowValues, setShadowValues] = useState<
    Array<{ x: number; y: number }>
  >([]);

  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isCarouselInView = useInView(carouselRef, { once: true, amount: 0.2 });

  // Only run on client-side after hydration
  useEffect(() => {
    setIsMounted(true);

    // Generate random shadow values once on client-side
    const shadows = workExperiences.map(() => ({
      x: Math.floor(Math.random() * 2) + 2, // Reduced from 3+2 to 2+2
      y: Math.floor(Math.random() * 2) + 2, // Reduced from 3+2 to 2+2
    }));

    setShadowValues(shadows);
  }, []);

  // Card entry animation variants
  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8, // Reduced from 1 to 0.8
      },
    },
  };

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 md:space-y-6 px-4 sm:px-6 md:px-8 py-6 md:py-8 mt-6 sm:mt-8 md:mt-10 relative"
    >
      {/* Neo-brutalist heading with highlighted box */}
      <div className="text-center mb-6 sm:mb-8 md:mb-10">
        <div className="relative inline-block mb-4 sm:mb-5">
          <div className="absolute inset-0 bg-yellow-400 border-[2px] sm:border-[3px] border-black translate-x-1.5 sm:translate-x-2 translate-y-1.5 sm:translate-y-2 rounded-md"></div>
          <motion.h1
            variants={itemVariants}
            initial="hidden"
            animate={isSectionInView ? "visible" : "hidden"}
            className="relative border-[2px] sm:border-[3px] border-black bg-white font-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold px-4 sm:px-6 py-2 sm:py-3 text-black rounded-md"
          >
            WORK EXPERIENCE
          </motion.h1>
        </div>
      </div>

      <motion.div
        ref={carouselRef}
        initial="hidden"
        animate={isCarouselInView ? "visible" : "hidden"}
        variants={cardContainerVariants}
        className="w-full max-w-screen-xl mt-1 sm:mt-2 md:mt-3 relative px-2 sm:px-4 md:px-6 lg:px-8"
      >
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-3">
            {workExperiences.map((experience, index) => {
              // Use fixed shadow values to prevent hydration mismatch
              const defaultShadow = "2px 2px 0 0 #000";
              const hoverShadow = "1px 1px 0 0 #000";

              // Only use random shadows after client-side hydration
              const cardShadow =
                isMounted && shadowValues[index]
                  ? hoveredIndex === index
                    ? `${shadowValues[index].x - 1}px ${
                        shadowValues[index].y - 1
                      }px 0 0 #000`
                    : `${shadowValues[index].x}px ${shadowValues[index].y}px 0 0 #000`
                  : hoveredIndex === index
                  ? hoverShadow
                  : defaultShadow;

              return (
                <CarouselItem
                  key={index}
                  className="px-2 md:pl-3 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3 pb-3 sm:pb-4"
                >
                  <motion.div
                    variants={cardVariants}
                    className="h-full"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div
                      className="h-full rounded-md"
                      style={{ boxShadow: cardShadow }}
                    >
                      <Card
                        className={`
                          h-[320px] sm:h-[340px] md:h-[350px] 
                          bg-white 
                          rounded-md
                          border-[2px] sm:border-[3px]
                          border-black
                          flex flex-col 
                          overflow-hidden
                          transition-all
                          duration-200
                          transform 
                          ${
                            hoveredIndex === index
                              ? "translate-y-[1px] translate-x-[1px] sm:translate-y-[2px] sm:translate-x-[2px]"
                              : ""
                          }
                        `}
                      >
                        {/* Rest of the card content */}
                        <CardHeader className="bg-yellow-300 border-b-[2px] sm:border-b-[3px] border-black p-3 sm:p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-base sm:text-lg md:text-xl font-heading font-bold text-black line-clamp-1">
                                {experience.title}
                              </CardTitle>
                              <p className="text-xs sm:text-sm md:text-base text-black font-heading font-medium">
                                {experience.company}
                              </p>
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="flex-1 p-3 sm:p-4">
                          <CardDescription className="text-xs sm:text-sm mb-2 sm:mb-3 text-black font-code">
                            {experience.description}
                          </CardDescription>
                          <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-2 sm:mt-3">
                            {experience.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="bg-black text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 font-heading uppercase tracking-wider rounded-md"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </CardContent>

                        <CardFooter className="p-3 sm:p-4 mt-auto border-t-[2px] sm:border-t-[3px] border-black">
                          <Link
                            href={experience.link}
                            className="w-full relative group"
                          >
                            <Button
                              className={`
                                w-full
                                bg-black 
                                hover:bg-yellow-300
                                hover:text-black
                                text-white 
                                font-bold 
                                border-[2px] sm:border-[3px]
                                border-black 
                                rounded-md 
                                px-3 sm:px-4 py-1.5 sm:py-2
                                text-xs sm:text-sm
                                transition-all
                                duration-200
                                transform
                                active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0.5px_0.5px_0px_0px_#000] sm:active:shadow-[1px_1px_0px_0px_#000]
                                group-hover:translate-y-[1px] group-hover:translate-x-[1px] group-hover:shadow-[0.5px_0.5px_0px_0px_#000] sm:group-hover:shadow-[1px_1px_0px_0px_#000]
                                shadow-[1px_1px_0px_0px_#000] sm:shadow-[2px_2px_0px_0px_#000]
                              `}
                            >
                              <span className="flex items-center justify-center gap-1 sm:gap-2 font-heading uppercase tracking-wide">
                                {experience.duration}
                                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                              </span>
                            </Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    </div>
                  </motion.div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          {/* Neo-brutalist navigation buttons */}
          <div className="flex justify-center gap-4 sm:gap-6 mt-3 sm:mt-4">
            <CarouselPrevious
              className="bg-yellow-400 text-black hover:bg-black hover:text-white border-[2px] sm:border-[3px] border-black rounded-md h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 
                 transition-all duration-200 hidden sm:flex"
            />

            <CarouselNext
              className="bg-yellow-400 text-black hover:bg-black hover:text-white border-[2px] sm:border-[3px] border-black rounded-md h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 
                 transition-all duration-200 hidden sm:flex"
            />
          </div>
        </Carousel>
      </motion.div>
    </div>
  );
};

export default WorkExperienceSection;
