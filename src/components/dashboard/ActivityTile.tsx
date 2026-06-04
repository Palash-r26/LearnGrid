export function ActivityTile() {
  // Generate random data for mock contribution graph
  const days = Array.from({ length: 7 * 12 }).map((_, i) => ({
    id: i,
    level: Math.floor(Math.random() * 4), // 0 to 3
  }));

  const getBgColor = (level: number) => {
    switch (level) {
      case 1: return "bg-primary/30";
      case 2: return "bg-primary/60";
      case 3: return "bg-primary";
      default: return "bg-white/5";
    }
  };

  return (
    <article 
      className="h-full bg-card border border-white/5 rounded-3xl p-6 flex flex-col relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-overlay z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-background/0 to-transparent opacity-50 z-0" />
      
      <div className="flex justify-between items-center mb-6 relative z-10">
        <h3 className="text-lg font-medium text-white">Learning Activity</h3>
        <span className="text-xs text-zinc-400 bg-white/5 px-2 py-1 rounded-full">Last 3 Months</span>
      </div>
      
      <div className="flex-1 flex flex-col justify-center relative z-10">
        <div className="grid grid-flow-col grid-rows-7 gap-1.5 overflow-hidden">
          {days.map((day) => (
            <div
              key={day.id}
              className={`w-3 h-3 rounded-[2px] ${getBgColor(day.level)} transition-colors duration-300`}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
