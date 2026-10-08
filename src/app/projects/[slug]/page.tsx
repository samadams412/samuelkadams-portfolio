import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { getAllProjectSlugs, getProject } from "@/lib/projects";

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { meta } = await getProject(slug);

  return {
    title: meta.title,
    description: meta.summary,
    openGraph: {
      title: meta.title,
      description: meta.summary,
      images: [meta.ogImage],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const slugs = await getAllProjectSlugs();
  if (!slugs.includes(slug)) notFound();

  const { meta, content } = await getProject(slug);

  return (
    <Container>
      <div className="py-16 sm:py-20">
        <Link
          href="/projects"
          className="text-sm text-muted-foreground underline-offset-4 hover:underline"
        >
          ← All projects
        </Link>

        <h1 className="mt-4 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          {meta.title}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">{meta.role}</p>

        <ul className="mt-4 flex flex-wrap gap-3">
          {meta.stack.map((item) => (
            <li key={item} className="font-mono text-xs text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex gap-4 text-sm">
          {meta.repoUrl ? (
            <a
              href={meta.repoUrl}
              className="text-foreground underline-offset-4 hover:underline"
            >
              Code
            </a>
          ) : null}
          {meta.liveUrl ? (
            <a
              href={meta.liveUrl}
              className="text-foreground underline-offset-4 hover:underline"
            >
              Live
            </a>
          ) : null}
        </div>

        <article className="mt-10">{content}</article>

        {meta.screenshots && meta.screenshots.length > 0 ? (
          <div className="mt-10 flex flex-col gap-6">
            {meta.screenshots.map((screenshot) => (
              <div
                key={screenshot.src}
                className="relative aspect-video w-full overflow-hidden bg-muted"
              >
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 768px, 100vw"
                />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </Container>
  );
}
