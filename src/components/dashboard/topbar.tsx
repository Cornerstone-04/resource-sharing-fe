import { Menu, Bell } from "lucide-react";
import { ThemeToggle } from "../shared/theme-toggle";
import { useSidebar } from "@/store/useSidebar";

export default function Topbar() {
  const { toggle } = useSidebar();

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b dark:border-zinc-700 bg-white dark:bg-zinc-800">
      <div className="flex items-center gap-4">
        <button className="md:hidden" onClick={toggle}>
          <Menu className="w-6 h-6" />
        </button>
        <span className="text-lg font-semibold hidden md:inline">
          Dashboard
        </span>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
        </button>
        <ThemeToggle />
        <img
          src="https://api.dicebear.com/7.x/initials/svg?seed=User"
          alt="avatar"
          className="w-8 h-8 rounded-full border"
        />
      </div>
    </header>
  );
}
