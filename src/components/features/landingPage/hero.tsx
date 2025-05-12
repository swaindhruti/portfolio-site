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
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);

  // Icons with labels and colors
  const socialIcons = [
    {
      icon: <Github size={20} />,
      href: "https://github.com",
      label: "GitHub",
      color: "bg-purple-400",
    },
    {
      icon: <Twitter size={20} />,
      href: "https://twitter.com",
      label: "Twitter",
      color: "bg-blue-400",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com",
      label: "LinkedIn",
      color: "bg-yellow-400",
    },
    {
      icon: <RssIcon size={20} />,
      href: "/blog",
      label: "Blog",
      color: "bg-green-400",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:example@email.com",
      label: "Email",
      color: "bg-red-400",
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Main container with entry animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center w-full min-h-screen px-4 sm:px-8 md:px-12 py-16"
      >
        {/* Text content container - centered */}
        <div className="w-full max-w-6xl flex flex-col items-center text-center pb-12 sm:pb-10">
          {/* Name with neo-brutalist styling matching buttons */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mb-8 sm:mb-10 md:mb-12 w-full max-w-2xl"
            onMouseEnter={() => setHoveredButton("name")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <div className="absolute inset-0 bg-green-400 border-[2px] sm:border-[3px] border-black translate-x-1.5 sm:translate-x-2 translate-y-1.5 sm:translate-y-2 transition-transform duration-200 rounded-md"></div>
            <div
              className={`
                relative 
                bg-white
                border-[2px]
                sm:border-[3px]
                border-black
                rounded-md
                px-4
                sm:px-6
                md:px-8 
                py-3
                sm:py-4
                md:py-5
                transition-all
                duration-200
                ${hoveredButton === "name" ? "translate-x-1 translate-y-1" : ""}
              `}
            >
              <h1 className="font-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black">
                Hi, I&apos;m Dhrutinandan
              </h1>
            </div>
          </motion.div>

          {/* Description block */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative mb-8 sm:mb-10 md:mb-12 w-full max-w-full"
          >
            <h4 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-code leading-relaxed text-black px-2 xs:px-4 sm:px-6 py-2 sm:py-3 md:py-4">
              I&apos;m a Full Stack Developer passionate about creating
              user-centered applications. I transform ideas into elegant,
              functional web experiences.
            </h4>
          </motion.div>

          {/* Action buttons with minimal neo-brutalist styling */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12 w-full max-w-lg justify-center"
          >
            {/* Contact button */}
            <div
              className="relative group w-full sm:w-1/2"
              onMouseEnter={() => setHoveredButton("contact")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <div className="absolute inset-0 bg-yellow-400 border-[2px] sm:border-[3px] border-black translate-x-1.5 sm:translate-x-2 translate-y-1.5 sm:translate-y-2 transition-transform duration-200 rounded-md"></div>
              <Button
                className={`
                  relative
                  bg-white 
                  hover:bg-white
                  text-black 
                  border-[2px]
                  sm:border-[3px] 
                  border-black 
                  rounded-md 
                  text-sm
                  xs:text-base
                  sm:text-lg 
                  font-heading 
                  font-bold
                  uppercase 
                  tracking-wide
                  px-4 
                  sm:px-6 
                  py-3
                  sm:py-4
                  md:py-6
                  h-auto
                  w-full
                  transition-all 
                  duration-200
                  ${
                    hoveredButton === "contact"
                      ? "translate-x-1 translate-y-1"
                      : ""
                  }
                `}
              >
                <span className="flex items-center justify-center gap-2">
                  Contact Me
                  <ArrowRight
                    className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${
                      hoveredButton === "contact" ? "translate-x-1" : ""
                    }`}
                  />
                </span>
              </Button>
            </div>

            {/* Resume button */}
            <div
              className="relative group w-full sm:w-1/2"
              onMouseEnter={() => setHoveredButton("resume")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <div className="absolute inset-0 bg-black border-[2px] sm:border-[3px] border-black translate-x-1.5 sm:translate-x-2 translate-y-1.5 sm:translate-y-2 transition-transform duration-200 rounded-md"></div>
              <Button
                className={`
                  relative
                  bg-white
                  hover:bg-white
                  text-black
                  border-[2px]
                  sm:border-[3px] 
                  border-black 
                  rounded-md 
                  text-sm
                  xs:text-base
                  sm:text-lg 
                  font-heading 
                  font-bold
                  uppercase 
                  tracking-wide
                  px-4
                  sm:px-6
                  py-3
                  sm:py-4
                  md:py-6
                  h-auto
                  w-full
                  transition-all 
                  duration-200
                  ${
                    hoveredButton === "resume"
                      ? "translate-x-1 translate-y-1"
                      : ""
                  }
                `}
              >
                <span>See My Resume</span>
              </Button>
            </div>
          </motion.div>

          {/* Social icons with colorful neo-brutalist styling - smaller on mobile */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex justify-center flex-wrap gap-3 sm:gap-4 md:gap-6"
          >
            {socialIcons.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                onMouseEnter={() => setHoveredIcon(index)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <div
                  className={`absolute inset-0 ${
                    item.color
                  } border-[2px] sm:border-[3px] border-black translate-x-1.5 sm:translate-x-2 translate-y-1.5 sm:translate-y-2 transition-transform duration-200 rounded-md ${
                    hoveredIcon === index ? "translate-x-1 translate-y-1" : ""
                  }`}
                ></div>
                <div
                  className={`
                    relative
                    bg-white
                    border-[2px]
                    sm:border-[3px]
                    rounded-md
                    border-black
                    p-2
                    sm:p-2.5
                    md:p-3.5
                    transition-all
                    duration-200
                    ${
                      hoveredIcon === index ? "translate-x-1 translate-y-1" : ""
                    }
                  `}
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 flex items-center justify-center">
                    {item.icon}
                  </div>

                  {/* Simplified label popup on hover - positioned better for mobile */}
                  <div
                    className={`
                      absolute 
                      top-16
                      sm:top-20
                      left-1/2 
                      -translate-x-1/2 
                      bg-black 
                      text-white 
                      font-heading 
                      text-xs
                      sm:text-sm
                      py-0.5
                      rounded-md
                      sm:py-1
                      px-2
                      sm:px-3
                      border-[2px]
                      border-black
                      pointer-events-none
                      transition-opacity duration-200
                      ${hoveredIcon === index ? "opacity-100" : "opacity-0"}
                      z-10
                    `}
                  >
                    {item.label}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Minimal scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex-col items-center hidden md:flex"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-yellow-400 border-[2px] border-black rounded-md translate-x-1 translate-y-1"></div>
            <div className="relative border-[2px] border-black bg-white p-1 rounded-md">
              <ChevronDown className="w-4 h-4 sm:w-7 sm:h-7" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
