"use client";
import { motion } from "framer-motion";
import Logo from "./Logo";
import Navbar from "./Navbar";
import SocialLinks from "./SocialLinks";
import HireMeButton from "./HireMeButton";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <>
      {/** Header
       *  Logo/Site Nam
       *  Navigation
       * Social Links
       */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
          delay: 0.1,
          duration: 1.2,
        }}
        className="
          absolute 
          w-full 
          transition-all 
          duration-300 
          inset-x-0 
          top-0 
          z-50 
          bg-primary/10
          backdrop-blur-md
          "
      >
        <div className="container px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20 gap-5 ">
          {/* Logo and Site Name */}
          <Logo />

          {/* Navigation */}
          <Navbar />

          {/* Social Links */}
          <SocialLinks />

          {/* Hire Me Button */}
          <HireMeButton />

          {/* Mobile Menu - Visible on small screens */}
          <MobileMenu />
        </div>
      </motion.header>
    </>
  );
};

export default Header;
