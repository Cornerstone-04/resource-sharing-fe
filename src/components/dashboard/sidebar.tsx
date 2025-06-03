import { Link, useLocation } from "react-router";
import { FaHome, FaFolderOpen, FaBook } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { LuPanelLeftOpen, LuPanelRightOpen } from "react-icons/lu";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/useSidebar";

const navItems = [
  { name: "Dashboard", path: "/dashboard", icon: <FaHome /> },
  { name: "Resources", path: "/dashboard/resources", icon: <FaFolderOpen /> },
  { name: "My Materials", path: "/dashboard/my-resources", icon: <FaBook /> },
  { name: "Chat", path: "/dashboard/chat", icon: <FaMessage /> },
];

export default function Sidebar({
  collapsed,
  onToggle,
}: {
  collapsed?: boolean;
  onToggle?: () => void;
}) {
  const { pathname } = useLocation();
  const { isOpen, close } = useSidebar();

  return (
    <>
      {/* Backdrop on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={close}
        />
      )}

      <aside
        className={cn(
          "fixed md:static top-0 left-0 h-full z-50 bg-white dark:bg-zinc-800 border-r dark:border-zinc-700 transition-transform duration-300 ease-in-out",
          collapsed ? "w-16" : "w-64",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        {/* Logo & Toggle */}
        <div className="flex items-center justify-between p-4 dark:border-zinc-700">
          {!collapsed && <span className="text-xl font-bold">PeerShelf</span>}
          <button
            className="text-muted-foreground hover:text-primary transition"
            onClick={onToggle}
            aria-label="Toggle Sidebar"
          >
            {collapsed ? (
              <LuPanelLeftOpen size={20} />
            ) : (
              <LuPanelRightOpen size={20} />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-4 space-y-2 px-2">
          {navItems.map(({ name, path, icon }) => (
            <Link
              key={path}
              to={path}
              onClick={close}
              className={cn(
                "flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                pathname === path
                  ? "bg-zinc-200 dark:bg-zinc-700 font-semibold"
                  : "hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300"
              )}
            >
              <span className="text-lg">{icon}</span>
              {!collapsed && <span className="truncate">{name}</span>}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
