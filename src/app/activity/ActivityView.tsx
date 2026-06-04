"use client";

import { AnimatedBarChart } from "@/components/ui/AnimatedBarChart";
import { BentoGrid, BentoTileWrapper } from "@/components/dashboard/BentoGrid";
import { motion } from "framer-motion";
import { Activity, Book, Target, Award } from "lucide-react";
import { Course } from "@/lib/types";

interface ActivityViewProps {
  courses: Course[];
}

export function ActivityView({ courses }: ActivityViewProps) {
  // Derive chart data from courses
  const chartData = courses.length > 0 
    ? courses.map(course => ({
        // Shorten long titles for the chart labels
        label: course.title.length > 15 ? course.title.substring(0, 12) + "..." : course.title,
        value: course.progress
      }))
    : [
        { label: "No Courses", value: 0 }
      ];

  // Derive stats from courses
  const totalCourses = courses.length;
  const completedCourses = courses.filter(c => c.progress === 100).length;
  const avgProgress = totalCourses > 0 
    ? Math.round(courses.reduce((acc, curr) => acc + curr.progress, 0) / totalCourses) 
    : 0;
  
  const stats = [
    { label: "Total Courses", value: totalCourses.toString(), icon: Book, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "Avg Progress", value: `${avgProgress}%`, icon: Activity, color: "text-purple-500", bg: "bg-purple-500/10" },
    { label: "Completed", value: completedCourses.toString(), icon: Target, color: "text-green-500", bg: "bg-green-500/10" },
    { label: "Active Streak", value: "Active", icon: Award, color: "text-orange-500", bg: "bg-orange-500/10" },
  ];

  return (
    <div className="flex flex-col gap-6 lg:gap-8 pb-8">
      <header>
        <h1 className="text-3xl font-bold text-white tracking-tight">Your Activity</h1>
        <p className="text-zinc-400 mt-2">Track your learning progress based on your courses.</p>
      </header>

      <BentoGrid>
        <BentoTileWrapper className="col-span-1 md:col-span-2 lg:col-span-3 row-span-2">
          <motion.article 
            className="h-full bg-card border border-white/5 rounded-3xl p-6 lg:p-8 flex flex-col relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background/0 to-transparent opacity-50" />
            
            <div className="relative z-10 mb-8">
              <h2 className="text-xl font-bold text-white">Course Progress Overview</h2>
              <p className="text-sm text-zinc-400">Your completion percentage per course</p>
            </div>
            
            <div className="relative z-10 flex-1 mt-auto">
              <AnimatedBarChart data={chartData} height={300} />
            </div>
          </motion.article>
        </BentoTileWrapper>

        {stats.map((stat, index) => (
          <BentoTileWrapper key={stat.label} className="col-span-1 row-span-1">
             <motion.article 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full bg-card border border-white/5 hover:border-white/10 transition-colors duration-300 rounded-3xl p-6 flex flex-col justify-between"
             >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color} mb-4`}>
                   <stat.icon className="w-6 h-6" />
                </div>
                <div>
                   <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                   <p className="text-sm text-zinc-400">{stat.label}</p>
                </div>
             </motion.article>
          </BentoTileWrapper>
        ))}
      </BentoGrid>
    </div>
  );
}
