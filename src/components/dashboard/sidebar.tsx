import { Link, useLocation } from "react-router";
import { FaHome, FaFolderOpen, FaBook } from "react-icons/fa";
import { useSidebar } from "@/store/useSidebar";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const { pathname } = useLocation();
  const { isOpen, close } = useSidebar();

  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: <FaHome /> },
    { name: "Resources", path: "/dashboard/resources", icon: <FaFolderOpen /> },
    { name: "My Materials", path: "/dashboard/my-materials", icon: <FaBook /> },
  ];

  return (
    <aside
      className={cn(
        "fixed md:static top-0 left-0 z-40 h-full w-64 bg-white dark:bg-zinc-800 border-r dark:border-zinc-700 transition-transform",
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}
    >
      <div className="p-6 font-bold text-xl border-b dark:border-zinc-700">
        📚 ResourceHub
      </div>
      <nav className="space-y-2 px-4 pt-4">
        {navItems.map(({ name, path, icon }) => (
          <Link
            key={path}
            to={path}
            onClick={close} // close sidebar on mobile when navigating
            className={cn(
              "flex items-center gap-3 px-4 py-2 rounded-md text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700",
              pathname === path && "bg-zinc-200 dark:bg-zinc-700 font-medium"
            )}
          >
            <span className="text-lg">{icon}</span> {name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
