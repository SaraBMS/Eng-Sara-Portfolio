import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";
import { withBasePath } from "@/lib/basePath";

export function Contact({ cvAvailable }: { cvAvailable: boolean }) {
  return (
    <section
      id="contact"
      className="flex min-h-[85vh] items-center border-t border-border py-24 sm:py-32"
    >
      <Container className="max-w-3xl text-center">
        <Reveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted-soft">
            Contact
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Let&apos;s build something meaningful.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-4 text-base text-muted sm:text-lg">
            Open to Frontend Developer and React Native opportunities.
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent-soft-border bg-accent-soft px-4 py-1.5 text-xs font-medium text-accent-hover">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {site.location}
          </span>
        </Reveal>

        <Reveal delay={0.2}>
          {/* LinkedIn/GitHub live in the footer below as icons — kept out of
              here so the social links aren't duplicated across the page. */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href={`mailto:${site.email}`} variant="primary" external>
              Email Me
            </Button>
            <Button
              href={cvAvailable ? withBasePath(`/cv/${site.cvFileName}`) : undefined}
              download={cvAvailable}
              disabled={!cvAvailable}
              variant="secondary"
            >
              {cvAvailable ? "Download CV" : "CV coming soon"}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
