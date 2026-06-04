"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTabsProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
  className?: string;
}

export function AnimatedTabs({ tabs, activeTab, setActiveTab, className }: AnimatedTabsProps) {
  return (
    <div className={cn("flex space-x-1 p-1 bg-white/5 backdrop-blur-md rounded-2xl w-fit border border-white/10", className)}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={cn(
            "relative px-4 py-2 text-sm font-medium rounded-xl transition-colors outline-none",
            activeTab === tab ? "text-white" : "text-zinc-400 hover:text-white/80"
          )}
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          {activeTab === tab && (
            <motion.div
              layoutId="bubble"
              className="absolute inset-0 bg-primary/20 border border-primary/50 shadow-[0_0_15px_rgba(168,85,247,0.3)] rounded-xl"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{tab}</span>
        </button>
      ))}
    </div>
  );
}
