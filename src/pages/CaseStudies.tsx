import PageHero from "@/components/site/PageHero";
import { ArrowUpRight, Target, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const studies = [
  {
    client: "Edtech — upskilling platform",
    problem: "₹1.2L/mo ad spend, leaking pipeline, 0.9× ROAS.",
    strategy: [
      "Rebuilt funnel from offer → landing → ads",
      "Killed 32 underperforming creatives",
      "Launched UGC-style reels as primary creative",
    ],
    results: [
      { k: "412%", v: "Qualified leads" },
      { k: "5 days", v: "30-day target hit" },
      { k: "₹68", v: "Cost per lead (was ₹312)" },
    ],
    accent: "from-brand-blue/30 to-brand-blue/0",
    chip: "bg-brand-blue text-background",
    icon: TrendingUp,
  },
  {
    client: "Real Estate — luxury developer",
    problem: "High follower count, zero qualified site visits.",
    strategy: [
      "Repositioned creative around lifestyle, not specs",
      "Built lead-qualification quiz funnel",
      "Retargeting cohorts by location & intent",
    ],
    results: [
      { k: "₹1.2 Cr", v: "Pipeline in 60 days" },
      { k: "4.6×", v: "ROAS" },
      { k: "37", v: "Qualified site visits" },
    ],
    accent: "from-brand-orange/40 to-brand-orange/0",
    chip: "bg-brand-orange text-background",
    icon: Target,
  },
  {
    client: "Coaching — career transition",
    problem: "Cohort launches missed targets two quarters in a row.",
    strategy: [
      "Pre-launch waitlist via reels & DMs",
      "Webinar funnel with retargeting layer",
      "Daily creative testing for 14 days",
    ],
    results: [
      { k: "Sold out", v: "In 11 days" },
      { k: "3.1×", v: "Call bookings" },
      { k: "₹420", v: "Cost per booked call" },
    ],
    accent: "from-brand-green/30 to-brand-green/0",
    chip: "bg-brand-green text-background",
    icon: Zap,
  },
  {
    client: "D2C Service — home interiors",
    problem: "Inconsistent leads, sales team idle 40% of week.",
    strategy: [
      "Geo-targeted Meta campaigns",
      "Reels showcasing real project transitions",
      "WhatsApp-first lead capture",
    ],
    results: [
      { k: "3.8×", v: "Lead volume" },
      { k: "62%", v: "Lower CAC" },
      { k: "11", v: "New projects in 30 days" },
    ],
    accent: "from-brand-yellow/40 to-brand-yellow/0",
    chip: "bg-brand-yellow text-foreground",
    icon: TrendingUp,
  },
];

const CaseStudies = () => {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title={
          <>
            Receipts.{" "}
            <span className="italic font-medium text-brand-grey">Not case study fluff.</span>
          </>
        }
        subtitle="Every engagement, the same goal — measurable revenue impact in 30 days. Here's how a few of them played out."
      />

      <section className="container py-20 md:py-28 space-y-12">
        {studies.map((s, i) => (
          <article
            key={i}
            className={`relative rounded-3xl border border-border bg-gradient-to-br ${s.accent} overflow-hidden`}
          >
            <div className="grid lg:grid-cols-12 gap-10 p-8 md:p-12">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3">
                  <span className={`inline-flex items-center justify-center h-10 w-10 rounded-full ${s.chip}`}>
                    <s.icon className="h-4 w-4" />
                  </span>
                  <span className="pill bg-background">{s.client.split("—")[0].trim()}</span>
                </div>
                <h2 className="display-md mt-6">{s.client}</h2>
                <div className="mt-8 space-y-6 text-sm">
                  <div>
                    <p className="eyebrow">Problem</p>
                    <p className="mt-2 text-base">{s.problem}</p>
                  </div>
                  <div>
                    <p className="eyebrow">Strategy</p>
                    <ul className="mt-2 space-y-1.5">
                      {s.strategy.map((st) => (
                        <li key={st} className="text-base">→ {st}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4 self-start">
                {s.results.map((r) => (
                  <div key={r.v} className="rounded-2xl bg-background border border-border p-6">
                    <p className="display-md">{r.k}</p>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {r.v}
                    </p>
                  </div>
                ))}
                <div className="sm:col-span-3 rounded-2xl bg-foreground text-background p-6 flex items-center justify-between">
                  <p className="font-display text-lg">Visual proof — ads, screenshots, creatives.</p>
                  <span className="pill border-background/30 text-background bg-background/10">
                    Available on call
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="container pb-24">
        <div className="rounded-3xl bg-foreground text-background p-10 md:p-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="display-lg max-w-xl text-background">
            Want results like these on your account?
          </h2>
          <a
            href="mailto:paradoxagencyoffl@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-brand-yellow text-foreground px-6 py-3.5 font-medium hover:bg-background transition"
          >
            Mail us now <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
