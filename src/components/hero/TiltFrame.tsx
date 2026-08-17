"use client";

import { type PointerEvent, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function TiltFrame({ children, className }: Props) {
  function onMove(e: PointerEvent<HTMLDivElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 10;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 8;
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }

  function onLeave(e: PointerEvent<HTMLDivElement>) {
    e.currentTarget.style.transform = "translate3d(0,0,0)";
  }

  return (
    <div onPointerMove={onMove} onPointerLeave={onLeave} className={className}>
      {children}
    </div>
  );
}
