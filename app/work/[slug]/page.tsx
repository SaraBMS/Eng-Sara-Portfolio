import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/lib/projects";
import { getProjectImages } from "@/lib/getProjectImages";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectSlideshow } from "@/components/work/ProjectSlideshow";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} — ${site.name}`,
    description: project.description,
  };
}

function CaseStudyBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <h2 className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-accent">
        {label}
      </h2>
      <div className="mt-3 text-base leading-relaxed text-muted">{children}</div>
    </Reveal>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const images = getProjectImages(project.slug, project.title);
  const caseStudy = project.caseStudy;

  return (
    <article className="relative overflow-hidden py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-105 bg-[radial-gradient(ellipse_at_top,var(--accent-soft)_0%,transparent_65%)] opacity-60"
        aria-hidden="true"
      />

      <Container className="max-w-4xl">
        <Reveal>
          <Link
            href="/#work"
            prefetch={false}
            className="text-sm font-medium text-muted transition-colors hover:text-accent-hover"
          >
            ← Back to Selected Work
          </Link>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mt-8 font-mono text-xs font-medium uppercase tracking-[0.15em] text-accent">
            {project.category}
          </p>
          <h1 className="mt-3 text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
            {project.title}
          </h1>
          <p className="mt-4 text-sm text-muted-soft">
            <span className="font-medium text-muted">My Role:</span> {project.role}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {project.description}
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.links?.demo && (
              <Button href={project.links.demo} external variant="primary">
                Live Demo
              </Button>
            )}
            {project.links?.github && (
              <Button href={project.links.github} external variant="secondary">
                View Code
              </Button>
            )}
            {project.proprietary && (
              <span className="text-sm font-medium text-muted-soft">
                Proprietary — code not public
              </span>
            )}
          </div>
        </Reveal>

        <div className="mt-14 border-t border-border pt-10">
          <Reveal>
            <h2 className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-muted-soft">
              Technologies
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>

      <div className="mt-14 border-t border-border pt-14">
        <Container className="max-w-4xl">
          <Reveal>
            <h2 className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-muted-soft">
              Screenshots
            </h2>
          </Reveal>
        </Container>
        <div className="mt-6">
          {images.length > 0 ? (
            <ProjectSlideshow images={images} title={project.title} />
          ) : (
            <Container className="max-w-4xl">
              <div className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-accent-soft-border bg-accent-soft/40 py-24 text-center">
                <p className="text-sm font-medium text-accent-hover">Screenshots coming soon</p>
                <p className="max-w-sm text-xs text-muted">
                  Drop image files into{" "}
                  <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[0.85em]">
                    public/assets/projects/{project.slug}/
                  </code>{" "}
                  and they&apos;ll appear here automatically on the next build.
                </p>
              </div>
            </Container>
          )}
        </div>
      </div>

      <Container className="max-w-4xl">
        {caseStudy && (
          <div className="mt-14 space-y-10 border-t border-border pt-14">
            {caseStudy.problem && (
              <CaseStudyBlock label="Problem / Context">
                <p>{caseStudy.problem}</p>
              </CaseStudyBlock>
            )}

            {caseStudy.contribution && (
              <CaseStudyBlock label="My Contribution">
                <p>{caseStudy.contribution}</p>
              </CaseStudyBlock>
            )}

            {caseStudy.keyFeatures && caseStudy.keyFeatures.length > 0 && (
              <CaseStudyBlock label="Key Features">
                <ul className="grid gap-2 sm:grid-cols-2">
                  {caseStudy.keyFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CaseStudyBlock>
            )}

            {caseStudy.technicalHighlights && caseStudy.technicalHighlights.length > 0 && (
              <CaseStudyBlock label="Technical Highlights">
                <ul className="grid gap-2 sm:grid-cols-2">
                  {caseStudy.technicalHighlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CaseStudyBlock>
            )}

            {caseStudy.challenges && caseStudy.challenges.length > 0 && (
              <CaseStudyBlock label="Challenges">
                <ul className="space-y-2">
                  {caseStudy.challenges.map((challenge) => (
                    <li key={challenge} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CaseStudyBlock>
            )}

            {caseStudy.outcome && (
              <CaseStudyBlock label="Outcome">
                <p>{caseStudy.outcome}</p>
              </CaseStudyBlock>
            )}
          </div>
        )}
      </Container>
    </article>
  );
}
