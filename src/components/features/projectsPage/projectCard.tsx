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
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  link: string;
  github: string;
  image: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: 0.1 }}
      className="h-full"
    >
      <Card className="bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/40 transition-all duration-300 ease-in-out flex flex-col border-2 border-black/10 hover:border-black overflow-hidden h-[400px] sm:h-[480px] lg:h-[500px]">
        {/* Fixed height image container */}
        <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px] overflow-hidden flex-shrink-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Content area with fixed structure */}
        <div className="flex flex-col flex-grow overflow-hidden">
          <CardHeader className="p-3 sm:p-4 md:p-5">
            <CardTitle className="text-base sm:text-lg md:text-xl font-sans line-clamp-2">
              {project.title}
            </CardTitle>
          </CardHeader>

          <CardContent className="p-3 sm:p-4 md:p-5 pt-0 flex-grow overflow-y-auto">
            <CardDescription className="text-xs sm:text-sm md:text-base font-sans">
              {project.description}
            </CardDescription>
          </CardContent>

          {/* Fixed position footer */}
          <CardFooter className="flex flex-col sm:flex-row gap-2 p-3 sm:p-4 md:p-5 flex-shrink-0">
            <Link href={project.link} className="w-full">
              <Button className="w-full bg-white/10 border-2 border-black text-black hover:bg-black hover:text-white rounded-lg text-xs sm:text-sm md:text-base py-1 sm:py-1.5 md:py-2 px-2 sm:px-3">
                <span className="flex items-center justify-center gap-1 font-sans">
                  View Project
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
            <Link href={project.github} className="w-full">
              <Button className="w-full bg-black border-2 border-black text-white hover:bg-white/10 hover:text-black rounded-lg text-xs sm:text-sm md:text-base py-1 sm:py-1.5 md:py-2 px-2 sm:px-3">
                <span className="flex items-center justify-center gap-1 font-sans">
                  GitHub
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
