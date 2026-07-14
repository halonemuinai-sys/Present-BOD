import type { ComponentType } from "react";

export type Slide =
  | { type: "title"; id: string; heading: string; subheading?: string; meta?: string }
  | { type: "section"; id: string; heading: string; label?: string }
  | { type: "image"; id: string; src: string; alt: string; title?: string; caption?: string }
  | { type: "bullets"; id: string; heading: string; items: string[] }
  | { type: "closing"; id: string; heading: string; subheading?: string }
  // A one-off, hand-built slide (e.g. a dense diagram) that doesn't fit the generic data-driven types above.
  | { type: "diagram"; id: string; Component: ComponentType };
