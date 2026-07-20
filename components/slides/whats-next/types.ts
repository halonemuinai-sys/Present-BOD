import type { LucideIcon } from "lucide-react";

export type PillarStatus = "next" | "development";

export type PillarCard = { number: number; icon: LucideIcon; title: string; status: PillarStatus };
