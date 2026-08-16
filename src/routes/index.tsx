import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpenCheck,
  BrainCircuit,
  Briefcase,
  CheckCircle2,
  Code2,
  FileText,
  GraduationCap,
  Github,
  Handshake,
  Layers3,
  MessageCircle,
  MessageSquare,
  Mic,
  Palette,
  Presentation,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/Section";
import { CourseGrid } from "@/components/CourseGrid";
import { ProjectCard } from "@/components/ProjectCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import {
  careerPrep,
  contact,
  faqs,
  journey,
  projects,
  testimonials,
  whyChooseUs,
} from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ilai Digital Solutions | Job-Oriented IT Training Academy" },
      {
        name: "description",
        content:
          "Career-focused IT training in MERN stack, Python full stack, data analytics and UI/UX design. Practical, project-based courses with portfolio and interview preparation.",
      },
      {
        property: "og:title",
        content: "Ilai Digital Solutions | Job-Oriented IT Training Academy",
      },
      {
        property: "og:description",
        content:
          "Build skills, build projects, build your career with practical, project-based IT training programs.",
      },
    ],
  }),
  component: Home,
});

const trustPoints = [
  {
    icon: BookOpenCheck,
    title: "Industry-Relevant Curriculum",
    description: "Learn skills companies actually use.",
  },
  {
    icon: Code2,
    title: "Practical Projects",
    description: "Build projects that strengthen your portfolio.",
  },
  {
    icon: Users,
    title: "Experienced Trainers",
    description: "Learn from professionals with practical industry experience.",
  },
  {
    icon: Briefcase,
    title: "Career-Focused Learning",
    description: "Prepare for interviews, jobs and real-world work.",
  },
];

const trustIndicators = [
  "Industry-Relevant Skills",
  "Real-World Projects",
  "AI-Powered Learning",
];

const academyTracks = [
  { icon: Code2, label: "Web Development" },
  { icon: BrainCircuit, label: "AI Tools" },
  { icon: BarChart3, label: "Data Analytics" },
  { icon: Palette, label: "UI/UX Design" },
];

const prepIcons = [
  FileText,
  Github,
  Mic,
  BookOpenCheck,
  MessageSquare,
  Presentation,
  Handshake,
];

function AcademyHeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[34rem] md:ml-auto">
      <div className="rounded-[1.75rem] border border-white/80 bg-background p-3 shadow-lift ring-1 ring-primary/10 sm:p-4">
        <div className="flex items-center justify-between gap-4 px-2 pb-3">
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-primary">
              Professional Academy
            </p>
            <p className="mt-1 text-sm font-bold text-foreground">
              Project-first technology learning
            </p>
          </div>
          <span className="shrink-0 rounded-full bg-accent-soft px-3 py-1 text-xs font-bold text-accent-foreground">
            Enrolling
          </span>
        </div>

        <div className="overflow-hidden rounded-[1.35rem] bg-primary-soft">
          <img
            src={heroImage}
            alt="Students learning coding, AI tools, data analytics, UI/UX design and project development"
            width={1280}
            height={1024}
            className="aspect-[5/4] w-full object-cover object-center"
          />
        </div>

        <div className="grid gap-2 pt-4 sm:grid-cols-2">
          {academyTracks.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-2xl bg-primary-soft px-3 py-2 text-sm font-semibold text-primary"
            >
              <Icon className="size-4 shrink-0" aria-hidden />
              {label}
            </div>
          ))}
        </div>

        <div className="mt-3 grid gap-2 sm:grid-cols-[0.85fr_1.15fr]">
          <div className="flex items-center gap-2 rounded-2xl border border-primary/10 bg-background px-3 py-2 text-sm font-bold text-foreground">
            <Layers3 className="size-4 shrink-0 text-primary" aria-hidden />
            Full Stack + AI
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-accent-soft px-3 py-2 text-sm font-bold text-foreground">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Rocket className="size-4" aria-hidden />
            </span>
            <span>
              <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Career Growth
              </span>
              Portfolio-ready projects
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary-soft">
        <div className="container-page grid items-center gap-10 py-14 md:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:gap-14 lg:py-20">
          <div className="max-w-3xl md:max-w-none">
            <span className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary shadow-card">
              <GraduationCap className="size-4" aria-hidden />
              IT Training &amp; Career Development
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.06] text-foreground sm:text-5xl lg:text-6xl">
              Learn. Build. Get{" "}
              <span className="text-primary">Industry-Ready.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Job-focused training programs designed to help you master
              in-demand skills, build real-world projects, use AI tools
              effectively, and prepare for your professional career.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <Button
                asChild
                size="lg"
                variant="accent"
                className="w-full sm:w-auto md:w-full lg:w-auto"
              >
                <Link to="/courses">
                  Explore Courses
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto md:w-full lg:w-auto"
              >
                <Link to="/contact">
                  <MessageCircle className="size-4" aria-hidden />
                  Talk to an Advisor
                </Link>
              </Button>
            </div>

            <ul className="mt-7 flex flex-wrap gap-3">
              {trustIndicators.map((label) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full bg-background px-3 py-2 text-sm font-semibold text-foreground shadow-card"
                >
                  <CheckCircle2
                    className="size-4 shrink-0 text-primary"
                    aria-hidden
                  />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <AcademyHeroVisual />
        </div>

        <div className="container-page pb-12 lg:pb-16">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map(({ icon: Icon, title, description }) => (
              <li
                key={title}
                className="rounded-2xl border border-border bg-background p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-base font-bold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-10 max-w-3xl text-center">
            <p className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">
              Learn Skills. Build Projects. Launch Your Career.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              From fundamentals to industry-ready projects, our programs are
              designed around practical learning and modern technology.
            </p>
          </div>
        </div>
      </section>

      <Section id="courses">
        <SectionHeading
          eyebrow="Courses"
          title="Explore Our Career-Focused Courses"
          description="Structured programs that take you from fundamentals to real, portfolio-ready projects."
        />
        <CourseGrid />
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="Why us"
          title="Why Learn With Ilai Digital Solutions?"
          description="A training experience built around practice, projects and career outcomes."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-background p-6 shadow-card transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-accent-soft text-accent-foreground">
                <BadgeCheck className="size-5" aria-hidden />
              </span>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="journey">
        <SectionHeading
          eyebrow="Learning journey"
          title="A Clear Path From Beginner to Career Ready"
          description="Every program follows the same proven five-step progression."
        />
        <ol className="mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          {journey.map((s) => (
            <li
              key={s.step}
              className="rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <span className="text-sm font-bold tracking-widest text-accent">
                {s.step}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="soft" id="projects">
        <SectionHeading
          eyebrow="Projects"
          title="Learn by Building Real Projects"
          description="You finish each program with applications you can demonstrate and explain."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((p) => (
            <ProjectCard key={p.name} {...p} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/projects">See All Projects</Link>
          </Button>
        </div>
      </Section>

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <SectionHeading
            align="left"
            eyebrow="Career preparation"
            title="More Than Training. We Prepare You for the Industry."
            description="Technical skill alone rarely wins an offer. We work on how you present your work, communicate your thinking and handle interviews."
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {careerPrep.map((item, i) => {
              const Icon = prepIcons[i % prepIcons.length]!;
              return (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-sm font-medium text-foreground shadow-card"
                >
                  <Icon className="size-4 shrink-0 text-primary" aria-hidden />
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mt-10">
          <Button asChild size="lg" variant="accent">
            <Link to="/contact">Enquire Now</Link>
          </Button>
        </div>
      </Section>

      {/* <Section tone="soft">
        <SectionHeading
          eyebrow="Student feedback"
          title="What Our Students Say"
          description="Sample testimonials shared by learners who completed our programs."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </Section> */}

      <Section id="certification">
        <div className="grid items-center gap-10 rounded-3xl border border-border bg-card p-8 shadow-card lg:grid-cols-2 lg:p-12">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Certification"
              title="Earn a Certificate of Course Completion"
              description="Certificates are issued on successful completion of the applicable program requirements, including assessments and project submissions."
            />
          </div>
          <ul className="grid gap-3">
            {[
              "Awarded after assessments and project submissions",
              "Lists the technologies and modules you covered",
              "Shareable on LinkedIn and in your resume",
              "Supported by a documented project portfolio",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl bg-primary-soft p-4 text-sm text-foreground"
              >
                <BadgeCheck
                  className="mt-0.5 size-4 shrink-0 text-primary"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="soft" id="faq">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
        <FAQ items={faqs} />
      </Section>

      <Section id="contact">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Enquiry"
              title="Ready to Start Learning?"
              description="Share your details and our team will get back to you with batch schedules, fees and curriculum details."
            />
            <ul className="mt-8 grid gap-4 text-sm">
              <li>
                <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                  Phone
                </span>
                <a
                  href={contact.phoneHref}
                  className="font-semibold text-foreground hover:text-primary"
                >
                  {contact.phone}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                  Email
                </span>
                <a
                  href={`mailto:${contact.email}`}
                  className="font-semibold text-foreground hover:text-primary"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                  Location
                </span>
                <span className="font-semibold text-foreground">
                  {contact.location}
                </span>
              </li>
            </ul>
            <Button asChild variant="outline" className="mt-6">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
              >
                Chat on WhatsApp
              </a>
            </Button>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
