import { Link } from "react-router";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <motion.section
      className="flex-1 flex flex-col items-center justify-center text-center px-4 py-12 md:py-24"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Your go-to academic resource hub at Unilorin.
      </motion.h2>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
        Access, upload, and borrow past questions, lecture notes, and textbooks
        from fellow students — anytime, anywhere.
      </p>
      <Link to="/auth/register">
        <Button size="lg" className="mt-6 px-8 py-5 text-base">
          Get Started
        </Button>
      </Link>
    </motion.section>
  );
}
