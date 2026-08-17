type Item = { name: string; value: number };

export function BarChart({
  items,
  className = "",
  color = "var(--cobalt)",
}: {
  items: Item[];
  className?: string;
  color?: string;
}) {
  const max = Math.max(...items.map((i) => i.value), 1);

  return (
    <div
      className={`flex h-full items-stretch gap-2 ${className}`}
      role="img"
      aria-label="Столбчатый график, синтетические данные"
    >
      {items.map((item, i) => {
        const pct = Math.max((item.value / max) * 100, 10);
        return (
          <div key={item.name} className="flex min-w-0 flex-1 flex-col justify-end gap-2">
            <div
              className="grow-y w-full rounded-t-[6px]"
              style={{
                background: color,
                height: `${pct}%`,
                animationDelay: `${i * 0.06}s`,
              }}
            />
            <span className="truncate text-center font-mono text-[10px] text-mist">{item.name}</span>
          </div>
        );
      })}
    </div>
  );
}
