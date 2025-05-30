import { useTheme } from "@/hooks/useTheme";
import { LucideMoon, LucideSun } from "lucide-react";
import { Button } from "../ui/button";

export const ThemeToggle = () => {
  const { dark, toggle } = useTheme();
  return (
    <Button variant="ghost" onClick={toggle}>
      {dark ? (
        <LucideSun className="text-kw-primary" />
      ) : (
        <LucideMoon className="text-kw-primary" />
      )}
    </Button>
  );
};
