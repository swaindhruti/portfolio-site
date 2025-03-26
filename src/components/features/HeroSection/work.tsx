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
];

const WorkExperienceSection = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 md:space-y-10 px-4 sm:px-6 md:px-8 py-6 md:py-10">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="font-borel text-4xl sm:text-5xl md:text-6xl mb-8 text-center"
      >
        Professional Journey
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="w-full max-w-screen-2xl"
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
                className="pl-2 md:pl-4 basis-full xs:basis-4/5 sm:basis-1/2 md:basis-1/3"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="h-full"
                >
                  <Card className="h-[350px] bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/30 transition-all duration-300 ease-in-out flex flex-col overflow-hidden border-2 border-black/10 hover:border-black">
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg sm:text-xl md:text-2xl font-sans tracking-wide font-semibold">
                        {experience.title}
                      </CardTitle>
                      <p className="text-sm sm:text-base text-gray-600">
                        {experience.company}
                      </p>
                    </CardHeader>
                    <CardContent className="flex-1 p-4">
                      <CardDescription className="text-sm sm:text-base mb-3 text-gray-700">
                        {experience.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-1.5">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-black/10 text-black text-[13px] sm:text-[14px] px-2 py-0.5 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 mt-auto">
                      <Link href={experience.link} className="w-full">
                        <Button className="w-full text-xs sm:text-sm group relative overflow-hidden bg-white/10 border-2 border-black text-black backdrop-blur-lg hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
                          <span className="flex items-center gap-2">
                            {experience.duration}
                            <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" />
                          </span>
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden sm:flex justify-center">
            <CarouselPrevious className="mr-2" />
            <CarouselNext className="ml-2" />
          </div>
        </Carousel>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
      >
        <Button className="group bg-transparent text-black hover:text-white rounded-xl hover:bg-black text-base sm:text-lg md:text-xl font-sans px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 flex items-center gap-2 border-2 border-black transition-all duration-300 ease-in-out">
          View Full Resume
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </motion.div>
    </div>
  );
};

export default WorkExperienceSection;
