import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search, Zap, TrendingUp, Globe, BarChart3, Sparkles, Check, Plus, Minus, Star, Quote } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elizabetho — SEO Specialist Helping Brands Rank & Convert" },
      { name: "description", content: "Premium SEO services by Elizabetho. Technical SEO, local SEO, AI search optimization, audits, and digital growth strategies that turn search traffic into paying clients." },
      { name: "keywords", content: "SEO specialist, SEO consultant, technical SEO, local SEO, AI SEO 2026, SEO audit, Nigeria SEO expert" },
      { property: "og:title", content: "Elizabetho — Premium SEO & Digital Growth" },
      { property: "og:description", content: "Rank higher. Convert better. Grow faster." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  { icon: Search, title: "SEO Optimization", desc: "Full-stack SEO strategy built around your business goals and ICP." },
  { icon: Zap, title: "Technical SEO", desc: "Crawlability, Core Web Vitals, schema, and infrastructure done right." },
  { icon: Globe, title: "Local SEO", desc: "Dominate the map pack and own your city's search results." },
  { icon: Sparkles, title: "AI SEO for 2026", desc: "Optimize for Google AI Overviews, ChatGPT, Perplexity and AI search." },
  { icon: BarChart3, title: "SEO Audits", desc: "Forensic audits that uncover the exact reasons you're not ranking." },
  { icon: TrendingUp, title: "Content Strategy", desc: "Topical authority frameworks that earn rankings and conversions." },
];

const why = [
  "Proven SEO frameworks used by 7-figure brands",
  "Transparent reporting — no fluff, no vanity metrics",
  "Hands-on technical execution, not just recommendations",
  "AI-first strategies built for 2026 search behavior",
];

const testimonials = [
  { name: "Daniel O.", role: "Founder, YHPinTech", quote: "Elizabetho rebuilt our SEO from the ground up. Within months we were ranking on page one for the keywords that matter." },
  { name: "Victoria A.", role: "Creative Director", quote: "She is meticulous, strategic and genuinely cares about results. The traffic and inquiries speak for themselves." },
  { name: "Michael K.", role: "E-commerce Owner", quote: "Best SEO investment we've ever made. Our organic revenue tripled in under a year." },
];

const process = [
  { n: "01", t: "Discovery", d: "We unpack your goals, audience, competitors and current performance." },
  { n: "02", t: "Audit & Strategy", d: "A deep technical and content audit shapes a clear, prioritized roadmap." },
  { n: "03", t: "Execution", d: "On-page, technical, off-page and content work — done with precision." },
  { n: "04", t: "Growth & Reporting", d: "Transparent reporting and continuous optimization compound results." },
];

const faqs = [
  { q: "How long until I see SEO results?", a: "Most clients see meaningful movement within 60–90 days, with compounding growth after 6 months. SEO is a long-term asset — every month of work builds equity." },
  { q: "Do you work with small businesses?", a: "Yes. I work with founders, local businesses, and growing brands. Every engagement starts with whether SEO is the right lever for your stage." },
  { q: "What makes your SEO different in 2026?", a: "I optimize for AI Overviews, generative search, and traditional ranking signals together. The future of search is hybrid — strategy has to match." },
  { q: "How do you report progress?", a: "You get a clean monthly report with rankings, traffic, conversions, and the work shipped. No fluff, no vanity metrics." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-dark">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gold/30 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[140px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-32 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-xs uppercase tracking-widest text-gold">
              <Sparkles size={12} /> SEO Specialist · 2026 Ready
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display leading-[1.05] text-balance">
              Rank higher.
              <br />
              Convert better.
              <br />
              <span className="shimmer-text">Grow faster.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              I'm Elizabetho — an SEO specialist and digital growth consultant.
              I help ambitious brands turn search into their most reliable
              source of qualified clients.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-gold text-primary-foreground font-medium shadow-glow hover:scale-105 transition">
                Hire Me <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
              </Link>
              <Link to="/portfolio" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border hover:border-gold hover:text-gold transition">
                View Projects
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-muted-foreground hover:text-gold transition">
                Get Free Consultation →
              </Link>
            </div>
          </div>

          <Reveal className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant border border-border">
              <img
                src={heroImg}
                alt="Elizabetho — SEO consultant portrait"
                width={1280}
                height={1280}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl px-6 py-4 shadow-elegant backdrop-blur">
              <div className="text-3xl font-display text-gold"><Counter to={250} suffix="%" /></div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">avg. organic growth</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-surface/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { n: 120, s: "+", l: "Projects shipped" },
            { n: 95, s: "%", l: "Client retention" },
            { n: 40, s: "M+", l: "Impressions ranked" },
            { n: 5, s: "★", l: "Average rating" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="text-4xl md:text-5xl font-display text-gold">
                <Counter to={s.n} suffix={s.s} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="max-w-2xl mb-16">
            <span className="text-xs uppercase tracking-widest text-gold">What I do</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-display">SEO services built for serious growth.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="group h-full p-8 rounded-2xl border border-border bg-card hover:border-gold transition-all hover:-translate-y-1 hover:shadow-elegant">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center mb-6 group-hover:bg-gradient-gold group-hover:text-primary-foreground transition">
                    <s.icon size={22} />
                  </div>
                  <h3 className="text-xl mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-gold hover:gap-3 transition-all">
              Explore all services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY ME */}
      <section className="py-28 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-gold">Why Elizabetho</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-display mb-8">A partner, not just another freelancer.</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I don't sell rankings — I build search assets that compound.
              Every engagement is hands-on, strategic, and built around the
              numbers that actually move your business forward.
            </p>
            <ul className="space-y-4">
              {why.map((w) => (
                <li key={w} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-primary-foreground" />
                  </span>
                  <span className="text-foreground/90">{w}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative p-10 rounded-3xl bg-card border border-gold/20 shadow-elegant">
              <Quote className="text-gold/30" size={48} />
              <p className="mt-4 text-xl font-display leading-relaxed">
                "Working with Elizabetho changed how we think about SEO. The
                rankings followed, but the strategy is what stuck."
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-gold" />
                <div>
                  <div className="font-medium">Daniel O.</div>
                  <div className="text-xs text-muted-foreground">Founder, YHPinTech</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-gold">Kind words</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-display">Clients who trusted the process.</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-gold transition">
                  <div className="flex gap-1 text-gold mb-4">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-foreground/90 leading-relaxed mb-6">"{t.quote}"</p>
                  <div>
                    <div className="font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28 bg-surface/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="max-w-2xl mb-16">
            <span className="text-xs uppercase tracking-widest text-gold">The process</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-display">A clear, proven path to organic growth.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 100}>
                <div className="p-8 rounded-2xl border border-border bg-card h-full">
                  <div className="font-display text-5xl text-gold mb-4">{p.n}</div>
                  <h3 className="text-xl mb-3">{p.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <Reveal className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-gold">Questions</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-display">Answers, before you ask.</h2>
          </Reveal>
          <div className="space-y-3">
            {faqs.map((f, i) => <FaqItem key={i} {...f} />)}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-dark border border-gold/30 p-12 md:p-16 text-center shadow-elegant">
              <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gold/20 blur-[120px]" />
              <div className="relative">
                <h2 className="text-4xl md:text-5xl font-display mb-6 text-balance">
                  Ready to own your search results?
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-10">
                  Book a free 30-minute consultation. I'll review your site,
                  show you the biggest opportunities, and tell you honestly if
                  SEO is right for you.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-medium shadow-glow hover:scale-105 transition">
                  Book Free Consultation <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-2xl bg-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-surface/40 transition"
      >
        <span className="font-medium pr-6">{q}</span>
        {open ? <Minus size={18} className="text-gold flex-shrink-0" /> : <Plus size={18} className="text-gold flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-6 pb-6 text-muted-foreground leading-relaxed animate-fade-in">{a}</div>
      )}
    </div>
  );
}
