import { Layers } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { saasPanel } from "./data";
import { itemColorClasses } from "./types";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const row: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export default function SaasPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-1 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
            <Layers size={20} />
          </div>
          <div>
            <span className="block text-xs font-bold uppercase tracking-widest text-orange-700">
              {saasPanel.label}
            </span>
            <span className="block text-xs font-bold uppercase tracking-widest text-slate-400">
              {saasPanel.sublabel}
            </span>
          </div>
        </div>
        <span className="shrink-0 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-orange-700">
          {saasPanel.note}
        </span>
      </div>

      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {saasPanel.items.map((item, i) => {
          const c = itemColorClasses[item.color];
          return (
            <motion.div
              key={item.title}
              variants={row}
              className={`flex items-start gap-3 py-3 ${i > 0 ? "border-t border-slate-100" : ""}`}
            >
              <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${c.bg} ${c.text}`}>
                <item.icon size={16} />
              </div>
              <div className="flex flex-1 items-start justify-between gap-4">
                <div>
                  <span className="block text-sm font-bold text-slate-900">{item.title}</span>
                  <div className="mt-0.5 flex items-center gap-1.5">
                    <span className="text-xs text-slate-400">{item.subtitle}</span>
                    {item.tools && (
                      <span className="flex items-center gap-1">
                        {item.tools.map((tool) => (
                          <a
                            key={tool.name}
                            href={tool.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={tool.name}
                            className="opacity-70 transition-opacity hover:opacity-100"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={`https://www.google.com/s2/favicons?domain=${tool.domain}&sz=64`}
                              alt={tool.name}
                              className="h-4 w-4 rounded-sm"
                            />
                          </a>
                        ))}
                      </span>
                    )}
                  </div>
                </div>
                <span className="shrink-0 text-sm font-bold text-slate-700">{item.price}</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="mt-3 flex items-end justify-between border-t-2 border-slate-800 pt-3">
        <span className="text-sm font-bold text-slate-900">Total</span>
        <div className="text-right">
          <span className="block text-2xl font-extrabold text-amber-700">{saasPanel.total.price}</span>
          <span className="text-xs text-slate-400">{saasPanel.total.note}</span>
        </div>
      </div>
    </motion.div>
  );
}
