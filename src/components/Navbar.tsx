"use client";

import { navLinksArray } from "@/const/const";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <>
      {/* Container for the entire navbar */}
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo and Site Name */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          className="flex items-center gap-2"
        >
          <img src="/logo_processed.svg" alt="Logo" className="w-10" />
          <h3 className="text-2xl font-bold hover:text-primary-hover hover:scale-[1.02] transition-colors duration-300 group">
            MurdoCodes
          </h3>
        </motion.div>

        {/* Navigation Links */}
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
    </>
  );
};

export default Navbar;