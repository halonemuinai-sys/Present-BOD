import type { LucideIcon } from "lucide-react";

export default function OutputBox({ icon: Icon, title }: { icon: LucideIcon; title: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border-2 border-[#d99a2b] bg-amber-50/60 px-4 py-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d99a2b]">
        <Icon size={17} className="text-white" />
      </span>
      <p className="text-sm font-black leading-tight text-[#101b3d] md:text-base">{title}</p>
    </div>
  );
}
