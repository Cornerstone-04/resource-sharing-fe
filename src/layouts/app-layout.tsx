import { Outlet } from "react-router";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const sidebarItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Resources", href: "/dashboard/resources" },
  { label: "My Resources", href: "/dashboard/my-resources" },
  { label: "Chat", href: "/dashboard/chat" },
];

export default function AppLayout() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={cn(
          "transition-all duration-200 ease-in-out bg-white shadow-md",
          open ? "w-64" : "w-16"
        )}
      >
        <div className="p-4 flex items-center justify-between">
          <h1 className="text-xl font-bold truncate">
            {open ? "ResourceApp" : "RA"}
          </h1>
          <button onClick={() => setOpen(!open)} className="md:hidden block">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <nav className="px-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block px-2 py-2 rounded hover:bg-blue-100 text-sm font-medium text-gray-700"
                >
                  {open ? item.label : item.label.charAt(0)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
