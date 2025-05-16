"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { navItems } from "@/config/marginals/navbar/Data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Add scroll event listener with improved smoothness
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (isOpen) {
      // Lock scrolling using a class
      document.documentElement.classList.add("overflow-hidden");
      document.body.classList.add("overflow-hidden");
    } else {
      // Restore scrolling
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-50">
      {/* Fixed overlay for mobile menu background */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white  z-30 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.2, ease: "easeOut" }}
        className="fixed w-full z-40"
      >
        <motion.div
          animate={{
            backgroundColor: isOpen
              ? "rgba(255, 255, 255, 1)"
              : scrolled
                ? "rgba(255, 255, 255, 1)"
                : "rgba(255, 255, 255, 0)",
            borderBottom:
              isOpen || scrolled
                ? "1.5px solid black"
                : "0px solid transparent",
            boxShadow: isOpen || scrolled ? "0 4px 0 rgba(0, 0, 0, 1)" : "none", // Reduced from 5px to 4px
          }}
          transition={{ duration: 0.3 }}
          className="flex justify-between items-center py-3 sm:py-4 md:py-6 px-3 sm:px-5 md:px-6 lg:px-10 xl:px-14 mx-auto" // Reduced padding
        >
          {/* Logo/Brand - Left Side - Smaller on mobile */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="relative group">
                <div className="absolute inset-0 bg-yellow-400 border-[2px] sm:border-[3px] border-black translate-x-1 translate-y-1 sm:translate-x-1.5 sm:translate-y-1.5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 sm:group-hover:translate-x-1 sm:group-hover:translate-y-1 rounded-md"></div>
                <Button
                  variant="ghost"
                  className="relative border-[2px] sm:border-[3px] border-black bg-white text-black hover:bg-white hover:text-black font-heading text-base sm:text-lg 2xl:text-xl font-bold transition-transform group-hover:translate-x-[-0.5px] group-hover:translate-y-[-0.5px] sm:group-hover:translate-x-1 sm:group-hover:translate-y-1 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 h-auto rounded-md" // Reduced font size and padding
                >
                  Dhruti&apos;s Folio
                </Button>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden xl:flex items-center space-x-3 justify-end">
            {" "}
            {/* Reduced spacing */}
            {navItems.map((item) => (
              <Link href={item.href} key={item.label}>
                <span className="relative group py-1.5 px-0.5 sm:py-2 sm:px-1">
                  <div
                    className={`absolute inset-0 ${
                      pathname === item.href ? item.color : "bg-transparent"
                    } 
                    border-b-[2px] sm:border-b-[3px] border-black ${
                      pathname === item.href ? "opacity-100" : "opacity-0"
                    } 
                    transition-opacity group-hover:opacity-100 rounded-t-md`}
                  ></div>
                  <Button
                    variant="link"
                    className="relative z-10 text-sm sm:text-base xl:text-md 2xl:text-lg font-bold font-heading no-underline hover:no-underline tracking-wide text-black px-2 sm:px-3 py-1 h-auto rounded-md" // Reduced font size and padding
                  >
                    {item.label.toUpperCase()}
                  </Button>
                  {pathname === item.href && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-1 bg-black rounded-md"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </span>
              </Link>
            ))}
            {/* CTA Button */}
            {/* CTA Button */}
            <div className="relative group ml-2 sm:ml-3 md:ml-4">
              <div className="absolute inset-0 bg-blue-400 border-[2px] sm:border-[3px] border-black translate-x-1 translate-y-1 sm:translate-x-1.5 sm:translate-y-1.5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 sm:group-hover:translate-x-1 sm:group-hover:translate-y-1 rounded-md"></div>
              <Button
                variant="ghost"
                asChild
                className="relative border-[2px] sm:border-[3px] border-black bg-white text-black hover:bg-white hover:text-black font-heading text-base sm:text-lg 2xl:text-xl font-bold transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 sm:group-hover:translate-x-1 sm:group-hover:translate-y-1 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 h-auto rounded-md"
              >
                <a
                  href="https://drive.google.com/file/d/1efqkQcsCmYWHZEtpHKs-pAL9KiwOIqh0/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Hamburger Button - Right Side - Smaller on mobile */}
          <div className="xl:hidden">
            <div className="relative group">
              <div
                className={`absolute inset-0 ${
                  isOpen ? "bg-red-400" : "bg-green-400"
                } border-[2px] sm:border-[3px] border-black translate-x-1 translate-y-1 sm:translate-x-1.5 sm:translate-y-1.5 transition-transform rounded-md`}
              ></div>
              <Button
                variant="ghost"
                size="icon"
                className="relative border-[2px] sm:border-[3px] border-black bg-white text-black hover:bg-white hover:text-black flex items-center justify-center p-1.5 sm:p-2 h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-md" // Reduced button size
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />{" "}
                      {/* Reduced icon size */}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />{" "}
                      {/* Reduced icon size */}
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Mobile Menu with fixed positioning - Optimized for smaller screens */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                duration: 0.1,
                opacity: { duration: 0.2 },
                height: { duration: 0.3 },
              }}
              className="xl:hidden bg-white fixed top-[52px] sm:top-[64px] md:top-[78px] inset-x-0 overflow-auto z-40" // Adjusted for smaller header heights
              style={{
                maxHeight: "calc(100vh - 52px)", // Adjusted for smaller mobile header height
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.1, duration: 0.2 }}
                className="flex items-center justify-center py-12 sm:py-14 md:py-16" // Reduced padding
              >
                <div className="flex flex-col pt-10 sm:pt-6 md:pt-4 lg:pt-0 space-y-6 items-center justify-center w-full px-3 xs:px-4 sm:px-6 max-w-md mx-auto align-items">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.08, duration: 0.3 }}
                      className="w-5/6"
                    >
                      <Link href={item.href} onClick={() => setIsOpen(false)}>
                        <div className="relative group w-full ">
                          <div
                            className={`absolute inset-0 ${
                              item.color
                            } border-[2px] sm:border-[3px] border-black translate-x-1.5 translate-y-1.5 sm:translate-x-2 rounded-md sm:translate-y-2 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 sm:group-hover:translate-x-1 sm:group-hover:translate-y-1 ${
                              pathname === item.href
                                ? "opacity-100"
                                : "opacity-75"
                            }`}
                          ></div>
                          <Button
                            variant="ghost"
                            className="relative w-full border-[2px] sm:border-[3px] border-black bg-white text-black hover:bg-white hover:text-black text-base xs:text-lg sm:text-xl md:text-2xl font-bold font-heading transition-transform group-hover:translate-x-[-0.5px] group-hover:translate-y-[-0.5px] sm:group-hover:translate-x-[-1px] sm:group-hover:translate-y-[-1px] py-1.5 sm:py-2 md:py-3 h-auto rounded-md" // Reduced font size and padding
                          >
                            {item.label.toUpperCase()}
                          </Button>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                  {/* Mobile Resume Button - Smaller for mobile */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 + navItems.length * 0.08,
                      duration: 0.3,
                    }}
                    className="w-full mt-1 sm:mt-2 md:mt-4 items-center flex flex-col justify-center align-items" // Reduced margin
                  >
                    <div className="relative group w-5/6">
                      <div className="absolute inset-0 bg-blue-400 border-[2px] sm:border-[3px] border-black translate-x-1.5 translate-y-1.5 rounded-md sm:translate-x-2 sm:translate-y-2 transition-transform group-hover:translate-x-1 group-hover:translate-y-1 sm:group-hover:translate-x-1.5 sm:group-hover:translate-y-1.5"></div>
                      <Button className="relative w-full border-[2px] sm:border-[3px] border-black bg-white text-black hover:bg-white hover:text-black text-base xs:text-lg sm:text-lg md:text-2xl font-bold font-heading transition-transform group-hover:translate-x-[-1px] group-hover:translate-y-[-1px] sm:group-hover:translate-x-[-1.5px] sm:group-hover:translate-y-[-1.5px] py-1 xs:py-1.5 sm:py-2 md:py-3 h-auto rounded-md">
                        <a
                          href="https://drive.google.com/file/d/1efqkQcsCmYWHZEtpHKs-pAL9KiwOIqh0/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          RESUME
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;
