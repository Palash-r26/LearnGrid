export default function Loading() {
  return (
    <div className="flex flex-col gap-6 lg:gap-8 pb-8">
      <header>
        <div className="h-8 w-32 bg-white/5 rounded-md animate-pulse hidden md:block" />
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 auto-rows-[220px]">
        {/* Hero Tile Skeleton */}
        <article className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 bg-card border border-white/5 rounded-3xl p-6 lg:p-8 flex flex-col justify-between overflow-hidden">
          <div className="space-y-4">
            <div className="h-8 w-3/4 bg-white/5 rounded-md animate-pulse" />
            <div className="h-4 w-1/2 bg-white/5 rounded-md animate-pulse" />
          </div>
          <div className="flex items-center gap-3 mt-8">
            <div className="w-12 h-12 rounded-full bg-white/5 animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 w-24 bg-white/5 rounded-md animate-pulse" />
              <div className="h-3 w-32 bg-white/5 rounded-md animate-pulse" />
            </div>
          </div>
        </article>

        {/* Activity Tile Skeleton */}
        <article className="col-span-1 md:col-span-2 lg:col-span-1 row-span-1 bg-card border border-white/5 rounded-3xl p-6 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <div className="h-6 w-32 bg-white/5 rounded-md animate-pulse" />
            <div className="h-5 w-24 bg-white/5 rounded-full animate-pulse" />
          </div>
          <div className="flex-1 bg-white/5 rounded-lg animate-pulse" />
        </article>

        {/* Course Tiles Skeletons */}
        {[1, 2, 3].map((i) => (
          <article key={i} className="col-span-1 row-span-1 bg-card border border-white/5 rounded-3xl p-6 flex flex-col">
            <div className="w-10 h-10 rounded-xl bg-white/5 animate-pulse mb-4" />
            <div className="mt-auto space-y-4">
              <div className="h-5 w-3/4 bg-white/5 rounded-md animate-pulse" />
              <div className="space-y-2">
                <div className="flex justify-between">
                  <div className="h-3 w-16 bg-white/5 rounded-md animate-pulse" />
                  <div className="h-3 w-8 bg-white/5 rounded-md animate-pulse" />
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full animate-pulse" />
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
