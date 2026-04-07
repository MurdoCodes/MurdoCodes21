"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "../ContactForm/ContactForm";

const Main = () => {
  // Contact form state
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  return (
    <>
      <motion.section
        initial={{ opacity: 0, height: "20%" }}
        animate={{ opacity: 1, height: "100%" }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="relative bg-hero-pattern w-full h-screen bg-center bg-cover bg-no-repeat flex justify-end items-center px-6 md:px-0"
      >
        <div className="md:w-1/2"></div>
        <div className="bg-[#1C1B1B]/60 mask-l-from-75% w-full h-full flex items-center justify-center">
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">Hi! I'm</h3>

            <h1 className="text-5xl font-bold text-white mb-4 md:flex md:gap-2 md:items-center">
              Lidel Kim B Daddie | <span className="text-3xl">MurdoCodes</span>
            </h1>

            <h2 className="text-4xl font-bold text-white mb-4">
              Full Stack Developer
            </h2>

            <p className="text-xl text-white mb-10">
              I build systems that work quietly, but powerfully.
            </p>

            {/* Responsive button layout */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end sm:space-x-10 sm:block">
              <button className="bg-primary px-6 py-2 text-white font-bold rounded-xl transition duration-300 hover:opacity-90">
                View Projects
              </button>

              <button
                onClick={openContactForm}
                className="bg-primary/40 border-[0.01rem] border-white px-6 py-2 text-white font-bold rounded-xl transition duration-300 hover:opacity-90"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Form - Visible when Hire Me is clicked */}
      {contactFormOpen && <ContactForm closeContactForm={closeContactForm} />}
    </>
  );
};;

export default Main;
