import { createClient } from "@/lib/supabase";
import { Course } from "@/lib/types";
import { CoursesView } from "./CoursesView";

const fallbackCourses: Course[] = [
  { id: "1", title: "Advanced React Patterns", progress: 75, icon_name: "Code", created_at: new Date().toISOString() },
  { id: "2", title: "UI/UX Foundations", progress: 40, icon_name: "PenTool", created_at: new Date().toISOString() },
  { id: "3", title: "Database Architecture", progress: 15, icon_name: "Database", created_at: new Date().toISOString() },
  { id: "4", title: "System Design", progress: 100, icon_name: "Server", created_at: new Date().toISOString() },
  { id: "5", title: "Machine Learning 101", progress: 0, icon_name: "Brain", created_at: new Date().toISOString() },
];

export default async function CoursesPage() {
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

  // If DB returns empty, just use fallback for demo purposes
  if (courses.length === 0) courses = fallbackCourses;

  return (
    <div className="w-full h-full">
      <CoursesView initialCourses={courses} />
    </div>
  );
}
