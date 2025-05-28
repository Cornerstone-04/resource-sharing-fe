import type { ReactNode } from "react";

export default function StatCard({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: number;
}) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-800 border rounded-lg shadow-sm">
      <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
        {icon}
      </div>
      <div>
        <div className="text-xl font-bold">{value}</div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}
