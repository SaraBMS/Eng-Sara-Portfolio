# Sara Albishlawy — Portfolio

Personal portfolio for Sara Albishlawy, Frontend & React Native Developer. Built with Next.js (App Router), TypeScript, Tailwind CSS v4, and Framer Motion. Statically exported and deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

`output: 'export'` in `next.config.ts` makes this write a fully static site to `./out`. There's no server-only feature in use, so `next start` isn't part of the deploy path — GitHub Pages just serves `./out` directly.

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages** and set **Source** to **"GitHub Actions"**.
3. Push to `main` — `.github/workflows/deploy.yml` builds and deploys automatically.

`next.config.ts` auto-detects the correct `basePath` from `GITHUB_REPOSITORY` at build time, so this works whether the repo is a project site (`username.github.io/repo-name`) or the special root user site (`username.github.io`) — nothing to configure manually.

## Adding real content later

- **Project screenshots**: drop image files (`.png`, `.jpg`, `.webp`, etc.) into `public/assets/projects/<slug>/` (see `lib/projects.ts` for the slugs). They're picked up automatically on the next build/dev reload — no code changes needed. The first image found becomes a project's card cover image; all of them show in that project's case-study gallery.
- **CV**: add the PDF at `public/cv/sara-albishlawy-cv.pdf` (see `site.cvFileName` in `lib/site.ts`). The "Download CV" button activates automatically once the file exists — until then it renders as a disabled "CV coming soon" state instead of a dead link.
- **MTN DNO live demo link**: fill in `links.demo` for the `mtn-dno` entry in `lib/projects.ts` once you have the URL.
- **New projects / experience**: edit `lib/projects.ts` and `lib/experience.ts` — both are plain typed data arrays, no other files need to change.

## Project structure

```
app/            Routes: home page, /work/[slug] case studies, layout, metadata
components/     Reusable UI (buttons, tags, nav, project cards, motion wrapper)
sections/       Homepage sections (Hero, Selected Work, About, Experience, Skills, Contact)
lib/            Typed content data + small server-only helpers (image scan, CV check, basePath)
public/         Static assets — project screenshots and the CV go here
```
"# Eng-Sara-Portfolio" 
