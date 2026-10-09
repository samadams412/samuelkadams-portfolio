import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import {
  contact,
  education,
  experience,
  relevantProjects,
  resumePdfUrl,
  skills,
  summary,
} from "@/lib/resume-data";

export const metadata: Metadata = {
  title: "Resume",
  description: `${contact.name}'s resume — full-stack software engineering, cloud infrastructure, and IT support experience.`,
};

export default function ResumePage() {
  return (
    <Container>
      <div className="py-16 sm:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              {contact.name}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {contact.location} · {contact.phone} · {contact.email}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              <a
                href={contact.linkedinUrl}
                className="underline-offset-4 hover:text-foreground hover:underline"
              >
                {contact.linkedin}
              </a>
            </p>
          </div>

          <a
            href={resumePdfUrl}
            download
            className="inline-flex shrink-0 items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Download PDF
          </a>
        </div>

        <section className="mt-10">
          <h2 className="text-lg font-medium text-foreground">
            Summary of Qualifications
          </h2>
          <p className="mt-3 max-w-prose text-muted-foreground">{summary}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-medium text-foreground">Skills</h2>
          <dl className="mt-3 flex flex-col gap-3">
            <div>
              <dt className="text-sm font-medium text-foreground">
                Computer Skills
              </dt>
              <dd className="mt-1 text-sm text-muted-foreground">
                {skills.computer.join(", ")}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-foreground">
                Technical Skills
              </dt>
              <dd className="mt-1 text-sm text-muted-foreground">
                {skills.technical.join(", ")}
              </dd>
            </div>
          </dl>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-medium text-foreground">Education</h2>
          <ul className="mt-3 flex flex-col gap-4">
            {education.map((entry) => (
              <li
                key={entry.degree}
                className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {entry.degree}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {entry.institution}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">{entry.date}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-medium text-foreground">Experience</h2>
          <ul className="mt-3 flex flex-col gap-8">
            {experience.map((entry) => (
              <li key={`${entry.title}-${entry.org}`}>
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                  <p className="text-sm font-medium text-foreground">
                    {entry.title} | {entry.org}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {entry.start} – {entry.end}
                  </p>
                </div>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-medium text-foreground">
            Relevant Projects
          </h2>
          <ul className="mt-3 flex flex-col gap-8">
            {relevantProjects.map((project) => (
              <li key={project.title}>
                <p className="text-sm font-medium text-foreground">
                  {project.slug ? (
                    <Link
                      href={`/projects/${project.slug}`}
                      className="underline-offset-4 hover:underline"
                    >
                      {project.title}
                    </Link>
                  ) : (
                    project.title
                  )}{" "}
                  <span className="font-normal text-muted-foreground">
                    | {project.role}
                  </span>
                </p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Container>
  );
}
