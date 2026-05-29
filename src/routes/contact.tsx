import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, Twitter, Send, Check } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Elizabetho — Book Your Free SEO Consultation" },
      { name: "description", content: "Get in touch with Elizabetho for SEO consultation, audits, and digital growth strategy. Free 30-minute discovery call available." },
      { property: "og:title", content: "Contact Elizabetho" },
      { property: "og:description", content: "Book your free SEO consultation today." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Frontend-only: hook this up to a server fn or email service later.
    setSent(true);
  };

  return (
    <>
      <section className="py-24 bg-gradient-dark">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-gold">Contact</span>
            <h1 className="mt-4 text-5xl md:text-6xl font-display leading-tight text-balance">
              Let's talk about your growth.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you need a full SEO partner, a one-time audit, or a quick
              consultation — I'd love to hear from you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-10">
          <Reveal className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-display">Reach me directly</h2>
            <p className="text-muted-foreground">Prefer email or a quick DM? Use any of these channels.</p>

            <a href="mailto:hello@elizabetho.com.ng" className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-gold transition">
              <span className="w-11 h-11 rounded-xl bg-gold/10 text-gold flex items-center justify-center"><Mail size={18} /></span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                <div className="font-medium">hello@elizabetho.com.ng</div>
              </div>
            </a>
            <a href="tel:+2347038905749" className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-gold transition">
              <span className="w-11 h-11 rounded-xl bg-gold/10 text-gold flex items-center justify-center"><Phone size={18} /></span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Phone</div>
                <div className="font-medium">+234 703 890 5749</div>
              </div>
            </a>
            <a href="https://x.com/bayewuelizabeth?s=21" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-gold transition">
              <span className="w-11 h-11 rounded-xl bg-gold/10 text-gold flex items-center justify-center"><Twitter size={18} /></span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">X (Twitter)</div>
                <div className="font-medium">@bayewuelizabeth</div>
              </div>
            </a>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-3">
            <form onSubmit={onSubmit} className="p-8 md:p-10 rounded-3xl border border-border bg-card shadow-elegant space-y-5">
              <h2 className="text-2xl font-display mb-2">Send a message</h2>
              <p className="text-sm text-muted-foreground mb-4">I respond within 24 hours on business days.</p>

              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Name"><input required className={inputCls} placeholder="Your name" /></Field>
                <Field label="Email"><input required type="email" className={inputCls} placeholder="you@brand.com" /></Field>
              </div>
              <Field label="Website (optional)"><input className={inputCls} placeholder="https://" /></Field>
              <Field label="What do you need help with?">
                <select className={inputCls} defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option>SEO Audit</option>
                  <option>Technical SEO</option>
                  <option>Local SEO</option>
                  <option>Content Strategy</option>
                  <option>AI SEO for 2026</option>
                  <option>Other</option>
                </select>
              </Field>
              <Field label="Message"><textarea required rows={5} className={inputCls} placeholder="Tell me a bit about your project, goals, and timeline…" /></Field>

              <button type="submit" disabled={sent} className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-gold text-primary-foreground font-medium shadow-glow hover:scale-[1.02] transition disabled:opacity-70">
                {sent ? (<><Check size={16} /> Message sent — talk soon!</>) : (<>Send Message <Send size={16} /></>)}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

const inputCls = "w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/70 focus:border-gold focus:outline-none transition";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</span>
      {children}
    </label>
  );
}
