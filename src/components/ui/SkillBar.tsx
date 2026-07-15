"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SkillBarProps = {
  name: string;
  level: number;
};

const SkillBar = ({ name, level }: SkillBarProps) => {
  const barRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!barRef.current || !dotRef.current) return;

      gsap.fromTo(
        dotRef.current,
        { left: "0%" },
        {
          left: `${level}%`,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: barRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: barRef }
  );

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-text-secondary font-medium">{name}</span>
        <span className="text-text-muted tabular-nums">{level}%</span>
      </div>
      <div
        ref={barRef}
        className="relative h-px w-full bg-border-strong rounded-full"
      >
        <div
          ref={dotRef}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(111,124,94,0.6)]"
          style={{ left: "0%" }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
