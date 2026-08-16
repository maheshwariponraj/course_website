import { Star } from "lucide-react";

export function TestimonialCard({
  name,
  course,
  feedback,
  rating,
}: {
  name: string;
  course: string;
  feedback: string;
  rating: number;
}) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-card">
      <div className="flex items-center gap-1" aria-label={`Rated ${rating} out of 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            aria-hidden
            className={
              i < rating ? "size-4 fill-accent text-accent" : "size-4 text-muted-foreground/40"
            }
          />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        “{feedback}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
        <span className="flex size-10 items-center justify-center rounded-full bg-primary-soft text-sm font-semibold text-primary">
          {name.charAt(0)}
        </span>
        <span>
          <span className="block text-sm font-semibold text-foreground">{name}</span>
          <span className="block text-xs text-muted-foreground">{course}</span>
        </span>
      </figcaption>
    </figure>
  );
}
