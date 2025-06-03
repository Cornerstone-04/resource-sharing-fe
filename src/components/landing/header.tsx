import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useAppNavigate } from "@/hooks/navigation";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { goToLogin, goToRegister } = useAppNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border-b border-zinc-200/50 dark:border-zinc-700/50 shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-kw-primary to-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">PS</span>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-kw-primary to-indigo-600 bg-clip-text text-transparent">
            PeerShelf
          </h1>
        </motion.div>

        <nav className="hidden md:flex items-center space-x-8">
          {["Features", "FAQ"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-zinc-600 dark:text-zinc-400 hover:text-kw-primary dark:hover:text-kw-primary transition-colors duration-200"
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" onClick={goToLogin}>
            Login
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-kw-primary to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            onClick={goToRegister}
          >
            Register
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
