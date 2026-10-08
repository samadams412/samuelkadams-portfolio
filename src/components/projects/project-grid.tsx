import Image from "next/image";

import type { Project } from "@/data/projects";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="mt-10 grid gap-8 sm:grid-cols-2">
      {projects.map((project) => (
        <article
          key={project.title}
          className="flex flex-col overflow-hidden rounded-lg border border-border"
        >
          <div className="relative aspect-video w-full bg-muted">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
          </div>

          <div className="flex flex-1 flex-col gap-3 p-5">
            <h2 className="text-lg font-medium text-foreground">
              {project.title}
            </h2>

            <p className="flex-1 text-sm text-muted-foreground">
              {project.description}
            </p>

            <ul className="flex flex-wrap gap-3">
              {project.stack.map((item) => (
                <li
                  key={item}
                  className="font-mono text-xs text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex gap-4 text-sm">
              {project.repoLink ? (
                <a
                  href={project.repoLink}
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  Code
                </a>
              ) : null}
              {project.deployLink ? (
                <a
                  href={project.deployLink}
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  Live
                </a>
              ) : null}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
