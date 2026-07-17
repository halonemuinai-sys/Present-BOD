import { ArrowDown, TriangleAlert } from "lucide-react";
import { costChartMax, costChartTicks, netsuiteOption } from "./data";
import CostProjectionBarChart from "./CostProjectionBarChart";
import ProjectionSection from "./ProjectionSection";

export default function NetsuiteOption() {
  const o = netsuiteOption;
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl shadow-sm">
      <div className="flex items-center justify-between gap-4 bg-[#101b3d] px-4 py-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white p-1.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://www.google.com/s2/favicons?domain=${o.vendorDomain}&sz=64`}
              alt={o.vendorName}
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="rounded bg-blue-600 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                {o.badge}
              </span>
              <span className="text-[11px] font-bold uppercase leading-tight text-white">{o.title}</span>
            </div>
            <p className="mt-0.5 text-sm font-black italic tracking-tight text-white">{o.vendorName}</p>
          </div>
        </div>
        <div className="hidden shrink-0 rounded-lg border border-white/15 bg-white/5 px-2.5 py-1.5 text-right sm:block">
          <p className="text-[9px] uppercase tracking-wide text-white/50">{o.rateLabel}</p>
          <p className="text-xs font-bold text-white">{o.rateValue}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 border border-t-0 border-slate-200 bg-white p-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch">
          <div className="flex-1">
            <p className="mb-2 text-xs font-extrabold uppercase tracking-wide text-[#101b3d]">
              Estimated Effort Breakdown
            </p>
            <div className="overflow-hidden rounded-lg border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-slate-500">
                  <tr>
                    <th className="w-9 px-3 py-2 text-left text-xs font-semibold">#</th>
                    <th className="px-3 py-2 text-left text-xs font-semibold">Activity</th>
                    <th className="w-24 px-3 py-2 text-right text-xs font-semibold">Man Days (MD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {o.effortRows.map((row) => (
                    <tr key={row.no}>
                      <td className="px-3 py-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#101b3d] text-[10px] font-bold text-white">
                          {row.no}
                        </span>
                      </td>
                      <td className="px-3 py-2 text-slate-700">{row.activity}</td>
                      <td className="px-3 py-2 text-right font-semibold text-slate-800">{row.days} MD</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-slate-300 bg-slate-50 font-extrabold text-slate-900">
                    <td colSpan={2} className="px-3 py-2">
                      Total Effort
                    </td>
                    <td className="px-3 py-2 text-right">{o.totalDays} MD</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex w-full shrink-0 flex-col justify-center rounded-lg border border-slate-200 bg-slate-50 px-5 py-4 text-center shadow-sm sm:w-56">
            <p className="text-xs font-extrabold uppercase tracking-wide text-[#101b3d]">Cost Impact (One Time)</p>
            <p className="mt-2 text-lg font-extrabold leading-tight text-slate-900">{o.costImpact.days}</p>
            <p className="text-sm font-semibold leading-tight text-slate-500">x {o.costImpact.rate}</p>
            <div className="my-2 h-px w-full bg-slate-300" />
            <p className="text-base font-extrabold text-slate-900">{o.costImpact.usd}</p>
            <ArrowDown size={16} className="mx-auto my-1.5 text-[#101b3d]" />
            <p className="text-2xl font-extrabold leading-tight text-red-600">{o.costImpact.idr}</p>
            <p className="mt-2 text-[10px] italic leading-snug text-slate-400">{o.costImpact.note}</p>
          </div>
        </div>

        <ProjectionSection
          title="5-Year Cost Projection (IDR)"
          titleColor="text-[#101b3d]"
          chart={
            <CostProjectionBarChart
              points={o.projection}
              max={costChartMax}
              ticks={costChartTicks}
              barColor="bg-[#101b3d]"
            />
          }
          calloutIcon={TriangleAlert}
          calloutColor="red"
          calloutTitle={o.warningTitle}
          calloutPoints={o.warningPoints}
        />
      </div>
    </div>
  );
}
