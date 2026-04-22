import PageHero from "@/components/site/PageHero";
import { Check, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "smm",
    label: "01 / SMM",
    title: "Social Media Management",
    accent: "bg-brand-orange",
    desc: "Strategy, content calendars, copywriting and community engagement that builds an audience around buying intent — not casual saves.",
    included: [
      "Brand & content strategy",
      "Monthly content calendar",
      "Copy & captions",
      "Engagement & DM management",
      "Monthly performance report",
    ],
    forWho: "Founders & service brands ready to turn their socials into a sales channel.",
    outcomes: ["+3× qualified DMs", "Consistent inbound leads", "Brand authority in 90 days"],
  },
  {
    id: "ads",
    label: "02 / Ads",
    title: "Performance Marketing — Meta Ads",
    accent: "bg-brand-blue",
    desc: "Full-funnel Meta ads built around your offer. Funnels, creative testing and spend management that obsess over CAC and ROAS.",
    included: [
      "Account audit & funnel design",
      "Creative & copy direction",
      "Pixel + tracking setup",
      "Weekly creative testing",
      "Bid & budget management",
    ],
    forWho: "Brands ready to spend ₹50k+/mo on Meta and want a real ROAS, not theatre.",
    outcomes: ["3–5× ROAS", "Predictable lead flow", "Lower CAC every quarter"],
  },
  {
    id: "content",
    label: "03 / Content",
    title: "Content Creation — Reels, scripts & ads",
    accent: "bg-brand-green",
    desc: "End-to-end short-form content. Concepting, scripting, shooting direction and editing. Built to stop the scroll and drive clicks.",
    included: [
      "Reel strategy & hooks",
      "Scripts & shot lists",
      "Editing & captions",
      "Ad creative variants",
      "Trend monitoring",
    ],
    forWho: "Founders who want to show up on camera and convert reach into revenue.",
    outcomes: ["10–20 reels / month", "Higher watch-through", "Ad-ready creative library"],
  },
];

const Services = () => {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Three services.{" "}
            <span className="text-brand-blue">Engineered</span> to compound.
          </>
        }
        subtitle="Pick one. Stack all three. Either way, the brief is the same — move revenue, not vanity metrics."
      />

      <section className="container py-20 md:py-28 space-y-24">
        {services.map((s, i) => (
          <article
            key={s.id}
            id={s.id}
            className="grid lg:grid-cols-12 gap-10 items-start scroll-mt-28"
          >
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </p>
              <h2 className="display-lg mt-4">{s.title}</h2>
              <p className="mt-6 text-lg text-muted-foreground">{s.desc}</p>
              <div className={`mt-8 inline-block ${s.accent} text-background px-4 py-2 rounded-full font-mono text-xs uppercase tracking-[0.18em]`}>
                Built for outcomes
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-border bg-card p-7">
                <p className="eyebrow">What's included</p>
                <ul className="mt-4 space-y-3">
                  {s.included.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <Check className="h-4 w-4 mt-0.5 text-brand-green shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-card p-7">
                <p className="eyebrow">Who it's for</p>
                <p className="mt-4 text-sm text-foreground">{s.forWho}</p>
                <p className="eyebrow mt-8">Expected outcomes</p>
                <ul className="mt-4 space-y-2">
                  {s.outcomes.map((o) => (
                    <li key={o} className="text-sm font-medium">→ {o}</li>
                  ))}
                </ul>
              </div>
              <div className="sm:col-span-2 rounded-2xl bg-foreground text-background p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="font-display text-xl">
                  Want a custom quote for {s.title.split("—")[0].trim()}?
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-5 py-2.5 text-sm font-medium hover:bg-brand-yellow transition"
                >
                  Book a call <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            {i < services.length - 1 && <div className="lg:col-span-12 border-b border-border" />}
          </article>
        ))}
      </section>
    </>
  );
};

export default Services;
