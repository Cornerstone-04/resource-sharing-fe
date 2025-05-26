import { Outlet } from "react-router";
import { cn } from "@/lib/utils";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-900 px-4">
      <div
        className={cn(
          "w-full max-w-md bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-md"
        )}
      >
        <Outlet />
      </div>
    </div>
  );
}
