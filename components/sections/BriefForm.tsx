"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { ArcGlyph } from "../Ornaments";

const FIELD =
  "w-full border-b border-paper/20 bg-transparent py-2.5 text-[15px] text-paper outline-none transition-colors duration-400 placeholder:text-paper/25 focus:border-gold-500";

export function BriefForm() {
  const [sent, setSent] = useState(false);

  // TODO: wire to a real endpoint (e.g. a Route Handler or Server Action).
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="relative overflow-hidden rounded-[2px] border border-paper/15 bg-paper/[0.03] p-8 md:p-10">
      <ArcGlyph className="pointer-events-none absolute -right-14 -top-10 w-56 rotate-[160deg] text-gold-500/15" />
      {sent ? (
        <div className="relative py-6">
          <ArcGlyph className="w-16 text-gold-400" />
          <h3 className="mt-8 font-display text-3xl font-[450]">Received.</h3>
          <p className="mt-4 max-w-sm text-[14.5px] leading-relaxed text-paper/60">
            A partner will reply within one business day to schedule your working session. Talk soon.
          </p>
          <button
            onClick={() => setSent(false)}
            className="u-sweep mt-8 text-[12px] font-medium uppercase tracking-[0.18em] text-paper/50 hover:text-paper"
          >
            Send another brief
          </button>
        </div>
      ) : (
        <div className="relative">
          <p className="eyebrow text-[10px] text-gold-400">Or send the brief</p>
          <p className="mt-3 text-[13px] leading-relaxed text-paper/50">Three fields. No procurement theatre.</p>
          <form onSubmit={onSubmit} className="mt-8 space-y-7">
            <div>
              <label htmlFor="f-name" className="eyebrow block text-[9px] text-paper/40">
                Name
              </label>
              <input id="f-name" name="name" required placeholder="Jane Verhoeven" className={FIELD} autoComplete="name" />
            </div>
            <div>
              <label htmlFor="f-org" className="eyebrow block text-[9px] text-paper/40">
                Company / institution
              </label>
              <input
                id="f-org"
                name="company"
                placeholder="Where the decision sits"
                className={FIELD}
                autoComplete="organization"
              />
            </div>
            <div>
              <label htmlFor="f-brief" className="eyebrow block text-[9px] text-paper/40">
                The decision you’re facing
              </label>
              <textarea
                id="f-brief"
                name="brief"
                required
                rows={3}
                placeholder="Two or three sentences is plenty."
                className={`${FIELD} resize-none`}
              />
            </div>
            <button type="submit" className="btn-primary w-full justify-center px-6 py-4 text-[14.5px]">
              Send the brief
              <ArrowUpRight size={16} strokeWidth={2.2} />
            </button>
            <p className="text-center text-[10.5px] uppercase tracking-[0.18em] text-paper/35">
              Or simply call — we pick up
            </p>
          </form>
        </div>
      )}
    </div>
  );
}
