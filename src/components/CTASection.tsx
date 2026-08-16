import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function CTASection({
  title,
  description,
  primaryLabel = "Enquire Now",
  secondaryLabel = "Explore Courses",
}: {
  title: string;
  description: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="section">
      <div className="container-page">
        <div className="rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground shadow-lift sm:px-12">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/85">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="accent">
              <Link to="/contact">{primaryLabel}</Link>
            </Button>
            <Button asChild size="lg" variant="onDark">
              <Link to="/courses">{secondaryLabel}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
