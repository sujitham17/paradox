import { Link, NavLink as RRNavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/process", label: "Process" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-background/80 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" aria-label="Paradox Agency home">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.slice(1, -1).map((l) => (
            <RRNavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium link-underline transition-colors ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {l.label}
            </RRNavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="mailto:paradoxagencyoffl@gmail.com"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-foreground/90 transition"
          >
            Mail us now
            <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-blink" />
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-border bg-background"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container flex flex-col py-4">
            {links.map((l) => (
              <RRNavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `py-3 font-display text-2xl font-bold tracking-tight ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`
                }
              >
                {l.label}
              </RRNavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
