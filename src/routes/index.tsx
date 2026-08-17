import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BarChart3,
  BookOpenCheck,
  BookText,
  BrainCircuit,
  Briefcase,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
  FileText,
  FolderKanban,
  GraduationCap,
  Github,
  Handshake,
  MessageCircle,
  MessageSquare,
  Mic,
  Palette,
  PencilLine,
  Presentation,
  Share2,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
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
  courses,
  faqs,
  journey,
  projects,
  testimonials,
  whyChooseUs,
} from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ilai Professional Academy | Job-Oriented IT Training Academy" },
      {
        name: "description",
        content:
          "Career-focused IT training in MERN stack, Python full stack, data analytics and UI/UX design. Practical, project-based courses with portfolio and interview preparation.",
      },
      {
        property: "og:title",
        content: "Ilai Professional Academy | Job-Oriented IT Training Academy",
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
  "Career Guidance",
  "Free Counselling",
];

const featuredCourses = [
  {
    course: courses[0],
    label: "Professional Program",
    image: projects[0]?.image,
  },
  {
    course: courses[1],
    label: "Professional Program",
    image: projects[1]?.image,
  },
  {
    course: courses[2],
    label: "Professional Program",
    image: projects[2]?.image,
  },
  {
    course: courses[3],
    label: "Professional Program",
    image: projects[3]?.image,
  },
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

function CourseCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (featuredCourses.length <= 1 || isPaused) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredCourses.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const activeCourse = featuredCourses[activeIndex];
  const slideCourse = activeCourse.course;

  return (
    <div className="relative mx-auto w-full max-w-[30rem] md:ml-auto">
      <div
        className="aspect-square rounded-[2rem] border border-primary/10 bg-white p-3 shadow-lift ring-1 ring-primary/5 sm:p-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative grid h-full grid-rows-[auto_minmax(0,1fr)_auto] overflow-hidden rounded-[1.6rem] border border-primary/5 bg-primary-soft">
          <div className="flex items-center justify-between gap-3 border-b border-border/80 bg-background/80 px-4 py-3 backdrop-blur-sm">
            <div>
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-primary">
                Course / Professional Program
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous course"
                className="inline-flex size-8 items-center justify-center rounded-full border border-border bg-white text-primary transition-transform hover:-translate-x-0.5 hover:bg-primary-soft"
                onClick={() =>
                  setActiveIndex((prev) =>
                    prev === 0 ? featuredCourses.length - 1 : prev - 1,
                  )
                }
              >
                <ChevronLeft className="size-4" aria-hidden />
              </button>
              <button
                type="button"
                aria-label="Next course"
                className="inline-flex size-8 items-center justify-center rounded-full border border-border bg-white text-primary transition-transform hover:translate-x-0.5 hover:bg-primary-soft"
                onClick={() =>
                  setActiveIndex((prev) => (prev + 1) % featuredCourses.length)
                }
              >
                <ChevronRight className="size-4" aria-hidden />
              </button>
            </div>
          </div>

          <div className="min-h-0 overflow-hidden">
            <div
              key={slideCourse.slug}
              className="flex h-full flex-col transition-all duration-500 ease-out"
            >
              <img
                src={activeCourse.image}
                alt={slideCourse.name}
                className="h-[42%] w-full object-cover object-center sm:h-[45%]"
              />

              <div className="flex min-h-0 flex-1 flex-col justify-between space-y-3 bg-background p-4 sm:p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-accent-soft px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-accent-foreground">
                    {activeCourse.label}
                  </span>
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {activeIndex + 1}/{featuredCourses.length}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold leading-tight text-foreground sm:text-[1.7rem]">
                    {slideCourse.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {slideCourse.short}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 text-xs font-semibold text-primary">
                  <span className="rounded-full border border-primary/10 bg-primary-soft px-2.5 py-1.5">
                    Duration: {slideCourse.duration}
                  </span>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {slideCourse.tech.slice(0, 4).map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-secondary px-2.5 py-1 text-[0.68rem] font-medium text-secondary-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between gap-3 pt-1">
                  <Button asChild size="sm" variant="accent" className="h-10 px-4 text-sm">
                    <Link to="/courses/$slug" params={{ slug: slideCourse.slug }}>
                      View Course
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 border-t border-border/80 bg-background/80 px-4 py-3">
            {featuredCourses.map((item, index) => (
              <button
                key={item.course.slug}
                type="button"
                aria-label={`Show course ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={[
                  "h-2.5 rounded-full transition-all duration-300",
                  index === activeIndex
                    ? "w-8 bg-primary"
                    : "w-2.5 bg-primary/20 hover:bg-primary/40",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(14,92,67,0.08),_transparent_32%),linear-gradient(180deg,_rgba(14,92,67,0.02),_rgba(14,92,67,0.0))]">
        <div className="container-page grid items-center gap-10 py-12 md:grid-cols-[minmax(0,1fr)_minmax(320px,0.95fr)] lg:gap-14 lg:py-20">
          <div className="max-w-2xl md:max-w-none">
            <span className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-primary shadow-card ring-1 ring-primary/5">
              <GraduationCap className="size-4" aria-hidden />
              IT Training &amp; Career Development
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.04] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
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
                <Link to="/contact">
                  Get Free Counselling
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
                  Talk to an Expert
                </Link>
              </Button>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-semibold text-primary sm:text-sm">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/10 bg-white px-2.5 py-1.5">
                <Sparkles className="size-3.5" aria-hidden />
                Free Career Counselling
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/10 bg-white px-2.5 py-1.5">
                Free Course Enquiry
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/10 bg-white px-2.5 py-1.5">
                No Charges
              </span>
            </div>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {trustIndicators.map((label) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-2xl border border-border bg-background/80 px-3 py-2.5 text-sm font-semibold text-foreground shadow-card"
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

          <CourseCarousel />
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

      <Section
        id="journey"
        className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(14,92,67,0.05),_transparent_35%),linear-gradient(180deg,_rgba(236,246,241,0.9),_rgba(255,255,255,0.9))]"
      >
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="inline-flex rounded-full border border-primary/10 bg-white/80 px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-primary shadow-sm backdrop-blur-sm">
            Learning Journey
          </span>
          <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-foreground sm:text-4xl lg:text-5xl">
            A Clear Path From Beginner to Career Ready
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Every program follows the same proven five-step progression.
          </p>
        </div>

        <div className="relative mt-12 hidden lg:block">
          <div className="absolute left-[8%] right-[8%] top-10 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 shadow-[0_0_18px_rgba(14,92,67,0.18)]" />

          <div className="grid gap-6 lg:grid-cols-5">
            {journey.map((s, index) => {
              const icons = [
                BookOpenCheck,
                PencilLine,
                Code2,
                Presentation,
                BriefcaseBusiness,
              ];
              const Icon = icons[index] ?? BookOpenCheck;

              return (
                <div
                  key={s.step}
                  className="group relative z-10"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-primary/20 bg-white text-2xl font-black text-primary shadow-[0_12px_24px_rgba(14,92,67,0.12)] ring-4 ring-primary-soft transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_30px_rgba(14,92,67,0.18)]">
                      <span>{s.step}</span>
                    </div>
                  </div>

                  <div className="mt-5 rounded-[1.75rem] border border-primary/10 bg-white/95 p-5 text-center shadow-[0_15px_35px_rgba(15,52,42,0.08)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_20px_40px_rgba(15,52,42,0.12)]">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary shadow-sm ring-1 ring-primary/10 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="size-5" aria-hidden />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-foreground">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative mt-10 lg:hidden">
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary/20 via-primary to-primary/20" />

          <ol className="space-y-5">
            {journey.map((s, index) => {
              const icons = [
                BookOpenCheck,
                PencilLine,
                Code2,
                Presentation,
                BriefcaseBusiness,
              ];
              const Icon = icons[index] ?? BookOpenCheck;

              return (
                <li
                  key={s.step}
                  className="relative pl-12"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-white text-sm font-black text-primary shadow-[0_10px_20px_rgba(14,92,67,0.12)] ring-4 ring-primary-soft">
                    {s.step}
                  </div>

                  <div className="rounded-[1.5rem] border border-primary/10 bg-white/95 p-4 shadow-[0_10px_24px_rgba(15,52,42,0.08)]">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
                        <Icon className="size-4" aria-hidden />
                      </span>
                      <h3 className="text-base font-bold text-foreground">{s.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
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

      <Section id="certification" className="relative">
        <div className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-[radial-gradient(circle_at_top_left,_rgba(14,92,67,0.10),_transparent_24%),linear-gradient(135deg,_rgba(236,246,241,0.9),_rgba(255,255,255,0.98)_52%,_rgba(239,247,241,0.96))] p-6 shadow-[0_22px_56px_rgba(15,52,42,0.08)] sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -left-10 top-10 h-32 w-32 rounded-full bg-primary/6 blur-3xl" />
          <div className="pointer-events-none absolute bottom-4 right-8 h-28 w-28 rounded-full bg-[#f0c86a]/12 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(14,92,67,0.06),_transparent_20%)]" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary-soft px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary shadow-sm">
                <ShieldCheck className="size-3.5" aria-hidden />
                Certification
              </div>

              <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-start lg:flex-col">
                <div className="flex-1">
                  <h2 className="text-3xl font-black leading-tight tracking-[-0.04em] text-foreground sm:text-4xl lg:text-[2.8rem]">
                    Earn a <span className="text-primary">Certificate of Course Completion</span>
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                    Certificates are issued on successful completion of the applicable program requirements, including assessments and project submissions.
                  </p>
                </div>

                <div className="relative mx-auto w-full max-w-[220px] shrink-0 md:mx-0 md:mt-1 lg:mx-auto">
                  <div className="relative rounded-[1.6rem] border border-primary/10 bg-white/90 p-3 shadow-[0_18px_40px_rgba(15,52,42,0.10)]">
                    <div className="rounded-[1.25rem] border-2 border-primary/10 bg-[linear-gradient(135deg,_rgba(14,92,67,0.04),_rgba(255,255,255,0.95))] p-4">
                      <div className="flex items-center justify-between text-[0.55rem] font-bold uppercase tracking-[0.2em] text-primary">
                        <span>Ilai</span>
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white shadow-sm">
                          <Award className="size-3.5" aria-hidden />
                        </span>
                      </div>

                      <div className="mt-4 rounded-xl border border-dashed border-primary/15 bg-primary-soft/40 p-3 text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-md">
                          <BadgeCheck className="size-5" aria-hidden />
                        </div>
                        <p className="mt-3 text-[0.7rem] font-black uppercase tracking-[0.18em] text-primary">
                          Certified
                        </p>
                      </div>

                      <div className="mt-4 border-t border-primary/10 pt-3">
                        <p className="text-center text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                          Course Completion
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {[
                {
                  text: "Awarded after assessments and project submissions",
                  icon: Award,
                  accent: "bg-[#fef5df] text-[#9b6a00] border-[#f6d88a]",
                },
                {
                  text: "Lists the technologies and modules you covered",
                  icon: BookText,
                  accent: "bg-[#edf8ef] text-[#155b45] border-[#dfeee5]",
                },
                {
                  text: "Shareable on LinkedIn and in your resume",
                  icon: Share2,
                  accent: "bg-[#f2f7ff] text-[#1f4a7d] border-[#dfeaff]",
                },
                {
                  text: "Supported by a documented project portfolio",
                  icon: FolderKanban,
                  accent: "bg-[#f6f1ff] text-[#5d3a8d] border-[#e7d9ff]",
                },
              ].map(({ text, icon: Icon, accent }) => (
                <li
                  key={text}
                  className="group flex items-start gap-3 rounded-[1.25rem] border border-primary/10 bg-white/80 p-4 shadow-[0_12px_26px_rgba(15,52,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_rgba(15,52,42,0.10)]"
                >
                  <span className={`mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-2xl border ${accent}`}>
                    <Icon className="size-4" aria-hidden />
                  </span>
                  <span className="text-sm leading-relaxed text-foreground">{text}</span>
                </li>
              ))}
            </ul>
          </div>
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
