import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { contact } from "@/lib/resume-data";

import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${contact.name} — email, LinkedIn, or the form below.`,
};

const directLinks = [
  { label: contact.email, href: `mailto:${contact.email}` },
  { label: contact.linkedin, href: contact.linkedinUrl },
  { label: "github.com/samadams412", href: "https://github.com/samadams412" },
];

export default function ContactPage() {
  return (
    <Container>
      <div className="py-16 sm:py-20">
        <h1 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          Contact
        </h1>
        <p className="mt-2 max-w-prose text-muted-foreground">
          Have a project, a role, or just want to talk shop? Reach out directly
          or use the form below.
        </p>

        <ul className="mt-4 flex flex-wrap gap-4">
          {directLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10 max-w-md">
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
