import { useState } from "react";
import PageHero from "@/components/site/PageHero";
import { Mail, Instagram, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Message received.",
        description: "We'll reply within 24 hours — usually faster.",
      });
    }, 700);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's <span className="text-brand-blue">scale</span> your brand.
          </>
        }
        subtitle="Tell us about your business, your numbers and where you want to be 90 days from now. We'll reply within 24 hours."
        align="left"
      />

      <section className="container pb-24 md:pb-32">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="lg:col-span-7 rounded-2xl border border-border bg-card p-6 md:p-10 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Name
                </label>
                <input
                  required
                  name="name"
                  className="mt-2 w-full bg-transparent border-b border-foreground/30 focus:border-foreground outline-none py-3 font-display text-lg"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full bg-transparent border-b border-foreground/30 focus:border-foreground outline-none py-3 font-display text-lg"
                  placeholder="you@brand.com"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Brand / Company
                </label>
                <input
                  name="brand"
                  className="mt-2 w-full bg-transparent border-b border-foreground/30 focus:border-foreground outline-none py-3 font-display text-lg"
                  placeholder="Brand name"
                />
              </div>
              <div>
                <label className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Monthly budget
                </label>
                <select
                  name="budget"
                  className="mt-2 w-full bg-transparent border-b border-foreground/30 focus:border-foreground outline-none py-3 font-display text-lg"
                  defaultValue=""
                >
                  <option value="" disabled>Select a range</option>
                  <option>Under ₹50k</option>
                  <option>₹50k – ₹2L</option>
                  <option>₹2L – ₹5L</option>
                  <option>₹5L+</option>
                </select>
              </div>
            </div>
            <div>
              <label className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                What do you want to scale?
              </label>
              <textarea
                required
                name="message"
                rows={4}
                className="mt-2 w-full bg-transparent border-b border-foreground/30 focus:border-foreground outline-none py-3 font-display text-lg resize-none"
                placeholder="Tell us about your offer, current numbers and goals."
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-4 font-medium hover:bg-foreground/90 transition disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Send message"}
              <Send className="h-4 w-4" />
            </button>
          </form>

          {/* Side */}
          <aside className="lg:col-span-5 space-y-4">


            <a
              href="https://www.instagram.com/paradox.agency"
              target="_blank"
              rel="noreferrer"
              className="block rounded-2xl border border-border bg-card p-7 hover:border-foreground transition"
            >
              <div className="flex items-center justify-between">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Instagram
                </p>
                <Instagram className="h-5 w-5" />
              </div>
              <p className="display-md mt-3">@paradox.agency</p>
              <p className="mt-2 text-muted-foreground text-sm">DM us "GROWTH" — we'll reply.</p>
            </a>

            <a
              href="mailto:paradoxagencyoffl@gmail.com"
              className="block rounded-2xl border border-border bg-card p-7 hover:border-foreground transition"
            >
              <div className="flex items-center justify-between">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Email
                </p>
                <Mail className="h-5 w-5" />
              </div>
              <p className="display-md mt-3">paradoxagencyoffl@gmail.com</p>
              <p className="mt-2 text-muted-foreground text-sm">Replies in &lt; 24h.</p>
            </a>


          </aside>
        </div>
      </section>
    </>
  );
};

export default Contact;
