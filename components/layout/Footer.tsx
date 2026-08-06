import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-foreground">{site.name}</p>
          <p className="text-sm text-muted">{site.title}</p>
        </div>

        <nav className="flex items-center gap-6 text-sm text-muted" aria-label="Footer">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent-hover"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent-hover"
          >
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`} className="transition-colors hover:text-accent-hover">
            Email
          </a>
        </nav>

        <p className="text-xs text-muted-soft">© {year} {site.name}</p>
      </Container>
    </footer>
  );
}
