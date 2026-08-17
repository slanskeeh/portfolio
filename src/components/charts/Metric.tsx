export function Metric({
  label,
  value,
  unit,
  hint,
}: {
  label: string;
  value: string;
  unit?: string;
  hint?: string;
}) {
  return (
    <div className="min-w-0">
      <div className="flex items-baseline gap-1">
        <span className="font-display text-[20px] leading-none tracking-[-0.03em] text-fog tabular sm:text-[24px] md:text-[28px]">
          {value}
        </span>
        {unit ? (
          <span className="font-mono text-[11px] text-mist">{unit}</span>
        ) : null}
      </div>
      <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-mist md:text-[11px]">
        {label}
        {hint ? <span className="hidden text-fog/40 sm:inline"> · {hint}</span> : null}
      </div>
    </div>
  );
}
