import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/Section";
import { CourseGrid } from "@/components/CourseGrid";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { faqs } from "@/lib/site-data";

export const Route = createFileRoute("/courses/")({
  head: () => ({
    meta: [
      { title: "IT Courses | Ilai Digital Solutions Training Academy" },
      {
        name: "description",
        content:
          "Browse job-oriented courses in MERN stack, Python full stack development, data analytics and UI/UX design with syllabus, duration and project details.",
      },
      { property: "og:title", content: "IT Courses | Ilai Digital Solutions" },
      {
        property: "og:description",
        content: "Career-focused IT courses with practical projects, portfolio building and interview preparation.",
      },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  return (
    <>
      <Section tone="soft" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,92,67,0.08),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(219,149,23,0.08),_transparent_22%)]" />
        <div className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-primary/10 bg-white/80 px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-primary shadow-sm backdrop-blur-sm">
              Courses
            </span>
            <h1 className="mt-5 text-3xl font-black tracking-[-0.04em] text-foreground sm:text-4xl lg:text-5xl">
              Explore Our Career-Focused Courses
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Search by technology or skill level to find the program that matches your goals.
            </p>
          </div>
          <CourseGrid />
        </div>
      </Section>
      <Section>
        <SectionHeading eyebrow="FAQ" title="Course Questions, Answered" />
        <FAQ items={faqs.slice(0, 6)} />
      </Section>
      <CTASection
        title="Not sure which course fits you?"
        description="Talk to our advisors about your background and career goals, and we will recommend the right track."
        primaryLabel="Talk to an Advisor"
      />
    </>
  );
}
