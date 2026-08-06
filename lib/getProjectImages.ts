import fs from "node:fs";
import path from "node:path";

// Server-only: reads the filesystem at build time. Never import this from a
// "use client" component — bundling `fs` for the browser breaks the build.
const PROJECTS_IMAGE_ROOT = path.join(process.cwd(), "public", "assets", "projects");
const ALLOWED_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif", ".gif"]);

export interface ProjectImage {
  src: string;
  alt: string;
}

export function getProjectImages(slug: string, projectTitle: string): ProjectImage[] {
  const dir = path.join(PROJECTS_IMAGE_ROOT, slug);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => ALLOWED_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort()
    .map((file, index) => ({
      src: `/assets/projects/${slug}/${file}`,
      alt: `${projectTitle} — screenshot ${index + 1}`,
    }));
}
