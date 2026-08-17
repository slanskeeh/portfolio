type Props = {
  values: number[];
  className?: string;
  color?: string;
  fill?: boolean;
};

export function LineChart({
  values,
  className = "",
  color = "var(--volt)",
  fill = true,
}: Props) {
  const w = 320;
  const h = 120;
  const pad = 8;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = Math.max(max - min, 1);

  const points = values.map((v, i) => {
    const x = pad + (i * (w - pad * 2)) / (values.length - 1);
    const y = h - pad - ((v - min) / span) * (h - pad * 2);
    return [x, y] as const;
  });

  const d = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p[0].toFixed(1)} ${p[1].toFixed(1)}`)
    .join(" ");

  const area = `${d} L ${points[points.length - 1][0].toFixed(1)} ${h - pad} L ${points[0][0].toFixed(1)} ${h - pad} Z`;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className={`h-full w-full overflow-hidden ${className}`}
      role="img"
      aria-label="Линейный график, синтетические данные"
    >
      {fill ? <path d={area} fill={color} opacity={0.12} /> : null}
      <path
        className="draw-line"
        pathLength={1}
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={2.25}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle
        cx={points[points.length - 1][0]}
        cy={points[points.length - 1][1]}
        r={4}
        fill={color}
      />
    </svg>
  );
}
