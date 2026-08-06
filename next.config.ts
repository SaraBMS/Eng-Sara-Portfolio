import type { NextConfig } from "next";

// GitHub Pages deploys either as a project site (username.github.io/repo-name,
// which needs a basePath) or the special root user site (username.github.io,
// which must NOT have one). GITHUB_REPOSITORY ("owner/repo") is provided
// automatically by GitHub Actions, so this is computed at build time with no
// repo name hardcoded anywhere.
const repoEnv = process.env.GITHUB_REPOSITORY;
let basePath = "";
let siteUrl = "";

if (repoEnv) {
  const [owner, repo] = repoEnv.split("/");
  const isUserOrOrgSite = repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;
  basePath = isUserOrOrgSite ? "" : `/${repo}`;
  siteUrl = `https://${owner.toLowerCase()}.github.io${basePath}`;
}

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
};

export default nextConfig;
