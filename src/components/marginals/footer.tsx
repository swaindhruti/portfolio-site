"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Heart, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const Footer = () => {
  // Colors matching the Vanta fog theme
  const vantaColors = {
    highlight: "rgba(255, 211, 123, 0.7)", // Gold
    midtone: "rgba(255, 194, 189, 0.7)", // Soft pink
    lowlight: "rgba(206, 196, 255, 0.7)", // Lavender
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Reset scroll position on page load/refresh
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <footer className="w-full py-8 md:py-12 px-4 sm:px-8 md:px-12 mt-16 border-t border-black/10 bg-white/20 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto">
        {/* Top section with scroll to top button */}
        <div className="flex justify-center mb-8">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-black p-3 rounded-full hover:bg-black hover:text-white transition-all duration-300"
          >
            <ChevronUp size={28} />
          </motion.button>
        </div>

        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Left section - Logo and description */}
          <div className="md:w-1/3 text-center md:text-left">
            <h2 className="font-borel text-3xl md:text-4xl mb-4">
              Dhrutinandan Swain
            </h2>
            <motion.div
              className="relative backdrop-blur-sm border-2 border-black/50 p-4 rounded-xl overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              style={{
                background: `linear-gradient(120deg, ${vantaColors.highlight}, ${vantaColors.midtone}, ${vantaColors.lowlight})`,
              }}
            >
              <p className="text-black text-md md:text-lg font-sans tracking-wide z-10 relative">
                Creating digital experiences that blend creativity with
                functionality.
              </p>
            </motion.div>
          </div>

          {/* Middle section - Links */}
          <div className="md:w-1/3 flex flex-col items-center">
            <h3 className="text-xl md:text-2xl font-medium mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3 items-center">
              <a
                href="#"
                className="text-lg hover:underline transition-all duration-300"
              >
                Home
              </a>
              <a
                href="#"
                className="text-lg hover:underline transition-all duration-300"
              >
                About
              </a>
              <a
                href="#"
                className="text-lg hover:underline transition-all duration-300"
              >
                Projects
              </a>
              <a
                href="#"
                className="text-lg hover:underline transition-all duration-300"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right section - Contact */}
          <div className="md:w-1/3 flex flex-col items-center md:items-end">
            <h3 className="text-xl md:text-2xl font-medium mb-4">
              Get In Touch
            </h3>
            <Button className="bg-black text-white rounded-xl hover:bg-transparent hover:text-black text-lg font-sans px-5 py-6 flex items-center gap-2 border-2 border-black transition-all duration-300 ease-in-out mb-6">
              Contact Me
            </Button>
            <div className="flex gap-4 mt-2">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="border-2 border-black p-2 rounded-xl hover:bg-black hover:text-white transition-all duration-300"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="border-2 border-black p-2 rounded-xl hover:bg-black hover:text-white transition-all duration-300"
              >
                <Twitter size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="border-2 border-black p-2 rounded-xl hover:bg-black hover:text-white transition-all duration-300"
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom copyright section */}
        <motion.div
          className="border-t border-black/20 mt-8 pt-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="flex items-center justify-center gap-2 text-sm md:text-base">
            © {new Date().getFullYear()} Dhrutinandan. Made with{" "}
            <Heart size={16} className="text-red-500" /> All rights reserved.
          </p>
        </motion.div>

        {/* Floating particles for continuity with hero section */}
        <div className="relative">
          <motion.div
            className="absolute w-6 h-6 rounded-full bg-black/10 blur-sm bottom-0 left-1/4"
            animate={{
              y: [-15, 0, -15],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute w-4 h-4 rounded-full bg-black/10 blur-sm bottom-8 right-1/4"
            animate={{
              y: [-10, 5, -10],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 0.3,
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
