"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

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

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
    } else {
      document.body.style.overflow = ""; // Restore default
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup on unmount
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Blogs", href: "#" },
    { label: "Community", href: "#" },
    { label: "Contact", href: "#" },
  ];

  // Use a consistent background style based on scroll position
  const navBgStyle = scrolled
    ? "bg-white/20 backdrop-blur-md shadow-sm"
    : "bg-transparent";

  return (
    <div>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.2, ease: "easeOut" }}
        className={`fixed w-full z-30 transition-all duration-500`}
      >
        <div
          className={`flex justify-between items-center pt-5 px-4 md:pt-8 md:px-8 pb-4 ${
            isOpen ? "bg-white" : navBgStyle
          }`}
        >
          <Button
            variant={"link"}
            className="text-2xl md:text-4xl font-borel hover:no-underline mt-4"
            onClick={() => {}}
          >
            Dhruti&apos;s Folio
          </Button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-2">
            {navItems.map((item) => (
              <Link href={item.href} key={item.label}>
                <span className="nav-item-wrapper relative py-3">
                  <Button
                    variant={"link"}
                    className="text-2xl font-borel no-underline hover:no-underline"
                  >
                    {item.label}
                  </Button>
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <Button
            variant="link"
            size="icon"
            className="lg:hidden flex items-center justify-center p-0 h-auto"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="size-24" /> : <Menu className="size-24" />}
          </Button>
        </div>

        {/* Mobile Menu (Expanding) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "calc(100vh - 80px)" }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden px-4 bg-white fixed w-full top-20 pb-16 left-0 z-20"
            >
              <div className="flex items-center justify-center h-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col space-y-10 items-center justify-center w-full"
                >
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="w-full"
                    >
                      <Link href={item.href} onClick={closeMenu}>
                        <Button
                          variant="ghost"
                          className="w-full text-3xl font-sans tracking-wide rounded-xl"
                        >
                          {item.label}
                        </Button>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;
