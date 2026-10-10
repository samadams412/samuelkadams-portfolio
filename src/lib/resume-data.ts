export const contact = {
  name: "Samuel Adams",
  location: "San Antonio, TX",
  phone: "210-542-6855",
  email: "Samueladams412@gmail.com",
  linkedin: "linkedin.com/in/samadams412",
  linkedinUrl: "https://linkedin.com/in/samadams412",
  site: "samuelkadams.com",
};

export const resumePdfUrl =
  "/resume/Samuel_Adams_Resume_General_FinalFormat.pdf";

export const summary =
  "Full-Stack Software Engineer with hands-on experience across production client web development, cloud infrastructure, and IT support. Demonstrates strong written and verbal communication skills, developed through technical mentoring and direct client collaboration, and exhibits self-directed problem-solving, initiative, and time management across concurrent coursework, freelance client work, and personal infrastructure projects.";

export const skills = {
  computer: ["Microsoft Office Suite", "Adobe Creative Cloud (Dreamweaver)"],
  technical: [
    "React",
    "Next.js",
    "Node.js",
    "PHP",
    "Python",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "AWS (EC2, S3, Lambda)",
    "Proxmox VE",
    "WordPress/WooCommerce",
    "Stripe API",
    "Git/GitHub",
  ],
};

export type EducationEntry = {
  degree: string;
  institution: string;
  date: string;
};

export const education: EducationEntry[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Texas at San Antonio",
    date: "Expected Graduation December 2026",
  },
  {
    degree: "Full Stack Web Development Coding Bootcamp Certificate",
    institution: "University of Texas at San Antonio",
    date: "2022",
  },
];

export type ExperienceEntry = {
  title: string;
  org: string;
  start: string;
  end: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    title: "Instructional Specialist",
    org: "EdX",
    start: "Feb. 2022",
    end: "Aug. 2024",
    bullets: [
      "Instructed and mentored 50+ students across 20+ full-stack web development curriculum units, teaching HTML, CSS, JavaScript, React, Node.js, MySQL, MongoDB, GraphQL, and Stripe API integration",
      "Diagnosed and resolved student coding, environment, and configuration issues in real time, translating technical concepts clearly for learners at different skill levels",
      "Maintained and updated course systems using GitLab, GitHub, and version-control best practices",
    ],
  },
  {
    title: "Freelance Web Developer",
    org: "Self-Employed",
    start: "2024",
    end: "Present",
    bullets: [
      "Design, build, and maintain a live production e-commerce site (Rave Wavelengths) using WordPress CMS, custom PHP development, and the WooCommerce plugin for product and order management",
      "Integrate the Stripe payment gateway for secure transactions and configure additional plugins to extend site functionality",
      "Independently manage multiple client and personal technical projects end-to-end, balancing deadlines and priorities across coursework and client work simultaneously",
    ],
  },
];

export type RelevantProject = {
  title: string;
  role: string;
  bullets: string[];
  slug?: string;
};

export const relevantProjects: RelevantProject[] = [
  {
    title: "Home Portal",
    role: "Full-Stack E-Commerce Application",
    bullets: [
      "Built a full-stack e-commerce application using Next.js, Prisma ORM, and PostgreSQL, with Stripe API payment integration for secure checkout",
      "Rebranded and redesigned the storefront with a full design-system overhaul (dark mode, new catalog, new pages) and hardened it with dependency/security fixes, including patching a critical Next.js RCE and adding regression tests for a price-tampering vulnerability",
    ],
    slug: "home-portal",
  },
  {
    title: "AWS EC2 MicroCMS + Auth System",
    role: "Web Technologies Course",
    bullets: [
      "Provisioned an AWS EC2 instance under a dedicated IAM user (least privilege) and configured nginx with a self-signed HTTPS/TLS certificate",
      "Built a MySQL-backed CMS from scratch with dynamic PHP routing and a full authentication flow using salted SHA-256 password hashing and server-side session management",
    ],
    slug: "aws-ec2-microcms-auth",
  },
  {
    title: "Fox Lab",
    role: "Home Infrastructure Lab",
    bullets: [
      "Architected and administered a hyperconverged home lab on bare-metal Proxmox VE: 3 LXC containers and 1 KVM VM spanning DNS filtering (Pi-hole), Dockerized game server hosting, GPU-passthrough media streaming, and an isolated Linux development environment",
      "Applied SRE practices: live CPU/RAM reallocation across workloads, qemu-guest-agent ACPI integration for clean shutdowns, and a zero-trust outbound tunnel for external access without exposing inbound router ports",
    ],
  },
];

export type TimelineEntry = {
  title: string;
  org: string;
  date: string;
};

export const timeline: TimelineEntry[] = [
  {
    title: "Associate of Science",
    org: "Northeast Lakeview College",
    date: "2018",
  },
  {
    title: "Front of House Trainer",
    org: "Texas Roadhouse",
    date: "2018 – 2021",
  },
  {
    title: "Full Stack Web Development Bootcamp Certificate",
    org: "University of Texas at San Antonio",
    date: "2022",
  },
  {
    title: "Instructional Specialist",
    org: "EdX",
    date: "Feb. 2022 – Aug. 2024",
  },
  {
    title: "Freelance web development begins",
    org: "Self-Employed",
    date: "2024",
  },
  {
    title: "Bachelor of Science in Computer Science",
    org: "University of Texas at San Antonio",
    date: "Expected December 2026",
  },
];
