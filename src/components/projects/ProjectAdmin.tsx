"use client";

import { useMemo, useState } from "react";
import { BarChart } from "@/components/charts/BarChart";
import { Badge } from "@/components/ui/Badge";
import { channelBars } from "@/data/demo-metrics";
import { adminRows, projects, type ProjectStatus } from "@/data/projects";

const filters: { id: "all" | ProjectStatus; label: string }[] = [
  { id: "all", label: "Все" },
  { id: "ok", label: "В работе" },
  { id: "warn", label: "Внимание" },
  { id: "idle", label: "Пауза" },
];

const statusLabel: Record<ProjectStatus, string> = {
  ok: "ok",
  warn: "warn",
  idle: "idle",
};

export function ProjectAdmin() {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");
  const meta = projects[0];
  const rows = useMemo(
    () => (filter === "all" ? adminRows : adminRows.filter((r) => r.status === filter)),
    [filter],
  );

  return (
    <article className="rounded-[var(--radius-panel)] bg-ink-2">
      <div className="grid gap-8 p-5 md:p-8 lg:grid-cols-[0.9fr_1.4fr]">
        <div>
          <h3 className="font-display text-3xl tracking-[-0.03em] md:text-4xl">{meta.title}</h3>
          <p className="mt-4 max-w-[42ch] text-[16px] leading-relaxed text-mist">{meta.lead}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {meta.tech.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
          <p className="mt-6 font-mono text-[11px] text-mist">Демо-таблица. Синтетика, не клиент.</p>
        </div>

        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={`rounded-full px-3 py-1.5 font-mono text-[11px] transition-colors duration-[var(--dur-fast)] ${
                  filter === f.id ? "bg-volt text-ink" : "bg-white/6 text-mist hover:text-fog"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] text-left text-[13px]">
              <thead className="font-mono text-[11px] text-mist">
                <tr>
                  <th className="pb-3 font-medium">ID</th>
                  <th className="pb-3 font-medium">Клиент</th>
                  <th className="pb-3 font-medium">Статус</th>
                  <th className="pb-3 font-medium">Сумма</th>
                  <th className="pb-3 font-medium">ETA</th>
                </tr>
              </thead>
              <tbody>
                {rows.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-8 text-mist">
                      Нет строк в этом срезе. Выберите другой фильтр.
                    </td>
                  </tr>
                ) : (
                  rows.map((row) => (
                    <tr key={row.id} className="border-t border-white/6">
                      <td className="py-3 font-mono text-fog">{row.id}</td>
                      <td className="py-3">{row.client}</td>
                      <td className="py-3 font-mono">
                        <span
                          className={
                            row.status === "ok"
                              ? "text-ok"
                              : row.status === "warn"
                                ? "text-warn"
                                : "text-mist"
                          }
                        >
                          {statusLabel[row.status]}
                        </span>
                      </td>
                      <td className="py-3 tabular">{row.amount}</td>
                      <td className="py-3 text-mist">{row.eta}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-6 h-28">
            <BarChart items={[...channelBars]} />
          </div>
        </div>
      </div>
    </article>
  );
}
