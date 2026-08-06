"use client";

import {
  useRef,
  useState,
  useLayoutEffect,
  type CSSProperties,
  type ReactNode,
} from "react";

type TechMarqueeProps = {
  tech: string[];
  iconMap: Record<string, ReactNode>;
};

const TechBadge = ({
  tech,
  iconMap,
}: {
  tech: string;
  iconMap: Record<string, ReactNode>;
}) => (
  <span
    title={tech}
    className="inline-flex shrink-0 p-1.5 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
  >
    {iconMap[tech] ?? <span className="text-xs font-medium">{tech}</span>}
  </span>
);

const TechMarquee = ({ tech, iconMap }: TechMarqueeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [shouldMarquee, setShouldMarquee] = useState(false);

  const badges = tech.map((item) => (
    <TechBadge key={item} tech={item} iconMap={iconMap} />
  ));

  useLayoutEffect(() => {
    const container = containerRef.current;
    const measure = measureRef.current;
    if (!container || !measure) return;

    const checkOverflow = () => {
      setShouldMarquee(measure.scrollWidth > container.clientWidth);
    };

    checkOverflow();

    const observer = new ResizeObserver(checkOverflow);
    observer.observe(container);

    return () => observer.disconnect();
  }, [tech]);

  const marqueeDuration = `${Math.max(tech.length * 2.5, 12)}s`;

  return (
    <div
      ref={containerRef}
      className="relative flex-1 min-w-0 overflow-hidden group/marquee"
    >
      <div
        ref={measureRef}
        className="pointer-events-none absolute flex items-center gap-2 invisible"
        aria-hidden
      >
        {badges}
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-4 bg-gradient-to-r from-card to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-card to-transparent"
        aria-hidden
      />

      {shouldMarquee ? (
        <div
          className="flex w-max animate-tech-marquee motion-reduce:animate-none group-hover/marquee:[animation-play-state:paused]"
          style={{ "--marquee-duration": marqueeDuration } as CSSProperties}
        >
          <div className="flex items-center gap-2 pr-2">{badges}</div>
          <div className="flex items-center gap-2 pr-2" aria-hidden>
            {tech.map((item) => (
              <TechBadge key={`dup-${item}`} tech={item} iconMap={iconMap} />
            ))}
          </div>
        </div>
      ) : (
        <div className="relative flex items-center gap-2">{badges}</div>
      )}
    </div>
  );
};

export default TechMarquee;
