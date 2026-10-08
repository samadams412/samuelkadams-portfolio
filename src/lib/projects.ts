import fs from "node:fs/promises";
import path from "node:path";

import { compileMDX } from "next-mdx-remote/rsc";
import type { ReactElement } from "react";
import remarkGfm from "remark-gfm";

import { caseStudyComponents } from "@/components/projects/mdx-components";

const CONTENT_DIR = path.join(process.cwd(), "content", "projects");
const compileOptions = {
  parseFrontmatter: true,
  mdxOptions: { remarkPlugins: [remarkGfm] },
};

export type ProjectScreenshot = {
  src: string;
  alt: string;
};

export type ProjectMeta = {
  title: string;
  slug: string;
  summary: string;
  stack: string[];
  role: string;
  repoUrl?: string;
  liveUrl?: string;
  ogImage: string;
  featured: boolean;
  screenshots?: ProjectScreenshot[];
};

async function readProjectFile(slug: string) {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  return fs.readFile(filePath, "utf8");
}

export async function getAllProjectSlugs(): Promise<string[]> {
  const files = await fs.readdir(CONTENT_DIR);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getAllProjects(): Promise<ProjectMeta[]> {
  const slugs = await getAllProjectSlugs();
  const projects = await Promise.all(
    slugs.map(async (slug) => {
      const source = await readProjectFile(slug);
      const { frontmatter } = await compileMDX<ProjectMeta>({
        source,
        options: compileOptions,
      });
      return frontmatter;
    }),
  );
  return projects;
}

export async function getProject(slug: string): Promise<{
  meta: ProjectMeta;
  content: ReactElement;
}> {
  const source = await readProjectFile(slug);
  const { frontmatter, content } = await compileMDX<ProjectMeta>({
    source,
    options: compileOptions,
    components: caseStudyComponents,
  });
  return { meta: frontmatter, content };
}
