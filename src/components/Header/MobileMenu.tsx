"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FiMenu, FiX } from "react-icons/fi";
import { navLinksArray } from "@/const/const";

const MobileMenu = () => {
  /**
   * Toggle Menu open/close
   */
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
          delay: 0.5,
          duration: 1.2,
        }}
        className="md:hidden flex items-center"
      >
        <motion.button
          whileTap={{ scale: 0.7 }}
          onClick={toggleMenu}
          className="text-white hover:text-primary"
        >
          {isOpen ? (
            /* Close Icon */
            <FiX className="h-6 w-6" />
          ) : (
            /* Menu Icon */
            <FiMenu className="h-6 w-6" />
          )}
        </motion.button>
      </motion.div>

      {/* Mobile Menu List */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="
            overflow-hidden
          bg-gray-900
            backdrop-blur-sm
            absolute
            z-40
            w-full
            top-full
            left-0
            md:hidden
            "
          >
            <nav
              className="
              flex
              flex-col
              items-start
              px-4
              py-4
              "
            >
              {navLinksArray.map((link, index) => (
                <a
                  key={index}
                  href={`#${link.href}`}
                  onClick={toggleMenu}
                  className="
                  relative 
                  text-white 
                  hover:text-primary-hover 
                  hover:scale-[1.02] 
                  font-medium 
                  transition-colors 
                  duration-300 
                  group
                  py-2
                  w-full
                "
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
