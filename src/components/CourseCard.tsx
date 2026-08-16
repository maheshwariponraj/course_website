import { Link } from "@tanstack/react-router";
import { Clock, Signal, MonitorSmartphone, ArrowRight } from "lucide-react";
import type { Course } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <h3 className="text-xl font-semibold text-foreground">{course.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{course.short}</p>

      <dl className="mt-5 grid gap-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Clock className="size-4 text-primary" aria-hidden />
          <dt className="sr-only">Duration</dt>
          <dd>{course.duration}</dd>
        </div>
        <div className="flex items-center gap-2">
          <Signal className="size-4 text-primary" aria-hidden />
          <dt className="sr-only">Skill level</dt>
          <dd>{course.level}</dd>
        </div>
        <div className="flex items-center gap-2">
          <MonitorSmartphone className="size-4 text-primary" aria-hidden />
          <dt className="sr-only">Learning mode</dt>
          <dd>{course.mode}</dd>
        </div>
      </dl>

      <ul className="mt-5 flex flex-wrap gap-2">
        {course.tech.slice(0, 6).map((t) => (
          <li
            key={t}
            className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
          >
            {t}
          </li>
        ))}
        {course.tech.length > 6 ? (
          <li className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent-foreground">
            +{course.tech.length - 6} more
          </li>
        ) : null}
      </ul>

      <div className="mt-6 flex-1" />
      <Button asChild className="w-full justify-between">
        <Link to="/courses/$slug" params={{ slug: course.slug }}>
          View Details
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
        </Link>
      </Button>
    </article>
  );
}
