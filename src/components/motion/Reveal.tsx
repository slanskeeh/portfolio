"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.18 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style: CSSProperties = shown
    ? {
        animationDelay: `${delay}s`,
      }
    : { opacity: 0 };

  return (
    <div
      ref={ref}
      className={`${shown ? "fade-up" : ""} ${className ?? ""}`}
      style={style}
    >
      {children}
    </div>
  );
}
