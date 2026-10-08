import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { ProjectList } from "@/components/projects/project-list";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Full-stack web apps, infrastructure builds, and client work, all built by Sam Adams.",
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <Container>
      <div className="py-16 sm:py-20">
        <h1 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          Projects
        </h1>
        <p className="mt-3 max-w-prose text-muted-foreground">
          Everything from full-stack course projects to client work and
          infrastructure builds.
        </p>

        <ProjectList projects={projects} />
      </div>
    </Container>
  );
}
