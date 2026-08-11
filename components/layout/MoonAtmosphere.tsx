"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "motion/react";
import { ScrollTrigger } from "@/lib/gsap";

/**
 * A single fixed glow that reads as a cool moon at the top of the page and
 * gradually warms into a bright sun-like light as the user scrolls — pure
 * CSS (a `--moon-t` custom property driven by one scroll-linked value),
 * no canvas/WebGL. Cheap enough to run everywhere, including mobile.
 */
export function MoonAtmosphere() {
  const moonRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(() => {
    if (shouldReduceMotion) return;
    const moon = moonRef.current;
    if (!moon) return;

    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        moon.style.setProperty("--moon-t", self.progress.toFixed(4));
      },
    });

    return () => trigger.kill();
  }, [shouldReduceMotion]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div ref={moonRef} className="moon-orb" />
    </div>
  );
}

export default MoonAtmosphere;
