import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/icons";

const socialLinks = [
  { label: "GitHub", href: site.github, Icon: GitHubIcon, external: true },
  { label: "LinkedIn", href: site.linkedin, Icon: LinkedInIcon, external: true },
  { label: "Email", href: `mailto:${site.email}`, Icon: MailIcon, external: false },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-foreground">{site.name}</p>
          <p className="text-sm text-muted">{site.title}</p>
        </div>

        <nav className="flex items-center gap-3" aria-label="Social">
          {socialLinks.map(({ label, href, Icon, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              aria-label={label}
              title={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border-strong text-muted transition-colors hover:border-accent hover:text-accent-hover"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </nav>

        <p className="text-xs text-muted-soft">© {year} {site.name}</p>
      </Container>
    </footer>
  );
}
