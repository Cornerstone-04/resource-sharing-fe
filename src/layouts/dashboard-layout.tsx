import { type ReactNode, useState } from "react";

import { cn } from "@/lib/utils";
import Sidebar from "@/components/dashboard/sidebar";
import Topbar from "@/components/dashboard/topbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
      />
      <div className="flex flex-col flex-1 overflow-y-auto">
        <Topbar />
        <main className={cn("flex-1 p-6 bg-gray-50 dark:bg-zinc-900")}>
          {children}
        </main>
      </div>
    </div>
  );
}
