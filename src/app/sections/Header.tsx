"use client";
import { motion } from "framer-motion";
import Logo from "../../components/Header/Logo";
import Navbar from "../../components/Header/Navbar";
import SocialLinks from "../../components/Header/SocialLinks";
import HireMeButton from "../../components/Header/HireMeButton";
import MobileMenu from "../../components/Header/MobileMenu";

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
          sticky
          top-0
          w-full 
          transition-all 
          duration-300 
          z-50
          bg-[#1C1B1B]/70
          backdrop-blur-sm
          "
      >
        <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20 gap-5">
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
