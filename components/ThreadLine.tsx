"use client";

import { useEffect, useRef, type RefObject } from "react";

const VIEW_W = 1200;

/** Catmull-Rom → cubic Bézier path through the given points. */
function smoothPath(points: [number, number][]) {
  if (points.length < 2) return "";
  let d = `M ${points[0][0]} ${points[0][1]}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[Math.max(0, i - 1)];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[Math.min(points.length - 1, i + 2)];
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2[0]} ${p2[1]}`;
  }
  return d;
}

/** The gold "A → C" thread that draws itself down the page as you scroll. */
export function ThreadLine({ container }: { container: RefObject<HTMLDivElement | null> }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const headRef = useRef<SVGCircleElement>(null);
  const startDotRef = useRef<SVGCircleElement>(null);
  const endDotRef = useRef<SVGCircleElement>(null);
  const startLabelRef = useRef<SVGTextElement>(null);
  const endLabelRef = useRef<SVGTextElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;
    const head = headRef.current;
    const wrap = container.current;
    if (!svg || !path || !head || !wrap) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let length = 1;
    let progress = 0;
    let raf = 0;

    const layout = () => {
      const h = Math.max(wrap.scrollHeight, window.innerHeight);
      svg.setAttribute("viewBox", `0 0 ${VIEW_W} ${h}`);
      svg.style.height = `${h}px`;

      const mobile = window.innerWidth < 768;
      const waves = mobile ? 2.1 : 3.35;
      const amp = VIEW_W * (mobile ? 0.16 : 0.21);
      const steps = 30;
      const top = 110;
      const bottom = h - 130;
      const pts: [number, number][] = [];
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const y = top + (bottom - top) * t;
        const mod = 0.72 + 0.28 * Math.sin(t * Math.PI * 5.2);
        const x = VIEW_W / 2 + Math.sin(t * Math.PI * waves + 0.65) * amp * mod;
        pts.push([Math.round(x * 10) / 10, Math.round(y)]);
      }

      path.setAttribute("d", smoothPath(pts));
      length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;

      const a = path.getPointAtLength(0);
      const c = path.getPointAtLength(length);
      startDotRef.current?.setAttribute("cx", `${a.x}`);
      startDotRef.current?.setAttribute("cy", `${a.y}`);
      endDotRef.current?.setAttribute("cx", `${c.x}`);
      endDotRef.current?.setAttribute("cy", `${c.y}`);
      startLabelRef.current?.setAttribute("x", `${a.x + 14}`);
      startLabelRef.current?.setAttribute("y", `${a.y + 6}`);
      endLabelRef.current?.setAttribute("x", `${c.x - 30}`);
      endLabelRef.current?.setAttribute("y", `${c.y + 6}`);
    };

    const tick = () => {
      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      const target = reduceMotion ? 1 : Math.min(1, Math.max(0, window.scrollY / max));
      progress += (target - progress) * 0.14;
      if (Math.abs(target - progress) < 4e-4) progress = target;
      path.style.strokeDashoffset = `${length * (1 - progress)}`;

      if (progress > 0.002 && progress < 0.999) {
        const p = path.getPointAtLength(length * progress);
        head.setAttribute("cx", `${p.x}`);
        head.setAttribute("cy", `${p.y}`);
        head.style.opacity = "1";
      } else {
        head.style.opacity = "0";
      }
      raf = requestAnimationFrame(tick);
    };

    layout();
    raf = requestAnimationFrame(tick);

    const onResize = () => layout();
    window.addEventListener("resize", onResize);
    document.fonts?.ready.then(onResize).catch(() => {});
    // Re-measure once images/fonts have settled.
    const t1 = window.setTimeout(layout, 900);
    const t2 = window.setTimeout(layout, 2200);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [container]);

  const label = {
    fontFamily: "var(--font-fraunces), Georgia, serif",
    fontStyle: "italic",
    fontSize: 21,
    fill: "#c9a44e",
    opacity: 0.85,
  } as const;

  return (
    <svg
      ref={svgRef}
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-0 z-[6] w-full"
      width="100%"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="threadGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c9a44e" stopOpacity="0.45" />
          <stop offset="0.5" stopColor="#c9a44e" stopOpacity="0.7" />
          <stop offset="1" stopColor="#c9a44e" stopOpacity="0.45" />
        </linearGradient>
      </defs>
      <path
        ref={pathRef}
        fill="none"
        stroke="url(#threadGold)"
        strokeWidth="1.4"
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
      />
      <circle ref={startDotRef} r="3" fill="#c9a44e" opacity="0.9" />
      <circle
        ref={endDotRef}
        r="4"
        fill="#ead9ac"
        style={{ filter: "drop-shadow(0 0 7px rgba(201,164,78,0.9))" }}
      />
      <circle
        ref={headRef}
        r="4.5"
        fill="#c9a44e"
        vectorEffect="non-scaling-stroke"
        style={{ filter: "drop-shadow(0 0 8px rgba(201,164,78,0.85))", transition: "opacity .3s ease" }}
      />
      <text ref={startLabelRef} {...label}>
        A
      </text>
      <text ref={endLabelRef} {...label}>
        C
      </text>
    </svg>
  );
}
