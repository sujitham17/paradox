import { Link } from "react-router-dom";
import { ArrowUpRight, TrendingUp, Target, Sparkles, Zap } from "lucide-react";
import Marquee from "@/components/site/Marquee";

const stats = [
  { kpi: "3.8×", label: "Avg. lead lift" },
  { kpi: "4.2×", label: "ROAS on Meta ads" },
  { kpi: "27", label: "Brands scaled" },
  { kpi: "5d", label: "Avg. time to first sale" },
];

const services = [
  {
    icon: Target,
    title: "Performance Marketing",
    desc: "Meta ads engineered for ROAS — funnels, creatives, and bid strategy that bring qualified leads, not impressions.",
    accent: "bg-brand-blue",
  },
  {
    icon: Sparkles,
    title: "Social Media Management",
    desc: "Strategy, calendars, copy and engagement designed to convert audiences into customers — not just followers.",
    accent: "bg-brand-orange",
  },
  {
    icon: Zap,
    title: "Content Creation",
    desc: "Reels, scripting, editing and ad creatives built to stop the scroll and drive measurable action.",
    accent: "bg-brand-green",
  },
];

const cases = [
  {
    tag: "Edtech",
    title: "30-day target hit in 5 days",
    metric: "+412% qualified leads",
    accent: "from-brand-blue/20 to-brand-blue/0",
  },
  {
    tag: "Real Estate",
    title: "₹1.2Cr pipeline from cold ads",
    metric: "4.6× ROAS",
    accent: "from-brand-orange/30 to-brand-orange/0",
  },
  {
    tag: "Coaching",
    title: "Booked-out cohort in 11 days",
    metric: "+3.1× call bookings",
    accent: "from-brand-green/20 to-brand-green/0",
  },
];

const testimonials = [
  {
    q: "They cared about my revenue, not my follower count. First profitable month in two years.",
    name: "Aanya R.",
    role: "Founder, Skillforge",
  },
  {
    q: "Finally, an agency that talks money, not impressions. ROAS jumped from 1.8 to 4.4.",
    name: "Karan S.",
    role: "CEO, NestRealty",
  },
];

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container pt-12 md:pt-20 pb-24 md:pb-32 relative">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3 animate-fade-in">
              <span className="pill">
                <span className="h-2 w-2 rounded-full bg-brand-green animate-blink" />
                Now booking — May intake
              </span>
              <span className="hidden sm:inline pill">Revenue {">"} reach</span>
            </div>

            <h1 className="display-xl max-w-[18ch] animate-fade-up">
              We don't grow{" "}
              <span className="italic font-semibold text-brand-grey">followers.</span>
              <br />
              We grow{" "}
              <span className="relative inline-block">
                <span className="relative z-10">revenue</span>
                <span className="absolute inset-x-0 bottom-1 md:bottom-2 h-3 md:h-5 bg-brand-yellow -z-0" />
              </span>
              .
            </h1>

            <p className="max-w-2xl text-lg md:text-xl text-muted-foreground animate-fade-up [animation-delay:120ms]">
              Paradox is a performance-first agency for founders, coaches and service brands.
              Ads, social, and content engineered for one outcome — qualified pipeline.
            </p>

            <div className="flex flex-wrap items-center gap-3 animate-fade-up [animation-delay:200ms]">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 font-medium hover:bg-foreground/90 transition"
              >
                Book a discovery call
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3.5 font-medium hover:bg-secondary transition"
              >
                DM us on Instagram
              </a>
            </div>
          </div>

          {/* floating stat chips */}
          <div className="hidden md:block absolute right-8 top-24 animate-fade-up [animation-delay:300ms]">
            <div className="rotate-3 pop-card px-6 py-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Last 30 days
              </p>
              <p className="display-md mt-1 text-brand-blue">+412%</p>
              <p className="text-xs text-muted-foreground">Qualified leads, edtech client</p>
            </div>
          </div>
          <div className="hidden md:block absolute right-40 bottom-12 animate-fade-up [animation-delay:400ms]">
            <div className="-rotate-2 pop-card px-6 py-4 bg-brand-yellow">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em]">ROAS</p>
              <p className="display-md mt-1">4.6×</p>
            </div>
          </div>

          {/* decorative */}
          <div className="pointer-events-none absolute -left-32 -bottom-40 h-96 w-96 rounded-full bg-brand-blue/15 blur-3xl" />
        </div>
      </section>

      <Marquee
        items={["Performance Ads", "Reels & Content", "Social Media", "Scaled Revenue", "Built to Convert"]}
        accent="red"
      />

      {/* STATS */}
      <section className="container py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-end mb-14">
          <div>
            <p className="eyebrow">/ Receipts</p>
            <h2 className="display-lg mt-4">Numbers that matter to your CFO.</h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-md">
            We measure success in pipeline, ROAS and booked calls — not impressions or saves.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-foreground/15">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-10 ${i !== 0 ? "lg:border-l border-foreground/15" : ""} ${
                i % 2 ? "border-l border-foreground/15 lg:border-l" : ""
              }`}
            >
              <p className="display-lg">{s.kpi}</p>
              <p className="mt-2 text-sm text-muted-foreground font-mono uppercase tracking-[0.15em]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-secondary border-y border-border">
        <div className="container py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow">/ What we do</p>
              <h2 className="display-lg mt-4 max-w-xl">Three levers. One outcome — revenue.</h2>
            </div>
            <Link to="/services" className="link-underline font-medium inline-flex items-center gap-2">
              All services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="group relative bg-card rounded-2xl p-8 border border-border hover:border-foreground transition">
                <div className={`h-12 w-12 rounded-xl ${s.accent} flex items-center justify-center text-background`}>
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="display-md mt-6">{s.title}</h3>
                <p className="mt-3 text-muted-foreground">{s.desc}</p>
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium link-underline"
                >
                  Learn more <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="container py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow">/ Selected work</p>
            <h2 className="display-lg mt-4 max-w-xl">Case studies that read like P&L wins.</h2>
          </div>
          <Link to="/case-studies" className="link-underline font-medium inline-flex items-center gap-2">
            View all <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <Link
              key={c.title}
              to="/case-studies"
              className={`group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${c.accent} p-8 min-h-[320px] flex flex-col justify-between hover:border-foreground transition`}
            >
              <div className="flex items-center justify-between">
                <span className="pill">{c.tag}</span>
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
              </div>
              <div>
                <p className="font-mono text-sm text-muted-foreground">Result</p>
                <p className="display-md mt-2">{c.metric}</p>
                <p className="mt-3 text-sm">{c.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SNIPPET */}
      <section className="bg-foreground text-background">
        <div className="container py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <p className="eyebrow text-background/60">/ Word of mouth</p>
              <h2 className="display-lg mt-4 text-background">
                What founders <span className="text-brand-yellow italic font-medium">say.</span>
              </h2>
              <Link
                to="/testimonials"
                className="mt-8 inline-flex items-center gap-2 link-underline text-background"
              >
                Read more <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
              {testimonials.map((t, i) => (
                <figure
                  key={i}
                  className="rounded-2xl border border-background/15 p-8 bg-background/[0.03]"
                >
                  <TrendingUp className="h-5 w-5 text-brand-green" />
                  <blockquote className="mt-5 font-display text-xl md:text-2xl leading-snug text-background">
                    "{t.q}"
                  </blockquote>
                  <figcaption className="mt-6 text-sm text-background/70">
                    <span className="text-background font-medium">{t.name}</span> — {t.role}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
