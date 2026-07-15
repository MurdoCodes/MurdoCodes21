"use client";

import { motion } from "framer-motion";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { socialLinks } from "@/const/const";

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  instagram: FiInstagram,
};

const SocialLinks = () => {
  return (
    <div className="hidden lg:flex items-center space-x-4 gap-2">
      {socialLinks.map((link, index) => {
        const Icon = iconMap[link.icon];
        return (
          <motion.a
            key={link.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.5 + index * 0.1,
              duration: 0.8,
            }}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary-hover hover:scale-[1.02] font-medium transition-colors duration-300 group"
            aria-label={link.name}
          >
            <Icon className="w-5 h-5" />
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
