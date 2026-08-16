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
      <Section tone="soft">
        <SectionHeading
          as="h1"
          eyebrow="Courses"
          title="Explore Our Career-Focused Courses"
          description="Search by technology or skill level to find the program that matches your goals."
        />
        <CourseGrid />
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
