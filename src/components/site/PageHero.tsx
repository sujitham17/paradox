import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
};

export default function PageHero({ eyebrow, title, subtitle, align = "left" }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="container py-20 md:py-32">
        <div className={align === "center" ? "max-w-4xl mx-auto text-center" : "max-w-5xl"}>
          {eyebrow && <p className="eyebrow mb-6 animate-fade-in">/ {eyebrow}</p>}
          <h1 className="display-xl animate-fade-up">{title}</h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground animate-fade-up [animation-delay:120ms]">
              {subtitle}
            </p>
          )}
          {align === "left" && (
            <div className="mt-10 flex flex-wrap items-center gap-3 animate-fade-up [animation-delay:200ms]">
              <a
                href="mailto:paradoxagencyoffl@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 font-medium hover:bg-foreground/90 transition"
              >
                Mail us now <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 font-medium hover:bg-secondary transition"
              >
                See the work
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -right-20 -bottom-32 h-72 w-72 rounded-full bg-brand-yellow/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-brand-blue/20 blur-3xl" />
    </section>
  );
}
