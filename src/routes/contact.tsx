import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/FAQ";
import { contact, faqs } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Course Enquiry | Ilai Digital Solutions" },
      {
        name: "description",
        content:
          "Enquire about IT courses, batch schedules and fees at Ilai Digital Solutions. Call, email or send us a message on WhatsApp.",
      },
      { property: "og:title", content: "Contact & Course Enquiry | Ilai Digital Solutions" },
      {
        property: "og:description",
        content: "Send a course enquiry and our team will share batch details, fees and curriculum.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <Section tone="soft">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading
              as="h1"
              align="left"
              eyebrow="Contact"
              title="Ready to Start Learning?"
              description="Share your details and our team will get back to you with batch schedules, fees and curriculum details."
            />
            <ul className="mt-8 grid gap-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 text-primary" aria-hidden />
                <span>
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground">Phone</span>
                  <a href={contact.phoneHref} className="font-semibold text-foreground hover:text-primary">
                    {contact.phone}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 text-primary" aria-hidden />
                <span>
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground">Email</span>
                  <a href={`mailto:${contact.email}`} className="font-semibold text-foreground hover:text-primary">
                    {contact.email}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 text-primary" aria-hidden />
                <span>
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground">Location</span>
                  <span className="font-semibold text-foreground">{contact.location}</span>
                </span>
              </li>
            </ul>
            <Button asChild className="mt-8">
              <a href={contact.whatsapp} target="_blank" rel="noreferrer noopener">
                <MessageCircle className="size-4" aria-hidden />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
            <ContactForm />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title="Before You Enquire" />
        <FAQ items={faqs} />
      </Section>
    </>
  );
}
