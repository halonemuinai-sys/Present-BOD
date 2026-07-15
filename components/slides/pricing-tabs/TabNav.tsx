import { motion } from "framer-motion";
import { tabs } from "./data";
import type { TabId } from "./types";

export default function TabNav({
  active,
  onChange,
}: {
  active: TabId;
  onChange: (id: TabId) => void;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-2 rounded-2xl bg-slate-100 p-1.5">
      {tabs.map((tab) => {
        const isActive = tab.id === active;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={`relative flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold transition-colors ${
              isActive ? "text-white" : "text-slate-500 hover:text-slate-800"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="pricing-tab-active"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                className="absolute inset-0 rounded-xl bg-[#1e3a5f]"
              />
            )}
            <tab.icon size={14} className="relative" />
            <span className="relative">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
