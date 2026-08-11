import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "inverse";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover border border-accent hover:border-accent-hover",
  secondary:
    "bg-transparent text-foreground border border-border-strong hover:border-accent hover:text-accent-hover",
  ghost:
    "bg-transparent text-foreground border border-transparent hover:text-accent-hover px-0",
  // For buttons placed over the atmosphere's dark chapters (Hero, Web, Mobile).
  inverse:
    "bg-transparent text-on-dark-foreground border border-on-dark-border-strong hover:border-accent hover:text-white",
};

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  external?: boolean;
  download?: boolean;
  disabled?: boolean;
  className?: string;
}

export function Button({
  children,
  href,
  variant = "primary",
  external = false,
  download = false,
  disabled = false,
  className,
}: ButtonProps) {
  const base = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium",
    "transition-colors duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    variantClasses[variant],
    disabled && "pointer-events-none opacity-40",
    className
  );

  if (disabled || !href) {
    return (
      <span className={base} aria-disabled={disabled}>
        {children}
      </span>
    );
  }

  if (external || download) {
    return (
      <a
        href={href}
        className={base}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        download={download}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={base} prefetch={false}>
      {children}
    </Link>
  );
}
