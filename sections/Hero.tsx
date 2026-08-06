import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
      <Container>
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-soft-border bg-accent-soft px-4 py-1.5 text-xs font-medium text-accent-hover">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {site.location}
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-8 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {site.name}
          </h1>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mt-4 text-xl font-medium text-muted sm:text-2xl">{site.title}</p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {site.tagline}
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#work" variant="primary">
              View Selected Work
            </Button>
            <Button href={site.github} variant="secondary" external>
              GitHub
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
