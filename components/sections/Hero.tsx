import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Eyebrow } from "../Ornaments";
import { MaskLines, Reveal } from "../Motion";
import { HeroArc } from "./HeroArc";
import arcStaircase from "@/public/images/arc-staircase.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-clip">
      <HeroArc />

      <div className="relative mx-auto grid min-h-[100svh] max-w-[1600px] grid-cols-1 items-center gap-14 px-5 pb-20 pt-32 md:px-10 lg:grid-cols-12 lg:gap-8 lg:pt-24">
        <div className="lg:col-span-7 lg:pr-8">
          <Reveal y={14}>
            <div className="flex items-center justify-between gap-6 border-b border-ink-950/10 pb-5">
              <Eyebrow>Strategy & digital transformation</Eyebrow>
              <span className="eyebrow hidden text-ink-500 sm:block">Brussels — Est. 2018</span>
            </div>
          </Reveal>

          <h1 className="mt-12 font-display text-[clamp(2.4rem,6.2vw,6rem)] font-[430] leading-[1.0] tracking-[-0.015em] text-ink-950 md:mt-16">
            <MaskLines
              trigger="load"
              step={130}
              lines={[
                <>
                  We close the <em className="gold-grad-text font-light italic">gap</em>
                </>,
                <>between decision</>,
                <>and delivery.</>,
              ]}
            />
          </h1>

          <Reveal delay={520} className="mt-9 max-w-[34rem]">
            <p className="text-[17px] leading-[1.75] text-ink-700">
              ALC is a senior-led consultancy for European companies and institutions at inflection points.
              Strategy, digital transformation, brand and leadership — run as one mandate, by the people whose
              names are on the door.
            </p>
          </Reveal>

          <Reveal delay={650} className="mt-10 flex flex-wrap items-center gap-x-9 gap-y-5">
            <a href="#contact" className="btn-primary px-7 py-4 text-[15px]">
              Book a working session
              <ArrowRight size={17} strokeWidth={2.2} />
            </a>
            <a
              href="#method"
              className="u-sweep inline-flex items-center gap-2 text-[13.5px] font-medium uppercase tracking-[0.14em] text-ink-950"
            >
              How a mandate runs
              <ArrowDown size={14} strokeWidth={2.2} />
            </a>
          </Reveal>

          <Reveal delay={800} className="mt-16 max-w-[36rem] lg:mt-20">
            <div className="border-t border-ink-950/15 pt-5">
              <p className="eyebrow text-[10px] text-gold-700">Field note — most recent mandate</p>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-700">
                A €40M industrial logistics group cut order-to-delivery from{" "}
                <span className="font-display text-[16px] italic text-gold-700">11 → 4 days</span> and lifted
                operating margin <span className="font-display text-[16px] italic text-gold-700">+6.2 pts</span>{" "}
                in fourteen months. <span className="text-ink-500">Client names withheld by policy.</span>
              </p>
            </div>
          </Reveal>
        </div>

        <div className="relative lg:col-span-5">
          <Reveal delay={350} y={40} className="relative ml-auto max-w-[430px]">
            <div
              aria-hidden="true"
              className="absolute -left-4 top-4 h-full w-full rounded-t-full border border-gold-600/35"
            />
            <div className="relative aspect-[3/4.1] overflow-hidden rounded-t-full bg-ink-950">
              <Image
                src={arcStaircase}
                alt="Black-and-white study of a curved staircase rising in an arc — the trajectory motif of the ALC mark"
                priority
                placeholder="blur"
                sizes="(min-width: 1024px) 430px, 100vw"
                className="h-full w-full scale-[1.04] object-cover grayscale contrast-[1.06] transition-transform duration-[1600ms] ease-out hover:scale-[1.09]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gold-700/25 via-transparent to-transparent mix-blend-overlay" />
            </div>
            <div className="mt-5 flex items-baseline justify-between">
              <span className="eyebrow text-[10px] text-ink-500">Arc study Nº 01</span>
              <span className="font-display text-[13px] italic text-ink-500">
                the distance travelled, made visible
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1600px] px-5 pb-8 md:px-10">
        <Reveal delay={950} y={10}>
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-t border-ink-950/10 pt-5 text-[11px] uppercase tracking-[0.2em] text-ink-500">
            <span>Brussels · Working across the EU</span>
            <span className="hidden md:inline">Senior-led · Eight mandates a year</span>
            <span>EN / FR / NL</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
