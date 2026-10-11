import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ArcGlyph, Eyebrow } from "../Ornaments";
import { MaskLines, Reveal } from "../Motion";
import { cn } from "@/lib/cn";

const DISCIPLINES = [
  {
    n: "01",
    title: "Strategy & Consulting",
    point: "Decide what matters. Defend it.",
    desc: "Growth and turnaround strategy, market entry, operating-model redesign and M&A support — for boards and owners who need one clear answer, not six scenarios.",
    leave: ["Decision memo", "Sequenced roadmap", "Operating cadence"],
    mandate: "6–16 weeks",
    indent: "lg:pl-0",
  },
  {
    n: "02",
    title: "Digital Transformation",
    point: "Technology in service of the P&L.",
    desc: "Process redesign before platform decisions: data & AI readiness, tooling consolidation, adoption management. We measure transformation in cycle time and cost-to-serve — never in licences bought.",
    leave: ["Process blueprint", "Data & AI roadmap", "Adoption plan"],
    mandate: "8–24 weeks",
    indent: "lg:pl-[5%]",
  },
  {
    n: "03",
    title: "Brand & Positioning",
    point: "Be chosen for a reason.",
    desc: "Positioning, narrative and identity for companies whose substance has outgrown their story — so the market stops comparing you on price and starts shortlisting you on purpose.",
    leave: ["Positioning platform", "Messaging system", "Identity direction"],
    mandate: "6–12 weeks",
    indent: "lg:pl-[10%]",
  },
  {
    n: "04",
    title: "Coaching & Training",
    point: "Strategy travels as far as the people carrying it.",
    desc: "Executive coaching, leadership offsites and capability programmes that transfer our method to your team — built to survive our departure, not to require our return.",
    leave: ["Leadership alignment", "Team rituals", "Capability that stays"],
    mandate: "Ongoing / cohort",
    indent: "lg:pl-[15%]",
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="scroll-mt-[74px] bg-paper">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-36">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow index="02">Expertise</Eyebrow>
            </Reveal>
            <h2 className="mt-7 font-display text-[clamp(2.3rem,5.2vw,4.7rem)] font-[440] leading-[1.02] tracking-[-0.01em] text-ink-950">
              <MaskLines
                lines={[
                  <>Four disciplines.</>,
                  <span className="lg:pl-[13%]">
                    <em className="gold-grad-text font-light italic">One mandate.</em>
                  </span>,
                ]}
              />
            </h2>
          </div>
          <Reveal delay={200} className="lg:col-span-5 lg:pl-12">
            <p className="max-w-md text-[15.5px] leading-[1.8] text-ink-700">
              Each discipline is strong alone. Run together, they close the loop between what you decide in
              the boardroom and what actually happens on Monday morning.
            </p>
            <p className="mt-4 text-[13px] uppercase tracking-[0.16em] text-ink-500">
              Engagements start with a diagnostic — never with a proposal.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 border-t border-ink-950/12 md:mt-24">
          {DISCIPLINES.map((d, i) => (
            <Reveal key={d.n} delay={i * 60}>
              <article
                className={cn(
                  "group relative grid grid-cols-1 gap-y-5 border-b border-ink-950/12 py-10 md:grid-cols-12 md:gap-x-8 md:py-12",
                  d.indent,
                )}
              >
                <span className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-gradient-to-b from-gold-600 via-gold-500 to-gold-300 transition-transform duration-500 ease-out group-hover:scale-y-100" />
                <div className="flex items-start gap-4 md:col-span-1">
                  <span className="tick-dot mt-2.5 hidden lg:block" />
                  <span className="font-display text-xl font-medium text-gold-600 md:mt-1">{d.n}</span>
                </div>
                <div className="md:col-span-5">
                  <h3 className="font-display text-[clamp(1.7rem,3vw,2.5rem)] font-[470] leading-[1.05] text-ink-950 transition-transform duration-500 ease-out group-hover:translate-x-2">
                    {d.title}
                  </h3>
                  <p className="mt-3 font-display text-[15.5px] italic text-gold-700">{d.point}</p>
                </div>
                <div className="md:col-span-4">
                  <p className="text-[14.5px] leading-[1.75] text-ink-700">{d.desc}</p>
                  <p className="eyebrow mt-5 text-[9.5px] text-ink-500">You leave with</p>
                  <p className="mt-2 text-[13.5px] font-medium text-ink-950">{d.leave.join("  ·  ")}</p>
                </div>
                <div className="flex items-end justify-between md:col-span-2 md:flex-col md:items-end">
                  <div className="md:text-right">
                    <p className="eyebrow text-[9.5px] text-ink-500">Mandate</p>
                    <p className="tabular mt-1.5 text-[13.5px] font-medium text-ink-950">{d.mandate}</p>
                  </div>
                  <a
                    href="#contact"
                    aria-label={`Discuss ${d.title}`}
                    className="mt-0 flex h-11 w-11 items-center justify-center rounded-full border border-ink-950/20 text-ink-950 transition-all duration-400 group-hover:border-ink-950 group-hover:bg-ink-950 group-hover:text-gold-300 md:mt-4"
                  >
                    <ArrowUpRight size={16} strokeWidth={1.8} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20" y={34}>
          <div className="relative overflow-hidden border border-gold-600/45 bg-parch px-7 py-10 md:px-14 md:py-14">
            <ArcGlyph className="pointer-events-none absolute -bottom-10 -right-8 w-[300px] rotate-[-8deg] text-gold-500/20 md:w-[420px]" />
            <div className="relative grid grid-cols-1 items-center gap-9 lg:grid-cols-[1.5fr_1fr]">
              <div>
                <p className="eyebrow text-gold-700">The way in</p>
                <h3 className="mt-4 max-w-2xl font-display text-[clamp(1.6rem,3vw,2.4rem)] font-[450] leading-[1.18] text-ink-950">
                  Every engagement starts the same way: a two-week diagnostic — fixed fee, defined questions,{" "}
                  <em className="italic text-gold-700">one decision at the end.</em>
                </h3>
                <p className="mt-5 max-w-xl text-[14px] leading-relaxed text-ink-700">
                  From €12,000, credited in full against a mandate. And if the honest answer is “don’t hire
                  us”, you keep the analysis.
                </p>
              </div>
              <div className="lg:justify-self-end">
                <a
                  href="#contact"
                  className="btn-ghost border-ink-950/80 px-7 py-4 text-[14px] font-semibold text-ink-950 hover:bg-ink-950 hover:text-gold-300"
                >
                  Book the diagnostic session
                  <ArrowRight size={16} strokeWidth={2.2} />
                </a>
                <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-ink-500 lg:text-right">
                  Two starts per month · Next opening soon
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
