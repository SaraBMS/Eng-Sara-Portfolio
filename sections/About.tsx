import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/site";
import { education } from "@/lib/experience";

const facts = [
  { label: "Focus", value: "Frontend & React Native Development" },
  { label: "Experience", value: "3+ years, web and mobile" },
  { label: "Background", value: education.degree },
  { label: "Location", value: site.location },
];

export function About() {
  return (
    <section id="about" className="border-t border-border py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="About" title="A structured, product-minded approach to frontend." />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6">
            <Reveal>
              <p className="text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
                I&apos;m Sara Albishlawy, a Frontend &amp; React Native Developer with 3+ years of
                experience building scalable web and mobile applications. I specialize in
                React.js, Next.js, React Native, TypeScript, and JavaScript, with hands-on
                experience developing AI-powered platforms, enterprise dashboards, and interactive
                digital products.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                I work across both sides of the interface — shaping UI/UX and visual experiences,
                then bringing them to life through frontend and mobile development. My work
                focuses on reusable component architecture, API integration, performance, and
                thoughtful interaction design.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                With a background in Mechatronics Engineering, I bring an analytical and
                structured approach to solving technical problems while staying focused on
                product quality and user experience. I&apos;m currently open to frontend and React
                Native opportunities and open to relocating to the UAE.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <dl className="grid grid-cols-1 gap-6 rounded-xl border border-border bg-surface p-8">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-accent">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-foreground">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
