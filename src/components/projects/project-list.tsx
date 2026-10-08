import type { Project } from "@/data/projects";

// Same log-style row treatment as the home page's FeaturedProjects — see
// src/components/home/featured-projects.tsx — applied to the full project
// set rather than just the featured three.
export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ol className="mt-8 divide-y divide-border">
      {projects.map((project, index) => (
        <li
          key={project.title}
          className="flex flex-col gap-3 py-8 first:pt-0 sm:flex-row sm:gap-8"
        >
          <span className="font-mono text-sm text-accent sm:w-10 sm:pt-1">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <h2 className="text-lg font-medium text-foreground">
                {project.title}
              </h2>
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
            </div>

            <p className="mt-2 max-w-prose text-sm text-muted-foreground">
              {project.description}
            </p>

            <div className="mt-3 flex gap-4 text-sm">
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
        </li>
      ))}
    </ol>
  );
}
