"use client";

import { AlertCircle } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh] gap-4">
      <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center text-destructive">
        <AlertCircle className="w-8 h-8" />
      </div>
      <h2 className="text-xl font-bold text-white tracking-tight">Something went wrong!</h2>
      <p className="text-zinc-400 text-sm max-w-md text-center">
        We encountered an error loading your dashboard data. Please try again.
      </p>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
