import { useTheme } from "@/hooks";
import { LucideMoon, LucideSun } from "lucide-react";

export const ThemeToggle = () => {
  const { dark, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="text-le-primary dark:text-white hover:scale-110 !w-fit"
    >
      {dark ? <LucideSun /> : <LucideMoon />}
    </button>
  );
};
