"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const lineVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.15 + i * 0.15, duration: 0.7, ease: [0.2, 0.7, 0.2, 1] },
  }),
};

export default function Hero() {
  const lines = ["I build systems", "that work quietly,", "but powerfully."];

  return (
    <div className="relative z-5 min-h-[82vh] flex flex-col justify-center px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="section-tag flex items-center gap-2.5 mb-5"
      >
        <span className="w-6 h-px bg-ember" />
        AI-FIRST FULL STACK DEVELOPER
      </motion.div>

      <h1 className="font-display font-bold text-[42px] md:text-[82px] leading-[0.98] tracking-tight max-w-4xl">
        {lines.map((line, i) => (
          <span key={line} className="block overflow-hidden">
            <motion.span
              custom={i}
              initial="hidden"
              animate="visible"
              variants={lineVariants}
              className="inline-block"
            >
              {i === 2 ? (
                <>
                  but <em className="text-ember not-italic italic">powerfully.</em>
                </>
              ) : (
                line
              )}
            </motion.span>
          </span>
        ))}
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="max-w-lg mt-7 text-muted text-[17px] leading-relaxed"
      >
        Lidel Kim B. Daddie — 5+ years shipping AI-powered SaaS, automation
        platforms, and mobile apps. Same discipline I bring to a 4,000m ridge
        line, I bring to production code.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.05, duration: 0.6 }}
        className="flex gap-4 mt-10"
      >
        <MagneticButton href="#work" variant="primary">
          View projects
        </MagneticButton>
        <MagneticButton href="#contact" variant="ghost">
          Get in touch
        </MagneticButton>
      </motion.div>
    </div>
  );
}
