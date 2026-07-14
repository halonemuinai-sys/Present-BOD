import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { colorClasses, type Layer } from "./types";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 22 } },
};

export default function LayerCard({
  layer,
  index,
  onOpen,
}: {
  layer: Layer;
  index: number;
  onOpen: () => void;
}) {
  const c = colorClasses[layer.color];

  return (
    <motion.button
      type="button"
      variants={cardVariants}
      onClick={onOpen}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      className={`flex flex-1 cursor-pointer flex-col gap-4 rounded-3xl border border-slate-100 bg-white p-7 text-left shadow-md transition-shadow duration-300 hover:shadow-xl ${c.hoverShadow}`}
    >
      <div className="flex items-center justify-between">
        <span className={`text-sm font-bold ${c.text}`}>{String(index + 1).padStart(2, "0")}</span>
        {layer.scope && (
          <span className="flex items-center gap-1.5 rounded-full border border-slate-100 bg-white px-3 py-1.5 shadow-sm">
            {layer.scope.logoSrc ? (
              <Image
                src={layer.scope.logoSrc}
                alt={layer.scope.label}
                width={96}
                height={26}
                className="h-4 w-auto object-contain"
              />
            ) : (
              <>
                <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
                <span className="text-xs font-bold text-slate-600">{layer.scope.label}</span>
              </>
            )}
          </span>
        )}
      </div>

      <motion.div
        whileHover={{ rotate: 6, scale: 1.08 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br text-white shadow-md ${c.gradient}`}
      >
        <layer.icon size={28} />
      </motion.div>

      <div>
        <span className={`text-xs font-bold uppercase tracking-wide ${c.text}`}>{layer.eyebrow}</span>
        <h2 className="mt-0.5 text-xl font-bold text-slate-900">{layer.system}</h2>
        <span className={`mt-2 block h-0.5 w-8 rounded-full ${c.dot}`} />
      </div>

      <p className="text-sm leading-snug text-slate-600">{layer.message}</p>

      <ul className="space-y-2">
        {layer.highlights.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
            <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${c.dot}`} />
            {item}
          </li>
        ))}
      </ul>

      <div className={`mt-auto flex items-center gap-2 rounded-xl px-4 py-3 ${c.bg}`}>
        <layer.analogyIcon size={18} className={c.text} />
        <span className={`flex-1 text-sm font-bold ${c.text}`}>{layer.analogy}</span>
        <ChevronRight size={16} className={c.text} />
      </div>
    </motion.button>
  );
}
