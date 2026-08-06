"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SkillBar from "@/components/ui/SkillBar";
import { skillsData } from "@/const/const";

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            My Skills
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Technologies and tools I use to build reliable, scalable products.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillsData.map((category, index) => (
            <ScrollReveal key={category.category} delay={index * 0.1}>
              <div className="group h-full bg-card border border-border rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(111,124,94,0.12)] hover:-translate-y-1">
                <div className="h-1 w-12 rounded-full bg-primary mb-6 group-hover:w-16 transition-all duration-300" />
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  {category.category}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
