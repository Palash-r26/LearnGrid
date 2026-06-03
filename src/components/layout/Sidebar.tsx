"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { LayoutDashboard, BookOpen, Activity, Settings, Menu } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Courses", href: "/courses", icon: BookOpen },
  { name: "Activity", href: "/activity", icon: Activity },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // For mobile menu

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
      <nav
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col w-64 bg-card/50 backdrop-blur-xl border-r border-white/5 transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:w-20 lg:w-64",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-6">
          <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent md:hidden lg:block">
            LearnGrid
          </span>
          <div className="hidden md:flex lg:hidden items-center justify-center w-full">
            <span className="font-bold text-xl">L</span>
          </div>
        </div>

        <div className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
                onClick={() => setIsOpen(false)}
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
                    "w-5 h-5 relative z-10",
                    isActive ? "text-white" : "text-zinc-400 group-hover:text-white transition-colors"
                  )}
                />
                <span
                  className={cn(
                    "relative z-10 md:hidden lg:block",
                    isActive ? "text-white" : "text-zinc-400"
                  )}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

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
