"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "../ContactForm/ContactForm";

const HireMeButton = () => {
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  return (
    <>
      <div className="hidden lg:flex">
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1.6,
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          className="px-2 py-2 rounded-xl bg-linear-to-r from-primary to-primary-hover text-white font-bold hover:text-white hover:scale-[1.02] transition-all duration-500 md:w-30 md:h-10 text-sm md:text-base"
          onClick={() => {
            openContactForm();
          }}
        >
          Hire Me
        </motion.button>
      </div>
      {contactFormOpen && <ContactForm closeContactForm={closeContactForm} />}
    </>
  );
};

export default HireMeButton;