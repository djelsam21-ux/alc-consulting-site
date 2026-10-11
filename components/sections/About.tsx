import Image from "next/image";
import { Eyebrow } from "../Ornaments";
import { MaskLines, Reveal } from "../Motion";
import founder from "@/public/images/founder.jpg";

export function About() {
  return (
    <section id="about" className="scroll-mt-[74px] bg-paper">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-36">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Reveal y={40}>
              <div className="relative max-w-[380px]">
                <div
                  aria-hidden="true"
                  className="absolute -left-3 -top-3 h-full w-full rounded-[2px] border border-gold-600/40"
                />
                <Image
                  src={founder}
                  alt="Black-and-white portrait of Alexandre Laurent, founder and managing partner of ALC Consulting"
                  placeholder="blur"
                  sizes="380px"
                  className="relative aspect-[3/3.8] w-full rounded-[2px] object-cover object-[50%_18%] grayscale contrast-[1.05]"
                />
              </div>
              <div className="mt-5 flex max-w-[380px] items-baseline justify-between">
                <span className="eyebrow text-[10px] text-ink-500">Alexandre Laurent</span>
                <span className="font-display text-[13px] italic text-ink-500">founder & managing partner</span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal>
              <Eyebrow index="04">A note from the founder</Eyebrow>
            </Reveal>
            <h2 className="mt-8 max-w-2xl font-display text-[clamp(1.55rem,7.5vw,3.1rem)] font-[450] leading-[1.16] text-ink-950">
              <MaskLines
                step={140}
                lines={[
                  <>Advice that ends at the</>,
                  <>recommendation isn’t advice.</>,
                  <em className="gold-grad-text font-light italic">It’s commentary.</em>,
                ]}
              />
            </h2>
            <div className="mt-10 max-w-2xl space-y-6 text-[16px] leading-[1.85] text-ink-700">
              <Reveal delay={260} y={18}>
                <p>
                  For twelve years I sat where you sit now — carrying a P&L in industry, sitting through
                  transformation decks that described our problems beautifully and never touched them.
                </p>
              </Reveal>
              <Reveal delay={320} y={18}>
                <p>
                  ALC was founded on that refusal. We stay until the decision is made, the Monday meetings
                  change, and the numbers move. Then we leave — on purpose, by design.
                </p>
              </Reveal>
              <Reveal delay={380} y={18}>
                <p>
                  We take eight mandates a year. No more. Each one gets the people whose names are on the door
                  — because at the moments that decide a company’s next decade, seniority is not a luxury. It
                  is the work.
                </p>
              </Reveal>
            </div>
            <Reveal delay={440} className="mt-12">
              <p className="font-display text-[2rem] font-light italic leading-none text-ink-950">
                Alexandre Laurent
              </p>
              <p className="eyebrow mt-4 text-[10px] leading-loose text-ink-500">
                Founder & Managing Partner<span className="mx-2 text-gold-600">/</span>Previously Strategy
                Director, pan-European industrial group<span className="mx-2 text-gold-600">/</span>Advisor, EU
                innovation programmes
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
