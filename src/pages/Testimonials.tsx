import PageHero from "@/components/site/PageHero";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    q: "They cared about my revenue, not my follower count. First profitable month in two years.",
    name: "Aanya R.",
    role: "Founder, Skillforge",
    accent: "bg-brand-yellow",
  },
  {
    q: "Finally an agency that talks money, not impressions. ROAS jumped 1.8 → 4.4 in six weeks.",
    name: "Karan S.",
    role: "CEO, NestRealty",
    accent: "bg-brand-blue text-background",
  },
  {
    q: "We sold out our cohort in 11 days. The waitlist alone covered four months of fees.",
    name: "Nidhi P.",
    role: "Coach, ReframeIQ",
    accent: "bg-brand-orange text-background",
  },
  {
    q: "The team treats our P&L like their own. That's the difference.",
    name: "Rahul M.",
    role: "Founder, Atelier44",
    accent: "bg-brand-green text-background",
  },
];

const chats = [
  {
    name: "Client — Edtech",
    msgs: [
      { from: "client", text: "We just hit our 30-day target." },
      { from: "us", text: "🔥 In 5 days. Let's push harder." },
      { from: "client", text: "Doubling the budget. Send the new creatives." },
    ],
  },
  {
    name: "Client — Real Estate",
    msgs: [
      { from: "client", text: "37 site visits booked this week." },
      { from: "us", text: "ROAS at 4.6×. Scaling Bangalore next." },
      { from: "client", text: "Best quarter we've ever had." },
    ],
  },
];

const Testimonials = () => {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title={
          <>
            Founders who measure{" "}
            <span className="text-brand-blue">money</span>, not metrics.
          </>
        }
        subtitle="The real test of an agency is whether clients refer them. Ours do — quietly and often."
      />

      <section className="container py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className="relative rounded-2xl border-2 border-foreground bg-card p-8 hover:-translate-y-1 transition"
              style={{ boxShadow: "6px 6px 0 hsl(var(--brand-ink))" }}
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5 text-brand-yellow">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <Quote className="h-6 w-6 text-foreground/20" />
              </div>
              <blockquote className="mt-6 font-display text-2xl md:text-3xl leading-tight">
                "{r.q}"
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${r.accent} font-display font-bold`}>
                  {r.name[0]}
                </span>
                <div className="text-sm">
                  <p className="font-medium">{r.name}</p>
                  <p className="text-muted-foreground">{r.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-secondary border-y border-border">
        <div className="container py-20 md:py-28">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow">/ DMs that matter</p>
            <h2 className="display-lg mt-4">Real chats from real launches.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {chats.map((c) => (
              <div key={c.name} className="rounded-2xl border border-border bg-background p-6">
                <div className="flex items-center gap-2 pb-4 border-b border-border">
                  <span className="h-8 w-8 rounded-full bg-brand-green text-background inline-flex items-center justify-center font-display font-bold text-sm">
                    {c.name.split("—")[1].trim()[0]}
                  </span>
                  <span className="font-medium text-sm">{c.name}</span>
                  <span className="ml-auto h-2 w-2 rounded-full bg-brand-green animate-blink" />
                </div>
                <div className="mt-5 space-y-3">
                  {c.msgs.map((m, idx) => (
                    <div
                      key={idx}
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                        m.from === "us"
                          ? "bg-foreground text-background ml-auto rounded-br-sm"
                          : "bg-secondary text-foreground rounded-bl-sm"
                      }`}
                    >
                      {m.text}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
