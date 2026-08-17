import { LineChart } from "@/components/charts/LineChart";
import { BarChart } from "@/components/charts/BarChart";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { channelBars, renderSeries } from "@/data/demo-metrics";

const cells = [
  {
    id: "ui",
    title: "Интерфейсы",
    body: "Сложные web-экраны и frontend-архитектура: состояния, слои, масштаб.",
  },
  {
    id: "dash",
    title: "Дашборды",
    body: "Админ-панели, фильтры, таблицы и управление данными.",
  },
  {
    id: "viz",
    title: "Данные",
    body: "Графики и инфографика, которые читаются как продукт, не как декор.",
  },
  {
    id: "motion",
    title: "Motion",
    body: "Анимация как иерархия и отклик, не как шоу.",
  },
  {
    id: "perf",
    title: "Performance",
    body: "Бюджет бандла, INP, предсказуемый React под нагрузкой.",
  },
] as const;

export function Capabilities() {
  return (
    <section id="capabilities" className="bg-fog text-ink">
      <div className="mx-auto max-w-[1400px] px-4 py-24 md:px-6 md:py-32">
        <h2 className="max-w-[16ch] font-display text-4xl font-medium tracking-[-0.03em] md:text-5xl">
          Что я собираю
        </h2>
        <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-ink/70">
          Не набор услуг. Пять рабочих поверхностей, из которых складываются продукты.
        </p>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-3 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[1fr_1fr]">
          {cells.map((cell, i) => (
            <Reveal
              key={cell.id}
              delay={i * 0.05}
              className={`h-full ${cell.id === "ui" ? "md:col-span-2" : ""}`}
            >
              <article
                className={`group flex h-full min-h-[280px] flex-col overflow-hidden rounded-[var(--radius-panel)] p-6 transition-transform duration-[var(--dur-fast)] ease-[var(--ease-out-expo)] hover:-translate-y-1 ${
                  cell.id === "ui"
                    ? "bg-ink text-fog"
                    : cell.id === "dash"
                      ? "bg-cobalt text-fog"
                      : cell.id === "motion"
                        ? "bg-volt text-ink"
                        : "bg-white"
                }`}
              >
                <h3 className="font-display text-2xl tracking-[-0.02em]">{cell.title}</h3>
                <p
                  className={`mt-3 max-w-[42ch] text-[15px] leading-relaxed ${
                    cell.id === "motion"
                      ? "text-ink/75"
                      : cell.id === "ui" || cell.id === "dash"
                        ? "text-mist"
                        : "text-ink/70"
                  }`}
                >
                  {cell.body}
                </p>

                {cell.id === "ui" ? (
                  <div className="mt-auto flex flex-wrap gap-2 pt-8">
                    <span className="rounded-[var(--radius-control)] bg-white/8 px-3 py-2 font-mono text-[11px] text-mist">
                      states
                    </span>
                    <span className="rounded-[var(--radius-control)] bg-white/8 px-3 py-2 font-mono text-[11px] text-mist">
                      layout
                    </span>
                    <span className="rounded-[var(--radius-control)] bg-volt px-3 py-2 font-mono text-[11px] text-ink">
                      architecture
                    </span>
                  </div>
                ) : null}

                {cell.id === "dash" ? (
                  <div className="mt-auto h-24 pt-6">
                    <BarChart items={[...channelBars]} color="rgba(232,238,246,0.92)" />
                  </div>
                ) : null}

                {cell.id === "viz" ? (
                  <div className="mt-auto h-24 pt-6">
                    <LineChart values={[...renderSeries]} color="var(--cobalt)" />
                  </div>
                ) : null}

                {cell.id === "motion" ? (
                  <div className="mt-auto pt-8">
                    <Button variant="ink" className="pointer-events-none" tabIndex={-1}>
                      Наведитесь на карточку
                    </Button>
                  </div>
                ) : null}

                {cell.id === "perf" ? (
                  <div className="mt-auto grid grid-cols-3 gap-3 pt-8 font-display text-2xl tracking-[-0.03em] tabular">
                    <div>
                      48<span className="block font-mono text-[11px] text-ink/50">ms INP</span>
                    </div>
                    <div>
                      1.2<span className="block font-mono text-[11px] text-ink/50">s LCP</span>
                    </div>
                    <div>
                      184<span className="block font-mono text-[11px] text-ink/50">kb js</span>
                    </div>
                  </div>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
