export type Project = {
  title: string;
  description: string;
  stack: string[];
  image: string;
  repoLink?: string;
  deployLink?: string;
};

// Full project set (Phase 3 — /projects grid). Source copy carried over from
// the previous react-portfolio build (src/data/portfolio.js) rather than
// rewritten, per the rebuild plan's project list in Section 2 / Section 12.
export const projects: Project[] = [
  {
    title: "Grocery Portal",
    description:
      "A full-stack e-commerce web application built with Next.js, React, and Tailwind CSS, featuring product browsing, dynamic filtering, secure authentication (NextAuth), and Stripe-based checkout. Developed collaboratively as part of the CS3773 Software Engineering course, with a focus on modular design, CI/CD, and modern frontend/backend integration using Prisma and PostgreSQL.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
    image: "/projects/grocery-portal/homepage.png",
    repoLink: "https://github.com/samadams412/customer-portal",
    deployLink: "https://customer-portal-alpha-nine.vercel.app/",
  },
  {
    title: "DailyBlog",
    description:
      "A SaaS blogging platform built with Next.js, Supabase, and Stripe — the write-up engine behind this portfolio's own build-log posts, with auth, subscriptions, and a Zustand-backed editor.",
    stack: ["Next.js", "Supabase", "Stripe", "Zustand"],
    image: "/projects/dailyblog/homepage.jpg",
    repoLink: "https://github.com/samadams412/dailyblog-SaaS",
    deployLink: "https://sams-blog-gamma.vercel.app/",
  },
  {
    title: "Forevercraft",
    description:
      "A fan-made hub site for World of Warcraft: Forever — a unified race/class/talent planner, reference section, and guides/blog, built to be maintained and expanded through the game's beta and beyond.",
    stack: ["Next.js", "TypeScript", "Tailwind", "MDX"],
    image: "/projects/forevercraft/hero.png",
    repoLink: "https://github.com/samadams412/forevercraft",
  },
  {
    title: "Eventify",
    description:
      "A backend/data pipeline project for event discovery and management, with a normalized relational schema modeling events, venues, and attendees.",
    stack: ["SQL", "Data modeling"],
    image: "/projects/eventify/er-diagram.png",
    repoLink: "https://github.com/samadams412/eventify",
  },
  {
    title: "AWS EC2 Micro-CMS + Auth",
    description:
      "The capstone build from an 18-assignment web technologies course: a MySQL-backed CMS with salted-SHA256 authentication, deployed on an EC2 instance with IAM roles and nginx/TLS in front.",
    stack: ["AWS EC2", "nginx", "MySQL", "IAM"],
    image: "/projects/aws-ec2-microcms-auth/cms-home.png",
    repoLink: "https://github.com/samadams412/aws-ec2-microcms-auth",
  },
  {
    title: "RaveWavelengths",
    description:
      "An e-commerce site for a paying client, built on WordPress and WooCommerce with Stripe integration and custom CSS/JS/PHP for enhanced functionality — a clean, user-friendly storefront delivered on a pre-built theme.",
    stack: ["WordPress", "WooCommerce", "PHP"],
    image: "/projects/ravewavelengths/homepage.jpg",
    deployLink: "https://ravewavelengths.com/",
  },
];

// Home page highlights a subset; /projects shows the full set.
const featuredTitles = ["Grocery Portal", "DailyBlog", "RaveWavelengths"];
export const featuredProjects: Project[] = projects.filter((project) =>
  featuredTitles.includes(project.title),
);
