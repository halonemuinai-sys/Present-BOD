import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Band } from "./types";
import { colorClasses } from "./types";

const rowVariants: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 240, damping: 24 } },
};

export default function BandRow({ band }: { band: Band }) {
  const c = colorClasses[band.color];

  return (
    <motion.div variants={rowVariants} className="flex items-center gap-3">
      <div
        className={`flex flex-1 items-stretch overflow-hidden rounded-2xl border ${c.border} ${c.bg}`}
      >
        <div
          className={`flex w-40 shrink-0 flex-col justify-center py-4 pl-5 pr-8 text-white ${c.solid}`}
          style={{ clipPath: "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)" }}
        >
          <span className="text-3xl font-extrabold leading-none">{band.number}</span>
          <span className="mt-1 text-xs font-bold uppercase leading-tight tracking-wide">
            {band.title}
          </span>
        </div>

        <div className="flex flex-1 flex-wrap items-center justify-around gap-4 px-6 py-4">
          {band.brand && (
            <div className="flex flex-col items-start gap-0 pr-4">
              <span className="text-xs font-bold tracking-wider text-red-700">ORACLE</span>
              <span className="text-2xl font-bold tracking-tight text-slate-900">{band.brand}</span>
            </div>
          )}
          {band.items.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-1.5 text-center">
              <item.icon size={26} className={c.text} />
              <span className="max-w-[6rem] text-xs font-medium leading-tight text-slate-700">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="hidden shrink-0 md:block"
      >
        <ArrowRight size={26} className={c.text} />
      </motion.div>
    </motion.div>
  );
}
