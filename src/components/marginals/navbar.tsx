"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

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

  const navItems = [
    { label: "Home", href: "/", color: "bg-yellow-400" },
    { label: "Projects", href: "/projects", color: "bg-blue-400" },
    { label: "Experience", href: "/experience", color: "bg-red-400" },
    { label: "Community", href: "/community", color: "bg-green-400" },
    { label: "Blogs", href: "/blogs", color: "bg-purple-400" },
    { label: "Contact", href: "/contact", color: "bg-pink-400" },
  ];

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
            className="fixed inset-0 bg-black/30 z-30 lg:hidden"
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
              ? "rgba(255, 255, 255, 0.98)"
              : "rgba(255, 255, 255, 0)",
            borderBottom:
              isOpen || scrolled ? "3px solid black" : "0px solid transparent",
            boxShadow:
              isOpen || scrolled ? "5px 5px 0 rgba(0, 0, 0, 1)" : "none",
          }}
          transition={{ duration: 0.3 }}
          className="flex justify-between items-center py-4 sm:py-5 px-4 sm:px-8 md:px-12 lg:px-16 mx-auto"
        >
          {/* Logo/Brand - Left Side */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="relative group">
                <div className="absolute inset-0 bg-yellow-400 border-[3px] border-black translate-x-2 translate-y-2 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
                <Button
                  variant="ghost"
                  className="relative border-[3px] border-black bg-white text-black hover:bg-white hover:text-black font-heading text-xl sm:text-2xl font-bold transition-transform group-hover:translate-x-[-1px] group-hover:translate-y-[-1px] px-5 py-2 h-auto"
                >
                  Dhruti&apos;s Folio
                </Button>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4 justify-end">
            {navItems.map((item) => (
              <Link href={item.href} key={item.label}>
                <span className="relative group py-2 px-1">
                  <div
                    className={`absolute inset-0 ${
                      pathname === item.href ? item.color : "bg-transparent"
                    } 
                    border-b-[3px] border-black ${
                      pathname === item.href ? "opacity-100" : "opacity-0"
                    } 
                    transition-opacity group-hover:opacity-100`}
                  ></div>
                  <Button
                    variant="link"
                    className="relative z-10 text-base xl:text-lg font-bold font-heading no-underline hover:no-underline tracking-wide text-black px-3 py-1 h-auto"
                  >
                    {item.label.toUpperCase()}
                  </Button>
                  {pathname === item.href && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-1 bg-black"
                      layoutId="navIndicator"
                    />
                  )}
                </span>
              </Link>
            ))}

            {/* CTA Button */}
            <div className="relative group ml-4">
              <div className="absolute inset-0 bg-blue-400 border-[3px] border-black translate-x-2 translate-y-2 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
              <Button className="relative border-[3px] border-black bg-white text-black hover:bg-white hover:text-black font-heading text-sm font-bold transition-transform group-hover:translate-x-[-1px] group-hover:translate-y-[-1px] px-6 py-2 h-auto">
                RESUME
              </Button>
            </div>
          </div>

          {/* Mobile Hamburger Button - Right Side */}
          <div className="lg:hidden">
            <div className="relative group">
              <div
                className={`absolute inset-0 ${
                  isOpen ? "bg-red-400" : "bg-green-400"
                } border-[3px] border-black translate-x-2 translate-y-2 transition-transform`}
              ></div>
              <Button
                variant="ghost"
                size="icon"
                className="relative border-[3px] border-black bg-white text-black hover:bg-white hover:text-black flex items-center justify-center p-2 h-12 w-12"
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
                      <X className="w-6 h-6 sm:w-7 sm:h-7" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Mobile Menu with fixed positioning */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                duration: 0.3,
                opacity: { duration: 0.2 },
                height: { duration: 0.3 },
              }}
              className="lg:hidden bg-white fixed top-[68px] sm:top-[76px] inset-x-0 overflow-hidden z-40 border-b-[3px] border-black"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.1, duration: 0.2 }}
                className="flex items-center justify-center h-full py-10"
              >
                <div className="flex flex-col space-y-6 sm:space-y-8 md:space-y-10 items-center justify-center w-full px-8 max-w-md mx-auto">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.1, duration: 0.3 }}
                      className="w-full"
                    >
                      <Link href={item.href} onClick={() => setIsOpen(false)}>
                        <div className="relative group w-full">
                          <div
                            className={`absolute inset-0 ${
                              item.color
                            } border-[3px] border-black translate-x-2 translate-y-2 transition-transform group-hover:translate-x-1 group-hover:translate-y-1 ${
                              pathname === item.href
                                ? "opacity-100"
                                : "opacity-75"
                            }`}
                          ></div>
                          <Button
                            variant="ghost"
                            className="relative w-full border-[3px] border-black bg-white text-black hover:bg-white hover:text-black text-xl sm:text-2xl font-bold font-heading transition-transform group-hover:translate-x-[-1px] group-hover:translate-y-[-1px] py-3 h-auto"
                          >
                            {item.label.toUpperCase()}
                          </Button>
                        </div>
                      </Link>
                    </motion.div>
                  ))}

                  {/* Mobile Resume Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 + navItems.length * 0.1,
                      duration: 0.3,
                    }}
                    className="w-full mt-4"
                  >
                    <div className="relative group w-full">
                      <div className="absolute inset-0 bg-blue-400 border-[3px] border-black translate-x-3 translate-y-3 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"></div>
                      <Button className="relative w-full border-[3px] border-black bg-white text-black hover:bg-white hover:text-black text-xl sm:text-2xl font-bold font-heading transition-transform group-hover:translate-x-[-1.5px] group-hover:translate-y-[-1.5px] py-3 h-auto">
                        RESUME
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
