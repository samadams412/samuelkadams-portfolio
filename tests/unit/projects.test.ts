import { describe, expect, it } from "vitest";

import { getAllProjects, getAllProjectSlugs, getProject } from "@/lib/projects";

describe("projects data", () => {
  it("lists at least one project slug", async () => {
    const slugs = await getAllProjectSlugs();
    expect(slugs.length).toBeGreaterThan(0);
  });

  it("every project has the required frontmatter fields", async () => {
    const projects = await getAllProjects();

    for (const project of projects) {
      expect(project.title).toBeTruthy();
      expect(project.slug).toBeTruthy();
      expect(project.summary).toBeTruthy();
      expect(project.stack.length).toBeGreaterThan(0);
      expect(project.ogImage).toBeTruthy();
    }
  });

  it("loads a single project by slug with matching content", async () => {
    const slugs = await getAllProjectSlugs();
    const { meta, content } = await getProject(slugs[0]);

    expect(meta.slug).toBe(slugs[0]);
    expect(content).toBeTruthy();
  });
});
