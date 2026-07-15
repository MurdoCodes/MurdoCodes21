"use client";
import { motion } from "framer-motion";
import { navLinksArray } from "@/const/const";

const Navbar = () => {
  return (
    <>
      {/**
       * Navigation
       */}
      <nav
        className="
        container 
        mx-auto 
        flex 
        items-center 
        justify-evenly 
        py-4
        lg:flex
        "
      >
        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex gap-4 space-x-8">
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
              href={link.href}
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
