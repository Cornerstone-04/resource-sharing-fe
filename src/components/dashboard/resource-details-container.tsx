import type { ReactNode } from "react";

export default function RecourceDetailsContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="fixed h-screen inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="relative bg-white dark:bg-zinc-900 rounded-lg max-w-5xl w-full max-h-[95vh] overflow-y-auto p-6 shadow-lg">
        {children}
      </div>
    </div>
  );
}
