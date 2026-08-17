"use client";

import { LineChart } from "@/components/charts/LineChart";
import { Metric } from "@/components/charts/Metric";
import { RadialChart } from "@/components/charts/RadialChart";
import { Badge } from "@/components/ui/Badge";
import { trafficSeries } from "@/data/demo-metrics";
import { projects } from "@/data/projects";

export function ProjectAnalytics() {
  const meta = projects[1];

  return (
    <article className="overflow-hidden rounded-[var(--radius-panel)] border border-white/8">
      <div className="grid lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div className="bg-cobalt p-5 text-fog md:p-8">
          <h3 className="font-display text-3xl tracking-[-0.03em] md:text-4xl">{meta.title}</h3>
          <p className="mt-4 max-w-[36ch] text-[16px] leading-relaxed text-fog/80">{meta.lead}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {meta.tech.map((t) => (
              <Badge key={t} tone="fog" className="border-white/20 bg-white/10">
                {t}
              </Badge>
            ))}
          </div>
        </div>
        <div className="grid gap-px bg-white/8 sm:grid-cols-2">
          <div className="bg-ink p-5">
            <Metric label="sessions" value="18.4" unit="k" hint="синтетика" />
            <div className="mt-6 h-28">
              <LineChart values={[...trafficSeries]} color="var(--volt)" />
            </div>
          </div>
          <div className="bg-ink p-5">
            <Metric label="conversion" value="3.8" unit="%" hint="синтетика" />
            <RadialChart value={72} label="retention" className="mx-auto mt-2 h-[140px] w-[140px]" />
          </div>
        </div>
      </div>
    </article>
  );
}
