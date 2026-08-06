import fs from "node:fs";
import path from "node:path";
import { site } from "./site";

// Server-only: checked at build time so the CV button never links to a 404
// before the real PDF has been dropped into public/cv/.
export function cvExists(): boolean {
  const filePath = path.join(process.cwd(), "public", "cv", site.cvFileName);
  return fs.existsSync(filePath);
}
