import Link from "next/link";

export function ContactStrip() {
  return (
    <section className="flex flex-col gap-6 border-t border-border py-12 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-base text-muted-foreground">
        Want the full background, or just want to talk shop?
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          href="/resume"
          className="inline-flex items-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent"
        >
          View resume
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}
