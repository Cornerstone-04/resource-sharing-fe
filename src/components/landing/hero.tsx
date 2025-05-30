import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useAppNavigate } from "@/hooks/navigation";

export function Hero() {
  const { goToRegister } = useAppNavigate();

  return (
    <motion.section
      className="flex-1 flex flex-col items-center justify-center text-center px-6 py-16 md:py-24"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* <motion.div
        className="w-32 md:w-40 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="/kawehub-logo.png"
          alt="KaweHub Logo"
          className="w-full h-auto mx-auto"
        />
      </motion.div> */}

      <motion.h1
        className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        Your go-to academic resource hub at Unilorin.
      </motion.h1>

      <motion.p
        className="mt-4 text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Access, upload, and borrow past questions, lecture notes, and textbooks
        from fellow students — anytime, anywhere.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <Button
          size="lg"
          className="mt-6 px-8 py-5 text-base bg-kw-primary text-white hover:brightness-110 transition"
          onClick={goToRegister}
        >
          Get Started
        </Button>
      </motion.div>
    </motion.section>
  );
}
