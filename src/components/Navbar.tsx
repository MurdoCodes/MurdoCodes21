"use client";

import { navLinksArray } from "@/const/const";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
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
        <h3 className="text-2xl font-bold">MurdoCodes</h3>
      </motion.div>

      {/* Navigation Links */}
      <div className="flex">
        <ul className="flex gap-4">
          {navLinksArray.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-gray-300 text-2xl"
            >
              {link.name}
            </a>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
