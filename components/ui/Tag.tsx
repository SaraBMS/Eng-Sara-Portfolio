import { cn } from "@/lib/utils";

export function Tag({
  children,
  emphasis = false,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  emphasis?: boolean;
  /** "dark" for sections sitting over the cinematic world's dark chapters. */
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide",
        emphasis
          ? dark
            ? "border-on-dark-accent-soft-border bg-on-dark-accent-soft text-on-dark-accent"
            : "border-accent-soft-border bg-accent-soft text-accent-hover"
          : dark
            ? "border-on-dark-border text-on-dark-muted"
            : "border-border text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
