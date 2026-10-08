import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { ProjectGrid } from "@/components/projects/project-grid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Full-stack web apps, infrastructure builds, and client work — Sam Adams's project grid.",
};

export default function ProjectsPage() {
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

        <ProjectGrid projects={projects} />
      </div>
    </Container>
  );
}
