import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa6";
import {
  SiBootstrap,
  SiDocker,
  SiExpress,
  SiGithubactions,
  SiMdx,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiWoocommerce,
  SiWordpress,
} from "react-icons/si";

// Keyed by the exact stack strings used in content/projects/*.mdx frontmatter.
// Entries with no real brand logo (IAM, "Risk Assessment", etc.) are
// intentionally omitted — TechTag falls back to plain text for those.
export const techIcons: Record<string, IconType> = {
  "Next.js": SiNextdotjs,
  React: SiReact,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  MDX: SiMdx,
  Prisma: SiPrisma,
  PostgreSQL: SiPostgresql,
  Stripe: SiStripe,
  Express: SiExpress,
  MySQL: SiMysql,
  Docker: SiDocker,
  "AWS EC2": FaAws,
  "GitHub Actions": SiGithubactions,
  Supabase: SiSupabase,
  WordPress: SiWordpress,
  WooCommerce: SiWoocommerce,
  PHP: SiPhp,
  nginx: SiNginx,
  Bootstrap: SiBootstrap,
};
