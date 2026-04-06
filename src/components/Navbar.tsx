"use client";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

import { navLinksArray } from "@/const/const";
import { motion } from "framer-motion";



const Navbar = () => {
  return (
    <>
      {/**
       * Navigation
       */}
      {/* Container for the entire navbar */}
      <nav className="container mx-auto flex items-center justify-evenly py-4">
        {/* Desktop Navigation Links */}
        <div className="lg:flex gap-4 hidden space-x-8">
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
        </div>
      </nav>

      {/* Social icons - Desktop */}
      <div className="md:flex gap-2 hidden items-center space-x-4">
        <motion.a
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1.5,
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
            delay: 1.5,
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
            delay: 1.5,
            duration: 0.8,
          }}
          href="https://github.com/MurdoCodes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-primary-hover hover:scale-[1.02] font-medium transition-colors duration-300 group"
        >
          <FiInstagram className="w-5 h-5" />
        </motion.a>
      </div>
    </>
  );
};

export default Navbar;