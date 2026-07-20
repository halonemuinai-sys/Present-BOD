"use client";

import { useState } from "react";
import { timeline2026Tracks } from "./data";
import Timeline2026MonthHeader from "./Timeline2026MonthHeader";
import Timeline2026Row from "./Timeline2026Row";
import Timeline2026Legend from "./Timeline2026Legend";
import Timeline2026Modal from "./Timeline2026Modal";
import type { Timeline2026Track } from "./types";

export default function Timeline2026() {
  const [selected, setSelected] = useState<Timeline2026Track | null>(null);

  return (
    <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
      <Timeline2026MonthHeader />

      <div className="mt-2 flex flex-col">
        {timeline2026Tracks.map((track, i) => (
          <div
            key={track.number}
            className={i === 5 ? "border-t border-dashed border-slate-200 pt-1" : ""}
          >
            <Timeline2026Row track={track} onOpen={setSelected} />
          </div>
        ))}
      </div>

      <Timeline2026Legend />

      <Timeline2026Modal track={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
