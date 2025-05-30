import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../ui/button";
import { useAppNavigate } from "@/hooks/navigation";
import { useEffect, useState } from "react";

export function Hero() {
  const { goToRegister } = useAppNavigate();
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["academic", "study", "learning", "research"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-zinc-900 dark:via-blue-900/20 dark:to-indigo-900/20">
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full"
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center px-6 py-32 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            className="text-4xl md:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Your ultimate{" "}
            <span className="relative">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {words[currentWord]}
                </motion.span>
              </AnimatePresence>
              <span className="invisible">{words[0]}</span>
            </span>
            <br />
            resource hub at Unilorin
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Access, upload, and borrow past questions, lecture notes, and
            textbooks from fellow students — anytime, anywhere.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button
              size="lg"
              className="text-lg px-12 py-6 rounded-2xl bg-gradient-to-r from-kw-primary to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              onClick={goToRegister}
            >
              Get Started Free
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
