"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { navLinks, site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { withBasePath } from "@/lib/basePath";
import { cn } from "@/lib/utils";

// Sections whose background still sits in the atmosphere's dark, cool-toned
// chapters (see globals.css --atmo-1..4) — the navbar needs on-dark styling
// while any of these is behind it, or its frosted pill reads as a stark
// white card floating over navy.
const DARK_SECTION_IDS = new Set(["hero", "web", "mobile"]);

export function Navbar({ cvAvailable }: { cvAvailable: boolean }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState<string>(navLinks[0].href);
  const [overDark, setOverDark] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tracks whichever section currently sits under the viewport's vertical
  // center — drives both the active nav link and the pill's dark/light tone.
  // Deliberately not IntersectionObserver here: with a thin rootMargin band,
  // a single large scroll jump can land where two adjacent sections both
  // toggle "intersecting" in the same callback batch (one exiting the band,
  // the next entering it), and picking the first match then locks onto
  // whichever happens to sit earlier in observation order — stale until the
  // next toggle. Reading getBoundingClientRect on scroll has no such
  // ambiguity: exactly one section can contain a given point.
  useEffect(() => {
    const allIds = ["hero", "web", "mobile", "work", "about", "contact"];
    const sections = allIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const updateCurrentSection = () => {
      const center = window.innerHeight / 2;
      const current = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= center && rect.bottom >= center;
      });
      if (!current) return;
      setOverDark(DARK_SECTION_IDS.has(current.id));
      if (navLinks.some((link) => link.href === `#${current.id}`)) {
        setActiveHref(`#${current.id}`);
      }
    };

    updateCurrentSection();
    window.addEventListener("scroll", updateCurrentSection, { passive: true });
    window.addEventListener("resize", updateCurrentSection);
    return () => {
      window.removeEventListener("scroll", updateCurrentSection);
      window.removeEventListener("resize", updateCurrentSection);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full border px-6 py-3 transition-all duration-300 sm:px-8",
          scrolled
            ? overDark
              ? "mt-3 border-on-dark-border-strong bg-black/40 shadow-lg shadow-black/30 backdrop-blur-md"
              : "mt-3 border-border/80 bg-background/85 shadow-sm shadow-stone-200/40 backdrop-blur-md"
            : "mt-0 border-transparent bg-transparent"
        )}
      >
        <Link
          href="/"
          prefetch={false}
          className={cn(
            "text-sm font-semibold tracking-tight transition-colors",
            overDark ? "text-on-dark-foreground" : "text-foreground"
          )}
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={isHome ? link.href : `/${link.href}`}
              prefetch={false}
              className={cn(
                "relative text-sm font-medium transition-colors",
                activeHref === link.href
                  ? overDark
                    ? "text-on-dark-accent"
                    : "text-accent-hover"
                  : overDark
                    ? "text-on-dark-muted hover:text-on-dark-accent"
                    : "text-muted hover:text-accent-hover"
              )}
            >
              {link.label}
              {activeHref === link.href && (
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 right-0 h-px",
                    overDark ? "bg-on-dark-accent" : "bg-accent"
                  )}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            href={cvAvailable ? withBasePath(`/cv/${site.cvFileName}`) : undefined}
            download={cvAvailable}
            disabled={!cvAvailable}
            variant={overDark ? "inverse" : "secondary"}
            className="!py-2 text-xs"
          >
            {cvAvailable ? "Download CV" : "CV coming soon"}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full border md:hidden",
            overDark
              ? "border-on-dark-border-strong text-on-dark-foreground"
              : "border-border text-foreground"
          )}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-4 bg-current transition-transform duration-200 ${open ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-4 bg-current transition-transform duration-200 ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="mx-3 mt-2 overflow-hidden rounded-2xl border border-border bg-background/95 backdrop-blur-md md:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 px-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={isHome ? link.href : `/${link.href}`}
                  prefetch={false}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent-soft hover:text-accent-hover"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3">
                <Button
                  href={cvAvailable ? withBasePath(`/cv/${site.cvFileName}`) : undefined}
                  download={cvAvailable}
                  disabled={!cvAvailable}
                  variant="primary"
                  className="w-full"
                >
                  {cvAvailable ? "Download CV" : "CV coming soon"}
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
