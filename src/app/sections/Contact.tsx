"use client";

import { motion } from "framer-motion";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { socialLinks } from "@/const/const";

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  instagram: FiInstagram,
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8 max-w-lg">
              Have a project in mind or want to collaborate? Drop me a message
              and I&apos;ll get back to you as soon as possible.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center size-11 rounded-xl border border-border bg-card text-foreground hover:text-primary hover:border-primary/40 transition-colors"
                    aria-label={link.name}
                  >
                    <Icon className="size-5" />
                  </motion.a>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} direction="right">
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <form
                className="flex flex-col gap-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-text-secondary mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-text-secondary mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-text-secondary mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary-hover transition-colors duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
