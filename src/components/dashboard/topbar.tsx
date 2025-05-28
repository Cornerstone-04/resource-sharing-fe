import { Bell, ChevronDown, Menu } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "../shared/theme-toggle";
import { useSidebar } from "@/store/useSidebar";

export default function Topbar() {
  const { toggle } = useSidebar();

  return (
    <header className="w-full bg-white dark:bg-zinc-800 border-b dark:border-zinc-700 px-6 py-3 flex items-center justify-between shadow-sm">
      {/* Menu icon on mobile */}
      <button className="md:hidden" onClick={toggle} aria-label="Toggle Menu">
        <Menu className="w-6 h-6" />
      </button>
      <div className="text-lg font-bold tracking-tight text-zinc-800 dark:text-white hidden md:block">
        Dashboard
      </div>

      <div className="flex items-center gap-4">
        <button
          className="relative rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5 text-kw-primary" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-zinc-800"></span>
        </button>

        <ThemeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 text-sm focus:outline-none hover:opacity-90">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://api.dicebear.com/7.x/initials/svg?seed=User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <span className="hidden md:inline text-sm font-medium">
                Bright Walter
              </span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
