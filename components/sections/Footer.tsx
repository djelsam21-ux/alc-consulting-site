import { ArrowUpRight } from "lucide-react";
import { Logo } from "../Logo";
import { ArcGlyph } from "../Ornaments";

const LINKS = [
  { label: "Results", href: "#results" },
  { label: "Expertise", href: "#expertise" },
  { label: "Method", href: "#method" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-gold-500/20 bg-ink-950 text-paper">
      <div className="mx-auto max-w-[1600px] px-5 pb-12 pt-20 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo tone="cream" />
            <p className="mt-6 max-w-xs text-[14px] leading-relaxed text-paper/50">
              Strategy & transformation for moments of consequence. Senior-led, Brussels-based, working across
              the European Union.
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow text-[10px] text-paper/35">Navigate</p>
            <nav className="mt-5 flex flex-col items-start gap-3" aria-label="Footer">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="u-sweep text-[14.5px] text-paper/70 transition-colors hover:text-gold-300"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="md:col-span-4">
            <p className="eyebrow text-[10px] text-paper/35">Registered</p>
            <p className="mt-5 text-[13.5px] leading-[1.9] text-paper/50">
              ALC Consulting SRL — BE 0777.000.000
              <br />
              Rue aux Laines 32, 1000 Brussels
              <br />
              Client identities confidential by design.
            </p>
            <a
              href="mailto:hello@alc-consulting.eu"
              className="btn-ghost mt-7 border-paper/30 px-5 py-3 text-[12.5px] font-medium uppercase tracking-[0.14em] text-paper/80 hover:border-gold-500 hover:text-gold-300"
            >
              hello@alc-consulting.eu
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        <div className="mt-20 flex flex-wrap items-end justify-between gap-8 border-t border-paper/10 pt-10">
          <div>
            <ArcGlyph className="mb-3 w-9 text-gold-500" />
            <p className="gold-grad-text font-display text-[clamp(2rem,5vw,3.6rem)] font-light italic leading-none">
              From A to C.
            </p>
          </div>
          <p className="pb-2 text-[10.5px] uppercase tracking-[0.22em] text-paper/30">
            © 2026 ALC Consulting SRL — Discretion is a feature
          </p>
        </div>
      </div>
    </footer>
  );
}
