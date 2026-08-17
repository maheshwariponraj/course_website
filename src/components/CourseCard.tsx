import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Clock,
  Code2,
  MonitorSmartphone,
  Palette,
  Signal,
} from "lucide-react";
import type { Course } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

function getCourseVisual(course: Course) {
  const name = course.name.toLowerCase();

  if (name.includes("mern") || name.includes("full stack")) {
    return {
      theme: "from-[#e8f3eb] via-[#ebf7ef] to-[#dfeee7]",
      accent: "bg-[#0d5b45]",
      label: "Web Development",
      icon: MonitorSmartphone,
    };
  }

  if (name.includes("python")) {
    return {
      theme: "from-[#edf4ff] via-[#edf9f4] to-[#ecf6ee]",
      accent: "bg-[#0c8a6b]",
      label: "Programming",
      icon: Code2,
    };
  }

  if (name.includes("data")) {
    return {
      theme: "from-[#fff6ea] via-[#f6fff9] to-[#eefaf3]",
      accent: "bg-[#dd9a14]",
      label: "Analytics",
      icon: BarChart3,
    };
  }

  return {
    theme: "from-[#f4f3ff] via-[#f5faf6] to-[#edf7f2]",
    accent: "bg-[#b96a00]",
    label: "Design",
    icon: Palette,
  };
}

export function CourseCard({ course }: { course: Course }) {
  const visual = getCourseVisual(course);
  const Icon = visual.icon;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-primary/10 bg-white/90 p-0 shadow-[0_18px_45px_rgba(15,52,42,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-[0_22px_50px_rgba(15,52,42,0.12)]">
      <div className={`relative overflow-hidden bg-gradient-to-br ${visual.theme} p-4`}>
        <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/35 blur-2xl" />
        <div className="absolute -bottom-10 left-8 h-20 w-20 rounded-full bg-primary/5 blur-2xl" />

        <div className="relative flex items-center justify-between">
          <span className="rounded-full border border-white/70 bg-white/75 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-primary shadow-sm backdrop-blur-sm">
            {visual.label}
          </span>
          <span className={`inline-flex size-10 items-center justify-center rounded-full ${visual.accent} text-white shadow-md`}>
            <Icon className="size-4" aria-hidden />
          </span>
        </div>

        <div className="relative mt-4 rounded-[1.3rem] border border-white/60 bg-white/55 p-4 shadow-inner backdrop-blur-sm">
          <div className="flex min-h-[118px] items-center justify-center rounded-[1rem] bg-gradient-to-br from-white to-primary-soft/70">
            <div className="flex items-center justify-center rounded-[1rem] border border-primary/10 bg-background/90 p-5 shadow-sm">
              <Icon className="size-12 text-primary" aria-hidden />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-primary-soft px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-primary">
            Career Track
          </span>
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            {course.level}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-extrabold leading-tight text-foreground sm:text-[1.4rem]">
          {course.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{course.short}</p>

        <dl className="mt-5 grid gap-2.5 text-sm text-muted-foreground">
          <div className="flex items-center gap-2.5 rounded-xl bg-secondary/40 px-2.5 py-2">
            <Clock className="size-4 text-primary" aria-hidden />
            <dt className="sr-only">Duration</dt>
            <dd>{course.duration}</dd>
          </div>
          <div className="flex items-center gap-2.5 rounded-xl bg-secondary/40 px-2.5 py-2">
            <Signal className="size-4 text-primary" aria-hidden />
            <dt className="sr-only">Skill level</dt>
            <dd>{course.level}</dd>
          </div>
          <div className="flex items-center gap-2.5 rounded-xl bg-secondary/40 px-2.5 py-2">
            <MonitorSmartphone className="size-4 text-primary" aria-hidden />
            <dt className="sr-only">Learning mode</dt>
            <dd>{course.mode}</dd>
          </div>
        </dl>

        <ul className="mt-5 flex flex-wrap gap-2">
          {course.tech.slice(0, 4).map((t) => (
            <li
              key={t}
              className="rounded-full border border-primary/10 bg-primary-soft px-2.5 py-1 text-[0.68rem] font-semibold text-primary"
            >
              {t}
            </li>
          ))}
          {course.tech.length > 4 ? (
            <li className="rounded-full border border-[#f4c76f]/40 bg-[#fff4d9] px-2.5 py-1 text-[0.68rem] font-semibold text-[#8b6500]">
              +{course.tech.length - 4} more
            </li>
          ) : null}
        </ul>

        <div className="mt-6 flex-1" />

        <Button asChild className="mt-auto w-full justify-between rounded-full bg-primary px-5 py-6 text-sm font-semibold text-primary-foreground shadow-[0_12px_20px_rgba(14,92,67,0.22)] transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_16px_24px_rgba(14,92,67,0.25)]">
          <Link to="/courses/$slug" params={{ slug: course.slug }}>
            View Details
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </Link>
        </Button>
      </div>
    </article>
  );
}
