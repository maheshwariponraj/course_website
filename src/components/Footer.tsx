import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/ilai-logo.png";
import { contact, courses } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Ilai Digital Solutions logo"
              width={48}
              height={48}
              loading="lazy"
              className="size-11 rounded-lg bg-background object-contain p-1"
            />
            <span className="text-base font-bold">Ilai Digital Solutions</span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/80">
            Practical learning. Real projects. Career-ready skills.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Youtube, label: "YouTube" },
              { Icon: Facebook, label: "Facebook" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-full border border-primary-foreground/25 transition-colors hover:bg-primary-foreground/10"
              >
                <Icon className="size-4" aria-hidden />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer courses">
          <h2 className="text-sm font-semibold uppercase tracking-widest">Courses</h2>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            {courses.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/courses/$slug"
                  params={{ slug: c.slug }}
                  className="transition-colors hover:text-accent"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer links">
          <h2 className="text-sm font-semibold uppercase tracking-widest">Company</h2>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/programs" className="hover:text-accent">Programs</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/projects" className="hover:text-accent">Projects</Link></li>
            <li><Link to="/placements" className="hover:text-accent">Career Support</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-accent">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-accent">Terms &amp; Conditions</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest">Get in touch</h2>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 text-accent" aria-hidden />
              <a href={contact.phoneHref} className="hover:text-accent">{contact.phone}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 text-accent" aria-hidden />
              <a href={`mailto:${contact.email}`} className="hover:text-accent">{contact.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 text-accent" aria-hidden />
              <span>{contact.location}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-primary-foreground/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ilai Digital Solutions. All rights reserved.</p>
          <p>Career-focused IT training &amp; professional courses.</p>
        </div>
      </div>
    </footer>
  );
}
