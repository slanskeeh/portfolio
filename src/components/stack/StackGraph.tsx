import { Reveal } from "@/components/motion/Reveal";
import { StackGraphCanvas } from "@/components/stack/StackGraphCanvas";
import { stackItems } from "@/data/stack";

export function StackGraph() {
  return (
    <section id="stack" className="mx-auto max-w-[1400px] px-4 py-24 md:px-6 md:py-32">
      <h2 className="font-display text-4xl font-medium tracking-[-0.03em] md:text-5xl">
        Стек, которым собираю
      </h2>
      <p className="mt-4 max-w-[50ch] text-lg leading-relaxed text-mist">
        Не витрина логотипов. Связанный runtime: состояние, стили, типы, рендер.
      </p>
      <StackGraphCanvas />
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
