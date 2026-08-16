import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { BadgeCheck, CheckCircle2, Clock, MonitorSmartphone, Signal } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { getCourse, courses, projects, faqs as globalFaqs, type Course } from "@/lib/site-data";
import { ProjectCard } from "@/components/ProjectCard";

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    const course = getCourse(params.slug);
    if (!course) throw notFound();
    return course;
  },
  head: ({ loaderData }) => {
    const name = loaderData?.name ?? "Course";
    const description = loaderData?.short ?? "Career-focused IT training course.";
    return {
      meta: [
        { title: `${name} Course | Ilai Digital Solutions` },
        { name: "description", content: description.slice(0, 155) },
        { property: "og:title", content: `${name} Course | Ilai Digital Solutions` },
        { property: "og:description", content: description.slice(0, 155) },
      ],
    };
  },
  component: CourseDetail,
});

function CourseDetail() {
  const course = Route.useLoaderData() as Course;
  const courseProjects = projects.filter((p) => course.projects.includes(p.name));

  return (
    <>
      <section className="bg-primary-soft">
        <div className="container-page py-16">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <Link to="/courses" className="hover:text-primary">
              Courses
            </Link>
            <span aria-hidden> / </span>
            <span className="text-foreground">{course.name}</span>
          </nav>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold text-foreground sm:text-5xl">
            {course.name}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {course.short}
          </p>
          <dl className="mt-8 flex flex-wrap gap-3 text-sm">
            {[
              { Icon: Clock, label: "Duration", value: course.duration },
              { Icon: Signal, label: "Level", value: course.level },
              { Icon: MonitorSmartphone, label: "Mode", value: course.mode },
            ].map(({ Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 shadow-card"
              >
                <Icon className="size-4 text-primary" aria-hidden />
                <dt className="sr-only">{label}</dt>
                <dd className="font-medium text-foreground">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="accent">
              <a href="#enquiry">Enquire About This Course</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/courses">View Other Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Course Overview</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{course.overview}</p>

            <h2 className="mt-12 text-2xl font-bold text-foreground">What You Will Learn</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {course.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  {o}
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-bold text-foreground">Complete Syllabus</h2>
            <div className="mt-5 grid gap-4">
              {course.syllabus.map((mod, i) => (
                <div key={mod.title} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                  <h3 className="text-base font-semibold text-foreground">
                    <span className="mr-2 text-accent">{String(i + 1).padStart(2, "0")}</span>
                    {mod.title}
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {mod.topics.map((t) => (
                      <li
                        key={t}
                        className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className="mt-12 text-2xl font-bold text-foreground">Learning Methodology</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Concept sessions are followed immediately by guided practice, assignments and reviews.
              Each module ends with a build task, and the program closes with a complete project you
              document and present.
            </p>

            <h2 className="mt-12 text-2xl font-bold text-foreground">Certification</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              A certificate of course completion is provided after successfully meeting the program
              requirements, including assessments and project submissions.
            </p>
          </div>

          <aside className="grid gap-5 self-start lg:sticky lg:top-24">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-base font-semibold text-foreground">Who Should Join</h2>
              <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
                {course.audience.map((a) => (
                  <li key={a} className="flex items-start gap-2">
                    <BadgeCheck className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-base font-semibold text-foreground">Prerequisites</h2>
              <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
                {course.prerequisites.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-base font-semibold text-foreground">Tools &amp; Technologies</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {course.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-primary-soft px-2.5 py-1 text-xs font-medium text-primary"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-base font-semibold text-foreground">Career Opportunities</h2>
              <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
                {course.careers.map((c) => (
                  <li key={c}>• {c}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="Projects"
          title="Projects You Will Build"
          description="Portfolio-ready applications built during the program."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courseProjects.map((p) => (
            <ProjectCard key={p.name} {...p} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
        <FAQ items={[...course.faqs, ...globalFaqs.slice(0, 4)]} />
      </Section>

      <Section tone="soft" id="enquiry">
        <SectionHeading
          eyebrow="Enquiry"
          title={`Enquire About ${course.name}`}
          description="Send your details and our team will share batch schedules, fees and the detailed curriculum."
        />
        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
          <ContactForm defaultCourse={course.name} />
        </div>
      </Section>
    </>
  );
}

export const allCourseSlugs = courses.map((c) => c.slug);
