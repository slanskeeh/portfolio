import type { ReactNode } from "react";

type Tone = "fog" | "ink" | "volt" | "cobalt";

const tones: Record<Tone, string> = {
  fog: "bg-fog/8 text-fog border-fog/15",
  ink: "bg-ink text-fog border-ink/10",
  volt: "bg-volt text-ink border-volt",
  cobalt: "bg-cobalt text-fog border-cobalt",
};

export function Badge({
  children,
  tone = "fog",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[11px] leading-none ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
