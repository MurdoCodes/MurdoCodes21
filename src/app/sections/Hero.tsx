"use client";

import { motion } from "framer-motion";

const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.section
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="relative bg-hero-pattern w-full min-h-screen bg-center bg-cover bg-no-repeat flex justify-end items-center -mt-16 md:-mt-20"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        <div className="relative w-full min-h-screen flex items-center justify-center md:justify-end px-6 md:px-12 lg:px-20 py-24">
          <div className="md:w-1/2 lg:w-[45%] bg-[#1C1B1B]/60 backdrop-blur-sm rounded-2xl md:rounded-none md:bg-transparent md:backdrop-blur-none p-6 md:p-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Hi! I&apos;m
              </h3>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
                Lidel Kim B Daddie
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-primary-soft mb-4">
                MurdoCodes
              </p>

              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Full Stack Developer
              </h2>

              <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-lg">
                I build systems that work quietly, but powerfully.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={scrollToProjects}
                  className="bg-primary px-6 py-3 text-white font-bold rounded-xl transition-colors duration-300 hover:bg-primary-hover"
                >
                  View Projects
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={scrollToContact}
                  className="border border-white/60 bg-white/5 px-6 py-3 text-white font-bold rounded-xl transition-all duration-300 hover:bg-white hover:text-background"
                >
                  Contact Me
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Hero;
