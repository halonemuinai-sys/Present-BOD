import { motion, type Variants } from "framer-motion";
import { ambitionBullets, ambitionLabel, ambitionTagline, ambitionTitle } from "./data";

const list: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
};

const row: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export default function AmbitionPanel() {
  return (
    <div className="flex flex-col text-center">
      <p className="text-xs font-black uppercase tracking-widest text-[#101b3d]">{ambitionLabel}</p>
      <div className="mx-auto mt-2 h-0.5 w-14 bg-[#d99a2b]" />

      <h2 className="mt-4 text-3xl font-black uppercase leading-[0.95] tracking-tight md:text-4xl">
        <span className="text-[#101b3d]">{ambitionTitle[0]}</span>
        <br />
        <span className="text-[#d99a2b]">{ambitionTitle[1]}</span>
        <br />
        <span className="text-[#d99a2b]">{ambitionTitle[2]}</span>
      </h2>

      <div className="mx-auto mt-4 h-0.5 w-14 bg-[#d99a2b]" />
      <p className="mt-4 text-sm font-semibold text-[#101b3d]">{ambitionTagline}</p>

      <motion.ul variants={list} initial="hidden" animate="visible" className="mt-6 flex flex-col gap-4 text-left">
        {ambitionBullets.map((b) => (
          <motion.li key={b.title} variants={row} className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#101b3d]">
              <b.icon size={19} className="text-white" />
            </span>
            <span>
              <span className="block text-sm font-bold leading-tight text-[#101b3d]">{b.title}</span>
              <span className="block text-xs leading-tight text-slate-500">{b.text}</span>
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
