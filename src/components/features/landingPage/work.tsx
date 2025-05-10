"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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

const WorkExperienceSection = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 px-4 sm:px-6 md:px-8 py-6 md:py-10 mt-8 sm:mt-10 md:mt-12">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="font-borel text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-center"
      >
        Professional Journey
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="w-full max-w-screen-xl mt-2 sm:mt-4 relative pl-4 sm:pl-6 md:pl-8  pr-4 sm:pr-6 md:pr-8"
      >
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {workExperiences.map((experience, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  className="h-full"
                >
                  <Card className="h-[360px] bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/40 transition-all duration-300 ease-in-out flex flex-col overflow-hidden border-2 border-black/10 hover:border-black mb-2">
                    <CardHeader className="p-3 sm:p-4">
                      <CardTitle className="text-lg sm:text-xl md:text-xl lg:text-2xl font-sans tracking-wide font-semibold">
                        {experience.title}
                      </CardTitle>
                      <p className="text-sm sm:text-base md:text-lg text-gray-600 font-sans tracking-wide">
                        {experience.company}
                      </p>
                    </CardHeader>
                    <CardContent className="flex-1 p-3 sm:p-4">
                      <CardDescription className="text-sm sm:text-base mb-3 text-gray-800 font-sans tracking-wide">
                        {experience.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-1.5">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-black/10 text-black text-xs sm:text-sm px-2 py-1 font-sans tracking-wide rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="p-3 sm:p-4 mt-auto flex justify-center">
                      <Link
                        href={experience.link}
                        className="w-full flex justify-center"
                      >
                        <Button className="w-full h-auto text-xs sm:text-sm md:text-base group relative overflow-hidden bg-black border-2 border-black text-white hover:backdrop-blur-lg hover:bg-white/10 hover:text-black transition-all duration-300 ease-in-out py-2 sm:py-2.5 px-2 sm:px-3 rounded-xl">
                          <span className="flex items-center justify-center gap-1 sm:gap-2 text-base sm:text-lg font-sans">
                            {experience.duration}
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                          </span>
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Repositioned navigation buttons for better visibility on all screen sizes */}
          <CarouselPrevious className="hover:border-2 bg-white/30 backdrop-blur-md border-black h-8 w-8 sm:h-10 sm:w-10" />

          <CarouselNext className="hover:border-2 bg-white/30 backdrop-blur-md border-black h-8 w-8 sm:h-10 sm:w-10" />
        </Carousel>
      </motion.div>
    </div>
  );
};

export default WorkExperienceSection;
