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
    <article className="min-w-0 overflow-hidden rounded-[var(--radius-panel)] bg-ink-2">
      <div className="grid min-w-0 gap-8 p-5 md:p-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)]">
        <div className="min-w-0">
          <h3 className="font-display text-3xl tracking-[-0.03em] break-words md:text-4xl">{meta.title}</h3>
          <p className="mt-4 max-w-[42ch] text-[16px] leading-relaxed text-mist">{meta.lead}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {meta.tech.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
          <p className="mt-6 font-mono text-[11px] text-mist">Демо-таблица. Синтетика, не клиент.</p>
        </div>

        <div className="min-w-0">
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

          <ul className="space-y-2 md:hidden">
            {rows.length === 0 ? (
              <li className="rounded-[var(--radius-control)] bg-ink px-3 py-8 text-center text-[13px] text-mist">
                Нет строк в этом срезе. Выберите другой фильтр.
              </li>
            ) : (
              rows.map((row) => (
                <li
                  key={row.id}
                  className="rounded-[var(--radius-control)] bg-ink px-3 py-3"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[12px] text-fog">{row.id}</span>
                    <span
                      className={`font-mono text-[11px] ${
                        row.status === "ok"
                          ? "text-ok"
                          : row.status === "warn"
                            ? "text-warn"
                            : "text-mist"
                      }`}
                    >
                      {statusLabel[row.status]}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[14px]">{row.client}</p>
                  <div className="mt-2 flex items-center justify-between font-mono text-[11px] text-mist">
                    <span className="tabular">{row.amount}</span>
                    <span>{row.eta}</span>
                  </div>
                </li>
              ))
            )}
          </ul>

          <div className="hidden min-w-0 overflow-x-auto md:block">
            <table className="w-full text-left text-[13px]">
              <thead className="font-mono text-[11px] text-mist">
                <tr>
                  <th className="pb-3 font-medium">ID</th>
                  <th className="pb-3 font-medium">Клиент</th>
                  <th className="pb-3 font-medium">Статус</th>
                  <th className="pb-3 pr-2 font-medium">Сумма</th>
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
                      <td className="py-3 whitespace-nowrap tabular">{row.amount}</td>
                      <td className="py-3 text-mist">{row.eta}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-6 h-28 min-w-0">
            <BarChart items={[...channelBars]} />
          </div>
        </div>
      </div>
    </article>
  );
}
