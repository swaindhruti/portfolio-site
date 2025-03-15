"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Work", href: "#" },
    { label: "Blogs", href: "#" },
    { label: "Community", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Resume", href: "#" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex justify-between items-center fixed w-full z-20 pt-6 px-4 md:pt-10 md:px-8 pb-4 bg-transparent"
      >
        <Button
          variant={"link"}
          className="text-2xl md:text-4xl font-borel hover:no-underline"
          onClick={() => {}}
        >
          Dhrutinandan
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
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu className="h-12 w-12 items-center justify-between" />
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
              className="fixed inset-0 bg-black z-30 lg:hidden"
              onClick={closeMenu}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-full bg-background z-40 p-6 flex flex-col lg:hidden"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold">Menu</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link href={item.href} key={item.label} onClick={closeMenu}>
                    <Button
                      variant="link"
                      className="text-xl font-borel justify-start w-full"
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
