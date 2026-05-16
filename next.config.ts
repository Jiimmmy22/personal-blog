import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const ownerName = process.env.GITHUB_REPOSITORY_OWNER;
const isGithubPagesBuild = process.env.GITHUB_ACTIONS === "true";
const isUserOrOrgPagesSite =
  repoName?.toLowerCase() === `${ownerName?.toLowerCase()}.github.io`;
const basePath =
  isGithubPagesBuild && repoName && !isUserOrOrgPagesSite ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
