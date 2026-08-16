import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/Section";
import { contact } from "@/lib/site-data";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Ilai Digital Solutions" },
      {
        name: "description",
        content:
          "How Ilai Digital Solutions collects, uses and protects the information you share through course enquiries on this website.",
      },
      { property: "og:title", content: "Privacy Policy | Ilai Digital Solutions" },
      { property: "og:description", content: "Our approach to handling enquiry and learner information." },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  { title: "Information We Collect", body: "We collect the details you voluntarily submit through our enquiry forms, such as your name, phone number, email address, course of interest and preferred learning mode." },
  { title: "How We Use Your Information", body: "Your information is used to respond to course enquiries, share batch schedules and curriculum details, and provide learner support during a program." },
  { title: "Information Sharing", body: "We do not sell your personal information. Details are shared only with our internal team members who handle admissions and learner support." },
  { title: "Data Retention", body: "Enquiry details are retained only as long as needed to respond to your request and maintain learner records where applicable." },
  { title: "Your Choices", body: "You may request correction or deletion of your details at any time by contacting us using the details below." },
  { title: "Contact", body: `For any privacy-related request, write to ${contact.email} or call ${contact.phone}.` },
];

function PrivacyPage() {
  return (
    <Section>
      <SectionHeading as="h1" align="left" eyebrow="Legal" title="Privacy Policy" />
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
