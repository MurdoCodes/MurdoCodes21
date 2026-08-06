"use client";

import { useEffect, useState } from "react";

export default function AscentRail() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const max = document.body.scrollHeight - window.innerHeight;
      const value = max > 0 ? Math.min(100, Math.max(0, (scrolled / max) * 100)) : 0;
      setPct(value);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-10 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      <span className="absolute -top-5 right-0 font-mono text-[10px] tracking-wider text-muted">
        SUMMIT
      </span>
      <div className="relative w-[2px] h-60 bg-line">
        <div
          className="absolute bottom-0 left-0 w-full bg-ember transition-[height] duration-300 ease-out"
          style={{ height: `${pct}%` }}
        />
        <div
          className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full bg-ember shadow-[0_0_0_4px_rgba(255,107,53,0.15)] transition-[bottom] duration-300 ease-out"
          style={{ bottom: `${pct}%` }}
        />
      </div>
      <span className="absolute -bottom-5 right-0 font-mono text-[10px] tracking-wider text-muted">
        BASE
      </span>
    </div>
  );
}
