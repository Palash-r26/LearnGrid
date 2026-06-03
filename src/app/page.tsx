import { HeroTile } from "@/components/dashboard/HeroTile";
import { ActivityTile } from "@/components/dashboard/ActivityTile";
import { CourseTile } from "@/components/dashboard/CourseTile";
import { BentoGrid, BentoTileWrapper } from "@/components/dashboard/BentoGrid";
import { createClient } from "@/lib/supabase";
import { Course } from "@/lib/types";

// Fallback mock data in case Supabase connection fails
const fallbackCourses: Course[] = [
  { id: "1", title: "Advanced React Patterns", progress: 75, icon_name: "Code", created_at: new Date().toISOString() },
  { id: "2", title: "UI/UX Foundations", progress: 40, icon_name: "PenTool", created_at: new Date().toISOString() },
  { id: "3", title: "Database Architecture", progress: 15, icon_name: "Database", created_at: new Date().toISOString() },
];

export default async function Dashboard() {
  let courses: Course[] = [];
  
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error("Supabase Error:", error.message);
      courses = fallbackCourses;
    } else {
      courses = data as Course[];
    }
  } catch (error) {
    console.error("Supabase Connection Error:", error);
    courses = fallbackCourses;
  }

  return (
    <div className="flex flex-col gap-6 lg:gap-8 pb-8">
      <header>
        <h1 className="text-2xl font-bold text-white tracking-tight hidden md:block">Overview</h1>
      </header>

      <BentoGrid>
        <BentoTileWrapper className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1">
          <HeroTile />
        </BentoTileWrapper>
        
        <BentoTileWrapper className="col-span-1 md:col-span-2 lg:col-span-1 row-span-1">
          <ActivityTile />
        </BentoTileWrapper>

        {courses.map((course) => (
          <BentoTileWrapper key={course.id} className="col-span-1 row-span-1">
            <CourseTile
              title={course.title}
              progress={course.progress}
              iconName={course.icon_name}
            />
          </BentoTileWrapper>
        ))}
      </BentoGrid>
    </div>
  );
}
