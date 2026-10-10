import Link from "next/link";

import { HeroGraph } from "@/components/three/hero-graph";

export function Hero() {
  return (
    <section className="flex flex-col gap-10 py-16 sm:py-24 md:flex-row md:items-center md:gap-12">
      <div className="flex-1">
        <p className="text-base text-muted-foreground">Hi, I&apos;m Sam.</p>
        <h1 className="mt-3 text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
          Full-stack developer who also runs the infrastructure.
        </h1>
        <p className="mt-5 max-w-prose text-lg text-muted-foreground">
          I build web apps end to end, and I run the servers underneath them
          too: a home Proxmox lab and build-log posts documenting how it all
          gets put together.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/resume"
            className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
          >
            Resume
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent"
          >
            Contact
          </Link>
        </div>
      </div>

      <div className="mx-auto h-56 w-56 shrink-0 text-accent sm:h-64 sm:w-64 md:mx-0">
        <HeroGraph className="h-full w-full" />
      </div>
    </section>
  );
}
