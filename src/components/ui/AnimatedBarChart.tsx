"use client";

import { motion, Variants } from "framer-motion";
import { useMemo } from "react";

interface DataPoint {
  label: string;
  value: number;
}

interface AnimatedBarChartProps {
  data: DataPoint[];
  height?: number;
}

export function AnimatedBarChart({ data, height = 250 }: AnimatedBarChartProps) {
  const maxValue = useMemo(() => Math.max(...data.map((d) => d.value), 1), [data]);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item: Variants = {
    hidden: { height: 0, opacity: 0 },
    show: (val: number) => ({
      height: `${(val / maxValue) * 100}%`,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    }),
  };

  return (
    <div className="w-full flex flex-col justify-end" style={{ height }}>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex-1 flex items-end justify-between gap-2 border-b border-white/10 pb-2 relative"
      >
        {/* Y-axis grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          {[100, 75, 50, 25, 0].map((percent) => (
            <div key={percent} className="w-full border-t border-white/5 h-[1px]" />
          ))}
        </div>

        {data.map((d, i) => (
          <div key={i} className="flex flex-col items-center flex-1 h-full justify-end group z-10">
            <motion.div
              custom={d.value}
              variants={item}
              className="w-full max-w-[40px] bg-primary/40 rounded-t-md relative group-hover:bg-primary transition-colors duration-300"
            >
              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {d.value} hrs
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>
      <div className="flex justify-between mt-2 px-1">
        {data.map((d, i) => (
          <span key={i} className="text-xs text-zinc-400 flex-1 text-center truncate">
            {d.label}
          </span>
        ))}
      </div>
    </div>
  );
}
