import { useState } from "react";
import PageHero from "@/components/site/PageHero";
import { Play } from "lucide-react";

type Cat = "All" | "Ads" | "Organic" | "Branding";

const items: { title: string; cat: Exclude<Cat, "All">; gradient: string; tag: string; aspect: string }[] = [
  { title: "Edtech launch reel", cat: "Organic", gradient: "from-brand-blue/40 to-brand-orange/30", tag: "Reel · 0:32", aspect: "aspect-[3/4]" },
  { title: "Realty performance ad", cat: "Ads", gradient: "from-brand-orange/40 to-brand-red/30", tag: "Meta · Carousel", aspect: "aspect-square" },
  { title: "Coaching brand refresh", cat: "Branding", gradient: "from-brand-yellow/50 to-brand-green/30", tag: "Identity", aspect: "aspect-[4/5]" },
  { title: "D2C transition reel", cat: "Organic", gradient: "from-brand-green/40 to-brand-blue/30", tag: "Reel · 0:18", aspect: "aspect-[3/4]" },
  { title: "Fintech UGC ad", cat: "Ads", gradient: "from-brand-red/40 to-brand-yellow/30", tag: "Meta · UGC", aspect: "aspect-square" },
  { title: "Wellness brand system", cat: "Branding", gradient: "from-brand-blue/30 to-brand-green/30", tag: "Visual system", aspect: "aspect-[4/5]" },
  { title: "Founder POV series", cat: "Organic", gradient: "from-brand-orange/30 to-brand-blue/40", tag: "Reel · series", aspect: "aspect-[3/4]" },
  { title: "Lead-gen ad set", cat: "Ads", gradient: "from-brand-yellow/40 to-brand-orange/30", tag: "Meta · Static", aspect: "aspect-square" },
  { title: "Studio rebrand", cat: "Branding", gradient: "from-brand-green/30 to-brand-yellow/40", tag: "Logo · system", aspect: "aspect-[4/5]" },
];

const cats: Cat[] = ["All", "Ads", "Organic", "Branding"];

const Work = () => {
  const [filter, setFilter] = useState<Cat>("All");
  const list = filter === "All" ? items : items.filter((i) => i.cat === filter);

  return (
    <>
      <PageHero
        eyebrow="Work"
        title={
          <>
            Reels, ads & identity{" "}
            <span className="italic font-medium text-brand-grey">— in the wild.</span>
          </>
        }
        subtitle="A small slice of work shipped across performance ads, organic reels and branding."
      />

      <section className="container pt-12 pb-8">
        <div className="flex flex-wrap items-center gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition border ${
                filter === c
                  ? "bg-foreground text-background border-foreground"
                  : "bg-background text-foreground border-border hover:border-foreground"
              }`}
            >
              {c}
            </button>
          ))}
          <span className="ml-auto font-mono text-xs text-muted-foreground uppercase tracking-[0.18em]">
            {list.length} pieces
          </span>
        </div>
      </section>

      <section className="container pb-24 md:pb-32">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {list.map((it, i) => (
            <figure
              key={it.title + i}
              className={`mb-6 break-inside-avoid group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${it.gradient} ${it.aspect} noise`}
            >
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="pill bg-background">{it.cat}</span>
                  {it.cat === "Organic" && (
                    <span className="h-10 w-10 rounded-full bg-foreground text-background flex items-center justify-center">
                      <Play className="h-4 w-4 fill-background" />
                    </span>
                  )}
                </div>
                <div>
                  <p className="font-display text-2xl font-bold leading-tight">{it.title}</p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/70">
                    {it.tag}
                  </p>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
};

export default Work;
