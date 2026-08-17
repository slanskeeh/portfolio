import { Metric } from "@/components/charts/Metric";
import { LineChart } from "@/components/charts/LineChart";
import { RadialChart } from "@/components/charts/RadialChart";
import { TiltFrame } from "@/components/hero/TiltFrame";
import { Badge } from "@/components/ui/Badge";
import { hydration, renderSeries, routes, vitals } from "@/data/demo-metrics";

const statusTone = {
  ok: "text-ok",
  warn: "text-warn",
} as const;

export function InstrumentCluster() {
  return (
    <TiltFrame className="relative overflow-hidden rounded-[var(--radius-panel)] bg-ink-2 shadow-[0_18px_50px_rgba(8,10,18,0.55)] transition-transform duration-[var(--dur-med)] ease-[var(--ease-out-expo)] will-change-transform">
      <div className="flex items-center justify-between px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-volt" />
          <span className="font-mono text-[11px] text-mist">LIVE DEMO</span>
          <Badge>синтетика</Badge>
        </div>
        <span className="font-mono text-[11px] text-mist tabular">124 fps</span>
      </div>

      <div className="grid grid-cols-3 gap-px bg-white/6">
        {vitals.map((v) => (
          <div key={v.id} className="bg-ink-2 px-2 py-3 sm:px-3 md:px-4">
            <Metric label={v.label} value={v.value} unit={v.unit} hint={v.hint} />
          </div>
        ))}
      </div>

      <div className="px-4 pb-1 pt-4">
        <div className="mb-1.5 flex items-center justify-between">
          <span className="font-mono text-[11px] text-mist">render budget</span>
          <span className="font-mono text-[11px] text-volt tabular">41 ms</span>
        </div>
        <div className="h-[88px]">
          <LineChart values={[...renderSeries]} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-px bg-white/6 sm:grid-cols-[1.3fr_0.9fr]">
        <div className="bg-ink-2 px-4 py-3">
          <div className="mb-2 font-mono text-[11px] text-mist">routes</div>
          <ul className="space-y-1.5">
            {routes.map((row) => (
              <li
                key={row.path}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-3 font-mono text-[12px]"
              >
                <span className="text-fog">{row.path}</span>
                <span className={statusTone[row.status]}>
                  {row.status === "ok" ? "ok" : "warn"}
                </span>
                <span className="text-mist tabular">{row.load}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-ink-2 px-3 py-3">
          <RadialChart value={hydration} label="hydration" className="mx-auto h-[120px] w-[120px]" />
        </div>
      </div>
    </TiltFrame>
  );
}
