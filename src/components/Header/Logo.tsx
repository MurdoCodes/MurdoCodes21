"use client";
import { motion } from "framer-motion";


const Logo = () => {
  return (
    <>
      {/**
       * Logo and Site Name
       */}
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
        className="flex items-center gap-3 group "
      >
        <img src="/logo_processed.svg" alt="Logo" className="w-10" />
        <h3 className="text-2xl font-bold hover:text-primary-hover hover:scale-[1.02] transition-colors duration-300 group">
          MurdoCodes
        </h3>
      </motion.div>
    </>
  );
};

export default Logo;
