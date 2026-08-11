import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** "dark" for sections sitting over the cinematic world's dark chapters. */
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <p
        className={cn(
          "font-mono text-xs font-medium uppercase tracking-[0.2em]",
          dark ? "text-on-dark-accent" : "text-accent"
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-3 text-3xl font-semibold tracking-tight sm:text-4xl",
          dark ? "text-on-dark-foreground" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base leading-relaxed", dark ? "text-on-dark-muted" : "text-muted")}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
