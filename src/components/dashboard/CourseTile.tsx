"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

interface CourseTileProps {
  title: string;
  progress: number;
  iconName?: string;
}

export function CourseTile({ title, progress, iconName }: CourseTileProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    // Small delay to ensure the animation triggers after initial render
    const timer = setTimeout(() => {
      setAnimatedProgress(progress);
    }, 100);
    return () => clearTimeout(timer);
  }, [progress]);

  // Dynamically render icon from Lucide
  // @ts-ignore
  const IconComponent = iconName && LucideIcons[iconName] ? LucideIcons[iconName] : LucideIcons.BookOpen;

  return (
    <motion.article 
      whileHover={{ 
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      className="h-full bg-card border border-white/5 hover:border-primary/50 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)] transition-colors duration-300 rounded-3xl p-6 flex flex-col relative overflow-hidden group"
    >
      {/* Abstract Gradient Mesh/Grain Texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-overlay z-0" />
      <div className="absolute inset-0 bg-grid-white opacity-20 transition-opacity duration-300 group-hover:opacity-30 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background/0 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500 z-0" />
      
      <div className="relative z-10 flex items-center justify-between mb-4">
        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white group-hover:bg-primary/20 group-hover:text-primary transition-colors duration-300">
          <IconComponent className="w-5 h-5" />
        </div>
      </div>
      
      <div className="relative z-10 mt-auto">
        <h3 className="font-medium text-white mb-4 line-clamp-1 group-hover:text-primary-foreground transition-colors">{title}</h3>
        
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors">Progress</span>
            <span className="text-white font-medium">{progress}%</span>
          </div>
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"
              initial={{ width: 0 }}
              animate={{ width: `${animatedProgress}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
