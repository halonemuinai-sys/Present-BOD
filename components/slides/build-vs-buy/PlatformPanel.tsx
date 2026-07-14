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
      className="flex flex-1 flex-col rounded-2xl bg-[#2c4a4e] p-6 text-white shadow-lg"
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-widest text-teal-200">
          {platformPanel.label}
        </span>
        <span className="rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#2c4a4e]">
          {platformPanel.badge}
        </span>
      </div>

      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {platformPanel.items.map((item, i) => (
          <motion.div
            key={item.title}
            variants={row}
            className={`flex items-center justify-between gap-4 py-2.5 ${i > 0 ? "border-t border-white/10" : ""}`}
          >
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
          </motion.div>
        ))}
      </motion.div>

      <ul className="mt-3 flex flex-col gap-1.5 border-t border-white/10 pt-3">
        {platformPanel.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2 text-sm text-white/85">
            <span className="mt-0.5 shrink-0 text-teal-300">+</span>
            {bullet}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-end justify-between border-t-2 border-white/30 pt-3">
        <span className="text-sm font-bold">Total</span>
        <div className="text-right">
          <span className="block text-2xl font-extrabold">{platformPanel.total.price}</span>
          <span className="text-xs text-white/60">{platformPanel.total.note}</span>
        </div>
      </div>
    </motion.div>
  );
}
