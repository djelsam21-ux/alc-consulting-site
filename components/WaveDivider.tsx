import { cn } from "@/lib/cn";

/** Curved transition between two section background colours. */
export function WaveDivider({
  from,
  to,
  flip = false,
  dip = false,
  className,
}: {
  from: string;
  to: string;
  flip?: boolean;
  dip?: boolean;
  className?: string;
}) {
  const d = dip
    ? "M0 30 C 420 126, 1020 126, 1440 34 L1440 132 L0 132 Z"
    : "M0 132 C 340 26, 820 4, 1440 96 L1440 132 Z";

  return (
    <div aria-hidden="true" className={cn("-mb-px leading-[0]", className)} style={{ background: from }}>
      <svg
        viewBox="0 0 1440 132"
        preserveAspectRatio="none"
        className={cn("block h-[58px] w-full md:h-[104px]", flip && "-scale-x-100")}
      >
        <path d={d} fill={to} />
      </svg>
    </div>
  );
}
