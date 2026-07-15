"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { aboutData } from "@/const/const";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card border border-border rounded-2xl p-6 md:p-10 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">
                {aboutData.title}
              </h2>
              <p className="text-xl text-primary-soft font-semibold mb-6">
                {aboutData.subtitle}
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                {aboutData.description}
              </p>
              <ul className="space-y-3">
                {aboutData.bulletPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 text-text-secondary"
                  >
                    <span className="size-2 rounded-full bg-primary shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.15} direction="right">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none overflow-hidden rounded-2xl border border-border">
                <Image
                  src={aboutData.image}
                  alt="About MurdoCodes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
