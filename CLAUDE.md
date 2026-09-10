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
- **Conventional commits.** Format commit messages as `type(scope): summary`, e.g. `feat(home): add hero section`, `fix(nav): correct mobile breakpoint`. Common types: `feat`, `fix`, `chore`, `docs`, `refactor`, `style`, `test`, `ci`.

## Do not

- Do not add a new dependency without first checking `package.json` — an existing package may already cover the need.
