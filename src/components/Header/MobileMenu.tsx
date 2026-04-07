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
            <FiX className="h-6 w-6" />
          ) : (
            <FiMenu className="h-6 w-6" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden overflow-hidden bg-primary shadow-lg px-4 py-5 space-y-5 absolute top-full left-0 w-full z-40">
          <nav className="flex flex-col item-start justify-start space-y-4">
            {navLinksArray.map((link, index) => (
              <motion.a
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.7 + index * 0.2,
                  // duration: 1.2,
                }}
                key={index}
                href={`#${link.href}`}
                className="relative text-white hover:text-primary-hover hover:scale-[1.02] font-medium transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </motion.a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
