import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/ilai-logo.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "Programs", to: "/programs" },
  { label: "About Us", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Placements", to: "/placements" },
  { label: "Contact", to: "/contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur-md">
      <div className="container-page flex h-20 items-center justify-between gap-4 py-3 sm:h-22 lg:h-24">
        <Link
          to="/"
          className="group flex items-center gap-2.5 sm:gap-3 lg:gap-4"
          onClick={() => setOpen(false)}
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg sm:h-14 sm:w-14 lg:h-16 lg:w-16">
            <img
              src={logo}
              alt="Ilai Professional Academy logo"
              width={64}
              height={64}
              className="h-full w-full object-contain transition-opacity duration-200 group-hover:opacity-90"
            />
          </div>
          <span className="block min-w-0 whitespace-nowrap text-sm font-extrabold leading-none tracking-[-0.04em] text-[#0d4b3e] sm:text-base lg:text-[1.55rem]">
            Ilai Professional Academy
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-0.5 xl:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary bg-primary-soft" }}
              className="rounded-full px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-primary-soft hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Button asChild variant="outline">
            <Link to="/courses">View Courses</Link>
          </Button>
          <Button asChild variant="accent">
            <Link to="/contact">Enquire Now</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-border text-primary transition-colors hover:bg-primary-soft xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background transition-[max-height] duration-300 xl:hidden",
          open ? "max-h-[32rem]" : "max-h-0 border-t-0",
        )}
      >
        <nav
          aria-label="Mobile"
          className="container-page flex flex-col gap-1 py-4"
        >
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary bg-primary-soft" }}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 grid gap-2">
            <Button asChild variant="outline" onClick={() => setOpen(false)}>
              <Link to="/courses">View Courses</Link>
            </Button>
            <Button asChild variant="accent" onClick={() => setOpen(false)}>
              <Link to="/contact">Enquire Now</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
