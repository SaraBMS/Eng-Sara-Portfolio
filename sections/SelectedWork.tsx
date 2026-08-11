import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectGallery, type ProjectGalleryItem } from "@/components/work/ProjectGallery";
import { projects } from "@/lib/projects";
import { getProjectImages } from "@/lib/getProjectImages";

export function SelectedWork() {
  const ordered = [...projects].sort((a, b) => a.order - b.order);

  const items: ProjectGalleryItem[] = ordered.map((project) => ({
    project,
    images: getProjectImages(project.slug, project.title),
  }));

  return (
    <section
      id="work"
      className="border-t border-on-dark-border py-24 sm:py-32"
      style={{
        background: "linear-gradient(to bottom, var(--atmo-4), var(--atmo-5) 45%, var(--atmo-6))",
      }}
    >
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Web and mobile products, built end-to-end."
          description="A mix of enterprise dashboards, AI-powered platforms, and consumer-facing products across React, Next.js, and React Native."
          tone="dark"
        />

        <div className="mt-16">
          <ProjectGallery items={items} />
        </div>
      </Container>
    </section>
  );
}
