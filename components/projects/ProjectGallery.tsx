import Image from "next/image";
import type { ProjectImage } from "@/lib/getProjectImages";

export function ProjectGallery({
  images,
  slug,
}: {
  images: ProjectImage[];
  slug: string;
}) {
  if (images.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-accent-soft-border bg-accent-soft/40 py-24 text-center">
        <p className="text-sm font-medium text-accent-hover">Screenshots coming soon</p>
        <p className="max-w-sm text-xs text-muted">
          Drop image files into{" "}
          <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[0.85em]">
            public/assets/projects/{slug}/
          </code>{" "}
          and they&apos;ll appear here automatically on the next build.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {images.map((image) => (
        <div
          key={image.src}
          className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-surface"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
