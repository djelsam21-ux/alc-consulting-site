"use client";

import { useEffect, useRef } from "react";

/** Gold arc that draws across the hero on load, ending in a pulsing node. */
export function HeroArc() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;
    const t = window.setTimeout(() => {
      path.style.strokeDashoffset = "0";
    }, 500);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <path
        ref={pathRef}
        d="M-40 780 C 420 720, 760 610, 1110 400"
        fill="none"
        stroke="#c9a44e"
        strokeWidth="1.5"
        strokeOpacity="0.75"
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 2.6s cubic-bezier(0.22,1,0.36,1)" }}
      />
      <circle cx="1110" cy="400" r="6.5" fill="#c9a44e" />
      <circle cx="1110" cy="400" r="6.5" fill="none" stroke="#c9a44e" strokeWidth="1">
        <animate attributeName="r" values="7;26" dur="3.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.55;0" dur="3.4s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
