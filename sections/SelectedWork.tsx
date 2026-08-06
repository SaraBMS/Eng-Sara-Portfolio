import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/lib/projects";
import { getProjectImages } from "@/lib/getProjectImages";

export function SelectedWork() {
  const ordered = [...projects].sort((a, b) => a.order - b.order);

  return (
    <section id="work" className="border-t border-border py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Web and mobile products, built end-to-end."
          description="A mix of enterprise dashboards, AI-powered platforms, and consumer-facing products across React, Next.js, and React Native."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ordered.map((project, index) => {
            const images = getProjectImages(project.slug, project.title);
            return (
              <Reveal key={project.slug} delay={(index % 3) * 0.08}>
                <ProjectCard project={project} cover={images[0]} />
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
