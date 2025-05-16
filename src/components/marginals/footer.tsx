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
  RssIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { footerLinks } from "@/config/marginals/footer/Data";

const Footer = () => {
  const getIconComponent = (type: string, size: number) => {
    switch (type) {
      case "Github":
        return <Github size={size} />;
      case "Twitter":
        return <Twitter size={size} />;
      case "Linkedin":
        return <Linkedin size={size} />;
      case "RssIcon":
        return <RssIcon size={size} />;
      case "Mail":
        return <Mail size={size} />;
      default:
        return null;
    }
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
    <footer className="w-full py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 lg:px-12 bg-white border-t-[3px] border-black relative">
      {/* Neo-brutalist accents */}
      <div className="absolute top-0 right-0 w-32 h-3 bg-yellow-400 border-l-[3px] border-b-[3px] border-black rounded-bl-md"></div>
      <div className="absolute top-0 left-0 w-24 h-3 bg-blue-400 border-r-[3px] border-b-[3px] border-black rounded-br-md"></div>

      <div className="max-w-7xl mx-auto">
        {/* Top section with scroll to top button */}
        <div className="flex justify-center mb-8">
          <div className="relative ">
            <div className="absolute inset-0 bg-green-400 border-[2px] border-black translate-x-1 translate-y-1 rounded-md transition-transform "></div>
            <motion.button
              onClick={scrollToTop}
              whileTap={{ scale: 0.95 }}
              className="relative border-[2px] border-black p-3 bg-white transition-transform hover:translate-x-1 hover:translate-y-1 rounded-md"
            >
              <ChevronUp size={24} className="text-black" />
            </motion.button>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {/* Left section - Logo and description */}
          <div className="text-center md:text-left">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-6 relative inline-block">
              Dhrutinandan Swain
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-black rounded-md"></div>
            </h2>
            <motion.div
              className="relative border-[3px] border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 w-12 h-3 bg-red-400 border-l-[3px] border-b-[3px] border-black rounded-bl-md"></div>
              <p className="text-black text-md font-medium font-sans leading-relaxed">
                Creating digital experiences that blend creativity with
                functionality.
              </p>
            </motion.div>
          </div>

          {/* Middle section - Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold font-heading mb-5 relative inline-block">
              QUICK LINKS
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-black rounded-md"></div>
            </h3>
            <div className="flex flex-col gap-4 items-center">
              {[
                { name: "Home", path: "/" },
                { name: "Projects", path: "/projects" },
                { name: "Experience", path: "/experience" },
                { name: "Contact", path: "/contact" },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  className="text-lg font-medium relative inline-block group"
                >
                  {link.name}
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform rounded-md"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Right section - Contact */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-xl font-bold font-heading mb-8 relative inline-block">
              GET IN TOUCH
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-black rounded-md"></div>
            </h3>

            <div className="relative group mb-6">
              <div className="absolute inset-0 bg-blue-400 border-[2px] border-black translate-x-1.5 translate-y-1.5 transition-transform group-hover:translate-x-1 group-hover:translate-y-1 rounded-md"></div>
              <Button className="relative border-[2px] border-black bg-white text-black hover:bg-white px-6 py-3 font-bold font-heading text-md flex items-center gap-2 transition-transform group-hover:translate-x-1 group-hover:translate-y-1 rounded-md">
                CONTACT ME
                <Send className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex gap-3 mt-3">
              {footerLinks.map((item) => (
                <div key={item.id} className="relative group">
                  <div
                    className={`absolute inset-0 ${item.color} border-[2px] border-black translate-x-1 translate-y-1 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 rounded-md`}
                  ></div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative border-[2px] border-black p-2 bg-white flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 rounded-md"
                  >
                    {getIconComponent(item.type, item.size)}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="border-t-[2px] border-black mt-10 pt-6 text-center">
          <p className="flex items-center justify-center gap-1 text-base">
            © {new Date().getFullYear()} Dhrutinandan. Made with{" "}
            <Heart size={16} className="text-red-500" fill="currentColor" /> All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
