import { ProjectCard } from "@/components/work/ProjectCard";
import type { Project } from "@/lib/projects";
import type { ProjectImage } from "@/lib/getProjectImages";

export interface ProjectGalleryItem {
  project: Project;
  images: ProjectImage[];
}

export function ProjectGallery({ items }: { items: ProjectGalleryItem[] }) {
  return (
    <div className="space-y-8">
      {items.map(({ project, images }, index) => (
        <ProjectCard key={project.slug} project={project} images={images} index={index} />
      ))}
    </div>
  );
}

export default ProjectGallery;
