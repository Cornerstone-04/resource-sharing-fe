import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { FaBookOpen, FaCloudArrowUp, FaShieldHalved, FaSistrix } from "react-icons/fa6";

 function FeatureCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: ReactNode;
}) {
  return (
    <motion.div
      className="flex flex-col items-center text-center space-y-2 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="text-4xl text-blue-500 mb-2">{icon}</div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">{desc}</p>
    </motion.div>
  );
}

export function Features (){
    return (
        <section className="py-16 bg-zinc-50 dark:bg-zinc-800 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<FaCloudArrowUp />}
            title="Upload & Share"
            desc="Help others by sharing useful resources."
          />
          <FeatureCard
            icon={<FaBookOpen />}
            title="Borrow Textbooks"
            desc="Request and return physical materials easily."
          />
          <FeatureCard
            icon={<FaShieldHalved />}
            title="Student Verified"
            desc="Only verified Unilorin students can access content."
          />
          <FeatureCard
            icon={<FaSistrix />}
            title="Quick Filters"
            desc="Find materials fast using course-based filters."
          />
        </div>
      </section>
    )
}
