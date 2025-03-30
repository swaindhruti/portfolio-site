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
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: 0.2 }}
      className="h-full"
    >
      <Card className="bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/40 transition-all duration-300 ease-in-out flex flex-col h-full overflow-hidden border-2 border-black/10 hover:border-black min-h-96">
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover border-b-black/10 hover:border-black transition-all duration-300 ease-in-out"
          />
        </div>
        <CardHeader className="pt-6 pb-0">
          <CardTitle className="text-xl lg:text-2xl font-sans">
            {project.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 pt-6 pb-6">
          <CardDescription className="text-base md:text-base font-sans">
            {project.description}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-3 xs:gap-6 justify-around p-6 mt-auto">
          <Link href={project.link} className="w-full">
            <Button className="w-full h-auto text-lg md:text-xl group relative overflow-hidden bg-white/10 border-2 border-black text-black backdrop-blur-lg hover:bg-black hover:text-white transition-all duration-300 ease-in-out py-2 sm:py-3 px-2 sm:px-3 rounded-xl">
              <span className="flex items-center justify-center gap-1 sm:gap-2 font-sans">
                View Project
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </Link>
          <Link href={project.github} className="w-full">
            <Button className="w-full h-auto text-lg md:text-xl group relative overflow-hidden bg-black border-2 border-black text-white hover:backdrop-blur-lg hover:bg-white/10 hover:text-black transition-all duration-300 ease-in-out py-2 sm:py-3 px-2 sm:px-3 rounded-xl">
              <span className="flex items-center justify-center gap-1 sm:gap-2 font-sans">
                GitHub
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
