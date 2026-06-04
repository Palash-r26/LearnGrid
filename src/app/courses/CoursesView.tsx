"use client";

import { useState } from "react";
import { Course } from "@/lib/types";
import { AnimatedTabs } from "@/components/ui/AnimatedTabs";
import { BentoGrid, BentoTileWrapper } from "@/components/dashboard/BentoGrid";
import { CourseTile } from "@/components/dashboard/CourseTile";

interface CoursesViewProps {
  initialCourses: Course[];
}

const TABS = ["All", "In Progress", "Completed"];

export function CoursesView({ initialCourses }: CoursesViewProps) {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  const filteredCourses = initialCourses.filter((course) => {
    if (activeTab === "All") return true;
    if (activeTab === "In Progress") return course.progress > 0 && course.progress < 100;
    if (activeTab === "Completed") return course.progress === 100;
    return true;
  });

  return (
    <div className="flex flex-col gap-6 lg:gap-8 pb-8">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-white tracking-tight">Your Courses</h1>
        <AnimatedTabs
          tabs={TABS}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </header>

      {/* Re-using BentoGrid for layout but we can adjust to a pure grid if we want */}
      <BentoGrid>
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <BentoTileWrapper key={course.id} className="col-span-1 row-span-1">
              <CourseTile
                title={course.title}
                progress={course.progress}
                iconName={course.icon_name}
              />
            </BentoTileWrapper>
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-zinc-400">
            No courses found in this category.
          </div>
        )}
      </BentoGrid>
    </div>
  );
}
