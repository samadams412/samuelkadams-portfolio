import { Container } from "./container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container>
        <p className="py-8 text-sm text-muted-foreground">
          &copy; {year} Sam Adams
        </p>
      </Container>
    </footer>
  );
}
