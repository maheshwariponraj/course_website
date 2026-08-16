import { createFileRoute } from "@tanstack/react-router";
import { FileText, Github, Mic, MessageSquare, Presentation, Compass, BookOpenCheck } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/placements")({
  head: () => ({
    meta: [
      { title: "Career Support & Job Readiness | Ilai Digital Solutions" },
      {
        name: "description",
        content:
          "Career guidance, resume support, portfolio development, mock interviews and job-readiness training for learners at Ilai Digital Solutions.",
      },
      { property: "og:title", content: "Career Support & Job Readiness | Ilai Digital Solutions" },
      {
        property: "og:description",
        content: "Resume, portfolio and interview preparation that turns training into job readiness.",
      },
    ],
  }),
  component: PlacementsPage,
});

const support = [
  { Icon: Compass, title: "Career Guidance", description: "One-to-one direction on suitable roles, skill gaps and realistic next steps." },
  { Icon: FileText, title: "Resume Support", description: "Structure, phrasing and project descriptions that read clearly to recruiters." },
  { Icon: Mic, title: "Interview Preparation", description: "Technical and HR round practice with structured, actionable feedback." },
  { Icon: Github, title: "Portfolio Development", description: "GitHub setup, documentation and a portfolio that presents your work well." },
  { Icon: BookOpenCheck, title: "Job-Readiness Training", description: "Fundamentals revision, problem solving practice and role-specific preparation." },
  { Icon: Presentation, title: "Project Explanation", description: "Learn to walk through architecture, decisions and trade-offs with confidence." },
  { Icon: MessageSquare, title: "Communication Skills", description: "Clear, professional communication for interviews and workplace collaboration." },
];

function PlacementsPage() {
  return (
    <>
      <Section tone="soft">
        <SectionHeading
          as="h1"
          eyebrow="Career support"
          title="Your Skills. Your Portfolio. Your Next Opportunity."
          description="We do not make placement guarantees. What we do provide is structured, honest preparation that makes you genuinely ready to apply and perform in interviews."
        />
      </Section>

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {support.map(({ Icon, title, description }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <span className="flex size-10 items-center justify-center rounded-xl bg-accent-soft text-accent-foreground">
                <Icon className="size-5" aria-hidden />
              </span>
              <h2 className="mt-4 text-base font-semibold text-foreground">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="Our commitment"
          title="Honest Expectations, Serious Preparation"
          description="Outcomes depend on your effort, consistency and the market. Our responsibility is to make sure your skills, projects and communication are ready for it."
        />
      </Section>

      <CTASection
        title="Talk to Our Career Advisor"
        description="Get a clear view of where you stand today and what to work on next."
        primaryLabel="Talk to Our Career Advisor"
      />
    </>
  );
}
