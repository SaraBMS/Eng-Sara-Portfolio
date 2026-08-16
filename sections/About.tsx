import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/site";
import { experience, education } from "@/lib/experience";
import { cn } from "@/lib/utils";
import { withBasePath } from "@/lib/basePath";

const facts = [
  { label: "Focus", value: "Frontend & React Native Development" },
  { label: "Experience", value: "3+ years, web and mobile" },
  { label: "Background", value: education.degree },
  { label: "Location", value: site.location },
];

const flow = [
  { label: "Design", detail: "UI/UX and interface decisions" },
  { label: "Build", detail: "React / Next.js / TypeScript" },
  { label: "Mobile", detail: "React Native / Expo" },
  { label: "Ship", detail: "Responsive, performant experiences" },
];

export function About() {
  return (
    <section
      id="about"
      className="border-t border-border py-24 sm:py-32"
      style={{
        background:
          "linear-gradient(to bottom, var(--atmo-6), var(--atmo-7) 40%, var(--background) 85%)",
      }}
    >
      <Container>
        <SectionHeading eyebrow="About" title="A structured, product-minded approach to frontend." />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6">
            <Reveal>
              <p className="text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
                I&apos;m Sara Albishlawy, a Frontend &amp; React Native Developer with 3+ years of
                experience building scalable web and mobile applications. I work across both
                sides of the interface — shaping UI/UX and visual experiences, then bringing them
                to life through frontend and mobile development.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
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

        <div className="mt-16 grid gap-6 sm:grid-cols-4">
          {flow.map((step, index) => (
            <Reveal key={step.label} delay={index * 0.08}>
              <div className="relative pl-6 sm:border-l sm:border-border sm:pl-6 sm:first:border-l-0 sm:first:pl-0">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{step.label}</h3>
                <p className="mt-1 text-sm text-muted">{step.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.05} className="relative mt-16 h-28 w-full overflow-hidden rounded-2xl sm:h-36">
          <Image
            src={withBasePath("/assets/scenes/visual-data-3d.jpg")}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </Reveal>

        <div className="mt-16 pt-2">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-muted-soft">
              Where I&apos;ve built
            </p>
          </Reveal>

          <ol className="mt-6 space-y-4">
            {experience.map((item, index) => (
              <Reveal as="li" key={`${item.company}-${item.period}`} delay={index * 0.04}>
                <div
                  className={cn(
                    "flex flex-col gap-1 border-b border-border pb-4 sm:flex-row sm:items-baseline sm:justify-between",
                    item.emphasis === "secondary" && "opacity-70"
                  )}
                >
                  <p
                    className={cn(
                      "font-medium text-foreground",
                      item.emphasis === "primary" ? "text-base" : "text-sm"
                    )}
                  >
                    {item.role}
                    <span className="text-muted"> — {item.company}</span>
                  </p>
                  <p className="font-mono text-xs text-muted-soft">{item.period}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.1}>
            <div className="mt-6 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <p className="text-sm text-muted">
                <span className="font-medium text-foreground">{education.degree}</span> —{" "}
                {education.institution}
              </p>
              <p className="font-mono text-xs text-muted-soft">{education.period}</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
