import PageHero from "@/components/site/PageHero";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    q: "I've been a freelance video editor stuck with local clients. Paradox build my personal brand from scratch, be it positioning content and everything. In a month,I got an international lead and few high budget indian leads. Will continue to work wth the team and not stopping anytime soon. Thanks, Team Paradox!",
    name: "Surya Velmayil",
    role: "Editor, Screenplay Writer",
    accent: "bg-brand-yellow",
    img: "/surya.jpg",
  },
  {
    q: "We approached Paradox to run our Meta Ads campaign. What surprised us wasn’t just the results, it was the speed. Within just 5 days, they hit our 30-day target. By day 30, they had delivered 4x the results we initially aimed for. We also received great feedback from our partner companies about their creative ideas. From strategy to execution, everything was perfectly aligned. If you’re looking for a team that fulfills promises faster than expected, Paradox is the right choice.",
    name: "EduPath Consulting Services",
    role: "Education Consultancy",
    accent: "bg-brand-orange text-background",
    img: "/edupath.png",
  },
  {
    q: "I have been working with Paradox team, for content writing and voice overs. They deeply focus on the quality and final output, flexible to multiple iterations even at 2 a.m. I am part of them and wish to be a part of them for continuous growth.",
    name: "Muvidha Styles",
    role: "India",
    accent: "bg-brand-blue text-background",
    img: "/muvidha.png",
  },
];

const chats = [
  {
    name: "Edupath",
    msgs: [
      { from: "client", text: "We just hit our 30-day target." },
      { from: "us", text: "🔥 In 5 days. Let's push harder." },
      { from: "client", text: "Doubling the budget. Send the new creatives." },
    ],
  },
  {
    name: "Suriya Freelance Editor",
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
            We Don’t Follow Trends. We{" "}
            <span className="text-brand-blue">Set</span> Them.
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
                <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${r.accent} font-display font-bold overflow-hidden`}>
                  {r.img ? (
                    <img src={r.img} alt={r.name} className="h-full w-full object-cover" />
                  ) : (
                    r.name[0]
                  )}
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
                    {c.name.charAt(0).toUpperCase()}
                  </span>
                  <span className="font-medium text-sm">{c.name}</span>
                  <span className="ml-auto h-2 w-2 rounded-full bg-brand-green animate-blink" />
                </div>
                <div className="mt-5 space-y-3">
                  {c.msgs.map((m, idx) => (
                    <div
                      key={idx}
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${m.from === "us"
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
