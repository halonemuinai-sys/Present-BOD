import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { flowStages } from "./data";
import FlowSourceRow from "./FlowSourceRow";
import FlowStageBox from "./FlowStageBox";

function DownArrow() {
  return (
    <div className="flex justify-center py-1.5">
      <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}>
        <ArrowDown size={18} className="text-emerald-600" />
      </motion.div>
    </div>
  );
}

export default function DataFlowChain() {
  return (
    <div className="flex flex-col">
      <FlowSourceRow />
      <DownArrow />
      {flowStages.map((stage, i) => (
        <div key={stage.title}>
          <FlowStageBox data={stage} />
          {i < flowStages.length - 1 && <DownArrow />}
        </div>
      ))}
    </div>
  );
}
