"use client";
import { useState } from "react";
import { motion } from "framer-motion";
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
      <div className="md:hidden flex items-center">
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
      </div>

      {/* Mobile Menu List */}
      {isOpen && (
        <div
          className="
            backdrop-blur-sm
            absolute
            z-40
            w-full
            top-full
            left-0
            px-4
            py-4
            overflow-hidden
            md:hidden
            text-left
            "
        >
          <nav
            className="
              flex
              flex-col
              items-start
              text-left!
              "
          >
            {navLinksArray.map((link, index) => (
              <motion.a
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  // delay: 0.7 + index * 0.2,
                  duration: 1,
                }}
                key={index}
                href={`#${link.href}`}
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
              </motion.a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
