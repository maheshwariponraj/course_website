import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/Section";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Ilai Digital Solutions" },
      {
        name: "description",
        content:
          "Terms and conditions governing enrolment, course delivery, certification and use of the Ilai Digital Solutions website.",
      },
      { property: "og:title", content: "Terms & Conditions | Ilai Digital Solutions" },
      { property: "og:description", content: "Enrolment, delivery and certification terms for our training programs." },
    ],
  }),
  component: TermsPage,
});

const sections = [
  { title: "Enrolment", body: "Enrolment is confirmed once the applicable admission process is completed and a batch is allocated. Batch schedules may be adjusted with prior notice." },
  { title: "Course Delivery", body: "Courses are delivered in online or classroom mode as agreed at the time of enrolment. Syllabus content may be updated to stay aligned with current industry practice." },
  { title: "Certification", body: "A certificate of course completion is issued only after successfully meeting the applicable program requirements, including assessments and project submissions." },
  { title: "Career Support", body: "We provide career guidance, resume support, portfolio development and interview preparation. We do not guarantee employment or specific hiring outcomes." },
  { title: "Learner Conduct", body: "Learners are expected to maintain professional conduct in all sessions and communication channels, and to respect course materials and intellectual property." },
  { title: "Website Use", body: "Content on this website is provided for informational purposes and may be updated without prior notice." },
];

function TermsPage() {
  return (
    <Section>
      <SectionHeading as="h1" align="left" eyebrow="Legal" title="Terms & Conditions" />
      <div className="mt-10 grid max-w-3xl gap-8">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="text-lg font-semibold text-foreground">{s.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
