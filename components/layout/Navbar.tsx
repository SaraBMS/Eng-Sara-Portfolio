"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { navLinks, site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { withBasePath } from "@/lib/basePath";

export function Navbar({ cvAvailable }: { cvAvailable: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Link
          href="/"
          prefetch={false}
          className="text-sm font-semibold tracking-tight text-foreground"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-accent-hover"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            href={cvAvailable ? withBasePath(`/cv/${site.cvFileName}`) : undefined}
            download={cvAvailable}
            disabled={!cvAvailable}
            variant="secondary"
            className="!py-2 text-xs"
          >
            {cvAvailable ? "Download CV" : "CV coming soon"}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-4 bg-foreground transition-transform duration-200 ${open ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-foreground transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-4 bg-foreground transition-transform duration-200 ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
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
            className="overflow-hidden border-t border-border bg-background md:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 px-6 py-6 sm:px-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent-soft hover:text-accent-hover"
                >
                  {link.label}
                </a>
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
