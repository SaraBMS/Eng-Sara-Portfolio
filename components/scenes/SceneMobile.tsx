import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";
import { withBasePath } from "@/lib/basePath";
import { techStack } from "@/lib/techStack";

// Same treatment as SceneWeb, one step further into the atmosphere's dusk
// transition — on-dark token set, compact rather than a full viewport.
export function SceneMobile() {
  return (
    <section
      id="mobile"
      className="relative overflow-hidden border-t border-on-dark-border py-16 sm:py-20"
      style={{ background: "linear-gradient(to bottom, var(--atmo-3), var(--atmo-4))" }}
    >
      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal delay={0.14} className="relative order-2 hidden lg:order-1 lg:block">
            <div className="absolute inset-4 -z-10 rounded-full bg-on-dark-accent-soft blur-3xl" aria-hidden="true" />
            <Image
              src={withBasePath("/assets/scenes/visual-mobile-3d.jpg")}
              alt=""
              width={1600}
              height={1008}
              className="rounded-2xl shadow-[0_30px_70px_-25px_rgba(0,0,0,0.7)] ring-1 ring-on-dark-border"
            />
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Mobile"
              title="React Native, built for real devices."
              description="Cross-platform apps with touch-optimized navigation, native-feeling animation, and secure authentication."
              tone="dark"
            />

            <Reveal delay={0.1} className="mt-12 flex flex-wrap gap-2">
              {techStack.mobile.map((tech) => (
                <Tag key={tech} tone="dark" emphasis={["React Native", "Expo"].includes(tech)}>
                  {tech}
                </Tag>
              ))}
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
