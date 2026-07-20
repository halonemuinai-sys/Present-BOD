import { motion, type Variants } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export default function BulletList({
  label,
  items,
  variant,
}: {
  label: string;
  items: string[];
  variant: "limitation" | "advantage";
}) {
  const color = variant === "limitation" ? "#d99a2b" : "#15803d";
  const Icon = variant === "limitation" ? XCircle : CheckCircle2;

  return (
    <div>
      <p
        className="mb-2 border-b border-slate-100 pb-1.5 text-[11px] font-black uppercase tracking-wide"
        style={{ color }}
      >
        {label}
      </p>
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col divide-y divide-slate-100"
      >
        {items.map((text) => (
          <motion.li
            key={text}
            variants={item}
            whileHover={{ x: 3 }}
            className="flex items-start gap-2.5 py-2 text-xs font-semibold leading-snug text-[#101b3d] md:text-sm"
          >
            <Icon size={15} className="mt-0.5 shrink-0" style={{ color }} />
            {text}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
