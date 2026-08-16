export function ProjectCard({
  name,
  image,
  tech,
  description,
}: {
  name: string;
  image: string;
  tech: string[];
  description: string;
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={image}
          alt={`${name} project illustration`}
          loading="lazy"
          width={1024}
          height={768}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground">{name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <li
              key={t}
              className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
