"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Fades + lifts its children in once they scroll into view. */
export function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", inView && "is-in", className)}
      style={{ "--rd": `${delay}ms`, "--ry": `${y}px` } as CSSProperties}
    >
      {children}
    </div>
  );
}

/** Headline whose lines slide up from behind a mask, one after another. */
export function MaskLines({
  lines,
  className,
  lineClassName,
  trigger = "view",
  baseDelay = 0,
  step = 95,
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  trigger?: "view" | "load";
  baseDelay?: number;
  step?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (trigger === "load") {
      const t = window.setTimeout(() => setInView(true), 160);
      return () => window.clearTimeout(t);
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [trigger]);

  return (
    <span ref={ref} className={cn("block", className)}>
      {lines.map((line, i) => (
        <span key={i} className={cn("mask-line", inView && "is-in", lineClassName)}>
          <span style={{ "--rd": `${baseDelay + i * step}ms` } as CSSProperties}>{line}</span>
        </span>
      ))}
    </span>
  );
}

/** Counts from `from` to `to` (ease-out quart) when it scrolls into view. */
export function CountUp({
  from = 0,
  to,
  decimals = 0,
  suffix = "",
  duration = 1800,
  className,
}: {
  from?: number;
  to: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(from);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        io.disconnect();
        if (reduceMotion) {
          setValue(to);
          return;
        }
        const start = performance.now();
        const frame = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 4);
          setValue(from + (to - from) * eased);
          if (t < 1) requestAnimationFrame(frame);
        };
        requestAnimationFrame(frame);
      },
      { threshold: 0.65 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [from, to, duration]);

  return (
    <span ref={ref} className={cn("tabular", className)}>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}
