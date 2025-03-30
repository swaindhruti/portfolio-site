"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Heart,
  ChevronUp,
  Mail,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const Footer = () => {
  // Colors matching the Vanta fog theme
  const vantaColors = {
    highlight: "rgba(179, 229, 252, 0.7)", // Light blue (0xb3e5fc)
    midtone: "rgba(225, 245, 254, 0.7)", // Lighter blue (0xe1f5fe)
    lowlight: "rgba(255, 255, 255, 0.7)", // White (0xffffff)
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
            <h3 className="text-xl md:text-2xl font-medium mb-4 font-sans">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3 items-center">
              <a
                href="#"
                className="text-lg hover:underline transition-all duration-300 font-sans tracking-wide"
              >
                Home
              </a>
              <a
                href="#"
                className="text-lg hover:underline transition-all duration-300 font-sans tracking-wide"
              >
                About
              </a>
              <a
                href="#"
                className="text-lg hover:underline transition-all duration-300 font-sans tracking-wide"
              >
                Projects
              </a>
              <a
                href="#"
                className="text-lg hover:underline transition-all duration-300 font-sans tracking-wide"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right section - Contact */}
          <div className="md:w-1/3 flex flex-col items-center md:items-end">
            <h3 className="text-xl md:text-2xl font-medium mb-4 font-sans">
              Get In Touch
            </h3>
            <Button className="group bg-black text-white rounded-xl hover:bg-transparent hover:text-black text-lg font-sans px-5 py-6 flex items-center gap-2 border-2 border-black transition-all duration-300 ease-in-out mb-6">
              Contact Me
              <Send className="transform transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <div className="flex gap-4 mt-2">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.1 }}
                className="border-2 border-black p-2 rounded-xl hover:bg-black hover:text-white transition-all duration-200"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.1 }}
                className="border-2 border-black p-2 rounded-xl hover:bg-black hover:text-white transition-all duration-200"
              >
                <Twitter size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.1 }}
                className="border-2 border-black p-2 rounded-xl hover:bg-black hover:text-white transition-all duration-200"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.1 }}
                className="border-2 border-black p-2 rounded-xl hover:bg-black hover:text-white transition-all duration-200"
              >
                <Mail size={24} />
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
      </div>
    </footer>
  );
};

export default Footer;
