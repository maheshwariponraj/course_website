import { MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { contact } from "@/lib/site-data";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-md lg:hidden">
      <div className="flex gap-2">
        <Link
          to="/contact"
          className="flex h-11 flex-1 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-foreground"
        >
          Enquire Now
        </Link>
        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Chat with us on WhatsApp"
          className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground"
        >
          <MessageCircle className="size-4" aria-hidden />
          WhatsApp
        </a>
      </div>
    </div>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href={contact.whatsapp}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 hidden size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lift transition-transform hover:scale-105 lg:flex"
    >
      <MessageCircle className="size-6" aria-hidden />
    </a>
  );
}
