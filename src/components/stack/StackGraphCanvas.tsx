"use client";

import { useState } from "react";
import { stackItems } from "@/data/stack";

function polar(cx: number, cy: number, r: number, deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export function StackGraphCanvas() {
  const [active, setActive] = useState<string | null>(null);
  const size = 560;
  const cx = size / 2;
  const cy = size / 2;
  const nodes = stackItems.map((item) => ({
    ...item,
    ...polar(cx, cy, 188, item.angle),
  }));

  return (
    <div className="mt-10 hidden lg:block">
      <svg viewBox={`0 0 ${size} ${size}`} className="mx-auto max-h-[560px] w-full max-w-[640px]">
        {nodes.map((node) => {
          const lit = active === null || active === node.id;
          return (
            <line
              key={`l-${node.id}`}
              x1={cx}
              y1={cy}
              x2={node.x}
              y2={node.y}
              stroke={active === node.id ? "var(--volt)" : "rgba(232,238,246,0.16)"}
              strokeWidth={active === node.id ? 2 : 1}
              className="transition-[stroke] duration-[var(--dur-fast)]"
              opacity={lit ? 1 : 0.25}
            />
          );
        })}
        <circle cx={cx} cy={cy} r="58" fill="var(--ink-2)" stroke="rgba(232,238,246,0.12)" />
        <text
          x={cx}
          y={cy - 6}
          textAnchor="middle"
          fill="var(--fog)"
          fontSize="13"
          fontFamily="var(--font-golos)"
        >
          UI runtime
        </text>
        <text
          x={cx}
          y={cy + 14}
          textAnchor="middle"
          fill="var(--mist)"
          fontSize="10"
          fontFamily="var(--font-jetbrains)"
        >
          client
        </text>
        {nodes.map((node) => (
          <g
            key={node.id}
            className="cursor-pointer"
            onMouseEnter={() => setActive(node.id)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(node.id)}
            onBlur={() => setActive(null)}
            tabIndex={0}
            role="img"
            aria-label={node.name}
          >
            <circle
              cx={node.x}
              cy={node.y}
              r={active === node.id ? 34 : 30}
              fill={active === node.id ? "var(--volt)" : "var(--ink-2)"}
              stroke={active === node.id ? "var(--volt)" : "rgba(232,238,246,0.14)"}
              className="transition-[r,fill] duration-[var(--dur-fast)]"
            />
            <text
              x={node.x}
              y={node.y + 4}
              textAnchor="middle"
              fill={active === node.id ? "var(--ink)" : "var(--fog)"}
              fontSize="11"
              fontFamily="var(--font-golos)"
            >
              {node.name.length > 12 ? node.name.split(" ")[0] : node.name}
            </text>
          </g>
        ))}
      </svg>
      <p className="mt-2 text-center font-mono text-[12px] text-mist">
        {active ? nodes.find((n) => n.id === active)?.name : "Наведите на узел"}
      </p>
    </div>
  );
}
