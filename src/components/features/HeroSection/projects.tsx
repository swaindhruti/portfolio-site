"use client";

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
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Project 1",
    description: "Project 1 description",
    link: "/project-1",
    github: "/project-1",
  },
  {
    title: "Project 2",
    description: "Project 2 description",
    link: "/project-2",
    github: "/project-2",
  },
  {
    title: "Project 3",
    description: "Project 3 description",
    link: "/project-3",
    github: "/project-3",
  },
  {
    title: "Project 4",
    description: "Project 4 description",
    link: "/project-4",
    github: "/project-4",
  },
  {
    title: "Project 5",
    description: "Project 5 description",
    link: "/project-5",
    github: "/project-5",
  },
];

const ProjectSection = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 sm:space-y-10 md:space-y-12 px-4 sm:px-6 md:px-8 py-8 md:py-12">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="font-borel text-4xl sm:text-5xl md:text-6xl text-center"
      >
        Selected Projects
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
            {projects.map((project, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-full xs:basis-4/5 sm:basis-1/2 md:basis-1/3 lg:basis-1/3 xl:basis-1/4"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  className="h-full"
                >
                  <Card className="bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/30 transition-all duration-300 ease-in-out h-full">
                    <CardHeader>
                      <CardTitle className="text-lg sm:text-xl md:text-2xl">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-sm sm:text-base">
                        {project.description}
                      </CardDescription>
                      <CardFooter className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 justify-center p-0">
                        <Link href={project.link} className="w-full sm:w-auto">
                          <Button className="w-full text-sm sm:text-base md:text-lg lg:text-xl font-sans">
                            View Project
                          </Button>
                        </Link>
                        <Link
                          href={project.github}
                          className="w-full sm:w-auto"
                        >
                          <Button className="w-full text-sm sm:text-base md:text-lg lg:text-xl font-sans">
                            View Code
                          </Button>
                        </Link>
                      </CardFooter>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden lg:flex justify-center">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
      >
        <Button className="bg-transparent text-black hover:text-white rounded-xl hover:bg-black text-lg sm:text-xl md:text-2xl font-sans px-3 py-4 sm:px-4 sm:py-5 md:px-5 md:py-6 lg:px-6 lg:py-7 flex items-center gap-2 border-2 border-black transition-all duration-300 ease-in-out">
          See All Projects
        </Button>
      </motion.div>
    </div>
  );
};

export default ProjectSection;
