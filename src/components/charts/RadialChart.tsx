export function RadialChart({
  value,
  label,
  className = "",
}: {
  value: number;
  label: string;
  className?: string;
}) {
  const to = 1 - Math.min(Math.max(value, 0), 100) / 100;

  return (
    <div className={`relative grid place-items-center ${className}`}>
      <svg viewBox="0 0 108 108" className="h-full w-full -rotate-90" aria-hidden>
        <circle cx="54" cy="54" r={42} fill="none" stroke="rgba(232,238,246,0.1)" strokeWidth="8" />
        <circle
          className="draw-radial"
          cx="54"
          cy="54"
          r={42}
          fill="none"
          stroke="var(--volt)"
          strokeWidth="8"
          strokeLinecap="round"
          pathLength={1}
          style={{ ["--to" as string]: to }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <div className="font-display text-2xl tabular leading-none text-fog">{value}%</div>
          <div className="mt-1 font-mono text-[10px] text-mist">{label}</div>
        </div>
      </div>
    </div>
  );
}
