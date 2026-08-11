import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registered once. Only ever import this module from "use client" files —
// gsap/ScrollTrigger touch window/document at various points.
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };
