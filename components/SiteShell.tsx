"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { ThreadLine } from "./ThreadLine";

/**
 * Page wrapper: Lenis smooth scrolling, in-page anchor handling,
 * the scroll-drawn gold thread and the film-grain overlay.
 */
export function SiteShell({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lenis: Lenis | null = null;
    let raf = 0;

    if (!reduceMotion) {
      lenis = new Lenis({ duration: 1.2, smoothWheel: true });
      const loop = (time: number) => {
        lenis?.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || href.length < 2) return;
      const target = document.querySelector<HTMLElement>(href);
      if (!target) return;
      e.preventDefault();
      window.dispatchEvent(new CustomEvent("alc:closemenu"));
      if (lenis) lenis.scrollTo(target, { offset: -72, duration: 1.5 });
      else target.scrollIntoView({ behavior: "smooth" });
    };
    document.addEventListener("click", onClick);

    const onMenu = (e: Event) => {
      const open = (e as CustomEvent<boolean>).detail;
      if (lenis) open ? lenis.stop() : lenis.start();
    };
    window.addEventListener("alc:menu", onMenu);

    return () => {
      cancelAnimationFrame(raf);
      lenis?.destroy();
      document.removeEventListener("click", onClick);
      window.removeEventListener("alc:menu", onMenu);
    };
  }, []);

  return (
    <div ref={containerRef} className="grain relative overflow-x-clip bg-paper text-ink-950">
      <ThreadLine container={containerRef} />
      {children}
    </div>
  );
}
