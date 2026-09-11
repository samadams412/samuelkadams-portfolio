@AGENTS.md

# samuelkadams-portfolio

Personal portfolio site built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Commands

- `npm run dev` — start the dev server (Turbopack)
- `npm run build` — production build
- `npm run start` — run the production build locally
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript, no emit
- `npm run format` — Prettier, writes changes
- `npm run format:check` — Prettier, check only

Lint and format also run automatically on staged files via a Husky pre-commit hook (`lint-staged`). CI (`.github/workflows/ci.yml`) runs `typecheck`, `lint`, and `build` on every push and PR.

## Conventions

- **Server Components by default.** Only add `"use client"` to a file when it actually needs interactivity, state, effects, or browser-only APIs. Keep client components as small/leaf as possible.
- **Tailwind only.** No ad hoc CSS files, inline `style` props, or CSS-in-JS — express styling with Tailwind utility classes. `globals.css` stays limited to Tailwind's base import and true global concerns (fonts, CSS variables).
- **Design tokens live in `globals.css`, not `tailwind.config.ts`.** This project uses Tailwind v4, whose convention is CSS-first config: semantic color tokens (`--background`, `--foreground`, `--muted`, `--muted-foreground`, `--border`, `--accent`, `--accent-foreground`) are defined as CSS variables on `:root` in `src/app/globals.css`, re-exposed as Tailwind utilities via `@theme inline`, and overridden for dark mode under the existing `@media (prefers-color-scheme: dark)` block. There is no `tailwind.config.ts` — don't add one for theming; extend the `@theme` block instead. Use the semantic utilities (`bg-background`, `text-muted-foreground`, `border-border`, `bg-accent`, etc.) in components rather than raw Tailwind palette classes (`bg-white`, `text-zinc-500`) so colors stay swappable from one place and dark mode stays automatic.
- **Dark mode follows OS preference only** (`prefers-color-scheme`), no manual toggle yet.
- **Shared layout lives in `src/components/layout/`** — `container.tsx` (page width/padding shell), `site-header.tsx`, `site-footer.tsx`, `mobile-nav-toggle.tsx` (the header's small client-only piece). Wrap new top-level page content in `<Container>` for consistent alignment with the header/footer.
- **Conventional commits.** Format commit messages as `type(scope): summary`, e.g. `feat(home): add hero section`, `fix(nav): correct mobile breakpoint`. Common types: `feat`, `fix`, `chore`, `docs`, `refactor`, `style`, `test`, `ci`.

## Do not

- Do not add a new dependency without first checking `package.json` — an existing package may already cover the need.
