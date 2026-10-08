import Link from "next/link";

import type { ProjectMeta } from "@/lib/projects";

// Log-style rows rather than a card grid: everything is visible without a
// click, ordered top to bottom with an accent-colored index mark, closer to
// a build-log/status list than a generic project showcase.
export function FeaturedProjects({ projects }: { projects: ProjectMeta[] }) {
  return (
    <section className="py-16 sm:py-20">
      <h2 className="text-2xl font-medium text-foreground">Featured work</h2>

      <ol className="mt-8 divide-y divide-border">
        {projects.map((project, index) => (
          <li
            key={project.slug}
            className="flex flex-col gap-3 py-8 first:pt-0 sm:flex-row sm:gap-8"
          >
            <span className="font-mono text-sm text-accent sm:w-10 sm:pt-1">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <h3 className="text-lg font-medium text-foreground">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="underline-offset-4 hover:underline"
                  >
                    {project.title}
                  </Link>
                </h3>
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
                {project.summary}
              </p>

              <div className="mt-3 flex gap-4 text-sm">
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  Case study
                </Link>
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    className="text-foreground underline-offset-4 hover:underline"
                  >
                    Code
                  </a>
                ) : null}
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
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
    </section>
  );
}
