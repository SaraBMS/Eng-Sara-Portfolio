import { cn } from "@/lib/utils";

export function Tag({
  children,
  emphasis = false,
  className,
}: {
  children: React.ReactNode;
  emphasis?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide",
        emphasis
          ? "border-accent-soft-border bg-accent-soft text-accent-hover"
          : "border-border text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
