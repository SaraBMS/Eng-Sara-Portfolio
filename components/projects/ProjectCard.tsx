import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";
import type { ProjectImage } from "@/lib/getProjectImages";
import { Tag } from "@/components/ui/Tag";

export function ProjectCard({
  project,
  cover,
}: {
  project: Project;
  cover: ProjectImage | undefined;
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      prefetch={false}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-shadow duration-300 hover:shadow-lg hover:shadow-stone-200/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-accent-soft">
        {cover ? (
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 border-2 border-dashed border-accent-soft-border text-accent-hover">
            <span className="text-xs font-medium uppercase tracking-widest">
              Screenshot coming soon
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-accent">
          {project.category}
        </p>
        <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
        <p className="text-xs text-muted-soft">
          <span className="font-medium text-muted">My Role:</span> {project.role}
        </p>
        <p className="line-clamp-3 text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="mt-auto flex flex-wrap gap-2 pt-3">
          {project.technologies.slice(0, 4).map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
          {project.technologies.length > 4 && <Tag>+{project.technologies.length - 4}</Tag>}
        </div>

        {project.proprietary && (
          <p className="pt-1 text-xs font-medium text-muted-soft">Proprietary — code not public</p>
        )}
      </div>
    </Link>
  );
}
