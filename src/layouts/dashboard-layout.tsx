import Sidebar from "@/components/dashboard/sidebar";
import Topbar from "@/components/dashboard/topbar";
import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-zinc-900 text-zinc-900 dark:text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        <Topbar />

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
