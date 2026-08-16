import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { journey } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ilai Digital Solutions | IT Training Academy" },
      {
        name: "description",
        content:
          "Ilai Digital Solutions is a career-focused technology training academy offering structured learning, hands-on projects and career preparation.",
      },
      { property: "og:title", content: "About Ilai Digital Solutions" },
      {
        property: "og:description",
        content: "A career-focused technology training academy built on practical, project-based learning.",
      },
    ],
  }),
  component: AboutPage,
});

const highlights = [
  { title: "Practical Learning", description: "Every concept is applied through guided, hands-on work in the same session." },
  { title: "Industry Relevance", description: "Curriculum mapped to the tools and workflows used by working teams today." },
  { title: "Project-Based Education", description: "You build complete applications, not disconnected exercises." },
  { title: "Student Support", description: "Doubt-clearing, mentoring and structured feedback throughout the program." },
  { title: "Career Readiness", description: "Resume, portfolio, interview and communication preparation built into the track." },
];

function AboutPage() {
  return (
    <>
      <Section tone="soft">
        <SectionHeading
          as="h1"
          eyebrow="About us"
          title="About Ilai Digital Solutions"
          description="We are a career-focused technology training academy committed to helping learners develop practical, industry-relevant skills through structured learning, hands-on projects, and career preparation."
        />
      </Section>

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h) => (
            <div key={h.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <BadgeCheck className="size-5" aria-hidden />
              </span>
              <h2 className="mt-4 text-base font-semibold text-foreground">{h.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="Our approach"
          title="How We Teach"
          description="A consistent five-step method applied across every program."
        />
        <ol className="mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          {journey.map((s) => (
            <li key={s.step} className="rounded-2xl border border-border bg-background p-6 shadow-card">
              <span className="text-sm font-bold tracking-widest text-accent">{s.step}</span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CTASection
        title="Learn with a team focused on your outcomes"
        description="Speak to our advisors about your background, goals and the right program for you."
        primaryLabel="Talk to an Advisor"
      />
    </>
  );
}
