import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Small uppercase section label, optionally numbered. */
export function Eyebrow({
  index,
  children,
  tone = "ink",
  className,
}: {
  index?: string;
  children: ReactNode;
  tone?: "ink" | "cream";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "eyebrow flex items-center gap-3",
        tone === "ink" ? "text-ink-500" : "text-paper/55",
        className,
      )}
    >
      {index && <span className="tabular font-semibold text-gold-500">{index}</span>}
      {index && <span className={cn("h-px w-9", tone === "ink" ? "bg-ink-950/25" : "bg-paper/25")} />}
      <span>{children}</span>
    </div>
  );
}

/** The arc-with-a-point glyph used as a decorative motif. */
export function ArcGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 24" fill="none" className={className} aria-hidden="true">
      <path d="M2 21 C 18 4, 46 4, 62 19" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <circle cx="32" cy="8.2" r="2.4" fill="currentColor" />
    </svg>
  );
}
