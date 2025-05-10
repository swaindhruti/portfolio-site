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
      icon: <Github size={24} />,
      href: "https://github.com",
      label: "GitHub",
      color: "bg-purple-400",
    },
    {
      icon: <Twitter size={24} />,
      href: "https://twitter.com",
      label: "Twitter",
      color: "bg-blue-400",
    },
    {
      icon: <Linkedin size={24} />,
      href: "https://linkedin.com",
      label: "LinkedIn",
      color: "bg-yellow-400",
    },
    {
      icon: <RssIcon size={24} />,
      href: "/blog",
      label: "Blog",
      color: "bg-green-400",
    },
    {
      icon: <Mail size={24} />,
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
        <div className="w-full max-w-6xl flex flex-col items-center text-center">
          {/* Name with subtle frame */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mb-12"
          >
            <div className="absolute -left-2 -right-2 -top-2 bottom-0 bg-green-400 border-[3px] border-black -z-10"></div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-black px-8 py-5 bg-white border-[3px] border-black">
              Hi, I&apos;m Dhrutinandan
            </h1>
          </motion.div>

          {/* Description block */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative mb-12 w-full max-w-full"
          >
            <h4 className="text-lg sm:text-xl md:text-2xl font-code leading-relaxed text-black px-6 py-4">
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
            className="flex flex-col sm:flex-row gap-6 mb-12 w-full max-w-lg justify-center"
          >
            {/* Contact button */}
            <div
              className="relative group w-full sm:w-1/2"
              onMouseEnter={() => setHoveredButton("contact")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <div className="absolute inset-0 bg-yellow-400 border-[3px] border-black translate-x-2 translate-y-2 transition-transform duration-200"></div>
              <Button
                className={`
                  relative
                  bg-white 
                  hover:bg-white
                  text-black 
                  border-[3px] 
                  border-black 
                  rounded-none 
                  text-lg 
                  font-heading 
                  font-bold
                  uppercase 
                  tracking-wide
                  px-6 
                  py-6
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
                    className={`w-5 h-5 transition-transform duration-300 ${
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
              <div className="absolute inset-0 bg-black border-[3px] border-black translate-x-2 translate-y-2 transition-transform duration-200"></div>
              <Button
                className={`
                  relative
                  bg-white
                  hover:bg-white
                  text-black
                  border-[3px] 
                  border-black 
                  rounded-none 
                  text-lg 
                  font-heading 
                  font-bold
                  uppercase 
                  tracking-wide
                  px-6 
                  py-6
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

          {/* Social icons with colorful neo-brutalist styling */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex justify-center flex-wrap gap-6"
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
                  } border-[3px] border-black translate-x-2 translate-y-2 transition-transform duration-200 ${
                    hoveredIcon === index ? "translate-x-1 translate-y-1" : ""
                  }`}
                ></div>
                <div
                  className={`
                    relative
                    bg-white
                    border-[3px]
                    border-black
                    p-3.5
                    transition-all
                    duration-200
                    ${
                      hoveredIcon === index ? "translate-x-1 translate-y-1" : ""
                    }
                  `}
                >
                  {item.icon}

                  {/* Simplified label popup on hover */}
                  <div
                    className={`
                      absolute 
                      -top-10
                      left-1/2 
                      -translate-x-1/2 
                      bg-black 
                      text-white 
                      font-heading 
                      text-sm
                      py-1 
                      px-3
                      border-[2px]
                      border-black
                      pointer-events-none
                      transition-opacity duration-200
                      ${hoveredIcon === index ? "opacity-100" : "opacity-0"}
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
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-yellow-400 border-[2px] border-black translate-x-1 translate-y-1"></div>
            <div className="relative border-[2px] border-black bg-white p-1">
              <ChevronDown className="w-5 h-5" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
