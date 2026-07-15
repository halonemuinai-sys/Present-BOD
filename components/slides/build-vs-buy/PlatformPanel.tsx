import { CheckCircle2, Hexagon, Star } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { platformPanel } from "./data";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
};

const row: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export default function PlatformPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="flex flex-1 flex-col overflow-hidden rounded-2xl text-white shadow-lg"
    >
      <div className="flex items-center justify-between gap-3 bg-gradient-to-br from-[#1f3a3d] to-[#2c4a4e] px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 text-green-300">
            <Hexagon size={20} />
          </div>
          <div>
            <span className="block text-xs font-bold uppercase tracking-widest text-white">
              {platformPanel.label}
            </span>
            <span className="block text-xs font-bold uppercase tracking-widest text-teal-200">
              {platformPanel.sublabel}
            </span>
          </div>
        </div>
        <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#2c4a4e]">
          <Star size={12} className="fill-amber-500 text-amber-500" />
          {platformPanel.badge}
        </span>
      </div>

      <div className="flex flex-1 flex-col bg-[#2c4a4e] px-6 pb-6 pt-2">
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {platformPanel.items.map((item, i) => (
            <motion.div
              key={item.title}
              variants={row}
              className={`flex items-center gap-3 py-2.5 ${i > 0 ? "border-t border-white/10" : ""}`}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/90 text-green-700">
                <item.icon size={16} />
              </div>
              <span className="flex flex-1 flex-wrap items-center justify-between gap-2">
                <span className="flex flex-wrap items-center gap-1.5 text-sm font-semibold">
                  {item.title} <span className="text-white/50">· {item.subtitle}</span>
                  {item.tools?.map((tool) => (
                    <a
                      key={tool.name}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={tool.name}
                      className="rounded-sm bg-white/90 p-0.5 opacity-80 transition-opacity hover:opacity-100"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://www.google.com/s2/favicons?domain=${tool.domain}&sz=64`}
                        alt={tool.name}
                        className="h-3.5 w-3.5 rounded-sm"
                      />
                    </a>
                  ))}
                </span>
                <span className="shrink-0 text-sm font-bold">{item.price}</span>
              </span>
            </motion.div>
          ))}
        </motion.div>

        <ul className="mt-3 flex flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-3">
          {platformPanel.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2 text-sm text-white/90">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-green-300" />
              {bullet}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex items-end justify-between border-t-2 border-white/30 pt-3">
          <span className="text-sm font-bold">Total</span>
          <div className="text-right">
            <span className="inline-block rounded-lg bg-green-400/15 px-3 py-1 text-3xl font-extrabold text-green-300 ring-1 ring-green-300/30">
              {platformPanel.total.price}
            </span>
            <span className="mt-1 block text-xs text-white/60">{platformPanel.total.note}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
