import { Link } from "react-router-dom";
import { ArrowUpRight, Instagram, Linkedin, Mail } from "lucide-react";
import Logo from "./Logo";

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
            <a
              href="mailto:paradoxagencyoffl@gmail.com"
              className="inline-flex items-center gap-2 mt-8 rounded-full bg-background text-foreground px-6 py-3 font-medium hover:bg-brand-yellow transition"
            >
              Mail us now
              <ArrowUpRight className="h-4 w-4" />
            </a>
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
                    href="https://www.instagram.com/paradox.agency"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-background/80 hover:text-background"
                  >
                    <Instagram className="h-4 w-4" /> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/paradoxagencyoffl/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-background/80 hover:text-background"
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:paradoxagencyoffl@gmail.com"
                    className="inline-flex items-center gap-2 text-background/80 hover:text-background"
                  >
                    <Mail className="h-4 w-4" /> paradoxagencyoffl@gmail.com
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/15 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex flex-col gap-2">
            <Logo light />
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-background/50 mt-1">
              © {new Date().getFullYear()} Paradox Agency — Revenue {">"} reach
            </p>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-background/50">
            Built for founders who count revenue, not likes.
          </p>
        </div>
      </div>
    </footer>
  );
}
