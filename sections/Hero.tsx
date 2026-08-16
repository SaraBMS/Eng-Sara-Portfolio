import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { withBasePath } from "@/lib/basePath";
import { site } from "@/lib/site";

const heroTech = ["React.js", "Next.js", "React Native", "TypeScript"];

// Sits at the darkest point of the page's dark→light atmosphere (see
// MoonAtmosphere + the --atmo-* gradient tokens) — text uses the on-dark
// token set so it stays legible against that dark background instead of the
// site's default dark-on-light treatment.
export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100vh] items-center overflow-hidden pt-28 pb-24"
      style={{ background: "linear-gradient(to bottom, var(--atmo-1), var(--atmo-2))" }}
    >
      <div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[48%] lg:block" aria-hidden="true">
        <Image
          src={withBasePath("/assets/scenes/hero-3d.jpg")}
          alt=""
          fill
          priority
          sizes="48vw"
          className="object-cover"
          style={{
            maskImage: "linear-gradient(to left, black 45%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to left, black 45%, transparent 100%)",
          }}
        />
      </div>

      <Container className="relative z-10">
        <Reveal delay={0.08}>
          <h1 className="text-6xl font-semibold tracking-tight text-on-dark-foreground sm:text-8xl lg:text-[8.5rem] lg:leading-[0.95]">
            {site.name}
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-5 text-xl font-medium text-on-dark-muted sm:text-2xl">{site.title}</p>
        </Reveal>

        <Reveal delay={0.22}>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-on-dark-muted-soft sm:text-sm">
            {heroTech.join(" • ")}
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-on-dark-muted sm:text-lg">
            Designing and building digital experiences from concept to implementation.
          </p>
        </Reveal>

        <Reveal delay={0.36}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#work" variant="primary">
              View Selected Work
            </Button>
            <Button href={site.github} variant="inverse" external>
              GitHub
            </Button>
          </div>
        </Reveal>
      </Container>

      <Reveal delay={0.6} className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
        <div className="flex flex-col items-center gap-2 text-on-dark-muted-soft">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em]">Scroll</span>
          <span className="h-8 w-px bg-on-dark-border-strong" aria-hidden="true" />
        </div>
      </Reveal>
    </section>
  );
}
