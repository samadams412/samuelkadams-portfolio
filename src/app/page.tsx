import { Container } from "@/components/layout/container";
import { ContactStrip } from "@/components/home/contact-strip";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { Hero } from "@/components/home/hero";
import { getAllProjects } from "@/lib/projects";

export default async function Home() {
  const projects = await getAllProjects();
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <Container>
      <Hero />
      <FeaturedProjects projects={featuredProjects} />
      <ContactStrip />
    </Container>
  );
}
