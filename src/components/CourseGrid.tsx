import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { courses as allCourses } from "@/lib/site-data";
import { CourseCard } from "@/components/CourseCard";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const levels = ["All Levels", "Beginner to Advanced", "Beginner to Intermediate"];

export function CourseGrid({ withFilters = true }: { withFilters?: boolean }) {
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState(levels[0]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allCourses.filter((c) => {
      const matchesQuery =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.short.toLowerCase().includes(q) ||
        c.tech.some((t) => t.toLowerCase().includes(q));
      const matchesLevel = level === levels[0] || c.level === level;
      return matchesQuery && matchesLevel;
    });
  }, [query, level]);

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-8 top-0 -z-10 h-52 rounded-full bg-[radial-gradient(circle,_rgba(20,90,68,0.12),_transparent_70%)] blur-3xl" />

      {withFilters ? (
        <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search courses or technologies"
              aria-label="Search courses"
              className="h-12 rounded-full border border-primary/10 bg-white/80 pl-10 text-sm shadow-[0_10px_30px_rgba(14,92,67,0.08)] transition-all duration-300 placeholder:text-muted-foreground/80 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/15"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2 sm:justify-end" role="group" aria-label="Filter by level">
            {levels.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLevel(l)}
                aria-pressed={level === l}
                className={cn(
                  "rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-300",
                  level === l
                    ? "border-primary bg-primary text-primary-foreground shadow-[0_10px_20px_rgba(14,92,67,0.2)]"
                    : "border-border bg-white/80 text-muted-foreground shadow-sm hover:-translate-y-0.5 hover:border-primary/30 hover:text-foreground",
                )}
              >
                {l.replace("Beginner to ", "")}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {filtered.map((c) => (
          <CourseCard key={c.slug} course={c} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-center text-muted-foreground">
          No courses matched your search. Try a different keyword.
        </p>
      ) : null}
    </div>
  );
}
