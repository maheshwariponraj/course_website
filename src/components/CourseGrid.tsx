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
    <div>
      {withFilters ? (
        <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search courses or technologies"
              aria-label="Search courses"
              className="h-11 rounded-full pl-9"
            />
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by level">
            {levels.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLevel(l)}
                aria-pressed={level === l}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  level === l
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
                )}
              >
                {l.replace("Beginner to ", "")}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
