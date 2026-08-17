"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { stackItems } from "@/data/stack";

function polar(cx: number, cy: number, r: number, deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export function StackGraph() {
  const [active, setActive] = useState<string | null>(null);
  const size = 560;
  const cx = size / 2;
  const cy = size / 2;
  const nodes = stackItems.map((item) => ({
    ...item,
    ...polar(cx, cy, 188, item.angle),
  }));

  return (
    <section id="stack" className="mx-auto max-w-[1400px] px-4 py-24 md:px-6 md:py-32">
      <h2 className="font-display text-4xl font-medium tracking-[-0.03em] md:text-5xl">
        Стек, которым собираю
      </h2>
      <p className="mt-4 max-w-[50ch] text-lg leading-relaxed text-mist">
        Не витрина логотипов. Связанный runtime: состояние, стили, типы, рендер.
      </p>

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
          {active ? nodes.find((n) => n.id === active)?.name : "Наведитесь на узел"}
        </p>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:hidden">
        {stackItems.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.04}>
            <li className="rounded-[var(--radius-panel)] bg-ink-2 px-4 py-4 text-[15px]">
              {item.name}
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
