import PageHero from "@/components/site/PageHero";
import { Check, ArrowUpRight } from "lucide-react";

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
    id: "content-strategy",
    label: "02 / Strategy",
    title: "Content Strategy",
    accent: "bg-brand-yellow",
    desc: "Data-driven frameworks to dominate your niche. We architect what you say, how you say it, and where it lives to maximize distribution and conversion.",
    included: [
      "Audience persona mapping",
      "Core content pillars",
      "Cross-platform distribution plan",
      "Competitor gap analysis",
      "Trend forecasting",
    ],
    forWho: "Brands with an audience but no predictable way to monetize attention.",
    outcomes: ["Clear brand positioning", "Higher engagement rates", "Streamlined content creation"],
  },
  {
    id: "video-design",
    label: "03 / Production",
    title: "Video & Design Production",
    accent: "bg-brand-green",
    desc: "End-to-end short-form content and striking visual design. Concepting, scripting, shooting direction and editing built to stop the scroll and drive clicks.",
    included: [
      "Reel strategy & hooks",
      "Scripts & shot lists",
      "Premium video editing",
      "Graphic design & carousels",
      "Thumbnail optimization",
    ],
    forWho: "Founders who want to show up on camera and convert reach into revenue.",
    outcomes: ["10–20 high-quality assets / mo", "Higher watch-through", "Ad-ready creative library"],
  },
  {
    id: "performance",
    label: "04 / Ads",
    title: "Performance Marketing",
    accent: "bg-brand-blue",
    desc: "Full-funnel Meta and Google ads built around your offer. Funnels, creative testing and spend management that obsess over CAC and ROAS.",
    included: [
      "Account audit & funnel design",
      "Creative & copy direction",
      "Pixel + tracking setup",
      "Weekly creative testing",
      "Bid & budget management",
    ],
    forWho: "Brands ready to scale ad spend and want a real ROAS, not theatre.",
    outcomes: ["3–5× ROAS", "Predictable lead flow", "Lower CAC every quarter"],
  },
  {
    id: "personal-branding",
    label: "05 / Branding",
    title: "Personal Branding",
    accent: "bg-brand-orange",
    desc: "Positioning founders as industry authorities. We extract your insights and turn them into compelling thought leadership content.",
    included: [
      "Founder positioning strategy",
      "Ghostwriting (LinkedIn/X)",
      "Podcast & PR pitching",
      "Newsletter creation",
      "Executive profile optimization",
    ],
    forWho: "Founders and CEOs who want their personal audience to fuel company growth.",
    outcomes: ["Industry recognition", "High-ticket inbound leads", "Investor & talent attraction"],
  },
  {
    id: "web-seo",
    label: "06 / Web",
    title: "Website & SEO",
    accent: "bg-foreground text-background",
    desc: "High-converting landing pages and search engine dominance. We build digital real estate that captures intent and converts traffic into revenue.",
    included: [
      "Conversion rate optimization",
      "Custom web development",
      "On-page & technical SEO",
      "High-intent keyword strategy",
      "Performance tracking",
    ],
    forWho: "Brands losing revenue to slow, confusing websites and poor search visibility.",
    outcomes: ["Higher conversion rates", "Page 1 search rankings", "Decreased bounce rate"],
  },
];

const Services = () => {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Six services.{" "}
            <span className="text-brand-blue">Engineered</span> to compound.
          </>
        }
        subtitle="Pick one. Stack them all. Either way, the brief is the same — move revenue, not vanity metrics."
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
              <div className={`mt-8 inline-block ${s.accent} ${s.accent.includes("bg-foreground") ? "" : "text-background"} px-4 py-2 rounded-full font-mono text-xs uppercase tracking-[0.18em]`}>
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
            </div>
            {i < services.length - 1 && <div className="lg:col-span-12 border-b border-border" />}
          </article>
        ))}

        {/* Global CTA */}
        <div className="rounded-3xl bg-foreground text-background p-10 md:p-16 flex flex-col md:flex-row md:items-center justify-between gap-8 text-center md:text-left mt-12">
          <div>
            <h3 className="display-md">Ready to scale your brand?</h3>
            <p className="text-background/70 mt-2 max-w-md mx-auto md:mx-0">
              Stop guessing what works. Let's build a growth engine that converts attention into revenue.
            </p>
          </div>
          <a
            href="mailto:paradoxagencyoffl@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-background text-foreground px-8 py-4 font-medium hover:bg-brand-yellow transition whitespace-nowrap shrink-0"
          >
            Mail us now <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Services;
