import { motion, type Variants } from "framer-motion";
import { X } from "lucide-react";
import { colorClasses, type Layer } from "./types";

const grid: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const gridItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function LayerDetailModal({ layer, onClose }: { layer: Layer; onClose: () => void }) {
  const c = colorClasses[layer.color];

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-6 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="max-h-[85vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white p-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h3 className={`text-lg font-bold ${c.text}`}>{layer.panelTitle}</h3>
            <p className="text-sm text-slate-500">{layer.panelSubtitle}</p>
          </div>
          <button onClick={onClose} className="slide-nav-btn" aria-label="Close details">
            <X size={18} />
          </button>
        </div>

        {layer.items && (
          <motion.div
            variants={grid}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-3 gap-3 md:grid-cols-4"
          >
            {layer.items.map((item) => (
              <motion.div
                key={item.label}
                variants={gridItem}
                className={`flex flex-col items-center gap-1.5 rounded-lg border bg-white px-2 py-3 text-center ${c.border}`}
              >
                <item.icon size={20} className="text-slate-700" />
                <span className="text-xs font-medium leading-tight text-slate-700">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        )}

        {layer.groups && (
          <motion.div
            variants={grid}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 gap-3 md:grid-cols-4"
          >
            {layer.groups.map((group) => (
              <motion.div
                key={group.label}
                variants={gridItem}
                className={`rounded-lg border bg-white p-3 ${c.border}`}
              >
                <div className="mb-1 flex items-center gap-1.5">
                  <group.icon size={14} className={c.text} />
                  <span className="text-xs font-bold text-slate-800">{group.label}</span>
                </div>
                <ul className="space-y-0.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-[11px] leading-snug text-slate-500">
                      • {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        )}

        <div className={`mt-4 rounded-md py-2 text-center text-sm font-semibold text-white ${c.solid}`}>
          {layer.footer}
        </div>
      </motion.div>
    </motion.div>
  );
}
