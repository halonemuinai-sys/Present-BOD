import { CheckCircle2, CircleCheck, Database } from "lucide-react";
import { costChartMax, costChartTicks, platformOption } from "./data";
import CostProjectionLineChart from "./CostProjectionLineChart";
import ProjectionSection from "./ProjectionSection";

export default function PlatformOption() {
  const o = platformOption;
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl shadow-sm">
      <div className="flex items-center justify-between gap-4 bg-emerald-800 px-4 py-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
            <Database size={18} />
          </div>
          <div>
            <span className="rounded bg-emerald-300 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-950">
              {o.badge}
            </span>
            <p className="mt-0.5 text-xs font-bold leading-tight text-white">{o.title}</p>
            <p className="text-[10px] text-emerald-100">{o.subtitle}</p>
          </div>
        </div>
        <div className="hidden shrink-0 rounded-lg border border-white/15 bg-white/5 px-2.5 py-1.5 text-right sm:block">
          <p className="text-[9px] uppercase tracking-wide text-white/60">{o.techStackLabel}</p>
          <p className="text-[10px] font-semibold leading-snug text-white">
            {o.techStack.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 border border-t-0 border-slate-200 bg-white p-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {o.cards.map((card) => (
            <div key={card.label} className="rounded-lg border border-slate-200 bg-slate-50 p-3 shadow-sm">
              <p className="text-[10px] font-extrabold uppercase tracking-wide text-emerald-800">{card.label}</p>
              <p className="text-[10px] text-slate-400">{card.sub}</p>
              <p className="mt-1 text-sm font-extrabold text-emerald-700">{card.value}</p>
              {card.isTagList ? (
                <ul className="mt-2 space-y-1 text-center">
                  {card.items.map((it) => (
                    <li key={it} className="text-[11px] font-semibold text-emerald-700">
                      {it}
                    </li>
                  ))}
                </ul>
              ) : (
                <>
                  <p className="mt-2 text-[10px] font-semibold text-slate-400">Includes:</p>
                  <ul className="mt-1 space-y-1">
                    {card.items.map((it) => (
                      <li key={it} className="flex items-start gap-1.5 text-[11px] leading-snug text-slate-600">
                        <CheckCircle2 size={12} className="mt-0.5 shrink-0 text-emerald-600" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>

        <ProjectionSection
          title="5-Year Cost Projection (IDR)"
          titleColor="text-emerald-800"
          chart={
            <CostProjectionLineChart
              points={o.projection}
              max={costChartMax}
              ticks={costChartTicks}
              lineColor="#059669"
            />
          }
          calloutIcon={CircleCheck}
          calloutColor="emerald"
          calloutTitle={o.successTitle}
          calloutPoints={o.successPoints}
        />
      </div>
    </div>
  );
}
