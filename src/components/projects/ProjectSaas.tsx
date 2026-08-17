"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/projects";

const states = [
  {
    id: "default",
    title: "Default",
    body: "Рабочий экран. Иерархия читается без подсказок.",
  },
  {
    id: "hover",
    title: "Hover",
    body: "Карточка отвечает сдвигом и границей. Физика, не вспышка.",
  },
  {
    id: "empty",
    title: "Empty",
    body: "Пустое состояние говорит, что делать дальше.",
  },
] as const;

export function ProjectSaas() {
  const meta = projects[2];
  const [state, setState] = useState<(typeof states)[number]["id"]>("default");
  const current = states.find((s) => s.id === state)!;

  return (
    <article className="min-w-0 overflow-hidden rounded-[var(--radius-panel)] bg-fog p-5 text-ink md:p-8">
      <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
        <div className="min-w-0">
          <h3 className="font-display text-3xl tracking-[-0.03em] break-words md:text-4xl">{meta.title}</h3>
          <p className="mt-4 max-w-[42ch] text-[16px] leading-relaxed text-ink/70">{meta.lead}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {meta.tech.map((t) => (
              <Badge key={t} tone="ink">
                {t}
              </Badge>
            ))}
          </div>
        </div>

        <div className="min-w-0">
          <div className="mb-4 flex flex-wrap gap-2">
            {states.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setState(s.id)}
                className={`rounded-full px-3 py-1.5 font-mono text-[11px] ${
                  state === s.id ? "bg-ink text-fog" : "bg-ink/8 text-ink/70 hover:bg-ink/12"
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>

          <div
            className={`rounded-[var(--radius-panel)] bg-white p-5 transition-transform duration-[var(--dur-fast)] ease-[var(--ease-out-expo)] ${
              state === "hover" ? "-translate-y-1 ring-2 ring-cobalt" : ""
            }`}
          >
            {state === "empty" ? (
              <div className="py-8 text-center">
                <p className="font-display text-xl tracking-[-0.02em]">Пока нет команд</p>
                <p className="mx-auto mt-2 max-w-[36ch] text-sm text-ink/60">
                  Создайте первую, чтобы увидеть статусы, роли и таймлайн.
                </p>
                <Button className="pointer-events-none mt-5" tabIndex={-1}>
                  Создать команду
                </Button>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between gap-3">
                  <p className="font-display text-xl tracking-[-0.02em]">Workspace</p>
                  <span className="shrink-0 font-mono text-[11px] text-ink/50">3 members</span>
                </div>
                <ul className="mt-5 space-y-3">
                  {["Design ops", "Billing", "Launch"].map((item) => (
                    <li
                      key={item}
                      className="flex items-center justify-between rounded-[var(--radius-control)] bg-fog px-3 py-3 text-sm"
                    >
                      <span>{item}</span>
                      <span className="font-mono text-[11px] text-ink/50">active</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-ink/60">{current.body}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
