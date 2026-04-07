"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FiGithub, FiInstagram, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { navLinksArray } from "@/const/const";
import HireMeButton from "./HireMeButton";
import ContactForm from "../ContactForm/ContactForm";

const MobileMenu = () => {
  /**
   * Toggle Menu open/close
   */
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Contact form state
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

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
        className="lg:hidden flex items-center"
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

      {/* Mobile Menu Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="
            overflow-hidden
            bg-primary/10
            backdrop-blur-sm
            absolute
            z-40
            w-full
            top-full
            left-0
            lg:hidden
            "
          >
            {/* Mobile Navigation Links */}
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
                  font-semibold 
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

            {/* Divider */}
            <div className="border-t border-white/20" />

            {/* Mobile Social Links */}
            <div
              className="
                flex 
                items-center
                px-4
                py-4
              "
            >
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.8,
                }}
                href="https://github.com/MurdoCodes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary-hover hover:scale-[1.02] font-medium transition-colors duration-300 group"
              >
                <FiGithub className="w-5 h-5" />
              </motion.a>

              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.8,
                }}
                href="https://github.com/MurdoCodes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary-hover hover:scale-[1.02] font-medium transition-colors duration-300 group"
              >
                <FiLinkedin className="w-5 h-5" />
              </motion.a>

              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.8,
                }}
                href="https://github.com/MurdoCodes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary-hover hover:scale-[1.02] font-medium transition-colors duration-300 group"
              >
                <FiInstagram className="w-5 h-5" />
              </motion.a>

              {/* Hire Me Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.8,
                }}
                onClick={() => {
                  openContactForm();
                  toggleMenu();
                }}
                className="bg-primary hover:bg-primary-hover text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 w-auto"
              >
                Hire Me
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Form - Visible when Hire Me is clicked */}
      {contactFormOpen && <ContactForm closeContactForm={closeContactForm} />}
    </>
  );
};;;;;;

export default MobileMenu;
