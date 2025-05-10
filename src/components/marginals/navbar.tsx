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
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

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
    { label: "Community", href: "/community" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
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
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.2, ease: "easeOut" }}
        className="fixed w-full z-40 transition-all duration-500"
      >
        <motion.div
          animate={{
            backgroundColor: isOpen
              ? "rgba(255, 255, 255, 1)"
              : scrolled
              ? "rgba(255, 255, 255, 0.2)"
              : "rgba(255, 255, 255, 0)",
            boxShadow:
              isOpen || scrolled
                ? "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
                : "none",
            backdropFilter: isOpen || scrolled ? "blur(8px)" : "none",
          }}
          transition={{ duration: 0.3 }}
          className="flex justify-between items-center pt-4 sm:pt-5 md:pt-6 px-3 sm:px-4 md:px-6 lg:px-8 pb-3 sm:pb-4"
        >
          {/* Logo/Brand - Left Side */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Button
                variant={"link"}
                className="text-xl sm:text-2xl md:text-3xl xl:text-3xl font-borel hover:no-underline mt-3 md:mt-4 pt-4"
              >
                Dhruti&apos;s Folio
              </Button>
            </Link>
          </div>

          {/* Desktop Navigation - Right Side (auto-pushed to right by justify-between) */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 justify-end">
            {navItems.map((item) => (
              <Link href={item.href} key={item.label}>
                <span
                  className={`nav-item-wrapper relative py-2 sm:py-3 px-3 rounded-lg transition-colors duration-200 ${
                    pathname === item.href ? "bg-black/5" : ""
                  }`}
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Button
                    variant={"link"}
                    className={`text-base sm:text-lg md:text-xl xl:text-xl font-sans no-underline hover:no-underline tracking-wide text-black ${
                      pathname === item.href ? "font-medium" : ""
                    }`}
                  >
                    {item.label}
                  </Button>
                  {hoveredItem === item.label && (
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "100%", opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      className="absolute bottom-0 left-0 h-0.5 bg-black rounded-full"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Button - Right Side - INCREASED SIZE */}
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden"
          >
            <Button
              variant="link"
              size="icon"
              className="flex items-center justify-center p-0 h-auto z-50"
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
                    <X className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </motion.div>

        {/* Mobile Menu with fixed positioning */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "calc(100vh - 4rem)" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                duration: 0.3,
                opacity: { duration: 0.2 },
                height: { duration: 0.3 },
              }}
              className="lg:hidden bg-white fixed top-[calc(3.5rem+1px)] sm:top-[calc(4rem+1px)] md:top-[calc(5rem+1px)] inset-x-0 overflow-hidden z-40"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.1, duration: 0.2 }}
                className="flex items-center justify-center h-full py-10"
              >
                <div className="flex flex-col space-y-6 sm:space-y-8 md:space-y-10 items-center justify-center w-full px-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.1, duration: 0.3 }}
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
