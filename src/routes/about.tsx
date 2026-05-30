import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Target, Heart } from "lucide-react";
import aboutImg from "@/assets/about.png";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Elizabetho — SEO Specialist & Digital Growth Consultant" },
      { name: "description", content: "Meet Elizabetho — an SEO specialist helping brands grow through technical SEO, local SEO, content strategy, and AI-driven search optimization." },
      { property: "og:title", content: "About Elizabetho" },
      { property: "og:description", content: "SEO specialist and consultant on a mission to make ambitious brands unmissable in search." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="py-24 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-gold">About</span>
            <h1 className="mt-4 text-5xl md:text-6xl font-display leading-tight text-balance">
              Hi, I'm Elizabetho — SEO is my craft.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              I'm an SEO specialist and digital growth consultant on a mission
              to make ambitious brands unmissable in search. I help businesses
              grow online through high-performance SEO, technical optimization,
              and intentional digital strategy.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From early-stage startups to established brands, I focus on the
              same outcome: more qualified visibility, more conversions, and
              measurable revenue from organic search.
            </p>
            <div className="mt-10">
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-gold text-primary-foreground font-medium shadow-glow hover:scale-105 transition">
                Work with me <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>

          {/* Updated image styling */}
          <Reveal delay={150}>
            <div className="relative overflow-hidden border border-border shadow-elegant rounded-2xl">
              <img
                src={aboutImg}
                alt="Elizabetho portrait"
                loading="lazy"
                className="w-full h-full object-cover opacity-90 mix-blend-multiply"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 space-y-10 text-lg leading-relaxed">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-display mb-4">My approach</h2>
            <p className="text-muted-foreground">
              SEO has evolved. It's no longer about chasing algorithms — it's
              about building a digital presence that earns trust from both
              search engines and the humans they serve. My approach blends
              technical precision, editorial-grade content strategy, and the
              new realities of AI-driven search to create growth that lasts.
            </p>
          </Reveal>
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-display mb-4">What I focus on</h2>
            <p className="text-muted-foreground">
              I specialize in SEO, website optimization, local SEO, technical
              SEO and digital growth. Every project starts with understanding
              your business — your customers, your funnel, your goals — and
              ends with measurable improvement in visibility and conversions.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-surface/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-6">
          {[
            { icon: Award, t: "Excellence", d: "I treat every project like my own brand depends on it." },
            { icon: Target, t: "Outcomes", d: "Strategy is judged by rankings, traffic, and revenue — not opinions." },
            { icon: Heart, t: "Partnership", d: "I work as an extension of your team, not a vendor on the sidelines." },
          ].map((v, i) => (
            <Reveal key={v.t} delay={i * 100}>
              <div className="p-8 rounded-2xl bg-card border border-border h-full">
                <v.icon className="text-gold mb-5" />
                <h3 className="text-xl mb-2">{v.t}</h3>
                <p className="text-sm text-muted-foreground">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-display mb-6">Let's build something worth ranking for.</h2>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-medium shadow-glow hover:scale-105 transition">
              Get in touch <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
