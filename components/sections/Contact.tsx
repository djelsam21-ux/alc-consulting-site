import { ArrowRight } from "lucide-react";
import { Eyebrow } from "../Ornaments";
import { MaskLines, Reveal } from "../Motion";
import { BriefForm } from "./BriefForm";

const CHANNELS = [
  { label: "New mandates", value: "hello@alc-consulting.eu", href: "mailto:hello@alc-consulting.eu" },
  { label: "Direct line", value: "+32 2 555 01 42", href: "tel:+3225550142" },
  { label: "Office", value: "Rue aux Laines 32 — 1000 Brussels" },
  { label: "Languages", value: "English · Français · Nederlands" },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-[74px] bg-ink-950 text-paper">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-36">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow index="05" tone="cream">
                Start the conversation
              </Eyebrow>
            </Reveal>
            <h2 className="mt-8 font-display text-[clamp(2.3rem,4.8vw,4.4rem)] font-[440] leading-[1.04] tracking-[-0.01em]">
              <MaskLines
                lines={[
                  <>Start with a</>,
                  <>working session,</>,
                  <>
                    not a <em className="gold-grad-text font-light italic">sales call.</em>
                  </>,
                ]}
              />
            </h2>
            <Reveal delay={200} className="mt-8 max-w-xl">
              <p className="text-[16px] leading-[1.85] text-paper/65">
                Forty-five minutes. Your hardest problem, our full attention. You will leave with at least one
                decision made — whether or not we ever work together.
              </p>
            </Reveal>
            <Reveal delay={300} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="mailto:hello@alc-consulting.eu?subject=Working%20session%20request"
                className="btn-primary px-8 py-4 text-[15px]"
              >
                Book a working session
                <ArrowRight size={17} strokeWidth={2.2} />
              </a>
              <p className="max-w-[260px] text-[12px] leading-relaxed text-paper/45">
                Replies within one business day — from a partner, not a pipeline.
              </p>
            </Reveal>
            <Reveal delay={380} className="mt-16 max-w-2xl">
              <div className="border-t border-paper/12">
                {CHANNELS.map((c) => (
                  <div
                    key={c.label}
                    className="grid grid-cols-[120px_1fr] items-baseline gap-5 border-b border-paper/12 py-4.5 sm:grid-cols-[150px_1fr] md:py-5"
                  >
                    <span className="eyebrow text-[9.5px] text-paper/40">{c.label}</span>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="u-sweep w-fit font-display text-[clamp(1.05rem,1.9vw,1.4rem)] font-light text-paper/90 transition-colors hover:text-gold-300"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <span className="font-display text-[clamp(1.05rem,1.9vw,1.4rem)] font-light text-paper/90">
                        {c.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:pl-8">
            <Reveal delay={250} y={36}>
              <BriefForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
