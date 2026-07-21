import { motion } from "framer-motion";
import { ChevronDown, Database, Monitor } from "lucide-react";
import {
  limitationLabel,
  limitations,
  phase1Label,
  phase1OutputTitle,
  phase1Tagline,
  phase1Title,
} from "./data";
import RibbonTag from "./RibbonTag";
import SourceSystemsGrid from "./SourceSystemsGrid";
import OutputBox from "./OutputBox";
import BulletList from "./BulletList";

export default function Phase1Panel() {
  return (
    <div className="relative flex-1 rounded-2xl border border-slate-200 bg-white p-5 pt-7 shadow-sm">
      <RibbonTag label={phase1Label} bg="#d99a2b" />

      <div className="flex items-center gap-3">
        <motion.span
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(217, 154, 43, 0.4)",
              "0 0 0 8px rgba(217, 154, 43, 0)",
              "0 0 0 0 rgba(217, 154, 43, 0.4)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#d99a2b]"
        >
          <Database size={26} className="text-white" />
        </motion.span>
        <div>
          <h3 className="text-lg font-black text-[#101b3d] md:text-xl">{phase1Title}</h3>
        </div>
      </div>
      <p className="mt-2 text-xs italic text-slate-500">{phase1Tagline}</p>

      <div className="mt-4">
        <SourceSystemsGrid />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex justify-center py-2"
      >
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-[#d99a2b]" />
        </motion.div>
      </motion.div>

      <OutputBox icon={Monitor} title={phase1OutputTitle} />

      <div className="mt-4">
        <BulletList label={limitationLabel} items={limitations} variant="limitation" />
      </div>
    </div>
  );
}
