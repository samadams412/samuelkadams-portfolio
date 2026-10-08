import type { MDXComponents } from "mdx/types";

// Shared MDX rendering for case-study bodies — plain Tailwind utility
// styling on the raw elements rather than a typography plugin, matching
// this project's "Tailwind only" convention.
export const caseStudyComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-10 text-xl font-medium text-foreground first:mt-0"
      {...props}
    />
  ),
  p: (props) => (
    <p className="mt-4 max-w-prose text-muted-foreground" {...props} />
  ),
  a: (props) => (
    <a
      className="text-foreground underline-offset-4 hover:underline"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="mt-4 list-disc space-y-1 pl-5 text-muted-foreground"
      {...props}
    />
  ),
  table: (props) => (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  thead: (props) => <thead className="text-left text-foreground" {...props} />,
  th: (props) => (
    <th className="border-b border-border py-2 pr-4 font-medium" {...props} />
  ),
  td: (props) => (
    <td
      className="border-b border-border py-2 pr-4 text-muted-foreground"
      {...props}
    />
  ),
};
