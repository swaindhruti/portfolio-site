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
      href: "https://github.com/swaindhruti",
      label: "GitHub",
      color: "bg-purple-400",
    },
    {
      icon: <Twitter size={20} />,
      href: "https://twitter.com/D_SwainX",
      label: "Twitter",
      color: "bg-blue-400",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/dhrutinandan",
      label: "LinkedIn",
      color: "bg-yellow-400",
    },
    {
      icon: <RssIcon size={20} />,
      href: "/blogs",
      label: "Blog",
      color: "bg-green-400",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:dhrutinandan.dev@email.com",
      label: "Email",
      color: "bg-red-400",
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden -top-6 sm:top-0">
      {/* Main container with entry animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center w-full min-h-screen px-4 sm:px-8 md:px-12 py-12 md:py-16 sm:pt-20"
      >
        {/* Text content container - centered */}
        <div className="w-full max-w-5xl flex flex-col items-center text-center pb-8 sm:pb-10 sm:pt-12">
          {/* Name with neo-brutalist styling matching buttons */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mb-6 sm:mb-8 md:mb-10 w-full max-w-xl lg:max-w-2xl"
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
                sm:px-5
                md:px-7 
                py-2.5
                sm:py-3
                md:py-4
                transition-all
                duration-200
                ${hoveredButton === "name" ? "translate-x-2 translate-y-2" : ""}
              `}
            >
              <h1 className="font-heading tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                Hi, I&apos;m Dhrutinandan
              </h1>
            </div>
          </motion.div>

          {/* Description block */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative mb-6 sm:mb-8 md:mb-10 w-full max-w-full"
          >
            <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-code leading-relaxed text-black px-2 xs:px-3 sm:px-4 py-1.5 sm:py-2 md:py-3">
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
            className="flex gap-3 sm:gap-4 mb-8 md:mb-10 max-w-md justify-center"
          >
            {/* Contact button */}
            <div
              className="relative group sm:w-1/2"
              onMouseEnter={() => setHoveredButton("contact")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <div className="absolute inset-0 bg-yellow-400 border-[2px] sm:border-[3px] border-black translate-x-1.5 sm:translate-x-2 translate-y-1.5 sm:translate-y-2 transition-transform duration-200 rounded-md"></div>
              <Button
                asChild
                className={`
                  bg-white  
                  relative 
                  hover:bg-white 
                  text-black  
                  border-[2px] 
                  sm:border-[3px]  
                  border-black  
                  rounded-md  
                  text-sm 
                  sm:text-base  
                  font-heading  
                  font-bold 
                  uppercase  
                  tracking-wide 
                  px-3  
                  sm:px-5
                  py-2 
                  sm:py-2.5 
                  md:py-3.5 
                  h-auto 
                  transition-all  
                  duration-200
                  ${
                    hoveredButton === "contact"
                      ? "translate-x-2 translate-y-2"
                      : ""
                  }
                `}
              >
                <a href="/contact">
                  <span className="flex items-center justify-center gap-1.5">
                    Contact Me
                    <ArrowRight
                      className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 ${
                        hoveredButton === "contact" ? "translate-x-1" : ""
                      }`}
                    />
                  </span>
                </a>
              </Button>
            </div>

            {/* Resume button */}
            <div
              className="relative group w-full sm:w-1/2"
              onMouseEnter={() => setHoveredButton("resume")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <div className="absolute inset-0 bg-orange-400 border-[2px] sm:border-[3px] border-black translate-x-1.5 sm:translate-x-2 translate-y-1.5 sm:translate-y-2 transition-transform duration-200 rounded-md"></div>
              <Button
                asChild
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
                  sm:text-base  
                  font-heading  
                  font-bold 
                  uppercase  
                  tracking-wide 
                  px-3 
                  sm:px-4 
                  py-2 
                  sm:py-2.5 
                  md:py-3.5 
                  h-auto 
                  w-full 
                  transition-all  
                  duration-200
                  ${
                    hoveredButton === "resume"
                      ? "translate-x-2 translate-y-2"
                      : ""
                  }
                `}
              >
                <a
                  href="https://drive.google.com/drive/folders/1gU87SBkf4GzEflajoTUE1eukY8uusyxK?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center justify-center gap-1.5">
                    See My Resume
                    <ArrowRight
                      className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 ${
                        hoveredButton === "resume" ? "translate-x-1" : ""
                      }`}
                    />
                  </span>
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Social icons with colorful neo-brutalist styling - smaller on mobile */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex justify-center flex-wrap gap-3 md:gap-5"
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
                  className={`
                    absolute 
                    inset-0 
                    ${item.color} 
                    border-[2px] 
                    border-black 
                    translate-x-1 
                    sm:translate-x-1.5 
                    translate-y-1 
                    sm:translate-y-1.5 
                    transition-transform 
                    duration-200 
                    rounded-md 
                    ${
                      hoveredIcon === index
                        ? "translate-x-0.5 translate-y-0.5"
                        : ""
                    }
                  `}
                ></div>
                <div
                  className={`
                    relative
                    bg-white
                    border-[2px]
                    rounded-md
                    border-black
                    p-1.5
                    sm:p-2
                    md:p-2.5
                    transition-all
                    duration-200
                    ${
                      hoveredIcon === index
                        ? "translate-x-1.5 translate-y-1.5"
                        : ""
                    }
                  `}
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    {item.icon}
                  </div>

                  {/* Simplified label popup on hover - positioned better for mobile */}
                  <div
                    className={`
                      absolute 
                      top-12
                      sm:top-16
                      left-1/2 
                      -translate-x-1/2 
                      bg-black 
                      text-white 
                      font-heading 
                      text-[10px]
                      sm:text-[14px]
                      tracking-wide
                      py-0.5
                      rounded-md
                      px-1.5
                      sm:px-2
                      border-[1px]
                      sm:border-[2px]
                      border-black
                      pointer-events-none
                      transition-opacity duration-200
                      ${hoveredIcon === index ? "opacity-100" : "opacity-0"}
                      z-10
                      whitespace-nowrap
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
          className="absolute bottom-16 sm:bottom-6 left-1/2 -translate-x-1/2 flex-col items-center"
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-yellow-400 border-[1px] sm:border-[2px] border-black rounded-md translate-x-1 translate-y-1"></div>
            <div className="relative border-[1px] sm:border-[2px] border-black bg-white p-1 rounded-md">
              <ChevronDown className="w-3 h-3 sm:w-5 sm:h-5" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
