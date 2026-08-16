import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { CTASection } from "@/components/CTASection";
import { projects } from "@/lib/site-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Student Projects | Ilai Digital Solutions" },
      {
        name: "description",
        content:
          "Explore the real-world projects our learners build: e-commerce apps, dashboards, management systems and UI/UX design case studies.",
      },
      { property: "og:title", content: "Student Projects | Ilai Digital Solutions" },
      {
        property: "og:description",
        content: "Real-world project work that becomes your portfolio: web apps, dashboards and design case studies.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <Section tone="soft">
        <SectionHeading
          as="h1"
          eyebrow="Projects"
          title="Learn by Building Real Projects"
          description="Each program is anchored to complete applications you can demonstrate, document and explain in interviews."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.name} {...p} />
          ))}
        </div>
      </Section>
      <CTASection
        title="Build a portfolio that speaks for you"
        description="Join a project-based program and finish with work you are confident presenting."
      />
    </>
  );
}
