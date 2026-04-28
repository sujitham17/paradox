import PageHero from "@/components/site/PageHero";
import { ArrowUpRight } from "lucide-react";

const works = [
  {
    client: "MyHanoi Trip",
    category: "Travel Agency",
    desc: "(International Client)",
    services: ["Content Strategy & Marketing", "Voice Overs"],
    accent: "from-brand-blue/10 to-brand-blue/0",
  },
  {
    client: "Muvidha Styles",
    category: "Clothing Brand",
    services: ["Content Strategy & Marketing", "Voice Overs"],
    accent: "from-brand-orange/10 to-brand-orange/0",
  },
  {
    client: "Nithie Nr",
    category: "Creator / Influencer",
    services: ["Dubbing Service"],
    accent: "from-brand-green/10 to-brand-green/0",
  },
  {
    client: "P2B",
    category: "Business Consultancy",
    services: ["Content Strategy", "Marketing", "On-cam Creation"],
    accent: "from-brand-yellow/10 to-brand-yellow/0",
  },
  {
    client: "GrowAI",
    category: "Edtech",
    services: ["Content Strategy", "Marketing", "On-cam Creation"],
    accent: "from-brand-blue/10 to-brand-blue/0",
  },
  {
    client: "inopro",
    category: "SaaS",
    services: ["Social Media Mgt", "Digital Marketing", "Brand Strategy"],
    accent: "from-brand-orange/10 to-brand-orange/0",
  },
  {
    client: "edupath",
    category: "Educational Consultancy",
    services: ["Meta Ads Campaign", "Social Media Mgt", "Video & Design"],
    accent: "from-brand-green/10 to-brand-green/0",
  },
  {
    client: "surya",
    category: "Personal Branding",
    services: ["Content Strategy & Marketing", "Branding Strategy", "Design Production"],
    accent: "from-brand-yellow/10 to-brand-yellow/0",
  },
  {
    client: "lr holidays",
    category: "Travel Agency",
    services: ["Content Strategy & Marketing", "Voice Overs"],
    accent: "from-brand-blue/10 to-brand-blue/0",
  },
];

const CaseStudies = () => {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title={
          <>
            Real work.{" "}
            <span className="italic font-medium text-brand-grey">Real brands.</span>
          </>
        }
        subtitle="A snapshot of the brands we've partnered with to drive revenue, scale reach, and build authority."
      />

      <section className="container py-20 md:py-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((w, i) => (
            <article
              key={i}
              className={`relative rounded-3xl border border-border bg-gradient-to-br ${w.accent} overflow-hidden hover:border-foreground transition duration-500 group`}
            >
              <div className="p-8 flex flex-col h-full justify-between min-h-[320px]">
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <span className="pill bg-background/50 border-border">{w.category}</span>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                  <h2 className="display-md mt-4 text-foreground capitalize">
                    {w.client}
                    {w.desc && <span className="block mt-1 font-sans text-sm font-normal text-muted-foreground normal-case">{w.desc}</span>}
                  </h2>
                </div>
                <div className="mt-10 pt-6 border-t border-border/50">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">Services rendered</p>
                  <div className="flex flex-wrap gap-2">
                    {w.services.map(srv => (
                      <span key={srv} className="inline-flex items-center rounded-md border border-border bg-card px-2.5 py-1 text-xs font-medium text-foreground/80">
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container pb-24">
        <div className="rounded-3xl bg-foreground text-background p-10 md:p-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="display-lg max-w-xl text-background">
            Ready to add your brand to this list?
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
