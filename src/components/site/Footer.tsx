import { Link } from "@tanstack/react-router";
import { Mail, Phone, Twitter, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const f = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <footer className="relative border-t border-border bg-surface/40 mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2 space-y-5">
          <div className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-full bg-gradient-gold flex items-center justify-center font-display text-primary-foreground font-bold">
              E
            </span>
            <span className="font-display text-xl">Elizabetho<span className="text-gold">.</span></span>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            SEO specialist and digital growth consultant helping ambitious
            brands rank higher, convert better, and dominate search in 2026
            and beyond.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a href="https://x.com/bayewuelizabeth?s=21" target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-gold hover:text-gold transition">
              <Twitter size={16} />
            </a>
            <a href="mailto:hello@elizabetho.com.ng"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-gold hover:text-gold transition">
              <Mail size={16} />
            </a>
            <a href="tel:+2347038905749"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-gold hover:text-gold transition">
              <Phone size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest text-gold mb-5">Navigate</h4>
          <ul className="space-y-3 text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest text-gold mb-5">Contact</h4>
          <ul className="space-y-3 text-muted-foreground text-sm">
            <li>hello@elizabetho.com.ng</li>
            <li>+234 703 890 5749</li>
            <li>Available worldwide · Remote</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Elizabetho. All rights reserved.</p>
          <p>Crafted with intent. Optimized for search.</p>
        </div>
      </div>

      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-gold text-primary-foreground shadow-glow flex items-center justify-center hover:scale-110 transition"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </footer>
  );
}
