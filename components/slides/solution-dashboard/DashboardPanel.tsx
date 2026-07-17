import { motion, type Variants } from "framer-motion";
import { dashboardLabel, dashboardSubtitle, kpiTiles } from "./data";
import KpiTile from "./KpiTile";
import ChartCard from "./ChartCard";
import RevenueTrendChart from "./RevenueTrendChart";
import NpbtChart from "./NpbtChart";
import TopUnitList from "./TopUnitList";
import EarlyWarningAlert from "./EarlyWarningAlert";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
};

export default function DashboardPanel() {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-sm">
      <p className="text-sm font-black uppercase text-[#101b3d] md:text-base">{dashboardLabel}</p>
      <p className="mt-1 text-xs text-slate-500">{dashboardSubtitle}</p>

      <div className="mt-4 flex flex-1 flex-col gap-3 rounded-xl bg-[#0b1530] p-3.5">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-2 sm:grid-cols-4"
        >
          {kpiTiles.map((t) => (
            <KpiTile key={t.label} data={t} />
          ))}
        </motion.div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
          <ChartCard title="Revenue Trend (YTD)">
            <RevenueTrendChart />
          </ChartCard>
          <ChartCard title="NPBT (YTD)">
            <NpbtChart />
          </ChartCard>
          <ChartCard title="Top Performing Unit (YTD)">
            <TopUnitList />
          </ChartCard>
        </div>

        <EarlyWarningAlert />
      </div>
    </div>
  );
}
