import { useId } from "react";
import { cn } from "@/lib/cn";

export function Mark({ className }: { className?: string }) {
  const id = `g${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  return (
    <svg viewBox="0 0 46 40" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#8a6a2c" />
          <stop offset="0.48" stopColor="#c9a44e" />
          <stop offset="1" stopColor="#ead9ac" />
        </linearGradient>
      </defs>
      <path
        d="M7.5 33.5 L17.5 7.5 L27.5 33.5"
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38.6 9 C 32.2 4.4, 23.8 6.8, 21.7 15 C 19.6 23.2, 25.3 32.3, 33.8 33 C 36.3 33.2, 38.7 32.5, 40.6 31.3"
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M3.5 36 C 13.5 40.5, 30.5 38.8, 42.8 27"
        fill="none"
        stroke="#c9a44e"
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.9"
      />
      <circle cx="23.2" cy="21.4" r="2.2" fill="#ead9ac" />
    </svg>
  );
}

export function Logo({ tone = "ink", className }: { tone?: "ink" | "cream"; className?: string }) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <Mark className="h-9 w-auto shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-sans text-[15px] font-bold tracking-[0.32em]",
            tone === "ink" ? "text-ink-950" : "text-paper",
          )}
        >
          ALC
        </span>
        <span className="mt-1 font-sans text-[7.5px] font-medium tracking-[0.44em] text-gold-600">
          CONSULTING
        </span>
      </span>
    </span>
  );
}
