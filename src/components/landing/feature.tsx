import {
  FaBookOpen,
  FaCloudArrowUp,
  FaShieldHalved,
  FaSistrix,
} from "react-icons/fa6";
import { FeatureCard } from "./feature-card";
import { motion } from "framer-motion";

export function Features() {
  const features = [
    {
      icon: <FaCloudArrowUp />,
      title: "Upload & Share",
      desc: "Seamlessly share your notes, past questions, and study materials with the community. Help others succeed while building your academic reputation.",
    },
    {
      icon: <FaBookOpen />,
      title: "Borrow Textbooks",
      desc: "Request physical textbooks from fellow students in your department. Easy pickup and return system with built-in reminders.",
    },
    {
      icon: <FaShieldHalved />,
      title: "Student Verified",
      desc: "Secure platform exclusively for verified Unilorin students. Your academic integrity and privacy are our top priorities.",
    },
    {
      icon: <FaSistrix />,
      title: "Smart Search",
      desc: "Find exactly what you need with our AI-powered search. Filter by course, department, semester, and content type instantly.",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-br from-zinc-50 to-blue-50/30 dark:from-zinc-900 dark:to-blue-900/10"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Everything you need to excel
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Powerful tools designed specifically for Unilorin students to
            enhance your academic journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
