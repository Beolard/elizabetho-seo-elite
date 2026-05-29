import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import yhpin from "@/assets/project-yhpin.jpg";
import victoria from "@/assets/project-victoria.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — SEO Projects & Case Studies | Elizabetho" },
      { name: "description", content: "Selected SEO projects by Elizabetho — technical SEO, on-page optimization, and digital growth case studies for real brands." },
      { property: "og:title", content: "Portfolio — Elizabetho" },
      { property: "og:description", content: "Real projects. Real rankings. Real growth." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

const projects = [
  {
    title: "YHPinTech",
    url: "https://yhpintech.com/",
    img: yhpin,
    desc: "End-to-end SEO and technical optimization for an industrial technology brand — rebuilt site architecture, schema, and content hubs to drive qualified B2B inquiries.",
    tech: ["Technical SEO", "Schema Markup", "On-Page SEO", "Core Web Vitals"],
    improvements: [
      "Improved crawlability and indexation across 100% of priority pages",
      "Top-10 rankings on core commercial keywords",
      "Significant boost in qualified inbound inquiries",
    ],
  },
  {
    title: "The Victoria O.",
    url: "https://thevictoriao.com/",
    img: victoria,
    desc: "Personal brand SEO and content strategy — positioned the brand for high-intent search queries with editorial-grade content and refined on-page optimization.",
    tech: ["Brand SEO", "Content Strategy", "On-Page SEO", "Internal Linking"],
    improvements: [
      "Stronger topical authority across core service themes",
      "Improved page experience and engagement metrics",
      "Increased organic discovery and brand searches",
    ],
  },
];

function PortfolioPage() {
  return (
    <>
      <section className="py-24 bg-gradient-dark">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-gold">Portfolio</span>
            <h1 className="mt-4 text-5xl md:text-6xl font-display leading-tight text-balance">
              Real projects. Real rankings. Real growth.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of brands I've helped grow through strategic SEO and
              digital optimization.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-20">
          {projects.map((p, i) => (
            <Reveal key={p.title}>
              <article className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <a href={p.url} target="_blank" rel="noreferrer" className="block group">
                  <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-border shadow-elegant">
                    <img src={p.img} alt={`${p.title} project preview`} loading="lazy" width={1280} height={800} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  </div>
                </a>
                <div>
                  <span className="text-xs uppercase tracking-widest text-gold">Case study</span>
                  <h2 className="mt-3 text-3xl md:text-4xl font-display">{p.title}</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>

                  <div className="mt-6">
                    <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Focus areas</h3>
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="px-3 py-1.5 rounded-full text-xs bg-surface border border-border">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">SEO improvements</h3>
                    <ul className="space-y-2 text-sm">
                      {p.improvements.map((imp) => (
                        <li key={imp} className="flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                          <span className="text-foreground/85">{imp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a href={p.url} target="_blank" rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-gold text-primary-foreground font-medium shadow-glow hover:scale-105 transition">
                    Visit Website <ExternalLink size={14} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="rounded-3xl bg-gradient-dark border border-gold/30 p-12 md:p-16 text-center shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-display mb-4">Your brand could be next.</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">Let's build a search asset worth showcasing.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-gold text-primary-foreground font-medium shadow-glow hover:scale-105 transition">
              Start a Project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
