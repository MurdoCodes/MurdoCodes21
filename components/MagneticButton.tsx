"use client";

import { useRef } from "react";
import clsx from "clsx";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
};

export default function MagneticButton({
  href,
  children,
  variant = "primary",
  className,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.2}px, ${y * 0.3}px)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0,0)";
  };

  const styles = {
    primary:
      "bg-ember text-bg font-semibold px-7 py-4 rounded-sm hover:-translate-y-0.5",
    ghost:
      "border border-line text-text px-7 py-4 rounded-sm hover:border-ember hover:-translate-y-0.5",
    outline:
      "border border-ember text-ember font-mono text-xs px-5 py-2.5 rounded-sm hover:bg-ember hover:text-bg",
  };

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        "inline-block text-sm transition-all duration-300 ease-out",
        styles[variant],
        className
      )}
    >
      {children}
    </a>
  );
}
