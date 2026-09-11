import Link from "next/link";

import { Container } from "./container";
import { MobileNavToggle } from "./mobile-nav-toggle";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="relative border-b border-border">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-medium text-foreground">
            Sam Adams
          </Link>

          <nav className="hidden md:flex md:items-center md:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <MobileNavToggle links={navLinks} />
        </div>
      </Container>
    </header>
  );
}
