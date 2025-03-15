"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex justify-between items-center fixed min-h-screen w-full pt-8"
    >
      <div className="flex items-center justify-around pmin-h-screen px-12 w-full ">
        <div className="max-w-4xl">
          <h1 className="font-borel text-8xl leading-snug">
            Hi, I am Dhrutinandan
          </h1>
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl sm:text-2xl font-sans font-medium tracking-wide leading-relaxed"
          >
            I&apos;m a Full Stack Developer passionate about creating
            user-centered applications. I transform ideas into elegant,
            functional web experiences.
          </motion.h4>

          <div className="flex items-center mt-12 space-x-12">
            <Button className="bg-transparent text-black rounded-xl hover:bg-black hover:text-white text-2xl font-sans px-5 py-7 flex items-center gap-2 border-2 border-black transition-all duration-300 ease-in-out">
              See My Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="bg-black text-white rounded-xl hover:bg-transparent hover:text-black text-2xl font-sans px-5 py-7 flex items-center gap-2 border-2 border-black transition-all duration-300 ease-in-out">
              Contact Me
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative w-[450px] h-[450px] mb-4">
            <Image
              src="https://res.cloudinary.com/dhv234qct/image/upload/v1742027610/dssd/u1n4mxsuueodo4qqekme.jpg"
              alt="Dhrutinandan Portrait"
              fill
              className="object-cover rounded-2xl hover:scale-105 transition-all duration-300 ease-in-out"
            />
          </div>
          <div className="bg-transparent border-2 border-black p-4 rounded-xl max-w-[450px]">
            <p className="text-black text-xl italic font-sans font-medium tracking-wide text-center">
              Building digital experiences that blend creativity with
              functionality.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
