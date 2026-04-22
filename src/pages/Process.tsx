import PageHero from "@/components/site/PageHero";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    n: "01",
    t: "Discovery",
    d: "We dig into your offer, customer, funnel and current numbers. No assumptions, no templates.",
    out: "Clarity on what actually moves the needle.",
    color: "bg-brand-blue text-background",
    week: "Week 1",
  },
  {
    n: "02",
    t: "Strategy",
    d: "We build the growth plan — channels, creative directions, budget tiers and 30/60/90 day targets.",
    out: "A written, signed-off plan. No ambiguity.",
    color: "bg-brand-orange text-background",
    week: "Week 1–2",
  },
  {
    n: "03",
    t: "Execution",
    d: "Creative production, ad builds, content calendar, tracking setup. The plan goes live, fast.",
    out: "Campaigns shipped within 14 days.",
    color: "bg-brand-yellow",
    week: "Week 2–4",
  },
  {
    n: "04",
    t: "Optimization",
    d: "Weekly creative tests, funnel fixes, audience refinements. We kill what doesn't work, fast.",
    out: "Lower CAC, stronger ROAS, every week.",
    color: "bg-brand-green text-background",
    week: "Week 4+",
  },
  {
    n: "05",
    t: "Scaling",
    d: "Once unit economics are healthy, we scale spend and channels — carefully, profitably, repeatedly.",
    out: "Predictable, profitable growth.",
    color: "bg-foreground text-background",
    week: "Month 2+",
  },
];

const Process = () => {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title={
          <>
            A 5-step system,{" "}
            <span className="text-brand-blue">repeated</span> until it compounds.
          </>
        }
        subtitle="No fluff, no theatrics. Just the same process that's worked across edtech, real estate, coaching and D2C."
      />

      <section className="container py-20 md:py-28">
        <div className="relative">
          <div className="hidden md:block absolute left-[7.5rem] top-0 bottom-0 w-px bg-border" aria-hidden />
          <ol className="space-y-8 md:space-y-12">
            {steps.map((s, i) => (
              <li
                key={s.n}
                className="relative grid md:grid-cols-[8rem_1fr] gap-6 md:gap-12 items-start animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="md:pt-2">
                  <div
                    className={`inline-flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-2xl ${s.color} font-display text-2xl md:text-3xl font-bold relative z-10`}
                  >
                    {s.n}
                  </div>
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {s.week}
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6 md:p-8 hover:border-foreground transition">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="display-md">{s.t}</h2>
                    <span className="hidden md:inline pill">Phase {s.n}</span>
                  </div>
                  <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{s.d}</p>
                  <div className="mt-6 pt-6 border-t border-border flex items-start gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground shrink-0 mt-1">
                      Outcome →
                    </span>
                    <p className="font-medium">{s.out}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container pb-24">
        <div className="rounded-3xl bg-foreground text-background p-10 md:p-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="display-lg max-w-xl text-background">
            Ready to start with <span className="text-brand-yellow italic">Discovery?</span>
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3.5 font-medium hover:bg-brand-yellow transition"
          >
            Book your call <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Process;
