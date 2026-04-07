"use client";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const SocialLinks = () => {
  return (
    <>
      {/* Social icons - Desktop */}
      <div className="md:flex  hidden items-center space-x-4 gap-2">
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

export default SocialLinks;
