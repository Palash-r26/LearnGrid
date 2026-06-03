import { Flame } from "lucide-react";

export function HeroTile() {
  return (
    <article className="h-full bg-card border border-white/5 rounded-3xl p-6 lg:p-8 flex flex-col justify-between overflow-hidden relative group">
      <div className="absolute top-0 right-0 -mr-8 -mt-8 w-48 h-48 bg-primary/20 blur-3xl rounded-full" />
      
      <div className="relative z-10 space-y-2">
        <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
          Welcome back, Alex! 👋
        </h2>
        <p className="text-zinc-400 text-sm lg:text-base">
          You have 3 assignments due this week. Keep up the good work!
        </p>
      </div>

      <div className="relative z-10 mt-8 flex items-center gap-3">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500/10 text-orange-500">
          <Flame className="w-6 h-6" />
        </div>
        <div>
          <p className="text-sm font-medium text-white">12 Day Streak!</p>
          <p className="text-xs text-zinc-400">Personal best is 14 days</p>
        </div>
      </div>
    </article>
  );
}
