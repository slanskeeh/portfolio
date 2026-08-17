import { Badge } from "@/components/ui/Badge";
import { projects } from "@/data/projects";

export function ProjectMotion() {
  const meta = projects[3];

  return (
    <article className="min-w-0 overflow-hidden rounded-[var(--radius-panel)] bg-ink-2">
      <div className="grid min-w-0 items-stretch lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="min-w-0 p-5 md:p-8">
          <h3 className="font-display text-3xl tracking-[-0.03em] break-words md:text-4xl">{meta.title}</h3>
          <p className="mt-4 max-w-[42ch] text-[16px] leading-relaxed text-mist">{meta.lead}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {meta.tech.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        </div>
        <div className="relative min-h-[260px] min-w-0 overflow-hidden bg-ink p-5 md:p-8">
          <p className="font-mono text-[11px] text-mist">Наведите на карточку</p>
          <div className="group relative mx-auto mt-8 h-[180px] w-full max-w-[320px]">
            <div className="absolute inset-x-6 h-28 rounded-[var(--radius-panel)] border border-white/10 bg-ink-2 p-4 transition-transform duration-[var(--dur-med)] ease-[var(--ease-out-expo)] group-hover:-translate-y-3 group-hover:-rotate-6 group-hover:border-volt/80">
              <div className="h-2 w-16 rounded-full bg-volt/80" />
              <div className="mt-3 h-2 w-28 rounded-full bg-white/10" />
              <div className="mt-2 h-2 w-20 rounded-full bg-white/10" />
            </div>
            <div className="absolute inset-x-6 top-[18px] h-28 rounded-[var(--radius-panel)] border border-white/10 bg-ink-2 p-4 transition-transform duration-[var(--dur-med)] ease-[var(--ease-out-expo)] group-hover:translate-y-1 group-hover:border-volt/80">
              <div className="h-2 w-16 rounded-full bg-volt/80" />
              <div className="mt-3 h-2 w-28 rounded-full bg-white/10" />
              <div className="mt-2 h-2 w-20 rounded-full bg-white/10" />
            </div>
            <div className="absolute inset-x-6 top-[36px] h-28 rounded-[var(--radius-panel)] border border-white/10 bg-ink-2 p-4 transition-transform duration-[var(--dur-med)] ease-[var(--ease-out-expo)] group-hover:translate-y-7 group-hover:rotate-6 group-hover:border-volt/80">
              <div className="h-2 w-16 rounded-full bg-volt/80" />
              <div className="mt-3 h-2 w-28 rounded-full bg-white/10" />
              <div className="mt-2 h-2 w-20 rounded-full bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
