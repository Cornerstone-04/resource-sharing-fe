import { useTheme } from "@/hooks";
import { LucideMoon, LucideSun } from "lucide-react";
import { Button } from "../ui/button";

export const ThemeToggle = () => {
  const { dark, toggle } = useTheme();
  return (
    <Button variant="ghost" onClick={toggle}>
      {dark ? <LucideSun /> : <LucideMoon />}
    </Button>
  );
};
