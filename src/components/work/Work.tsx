import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { workItems, type WorkItem } from "@/data/work";

function WorkLinks({ item, onInk }: { item: WorkItem; onInk?: boolean }) {
  if (!item.live) return null;

  return (
    <div className="flex flex-wrap gap-3">
      <Button href={item.live.href} variant={onInk ? "primary" : "ink"} external>
        {item.live.label}
      </Button>
    </div>
  );
}

function SurfacePills({
  surfaces,
  light,
}: {
  surfaces: string[];
  light?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {surfaces.map((surface) => (
        <Badge
          key={surface}
          className={light ? "border-white/20 bg-white/10 text-fog" : undefined}
        >
          {surface}
        </Badge>
      ))}
    </div>
  );
}

function TechPills({ tech, light }: { tech: string[]; light?: boolean }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tech.map((item) => (
        <Badge
          key={item}
          className={light ? "border-white/20 bg-white/10 text-fog" : undefined}
        >
          {item}
        </Badge>
      ))}
    </div>
  );
}

export function Work() {
  const [shashlyk, mosokna, panel, sarmat, pokolenie, flagman, cuba] = workItems;

  return (
    <section id="projects" className="mx-auto max-w-[1400px] px-4 py-24 md:px-6 md:py-32">
      <h2 className="font-display text-4xl font-medium tracking-[-0.03em] md:text-5xl">
        Над чем работал
      </h2>
      <p className="mt-4 max-w-[54ch] text-lg leading-relaxed text-mist">
        Боевые продукты: публичные сайты и внутренние панели. Админки закрытые, на сайте только то, что можно открыть.
      </p>

      <article className="mt-12 overflow-hidden rounded-[var(--radius-panel)] bg-ink-2">
        <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div className="p-5 md:p-8">
            <h3 className="font-display text-3xl tracking-[-0.03em] md:text-5xl">
              {shashlyk.title}
            </h3>
            <p className="mt-4 max-w-[52ch] text-[16px] leading-relaxed text-mist">
              {shashlyk.lead}
            </p>
            <div className="mt-5">
              <SurfacePills surfaces={shashlyk.surfaces} />
            </div>
            <div className="mt-3">
              <TechPills tech={shashlyk.tech} />
            </div>
            <div className="mt-6">
              <WorkLinks item={shashlyk} onInk />
            </div>
          </div>
          {shashlyk.facts ? (
            <div className="grid grid-cols-1 gap-px bg-white/6 sm:grid-cols-3 lg:grid-cols-1">
              {shashlyk.facts.map((fact) => (
                <div key={fact.label} className="bg-ink p-5 md:p-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-mist">
                    {fact.label}
                  </p>
                  <p className="mt-2 font-display text-2xl tracking-[-0.03em] text-fog">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div className="grid gap-px bg-white/6 md:grid-cols-2">
          <div className="bg-ink p-5 md:p-6">
            <p className="font-display text-xl tracking-[-0.02em]">Публичная часть</p>
            <p className="mt-2 max-w-[48ch] text-sm leading-relaxed text-mist">
              Каталог, вход по SMS, профиль, бонусы, промокоды, лояльность, заказ и статусы в реальном времени.
            </p>
          </div>
          <div className="bg-ink p-5 md:p-6">
            <p className="font-display text-xl tracking-[-0.02em]">Админка</p>
            <p className="mt-2 max-w-[48ch] text-sm leading-relaxed text-mist">
              Каталог, категории, промокоды, заведения, новые точки и процент начисления бонусов от суммы заказа.
            </p>
          </div>
        </div>
      </article>

      <article className="mt-3 overflow-hidden rounded-[var(--radius-panel)] bg-ink-2">
        <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div className="p-5 md:p-8">
            <h3 className="font-display text-3xl tracking-[-0.03em] md:text-5xl">
              {mosokna.title}
            </h3>
            <p className="mt-4 max-w-[46ch] text-[16px] leading-relaxed text-mist">
              {mosokna.lead}
            </p>
            <div className="mt-5">
              <SurfacePills surfaces={mosokna.surfaces} />
            </div>
            <div className="mt-3">
              <TechPills tech={mosokna.tech} />
            </div>
            <div className="mt-6">
              <WorkLinks item={mosokna} onInk />
            </div>
          </div>
          {mosokna.facts ? (
            <div className="grid grid-cols-1 gap-px bg-white/6 sm:grid-cols-3 lg:grid-cols-1">
              {mosokna.facts.map((fact) => (
                <div key={fact.label} className="bg-ink p-5 md:p-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-mist">
                    {fact.label}
                  </p>
                  <p className="mt-2 font-display text-2xl tracking-[-0.03em] text-fog">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </article>

      <article className="mt-3 rounded-[var(--radius-panel)] bg-ink-2 p-5 md:p-8">
        <h3 className="font-display text-3xl tracking-[-0.03em] md:text-4xl">{panel.title}</h3>
        <p className="mt-4 max-w-[62ch] text-[16px] leading-relaxed text-mist">{panel.lead}</p>
        <div className="mt-5">
          <TechPills tech={panel.tech} />
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {panel.surfaces.map((surface) => (
            <div
              key={surface}
              className="min-h-[120px] rounded-[var(--radius-panel)] bg-ink p-4"
            >
              <p className="font-display text-xl tracking-[-0.02em]">{surface}</p>
              <p className="mt-2 text-sm text-mist">
                {surface === "Публичная панель"
                  ? "Опросы и личный кабинет респондента."
                  : surface === "Конструктор опросов"
                    ? "Сборка, редактирование и статистика опросов."
                    : "Аналитика, пользователи, рассылки, кодировка."}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <WorkLinks item={panel} onInk />
        </div>
      </article>

      <article className="mt-3 overflow-hidden rounded-[var(--radius-panel)] bg-volt text-ink">
        <div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="p-5 md:p-8">
            <h3 className="font-display text-3xl tracking-[-0.03em] md:text-4xl">{flagman.title}</h3>
            <p className="mt-4 max-w-[52ch] text-[16px] leading-relaxed text-ink/75">{flagman.lead}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {flagman.surfaces.map((surface) => (
                <Badge key={surface} tone="ink">
                  {surface}
                </Badge>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {flagman.tech.map((item) => (
                <Badge key={item} tone="ink">
                  {item}
                </Badge>
              ))}
            </div>
            <div className="mt-6">
              <WorkLinks item={flagman} />
            </div>
          </div>
          {flagman.facts ? (
            <div className="grid grid-cols-1 gap-px bg-ink/10 sm:grid-cols-3 lg:grid-cols-1">
              {flagman.facts.map((fact) => (
                <div key={fact.label} className="bg-volt p-5 md:p-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink/55">
                    {fact.label}
                  </p>
                  <p className="mt-2 font-display text-2xl tracking-[-0.03em]">{fact.value}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </article>

      <article className="mt-3 rounded-[var(--radius-panel)] bg-ink-2 p-5 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
          <div>
            <h3 className="font-display text-3xl tracking-[-0.03em] md:text-4xl">{cuba.title}</h3>
            <p className="mt-4 max-w-[48ch] text-[16px] leading-relaxed text-mist">{cuba.lead}</p>
            <div className="mt-5">
              <TechPills tech={cuba.tech} />
            </div>
            <div className="mt-6">
              <WorkLinks item={cuba} onInk />
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[var(--radius-panel)] bg-ink p-4">
              <p className="font-display text-xl tracking-[-0.02em]">Публичная часть</p>
              <p className="mt-2 text-sm text-mist">Витрина и оформление заказа через API.</p>
            </div>
            <div className="rounded-[var(--radius-panel)] bg-ink p-4">
              <p className="font-display text-xl tracking-[-0.02em]">Админка</p>
              <p className="mt-2 text-sm text-mist">Обработка заказов и управление сервисом.</p>
            </div>
          </div>
        </div>
      </article>

      <div className="mt-3 grid gap-3 lg:grid-cols-2">
        <article className="flex min-h-[280px] flex-col rounded-[var(--radius-panel)] bg-cobalt p-5 text-fog md:p-8">
          <h3 className="font-display text-3xl tracking-[-0.03em]">{sarmat.title}</h3>
          <p className="mt-4 max-w-[46ch] text-[16px] leading-relaxed text-fog/80">
            {sarmat.lead}
          </p>
          <div className="mt-5">
            <SurfacePills surfaces={sarmat.surfaces} light />
          </div>
          <div className="mt-3">
            <TechPills tech={sarmat.tech} light />
          </div>
          <div className="mt-auto pt-6">
            <WorkLinks item={sarmat} />
          </div>
        </article>

        <article className="flex min-h-[280px] flex-col rounded-[var(--radius-panel)] bg-ink-2 p-5 md:p-8">
          <h3 className="font-display text-3xl tracking-[-0.03em]">{pokolenie.title}</h3>
          <p className="mt-4 max-w-[46ch] text-[16px] leading-relaxed text-mist">
            {pokolenie.lead}
          </p>
          <div className="mt-5">
            <SurfacePills surfaces={pokolenie.surfaces} />
          </div>
          {pokolenie.tech.length > 0 ? (
            <div className="mt-3">
              <TechPills tech={pokolenie.tech} />
            </div>
          ) : null}
          <div className="mt-auto pt-6">
            <WorkLinks item={pokolenie} onInk />
          </div>
        </article>
      </div>
    </section>
  );
}
