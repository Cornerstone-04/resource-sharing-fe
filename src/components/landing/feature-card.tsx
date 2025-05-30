import { motion } from "framer-motion";
import type { ReactNode } from "react";

export interface FeatureCardProps {
  title: string;
  desc: string;
  icon: ReactNode;
  delay?: number;
}

export function FeatureCard({
  title,
  desc,
  icon,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      className="group relative bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-2xl p-8 border border-zinc-200/50 dark:border-zinc-700/50 hover:border-blue-200 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h4 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">
          {title}
        </h4>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}
