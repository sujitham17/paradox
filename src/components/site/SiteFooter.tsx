import { Link } from "react-router-dom";
import { ArrowUpRight, Instagram, Mail } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="container py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <p className="eyebrow text-background/60">/ Let's build</p>
            <h2 className="display-lg mt-4 text-background">
              Ready to scale <span className="italic font-medium text-brand-yellow">revenue?</span>
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 rounded-full bg-background text-foreground px-6 py-3 font-medium hover:bg-brand-yellow transition"
            >
              Book a discovery call
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="lg:col-span-6 grid sm:grid-cols-3 gap-8 text-sm">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-background/50 mb-4">Sitemap</p>
              <ul className="space-y-2">
                {[
                  ["/about", "About"],
                  ["/services", "Services"],
                  ["/work", "Work"],
                  ["/case-studies", "Case studies"],
                  ["/process", "Process"],
                  ["/testimonials", "Testimonials"],
                  ["/contact", "Contact"],
                ].map(([to, label]) => (
                  <li key={to}>
                    <Link to={to} className="text-background/80 hover:text-background link-underline">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-background/50 mb-4">Connect</p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-background/80 hover:text-background"
                  >
                    <Instagram className="h-4 w-4" /> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/0000000000"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-background/80 hover:text-background"
                  >
                    <span className="h-4 w-4 inline-flex items-center justify-center rounded-full bg-brand-green text-[10px] font-bold text-foreground">
                      W
                    </span>
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@paradox.agency"
                    className="inline-flex items-center gap-2 text-background/80 hover:text-background"
                  >
                    <Mail className="h-4 w-4" /> hello@paradox.agency
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-background/50 mb-4">Hours</p>
              <p className="text-background/80">Mon — Sat<br />09:00 — 19:00 IST</p>
              <p className="mt-4 text-background/60">Replies in &lt; 24h</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/15 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-background/50">
            © {new Date().getFullYear()} Paradox Agency — Revenue {">"} reach
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-background/50">
            Built for founders who count revenue, not likes.
          </p>
        </div>
      </div>
    </footer>
  );
}
