"use client";

import { useEffect, useRef, useState } from "react";
import { PHASES } from "@/lib/content";

type Point = { x: number; y: number };

/** Desktop "A → C" arc with the four mandate phases plotted along it. */
export function ArcTimeline() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [nodes, setNodes] = useState<Point[]>([]);
  const [length, setLength] = useState(1);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const path = pathRef.current;
    const wrap = wrapRef.current;
    if (!path || !wrap) return;
    const len = path.getTotalLength();
    setLength(len);
    setNodes([0.018, 0.35, 0.66, 0.985].map((f) => {
      const p = path.getPointAtLength(len * f);
      return { x: p.x, y: p.y };
    }));
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.45 },
    );
    io.observe(wrap);
    return () => io.disconnect();
  }, []);

  const labelFont = { fontFamily: "var(--font-fraunces), Georgia, serif", fontStyle: "italic" } as const;

  return (
    <div ref={wrapRef} className="relative">
      <svg viewBox="0 0 1200 340" className="block w-full" aria-hidden="true">
        <path
          ref={pathRef}
          d="M70 285 C 380 55, 820 55, 1130 285"
          fill="none"
          stroke="#c9a44e"
          strokeWidth="1.6"
          strokeLinecap="round"
          style={{
            strokeDasharray: length,
            strokeDashoffset: inView ? 0 : length,
            transition: "stroke-dashoffset 2.6s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
        {nodes.length === 4 && (
          <>
            <text x={nodes[0].x - 38} y={nodes[0].y + 8} fontSize="30" fill="#c9a44e" {...labelFont}>
              A
            </text>
            <text x={nodes[3].x + 22} y={nodes[3].y + 8} fontSize="30" fill="#c9a44e" {...labelFont}>
              C
            </text>
            {nodes.map((n, i) => (
              <g
                key={i}
                opacity={inView ? 1 : 0}
                style={{ transition: `opacity .6s ease ${1 + i * 0.5}s` }}
              >
                <circle cx={n.x} cy={n.y} r="7" fill="#143126" stroke="#c9a44e" strokeWidth="2" />
                <circle cx={n.x} cy={n.y} r="2.6" fill="#ead9ac" />
                {i === 1 && (
                  <circle cx={n.x} cy={n.y} r="7" fill="none" stroke="#c9a44e" strokeWidth="1">
                    <animate attributeName="r" values="8;30" dur="3.2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0" dur="3.2s" repeatCount="indefinite" />
                  </circle>
                )}
                <text
                  x={n.x}
                  y={n.y + 42}
                  textAnchor="middle"
                  fill="#f4eee0"
                  fontSize="14.5"
                  fontWeight="600"
                  style={{ letterSpacing: "0.22em", textTransform: "uppercase" }}
                >
                  {PHASES[i].t.toUpperCase()}
                </text>
                <text
                  x={n.x}
                  y={n.y + 62}
                  textAnchor="middle"
                  fill="#f4eee0"
                  opacity="0.45"
                  fontSize="11.5"
                  style={{ letterSpacing: "0.14em" }}
                >
                  {PHASES[i].s.toUpperCase()}
                </text>
              </g>
            ))}
          </>
        )}
      </svg>
    </div>
  );
}
