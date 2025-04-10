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
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "#contact" },
  ];

  // Use a consistent background style based on scroll position
  const navBgStyle = scrolled
    ? "bg-white/20 backdrop-blur-md shadow-sm"
    : "bg-transparent";

  return (
    <div className="relative z-50">
      {/* Fixed overlay for mobile menu background */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.2, ease: "easeOut" }}
        className={`fixed w-full z-40 transition-all duration-500`}
      >
        <div
          className={`flex justify-between items-center pt-4 sm:pt-5 md:pt-6 px-3 sm:px-4 md:px-6 lg:px-8 pb-3 sm:pb-4 ${
            isOpen ? "bg-white shadow-md" : navBgStyle
          }`}
        >
          <Link href="/">
            <Button
              variant={"link"}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-borel hover:no-underline mt-2 sm:mt-3 md:mt-4"
            >
              Dhruti&apos;s Folio
            </Button>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-1 xl:space-x-2">
            {navItems.map((item) => (
              <Link href={item.href} key={item.label}>
                <span className="nav-item-wrapper relative py-2 sm:py-3">
                  <Button
                    variant={"link"}
                    className={`text-base sm:text-lg md:text-xl lg:text-2xl font-sans no-underline hover:no-underline tracking-wide ${
                      pathname === item.href
                        ? "text-black font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    {item.label}
                  </Button>
                  {pathname === item.href && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-black rounded-full"
                      layoutId="navIndicator"
                    />
                  )}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <Button
            variant="link"
            size="icon"
            className="lg:hidden flex items-center justify-center p-0 h-auto z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            ) : (
              <Menu className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            )}
          </Button>
        </div>

        {/* Mobile Menu with fixed positioning */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white fixed top-[calc(3.5rem+1px)] sm:top-[calc(4rem+1px)] md:top-[calc(5rem+1px)] inset-x-0 bottom-0 overflow-auto z-40"
            >
              <div className="flex items-center justify-center min-h-full py-10">
                <motion.div className="flex flex-col space-y-6 sm:space-y-8 md:space-y-10 items-center justify-center w-full px-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="w-full"
                    >
                      <Link href={item.href} onClick={() => setIsOpen(false)}>
                        <Button
                          variant="ghost"
                          className={`w-full text-xl sm:text-2xl md:text-3xl font-sans tracking-wide rounded-xl ${
                            pathname === item.href
                              ? "bg-black/5 font-medium"
                              : ""
                          }`}
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
