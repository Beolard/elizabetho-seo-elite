import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search, Wrench, MapPin, FileText, Gauge, KeyRound, ClipboardCheck, PenLine, Settings, BarChart3, Sparkles } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "SEO Services — Technical, Local, AI SEO & More | Elizabetho" },
      { name: "description", content: "Premium SEO services: technical SEO, on-page SEO, local SEO, audits, content strategy, keyword research, speed optimization, and AI SEO for 2026." },
      { property: "og:title", content: "SEO Services by Elizabetho" },
      { property: "og:description", content: "End-to-end SEO services for ambitious brands." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Search, title: "SEO Optimization", desc: "Comprehensive on-page, off-page and content SEO designed around your business goals.", benefits: ["Higher rankings", "Sustainable traffic", "Better conversions"] },
  { icon: Wrench, title: "Technical SEO", desc: "Crawl, index, schema, Core Web Vitals — the engineering layer that decides whether you can rank at all.", benefits: ["Faster indexing", "Cleaner architecture", "Fixes ranking blockers"] },
  { icon: MapPin, title: "Local SEO", desc: "Own the map pack, dominate 'near me' queries and turn local searchers into walk-ins and calls.", benefits: ["Map pack visibility", "More local leads", "Stronger reviews"] },
  { icon: FileText, title: "On-Page SEO", desc: "Page-by-page optimization: titles, meta, headings, internal linking, schema and content depth.", benefits: ["Better CTR", "Improved relevance", "Topic authority"] },
  { icon: Gauge, title: "Website Speed Optimization", desc: "Core Web Vitals tuning, image and code optimization, and infrastructure improvements.", benefits: ["Faster load times", "Improved UX", "Better rankings"] },
  { icon: KeyRound, title: "Keyword Research", desc: "Intent-mapped keyword strategy that prioritizes the terms most likely to drive revenue.", benefits: ["Clear roadmap", "Higher ROI", "Less wasted effort"] },
  { icon: ClipboardCheck, title: "SEO Audit", desc: "A forensic audit of your site, content, and competitors — with a clear, prioritized action plan.", benefits: ["Clarity on issues", "Quick wins", "Long-term roadmap"] },
  { icon: PenLine, title: "Content Strategy", desc: "Topical authority frameworks and editorial plans built around real search behavior.", benefits: ["Editorial direction", "Authority building", "Traffic compounding"] },
  { icon: Settings, title: "Website Maintenance", desc: "Ongoing SEO and technical maintenance to keep your site healthy and ranking.", benefits: ["No regressions", "Always optimized", "Peace of mind"] },
  { icon: BarChart3, title: "Google Search Console Setup", desc: "Proper configuration, sitemap submission, monitoring, and ongoing performance analysis.", benefits: ["Real visibility", "Performance insight", "Faster issue detection"] },
  { icon: Sparkles, title: "AI SEO Optimization for 2026", desc: "Optimize for Google AI Overviews, ChatGPT, Perplexity and the next generation of generative search.", benefits: ["AI search visibility", "Future-proof strategy", "Competitive edge"] },
];

function ServicesPage() {
  return (
    <>
      <section className="py-24 bg-gradient-dark">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-gold">Services</span>
            <h1 className="mt-4 text-5xl md:text-6xl font-display leading-tight text-balance">
              Full-stack SEO services for brands that want to win.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategic, technical, and content SEO under one roof — designed to
              compound into long-term organic growth and qualified leads.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 50}>
              <article className="group h-full flex flex-col p-8 rounded-2xl bg-card border border-border hover:border-gold transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center mb-6 group-hover:bg-gradient-gold group-hover:text-primary-foreground transition">
                  <s.icon size={22} />
                </div>
                <h2 className="text-xl mb-3">{s.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2 mb-6 text-sm">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" /> {b}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-auto inline-flex items-center gap-2 text-sm text-gold hover:gap-3 transition-all">
                  Request this service <ArrowRight size={14} />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="rounded-3xl bg-gradient-dark border border-gold/30 p-12 md:p-16 text-center shadow-elegant">
              <h2 className="text-3xl md:text-4xl font-display mb-4">Not sure which service fits?</h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Book a free consultation and we'll map out the exact next steps for your business.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-gold text-primary-foreground font-medium shadow-glow hover:scale-105 transition">
                Book Free Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
