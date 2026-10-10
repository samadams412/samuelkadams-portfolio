import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { timeline } from "@/lib/resume-data";

export const metadata: Metadata = {
  title: "Timeline",
  description:
    "Sam Adams's career and education timeline, from first job to Computer Science degree.",
};

export default function TimelinePage() {
  return (
    <Container>
      <div className="py-16 sm:py-20">
        <h1 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          Timeline
        </h1>
        <p className="mt-3 max-w-prose text-muted-foreground">
          Education and career milestones, in order.
        </p>

        <ol className="mt-10 flex flex-col gap-8 border-l border-border pl-6">
          {timeline.map((entry) => (
            <li key={`${entry.title}-${entry.org}`} className="relative">
              <span className="absolute top-1.5 -left-[1.6rem] h-2 w-2 rounded-full bg-accent" />
              <p className="text-sm text-muted-foreground">{entry.date}</p>
              <p className="mt-1 text-sm font-medium text-foreground">
                {entry.title}
              </p>
              <p className="text-sm text-muted-foreground">{entry.org}</p>
            </li>
          ))}
        </ol>
      </div>
    </Container>
  );
}
