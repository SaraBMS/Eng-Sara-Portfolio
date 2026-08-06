import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";
import { techStack } from "@/lib/techStack";

const groups: { label: string; items: readonly string[]; emphasis?: boolean }[] = [
  { label: "Primary", items: techStack.primary, emphasis: true },
  { label: "Supporting", items: techStack.supporting },
  { label: "Tools", items: techStack.tools },
];

export function TechStack() {
  return (
    <section id="skills" className="border-t border-border py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Core Technologies"
          title="The tools I build with."
          description="No proficiency percentages — just the stack I use day to day across web and mobile."
        />

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {groups.map((group, index) => (
            <Reveal key={group.label} delay={index * 0.08}>
              <h3 className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-muted-soft">
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item} emphasis={group.emphasis}>
                    {item}
                  </Tag>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
