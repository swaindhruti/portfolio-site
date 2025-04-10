"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Linkedin,
  Github,
  Mail,
  Twitter,
  RssIcon,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Colors matching the Vanta fog theme
  const vantaColors = {
    highlight: "rgba(179, 229, 252, 0.7)", // Light blue (0xb3e5fc)
    midtone: "rgba(225, 245, 254, 0.7)", // Lighter blue (0xe1f5fe)
    lowlight: "rgba(255, 255, 255, 0.7)", // White (0xffffff)
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex justify-between items-center relative min-h-screen w-full pt-8"
    >
      <div className="flex flex-col lg:flex-row items-center justify-around min-h-screen px-4 sm:px-6 md:px-8 lg:px-10 w-full overflow-y-auto">
        {/* Photo and Quote Section (Top for mobile, Right for desktop) */}
        <div className="flex flex-col items-center lg:order-2 w-full lg:w-auto mt-16 lg:mt-0">
          <motion.div
            className="relative w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] md:w-[300px] md:h-[300px] lg:w-[320px] lg:h-[320px] xl:w-[380px] xl:h-[380px] mb-4 rounded-2xl overflow-hidden"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              scale: 1.03,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <Image
              src="https://res.cloudinary.com/dhv234qct/image/upload/v1742043916/dssd/qzroz3gheyhau13ccgk4.png"
              alt="Dhrutinandan Portrait"
              fill
              className="object-cover rounded-2xl"
            />
            {/* Foggy overlay effect - fixed to match image exactly */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                backdropFilter: isHovered ? "blur(6px)" : "blur(0px)",
              }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex items-center justify-center rounded-2xl"
              style={{
                background: isHovered
                  ? "linear-gradient(135deg, rgba(179,229,252,0.3), rgba(225,245,254,0.3), rgba(179,229,252,0.3))"
                  : "transparent",
              }}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: isHovered ? 0 : 20,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-center px-6 py-3 backdrop-blur-sm bg-white/30 rounded-lg border border-white/50"
              >
                <p className="text-black text-base sm:text-lg md:text-xl font-medium font-sans tracking-wide">
                  Fun fact: I&apos;m a mining engineer
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative backdrop-blur-sm border-2 border-black/50 p-4 rounded-xl w-[250px] sm:w-[280px] md:w-[300px] lg:w-[320px] xl:w-[380px] overflow-hidden"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            style={{
              background: `linear-gradient(120deg, ${vantaColors.highlight}, ${vantaColors.midtone}, ${vantaColors.lowlight})`,
            }}
          >
            <p className="text-black text-base sm:text-lg md:text-xl italic font-sans font-medium tracking-wide text-center z-10 relative">
              &quot;Building digital experiences that blend creativity with
              functionality.&quot;
            </p>

            {/* Soft floating particles as default */}
            <motion.div
              className="absolute w-6 h-6 rounded-full bg-white/20 blur-sm"
              initial={{ x: -20, y: 0, opacity: 0 }}
              animate={{
                x: 100,
                y: -20,
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute w-4 h-4 rounded-full bg-white/20 blur-sm"
              initial={{ x: 100, y: 30, opacity: 0 }}
              animate={{
                x: -30,
                y: 10,
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
            <motion.div
              className="absolute right-0 bottom-0 w-5 h-5 rounded-full bg-white/20 blur-sm"
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{
                x: -60,
                y: -30,
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: 0.2,
              }}
            />
          </motion.div>
        </div>

        {/* Text Content Section (Bottom for mobile, Left for desktop) */}
        <div className="max-w-xl lg:max-w-2xl lg:order-1 mt-6 lg:mt-0 px-3">
          <h1 className="font-borel text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-normal sm:leading-normal md:leading-normal xl:leading-[1.3] text-center lg:text-left">
            Hi, I am Dhrutinandan
          </h1>
          <motion.h4
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-sans font-medium tracking-wide leading-relaxed text-center lg:text-left mt-3 lg:mt-4"
          >
            I&apos;m a Full Stack Developer passionate about creating
            user-centered applications. I transform ideas into elegant,
            functional web experiences.
          </motion.h4>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start mt-6 lg:mt-8 space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6"
          >
            <Button className="bg-transparent text-black rounded-xl hover:bg-black hover:text-white text-lg md:text-xl font-sans px-4 py-5 md:px-5 md:py-6 flex items-center gap-2 border-2 border-black transition-all duration-300 ease-in-out w-full sm:w-auto">
              <div className="flex items-center gap-2 group">
                <span>Contact Me</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Button>
            <Button className="bg-black text-white rounded-xl hover:bg-transparent hover:text-black text-lg md:text-xl font-sans px-4 py-5 md:px-5 md:py-6 flex items-center gap-2 border-2 border-black transition-all duration-300 ease-in-out w-full sm:w-auto">
              See My Resume
            </Button>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 pt-5 mt-5"
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="border-2 border-black p-2 rounded-xl hover:bg-black hover:text-white"
            >
              <Github size={22} className="md:w-[26px] md:h-[26px]" />
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="border-2 border-black p-2 rounded-xl hover:bg-black hover:text-white"
            >
              <Twitter size={22} className="md:w-[26px] md:h-[26px]" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="border-2 border-black p-2 rounded-xl hover:bg-black hover:text-white"
            >
              <Linkedin size={22} className="md:w-[26px] md:h-[26px]" />
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="border-2 border-black p-2 rounded-xl hover:bg-black hover:text-white"
            >
              <RssIcon size={22} className="md:w-[26px] md:h-[26px]" />
            </motion.a>
            <motion.a
              href="mailto:example@email.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="border-2 border-black p-2 rounded-xl hover:bg-black hover:text-white"
            >
              <Mail size={22} className="md:w-[26px] md:h-[26px]" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
