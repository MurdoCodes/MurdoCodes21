import Link from "next/link";
import MagneticButton from "./MagneticButton";

export default function Nav() {
  return (
    <nav className="relative z-10 flex items-center justify-between px-6 md:px-16 py-7">
      <Link href="/" className="font-display font-bold text-lg">
        Murdo<span className="text-ember">Codes</span>
      </Link>
      <div className="hidden md:flex gap-9 text-sm text-muted">
        <a href="#work" className="hover:text-text transition-colors">Work</a>
        <a href="#about" className="hover:text-text transition-colors">About</a>
        <a href="#skills" className="hover:text-text transition-colors">Skills</a>
        <a href="#contact" className="hover:text-text transition-colors">Contact</a>
      </div>
      <MagneticButton href="#contact" variant="outline">
        Hire me
      </MagneticButton>
    </nav>
  );
}
