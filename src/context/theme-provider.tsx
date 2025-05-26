import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext } from "./theme-context";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [dark, setDark] = useState(false);

  // Check localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("dark-mode") === "true";
    setDark(stored);
    document.documentElement.classList.toggle("dark", stored);
  }, []);

  // Toggle theme
  const toggle = () => {
    const newMode = !dark;
    setDark(newMode);
    localStorage.setItem("dark-mode", newMode.toString());
    document.documentElement.classList.toggle("dark", newMode);
  };

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
