import PageHero from "@/components/site/PageHero";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const beliefs = [
  { n: "01", t: "Revenue over reach", d: "If a campaign doesn't move money, it doesn't ship." },
  { n: "02", t: "Creative is the algorithm", d: "Targeting is solved. Creative is the new media buying." },
  { n: "03", t: "Speed compounds", d: "Test weekly. Kill losers fast. Double down on winners." },
  { n: "04", t: "Honest reporting", d: "No vanity dashboards. Pipeline, CAC and ROAS — every Friday." },
];

const About = () => {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            We started Paradox because the industry sold{" "}
            <span className="italic font-medium text-brand-grey">activity</span> instead of{" "}
            <span className="text-brand-blue">outcomes.</span>
          </>
        }
        subtitle="Most agencies optimise for impressions. We optimise for invoices. That's the paradox — and our entire mandate."
      />

      {/* FOUNDER */}
      <section className="container py-24 md:py-32 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-brand-orange/40 via-brand-yellow/30 to-brand-blue/20 border border-border relative overflow-hidden noise">
            <div className="absolute inset-0 flex items-end p-8">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/70">Founder</p>
                <p className="display-md mt-2">The Paradox Team</p>
              </div>
            </div>
            <div className="absolute top-6 right-6 pop-card px-4 py-2 bg-background -rotate-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em]">Since 2022</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <p className="eyebrow">/ Origin</p>
          <h2 className="display-lg mt-4 max-w-xl">A short, true story.</h2>
          <div className="mt-8 space-y-5 text-lg text-muted-foreground max-w-2xl">
            <p>
              We didn't start as an agency. We started as freelancers — working independently with brands 
              and founders across the globe. Different people, different time zones, different clients.
            </p>
            <p>
              Over time, our paths crossed. And we realized something — we all shared the same mindset: 
              results matter more than noise. That's when it clicked.
            </p>
            <p>
              Instead of working in silos, we came together. Not to build just another agency, but to 
              build a team that truly understands what moves the needle. That's how Paradox was born.
            </p>
            <p className="text-foreground font-medium">
              Today, we operate as a unified team with one goal: to help brands grow globally — 
              not just in reach, but in real revenue.
            </p>
          </div>
        </div>
      </section>

      {/* BELIEFS */}
      <section className="bg-secondary border-y border-border">
        <div className="container py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div>
              <p className="eyebrow">/ What we believe</p>
              <h2 className="display-lg mt-4">Four convictions that run the agency.</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {beliefs.map((b) => (
              <div key={b.n} className="rounded-2xl border border-border bg-card p-8 hover:border-foreground transition">
                <p className="font-mono text-xs text-muted-foreground">{b.n}</p>
                <h3 className="display-md mt-3">{b.t}</h3>
                <p className="mt-3 text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="container py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow">/ Our approach</p>
            <h2 className="display-lg mt-4">
              Strategy first.{" "}
              <span className="italic font-medium text-brand-grey">Creative second.</span>{" "}
              Spend last.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Most agencies skip straight to ad spend. We start by stress-testing your offer, mapping
              the funnel, and engineering creative before a single rupee goes to Meta. That's why our
              campaigns ship profitable from week one.
            </p>
            <Link
              to="/process"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 font-medium hover:bg-foreground/90 transition"
            >
              See the process <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {[
                { k: "Offer", c: "bg-brand-blue text-background" },
                { k: "Funnel", c: "bg-brand-yellow" },
                { k: "Creative", c: "bg-brand-orange text-background" },
                { k: "Spend", c: "bg-foreground text-background" },
              ].map((b, i) => (
                <div
                  key={b.k}
                  className={`aspect-square rounded-2xl ${b.c} flex items-end p-5 font-display text-2xl font-bold`}
                  style={{ transform: `rotate(${(i - 1.5) * 1.4}deg)` }}
                >
                  0{i + 1}. {b.k}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
