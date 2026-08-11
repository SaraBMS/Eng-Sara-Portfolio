"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { ProjectImage } from "@/lib/getProjectImages";

const AUTOPLAY_MS = 5000;

export function ProjectSlideshow({
  images,
  title,
}: {
  images: ProjectImage[];
  title: string;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const count = images.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % count) + count) % count);
    },
    [count]
  );

  useEffect(() => {
    if (count <= 1 || paused || shouldReduceMotion) return;
    timerRef.current = setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [count, paused, shouldReduceMotion]);

  if (count === 0) return null;

  const current = images[index];

  return (
    <div
      className="group relative aspect-video w-full overflow-hidden bg-[radial-gradient(ellipse_at_top,#faf6ef,#ece4d6)] sm:aspect-2/1"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") goTo(index + 1);
        if (event.key === "ArrowLeft") goTo(index - 1);
      }}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={current.src}
          initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: shouldReduceMotion ? 1 : 0 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.5, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center p-4 sm:p-6"
        >
          <div className="relative h-full w-full">
            <Image
              src={current.src}
              alt={current.alt}
              fill
              sizes="100vw"
              className="object-contain drop-shadow-[0_18px_40px_rgba(28,25,23,0.18)]"
              priority={index === 0}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label={`Previous screenshot of ${title}`}
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-foreground opacity-0 shadow-sm backdrop-blur transition-opacity duration-200 hover:bg-white group-hover:opacity-100 focus-visible:opacity-100"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label={`Next screenshot of ${title}`}
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-foreground opacity-0 shadow-sm backdrop-blur transition-opacity duration-200 hover:bg-white group-hover:opacity-100 focus-visible:opacity-100"
          >
            <span aria-hidden="true">→</span>
          </button>

          <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-1.5">
            {images.map((image, i) => (
              <button
                key={image.src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show screenshot ${i + 1} of ${count}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-5 bg-accent" : "w-1.5 bg-foreground/25 hover:bg-foreground/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ProjectSlideshow;
