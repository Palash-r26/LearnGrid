"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedToggleProps {
  isOn: boolean;
  onToggle: (state: boolean) => void;
  className?: string;
}

export function AnimatedToggle({ isOn, onToggle, className }: AnimatedToggleProps) {
  return (
    <button
      onClick={() => onToggle(!isOn)}
      className={cn(
        "flex w-12 h-6 rounded-full p-1 transition-colors duration-300 outline-none relative cursor-pointer",
        isOn ? "bg-primary" : "bg-white/10",
        className
      )}
      style={{ WebkitTapHighlightColor: "transparent" }}
      aria-pressed={isOn}
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        className="h-4 w-4 bg-white rounded-full shadow-sm relative z-10"
        style={{
          marginLeft: isOn ? "auto" : 0,
        }}
      />
      {isOn && (
        <div className="absolute inset-0 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)] bg-primary/20 pointer-events-none" />
      )}
    </button>
  );
}
