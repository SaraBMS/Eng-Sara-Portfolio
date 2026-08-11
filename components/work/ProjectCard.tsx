import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";
import { ProjectSlideshow } from "@/components/work/ProjectSlideshow";
import type { Project } from "@/lib/projects";
import type { ProjectImage } from "@/lib/getProjectImages";

const PLACEHOLDER_GRADIENTS = [
  "from-stone-200 via-stone-100 to-accent-soft",
  "from-accent-soft via-stone-100 to-stone-200",
  "from-stone-800 via-stone-600 to-stone-400",
  "from-stone-100 via-accent-soft to-stone-200",
];

function gradientFor(slug: string) {
  const hash = slug.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return PLACEHOLDER_GRADIENTS[hash % PLACEHOLDER_GRADIENTS.length];
}

function ProjectVisual({ project, images }: { project: Project; images: ProjectImage[] }) {
  if (images.length > 0) {
    return <ProjectSlideshow images={images} title={project.title} />;
  }

  const isDark = gradientFor(project.slug).includes("stone-800");
  return (
    <div
      className={`flex aspect-[4/3] w-full items-center justify-center rounded-2xl bg-gradient-to-br ${gradientFor(project.slug)}`}
    >
      <p
        className={`font-mono text-xs font-medium uppercase tracking-[0.2em] ${isDark ? "text-white/70" : "text-muted"}`}
      >
        {project.category}
      </p>
    </div>
  );
}

export function ProjectCard({
  project,
  images,
  index,
}: {
  project: Project;
  images: ProjectImage[];
  index: number;
}) {
  return (
    <article className="grid gap-8 rounded-3xl border border-border bg-surface p-6 shadow-[0_1px_2px_rgba(28,25,23,0.04)] transition-shadow duration-300 hover:shadow-[0_24px_48px_-24px_rgba(28,25,23,0.18)] sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-12">
      <Reveal className={index % 2 === 1 ? "lg:order-2" : undefined}>
        <ProjectVisual project={project} images={images} />
      </Reveal>

      <div className={index % 2 === 1 ? "lg:order-1" : undefined}>
        <Reveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted-soft">
            {project.category}
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {project.title}
          </h3>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-2 text-xs text-muted-soft">
            <span className="font-medium text-muted">My Role:</span> {project.role}
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-5 text-base leading-relaxed text-muted">{project.description}</p>
        </Reveal>

        <Reveal delay={0.16} className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
          {project.technologies.length > 5 && <Tag>+{project.technologies.length - 5}</Tag>}
        </Reveal>

        <Reveal delay={0.2} className="mt-6 flex items-center gap-4">
          <Link
            href={`/work/${project.slug}`}
            prefetch={false}
            className="text-sm font-medium text-accent-hover transition-colors hover:text-accent"
          >
            View Case Study →
          </Link>
          {project.proprietary && (
            <span className="text-xs font-medium text-muted-soft">Proprietary — code not public</span>
          )}
        </Reveal>
      </div>
    </article>
  );
}

export default ProjectCard;
