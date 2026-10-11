export const COLORS = {
  paper: "#f4eee0",
  ink: "#12100b",
  moss: "#143126",
} as const;

export const NAV = [
  { n: "01", label: "Results", href: "#results" },
  { n: "02", label: "Expertise", href: "#expertise" },
  { n: "03", label: "Method", href: "#method" },
  { n: "04", label: "About", href: "#about" },
] as const;

export const PHASES = [
  { t: "Diagnose", s: "Weeks 1–2" },
  { t: "Decide", s: "Week 3" },
  { t: "Deliver", s: "Weeks 4–16" },
  { t: "Depart", s: "Final two" },
] as const;
