import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";
import { withBasePath } from "@/lib/basePath";
import { techStack } from "@/lib/techStack";

// Sits in the still-dark part of the page's atmosphere — on-dark token set,
// kept compact (not a full viewport section) so it reads as a skills chapter
// rather than empty space between Hero and Mobile.
export function SceneWeb() {
  return (
    <section
      id="web"
      className="relative overflow-hidden border-t border-on-dark-border py-16 sm:py-20"
      style={{ background: "linear-gradient(to bottom, var(--atmo-2), var(--atmo-3))" }}
    >
      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Web"
              title="React & Next.js, end to end."
              description="Enterprise dashboards, AI-powered platforms, and responsive product UI — built with a modern, typed React stack."
              tone="dark"
            />

            <Reveal delay={0.1} className="mt-12 flex flex-wrap gap-2">
              {techStack.web.map((tech) => (
                <Tag
                  key={tech}
                  tone="dark"
                  emphasis={["React.js", "Next.js", "TypeScript"].includes(tech)}
                >
                  {tech}
                </Tag>
              ))}
            </Reveal>

            <Reveal delay={0.16} className="mt-8">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-on-dark-muted-soft">
                Tools
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {techStack.tools.map((tool) => (
                  <Tag key={tool} tone="dark">
                    {tool}
                  </Tag>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.14} className="relative hidden lg:block">
            <div className="absolute inset-4 -z-10 rounded-full bg-on-dark-accent-soft blur-3xl" aria-hidden="true" />
            <Image
              src={withBasePath("/assets/scenes/visual-web-3d.jpg")}
              alt=""
              width={1600}
              height={1008}
              className="rounded-2xl shadow-[0_30px_70px_-25px_rgba(0,0,0,0.7)] ring-1 ring-on-dark-border"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
