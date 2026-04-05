import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register Plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

export * from "gsap";
export { useGSAP };
