import { Eyebrow } from "../Ornaments";
import { CountUp, Reveal } from "../Motion";

const METRICS = [
  { label: "Order-to-delivery", before: "11 days", from: 11, to: 4, decimals: 0, suffix: " days" },
  { label: "Forecast accuracy", before: "61%", from: 61, to: 87, decimals: 0, suffix: "%" },
  { label: "Operating margin", before: "6.8%", from: 6.8, to: 13, decimals: 1, suffix: "%" },
  { label: "Weekly coordination meetings", before: "14", from: 14, to: 4, decimals: 0, suffix: "" },
];

const SECTORS = [
  "Industrial & logistics",
  "Financial services & insurance",
  "Public institutions & EU bodies",
  "Retail & consumer brands",
];

export function Results() {
  return (
    <section id="results" className="scroll-mt-[74px] bg-ink-950 text-paper">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-36">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <Eyebrow index="01" tone="cream">
              Results over rhetoric
            </Eyebrow>
          </Reveal>
          <Reveal delay={120} className="max-w-[300px]">
            <p className="text-[12.5px] leading-relaxed text-paper/45">
              Mandates are confidential by default. What follows is what changed — shared with the client’s
              blessing, not their name.
            </p>
          </Reveal>
        </div>

        <Reveal delay={150} className="mt-16 md:mt-20">
          <blockquote className="max-w-5xl font-display text-[clamp(1.65rem,3.5vw,3rem)] font-light leading-[1.24] text-paper/90">
            <span className="gold-grad-text font-normal">“</span>They didn’t hand us a transformation plan.
            They rewired how{" "}
            <em className="gold-grad-text font-normal not-italic md:italic">forty people make decisions</em>{" "}
            every Monday morning.<span className="gold-grad-text font-normal">”</span>
          </blockquote>
          <div className="mt-9 flex items-center gap-5">
            <span className="h-px w-12 bg-gold-500" />
            <p className="text-[13.5px] text-paper/55">
              Chief Operating Officer — European industrial logistics group, €40M revenue
            </p>
          </div>
        </Reveal>

        <div className="mt-24 grid grid-cols-1 gap-12 border-t border-paper/10 pt-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-gold-500">Case Nº 01</p>
              <h3 className="mt-5 font-display text-[clamp(1.8rem,2.8vw,2.6rem)] font-[450] leading-[1.08]">
                The month of waiting, removed.
              </h3>
              <div className="mt-7 space-y-5 text-[15px] leading-[1.8] text-paper/65">
                <p>
                  A precision-parts manufacturer was quoting eleven days to deliver what the market expected
                  in four. Sales blamed planning, planning blamed the floor — and every department defended a
                  different version of the same number.
                </p>
                <p>
                  Two weeks to map the flow end to end. In week three the board took one decision: a single
                  owner for order-to-delivery, one planning rhythm, one number. Fourteen months later the
                  waiting is gone — and so are fourteen weekly meetings.
                </p>
              </div>
              <p className="eyebrow mt-8 text-[10px] text-paper/40">
                Industrial & logistics · 220 people · 14-month mandate
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pl-10">
            <Reveal delay={150}>
              <div className="hidden grid-cols-[1.3fr_0.7fr_0.9fr] gap-x-6 pb-3 sm:grid">
                <span />
                <span className="eyebrow justify-self-center text-[10px] text-paper/40">Before</span>
                <span className="eyebrow justify-self-end text-[10px] text-gold-400">After — month 14</span>
              </div>
              {METRICS.map((m) => (
                <div
                  key={m.label}
                  className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 border-t border-paper/10 py-5 transition-colors duration-500 hover:bg-paper/[0.03] sm:grid-cols-[1.3fr_0.7fr_0.9fr] md:py-6"
                >
                  <span className="text-[14.5px] text-paper/80">{m.label}</span>
                  <span className="tabular justify-self-end text-[13.5px] text-paper/35 sm:justify-self-center">
                    {m.before}
                  </span>
                  <span className="col-span-2 mt-1.5 sm:col-span-1 sm:mt-0 sm:justify-self-end">
                    <CountUp
                      from={m.from}
                      to={m.to}
                      decimals={m.decimals}
                      suffix={m.suffix}
                      className="gold-grad-text font-display text-[clamp(1.55rem,2.6vw,2.15rem)] font-[500] leading-none"
                    />
                  </span>
                </div>
              ))}
              <p className="mt-5 text-[11.5px] leading-relaxed text-paper/35">
                Figures verified with client finance at month fourteen. Reference calls available under NDA
                during your working session.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-24 border-t border-paper/10 pt-10">
          <Eyebrow tone="cream">Where the work happens</Eyebrow>
          <div className="mt-7 flex flex-wrap items-baseline gap-x-7 gap-y-3">
            {SECTORS.map((sector, i) => (
              <span key={sector} className="flex items-baseline gap-7">
                <span className="font-display text-[clamp(1.1rem,1.8vw,1.45rem)] font-light text-paper/75 transition-colors duration-500 hover:text-gold-300">
                  {sector}
                </span>
                {i < SECTORS.length - 1 && (
                  <span className="hidden h-1.5 w-1.5 rounded-full bg-gold-500/60 md:inline-block" />
                )}
              </span>
            ))}
          </div>
          <p className="mt-12 font-display text-[clamp(1.2rem,2vw,1.6rem)] font-light italic text-paper/55 lg:text-right">
            We don’t publish client names. <span className="text-gold-300">We publish what changed.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
