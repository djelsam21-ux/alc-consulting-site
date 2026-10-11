import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "../Ornaments";
import { MaskLines, Reveal } from "../Motion";
import { ArcTimeline } from "./ArcTimeline";
import { PHASES } from "@/lib/content";
import compass from "@/public/images/compass.jpg";

const PRINCIPLES = [
  {
    n: "01",
    title: "Senior is not a level. It’s the whole team.",
    body: "No leverage model, no hand-off to juniors. Two partners maximum, both in the room, both accountable — the people who diagnose are the people who deliver.",
  },
  {
    n: "02",
    title: "Decisions over decks.",
    body: "Every mandate ends in a small number of decisions — documented, owned, and sequenced into a 90-day cadence. Paper is the by-product. The change is the product.",
  },
  {
    n: "03",
    title: "Fixed scope. A real ending.",
    body: "Bounded mandates with a defined exit and deliberate capability transfer. We measure success by what still works twelve months after we’ve gone.",
  },
];

const CONTRAST: [string, string][] = [
  ["120-page diagnostic", "two-page decision memo"],
  ["A partner who appears twice", "partners who run the room"],
  ["Renewal as the business model", "transfer as the deliverable"],
];

export function Method() {
  return (
    <section id="method" className="scroll-mt-[74px] bg-moss-900 text-paper">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-36">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow index="03" tone="cream">
                The ALC standard
              </Eyebrow>
            </Reveal>
            <h2 className="mt-7 font-display text-[clamp(2.3rem,5.2vw,4.7rem)] font-[440] leading-[1.03] tracking-[-0.01em]">
              <MaskLines
                lines={[
                  <>
                    Built to be <em className="gold-grad-text font-light italic">left.</em>
                  </>,
                ]}
              />
            </h2>
          </div>
          <Reveal delay={200} className="lg:col-span-5 lg:pl-12">
            <p className="max-w-md text-[15.5px] leading-[1.8] text-paper/65">
              Most firms optimise for their utilisation. We optimise for your decisions — and design ourselves
              out of the job from day one. That difference shows in how we staff, what we deliver, and when we
              leave.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="border-t border-paper/12">
              {PRINCIPLES.map((p, i) => (
                <Reveal key={p.n} delay={i * 90}>
                  <div className="grid grid-cols-[52px_1fr] gap-6 border-b border-paper/12 py-9 md:grid-cols-[72px_1fr] md:py-10">
                    <span className="font-display text-lg font-medium italic text-gold-400 md:mt-1.5">{p.n}</span>
                    <div>
                      <h3 className="font-display text-[clamp(1.45rem,2.4vw,1.9rem)] font-[460] leading-[1.15]">
                        {p.title}
                      </h3>
                      <p className="mt-3.5 max-w-lg text-[14.5px] leading-[1.8] text-paper/60">{p.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={150} y={36}>
              <div className="overflow-hidden rounded-[2px]">
                <Image
                  src={compass}
                  alt="Black-and-white study of a brass drawing compass tracing an arc — precision as a working method"
                  placeholder="blur"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="aspect-[4/3.1] w-full object-cover grayscale contrast-[1.05] transition-transform duration-[1600ms] ease-out hover:scale-[1.05]"
                />
              </div>
              <p className="eyebrow mt-4 text-[10px] text-paper/40">Instruments — drawn to scale, built to measure</p>
            </Reveal>
            <Reveal delay={250} y={30}>
              <div className="mt-12 rounded-[2px] border border-paper/15 bg-moss-950/70 p-7 md:p-9">
                <p className="eyebrow text-[10px] text-gold-400">The usual model — ours</p>
                <div className="mt-6 space-y-5">
                  {CONTRAST.map(([usual, ours]) => (
                    <div
                      key={usual}
                      className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-[13px] leading-snug"
                    >
                      <span className="text-paper/40">{usual}</span>
                      <ArrowRight size={14} className="text-gold-500" strokeWidth={2} />
                      <span className="font-medium text-paper/90">{ours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-28 border-t border-paper/12 pt-16">
          <Reveal>
            <Eyebrow tone="cream">How a mandate runs</Eyebrow>
          </Reveal>
          <Reveal delay={120} className="mt-8 hidden md:block" y={20}>
            <ArcTimeline />
          </Reveal>
          <div className="mt-10 md:hidden">
            {PHASES.map((phase, i) => (
              <Reveal key={phase.t} delay={i * 80}>
                <div className="flex items-baseline justify-between border-b border-paper/12 py-5">
                  <span className="flex items-baseline gap-4">
                    <span className="font-display text-[15px] italic text-gold-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] font-semibold uppercase tracking-[0.14em]">{phase.t}</span>
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.14em] text-paper/45">{phase.s}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="mx-auto mt-14 max-w-2xl text-center font-display text-[clamp(1.2rem,2.1vw,1.65rem)] font-light italic leading-[1.5] text-paper/60">
              Two points define every mandate: where you are — <span className="text-gold-300">A</span> — and
              where you’ve decided to be — <span className="text-gold-300">C</span>.{" "}
              <span className="not-italic text-paper/85">Our work is the arc between them.</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
