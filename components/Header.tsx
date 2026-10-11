"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { NAV } from "@/lib/content";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("alc:menu", { detail: open }));
    document.documentElement.style.overflow = open ? "hidden" : "";
    const close = () => setOpen(false);
    window.addEventListener("alc:closemenu", close);
    return () => {
      window.removeEventListener("alc:closemenu", close);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-ink-950/10 bg-paper/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[74px] max-w-[1600px] items-center justify-between px-5 md:px-10">
          <a href="#top" aria-label="ALC Consulting — home">
            <Logo />
          </a>
          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="u-sweep font-sans text-[12.5px] font-medium uppercase tracking-[0.18em] text-ink-700 transition-colors hover:text-ink-950"
              >
                <span className="mr-1.5 text-[10px] font-semibold text-gold-600">{item.n}</span>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="btn-primary hidden px-5 py-2.5 text-[13px] md:inline-flex">
              Book a working session
              <ArrowUpRight size={15} strokeWidth={2.2} />
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-[2px] border border-ink-950/15 text-ink-950 transition-colors hover:bg-ink-950 hover:text-gold-300 lg:hidden"
            >
              <Menu size={17} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-ink-950 text-paper transition-all duration-500",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex h-[74px] items-center justify-between px-5">
          <Logo tone="cream" />
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-[2px] border border-paper/20 text-paper transition-colors hover:border-gold-500 hover:text-gold-400"
          >
            <X size={17} />
          </button>
        </div>
        <nav className="flex flex-1 flex-col justify-center px-8" aria-label="Mobile">
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "group flex items-baseline gap-5 border-b border-paper/10 py-5 transition-all duration-700",
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
              )}
              style={{ transitionDelay: `${120 + i * 70}ms` }}
            >
              <span className="font-display text-sm italic text-gold-500">{item.n}</span>
              <span className="font-display text-4xl font-light tracking-tight transition-transform duration-500 group-hover:translate-x-2">
                {item.label}
              </span>
            </a>
          ))}
        </nav>
        <div className="px-8 pb-10">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary w-full justify-center px-6 py-4 text-[15px]"
          >
            Book a working session
            <ArrowUpRight size={16} strokeWidth={2.2} />
          </a>
          <p className="mt-5 text-center text-[11px] uppercase tracking-[0.22em] text-paper/40">
            Brussels · EN / FR / NL
          </p>
        </div>
      </div>
    </>
  );
}
