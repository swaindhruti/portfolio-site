"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener with improved smoothness
  useEffect(() => {
    const handleScroll = () => {
      // Change the threshold value as needed (e.g., 50px)
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Experience", href: "#" },
    { label: "Blogs", href: "#" },
    { label: "Community", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.2, ease: "easeOut" }} // Reduced delay and duration
        className={`flex justify-between items-center fixed w-full z-20 pt-6 px-4 md:pt-10 md:px-8 pb-4 transition-all duration-500 ${
          scrolled ? "bg-white/20 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <Button
          variant={"link"}
          className="text-2xl md:text-4xl font-borel hover:no-underline"
          onClick={() => {}}
        >
          Dhruti&apos;s Folio
        </Button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-2">
          {navItems.map((item) => (
            <Link href={item.href} key={item.label}>
              <Button variant={"link"} className="text-2xl font-borel">
                {item.label}
              </Button>
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <Button
          variant="link"
          size="lg"
          className="lg:hidden flex items-center justify-center p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu className="h-16 w-16" />
        </Button>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-30 lg:hidden"
              onClick={closeMenu}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-full bg-white/90 backdrop-blur-md z-40 p-6 flex flex-col lg:hidden"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-3xl font-medium font-borel mt-6">
                  Dhruti&apos;s Folio
                </span>
                <Button
                  variant="link"
                  size="lg"
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="flex items-center justify-center p-2"
                >
                  <X className="h-12 w-12" />
                </Button>
              </div>

              <div className="flex flex-col space-y-10 items-start mt-16">
                {navItems.map((item) => (
                  <Link href={item.href} key={item.label} onClick={closeMenu}>
                    <Button
                      variant="link"
                      className="text-4xl font-borel justify-start w-full"
                    >
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
