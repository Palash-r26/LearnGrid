"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { LayoutDashboard, BookOpen, Activity, Settings, Menu, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Courses", href: "/courses", icon: BookOpen },
  { name: "Activity", href: "/activity", icon: Activity },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // For mobile menu
  const [isCollapsed, setIsCollapsed] = useState(false); // For desktop sidebar collapse

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-white/10 bg-background">
        <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
          LearnGrid
        </span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-white/5 rounded-md transition-colors"
        >
          <Menu className="w-5 h-5 text-white/70" />
        </button>
      </div>

      {/* Sidebar Container */}
      <motion.nav
        initial={false}
        animate={{
          width: isCollapsed ? 80 : 256, // 80px = w-20, 256px = w-64
        }}
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col bg-card/50 backdrop-blur-xl border-r border-white/5 transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static",
          isOpen ? "translate-x-0 w-64" : "-translate-x-full w-64 md:w-auto"
        )}
      >
        <div className="flex items-center justify-between p-6 h-20">
          {!isCollapsed && (
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="font-bold text-xl tracking-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent md:hidden lg:block whitespace-nowrap overflow-hidden"
            >
              LearnGrid
            </motion.span>
          )}
          
          {(isCollapsed || (!isCollapsed && false)) && (
            <div className="hidden md:flex items-center justify-center w-full">
              <span className="font-bold text-xl">L</span>
            </div>
          )}

          {/* Desktop Collapse Toggle */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden md:flex absolute -right-3 top-6 bg-primary text-white rounded-full p-1 shadow-[0_0_10px_rgba(168,85,247,0.5)] hover:scale-110 transition-transform z-50"
          >
            {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        <div className="flex-1 px-4 py-6 space-y-2 overflow-hidden">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  isCollapsed ? "justify-center" : ""
                )}
                onClick={() => setIsOpen(false)}
                title={isCollapsed ? item.name : undefined}
              >
                {/* Active Highlight Animation */}
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active-indicator"
                    className="absolute inset-0 bg-white/10 rounded-lg"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
                
                <item.icon
                  className={cn(
                    "w-5 h-5 flex-shrink-0 relative z-10",
                    isActive ? "text-white" : "text-zinc-400 group-hover:text-white transition-colors"
                  )}
                />
                
                {!isCollapsed && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    className={cn(
                      "relative z-10 whitespace-nowrap md:hidden lg:block",
                      isActive ? "text-white" : "text-zinc-400"
                    )}
                  >
                    {item.name}
                  </motion.span>
                )}
              </Link>
            );
          })}
        </div>
      </motion.nav>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

