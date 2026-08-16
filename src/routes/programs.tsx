import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { courses, journey } from "@/lib/site-data";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Training Programs | Ilai Digital Solutions" },
      {
        name: "description",
        content:
          "Choose the training format that fits you: foundation, career track, weekend and fast-track programs across development, analytics and design.",
      },
      { property: "og:title", content: "Training Programs | Ilai Digital Solutions" },
      {
        property: "og:description",
        content: "Flexible, structured IT training programs for students, graduates and working professionals.",
      },
    ],
  }),
  component: ProgramsPage,
});

const programs = [
  {
    name: "Foundation Program",
    for: "Absolute beginners",
    duration: "6-8 weeks",
    points: ["Programming fundamentals", "Web basics & tooling", "Guided practice sessions", "Mini project"],
  },
  {
    name: "Career Track Program",
    for: "Students & graduates targeting jobs",
    duration: "4-6 months",
    points: ["Complete course syllabus", "Multiple real projects", "Portfolio & GitHub setup", "Interview preparation"],
  },
  {
    name: "Weekend Program",
    for: "Working professionals",
    duration: "5-7 months",
    points: ["Weekend batches", "Recorded support material", "Project-based assessments", "Career guidance"],
  },
  {
    name: "Fast-Track Program",
    for: "Learners with some experience",
    duration: "8-12 weeks",
    points: ["Accelerated schedule", "Advanced modules first", "Capstone project", "Mock interviews"],
  },
];

function ProgramsPage() {
  return (
    <>
      <Section tone="soft">
        <SectionHeading
          as="h1"
          eyebrow="Programs"
          title="Training Programs Built Around Your Schedule"
          description="Every course is available in multiple program formats so students, graduates and working professionals can learn at a realistic pace."
        />
      </Section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {programs.map((p) => (
            <div key={p.name} className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <h2 className="text-xl font-semibold text-foreground">{p.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                For {p.for} · {p.duration}
              </p>
              <ul className="mt-5 grid gap-2 text-sm text-muted-foreground">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="Available tracks"
          title="Pick Your Specialisation"
          description="Each program format can be applied to any of our four core courses."
        />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {courses.map((c) => (
            <Button key={c.slug} asChild variant="outline">
              <Link to="/courses/$slug" params={{ slug: c.slug }}>
                {c.name}
              </Link>
            </Button>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Method" title="The Same Proven Progression in Every Program" />
        <ol className="mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          {journey.map((s) => (
            <li key={s.step} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <span className="text-sm font-bold tracking-widest text-accent">{s.step}</span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CTASection
        title="Find the program that fits your schedule"
        description="Tell us your availability and goals, and we will suggest the right batch and format."
        primaryLabel="Enquire Now"
      />
    </>
  );
}
