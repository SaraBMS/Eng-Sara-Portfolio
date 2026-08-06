import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { experience, education } from "@/lib/experience";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section id="experience" className="border-t border-border py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Experience" title="Where I've built." />

        <ol className="mt-14 space-y-6">
          {experience.map((item, index) => (
            <Reveal as="li" key={`${item.company}-${item.period}`} delay={index * 0.05}>
              <div
                className={cn(
                  "flex flex-col gap-1 border-b border-border pb-6 sm:flex-row sm:items-baseline sm:justify-between",
                  item.emphasis === "secondary" && "opacity-70"
                )}
              >
                <div>
                  <h3
                    className={cn(
                      "font-semibold text-foreground",
                      item.emphasis === "primary" ? "text-lg" : "text-base"
                    )}
                  >
                    {item.role}
                    <span className="text-muted"> — {item.company}</span>
                  </h3>
                  <p className="mt-1 text-sm text-muted-soft">{item.location}</p>
                </div>
                <p className="font-mono text-sm text-muted">{item.period}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col gap-1 rounded-xl border border-border bg-surface p-6 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-accent">
                Education
              </p>
              <h3 className="mt-1 font-semibold text-foreground">{education.degree}</h3>
              <p className="mt-1 text-sm text-muted-soft">{education.institution}</p>
            </div>
            <p className="font-mono text-sm text-muted">{education.period}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
