import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaCircleQuestion } from "react-icons/fa6";

export function FAQItems() {
  const items = [
    {
      question: "Who can use the app?",
      answer: "Only verified students of Unilorin can access full features.",
    },
    {
      question: "What can I upload?",
      answer:
        "Any academic resource – notes, slides, past questions, or materials you created.",
    },
    {
      question: "Can I borrow physical books?",
      answer:
        "Yes! You can request physical items and pick them up in your department.",
    },
    {
      question: "Is this app free?",
      answer:
        "Yes. It’s built by students, for students, completely free to use.",
    },
  ];

  return (
    <Accordion type="single" collapsible className="space-y-4">
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent asChild>
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-sm text-zinc-600 dark:text-zinc-400"
            >
              {item.answer}
            </motion.div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function FAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who can use PeerShelf?",
      answer:
        "Only verified students of the University of Ilorin can access full features. We verify your student status through your official university email and student ID to maintain a secure academic community.",
    },
    {
      question: "What types of materials can I upload?",
      answer:
        "You can share any academic resource including lecture notes, past questions, assignments, project reports, and study guides. All content is moderated to ensure quality and relevance to our academic community.",
    },
    {
      question: "How does the textbook borrowing system work?",
      answer:
        "Browse available textbooks, send a request to the owner, arrange pickup at a convenient campus location, and return within the agreed timeframe. Our system includes automated reminders and reputation tracking.",
    },
    {
      question: "Is PeerShelf completely free to use?",
      answer:
        "Yes! PeerShelf is built by students, for students, and is completely free to use. We believe education should be accessible to everyone in our university community.",
    },
    {
      question: "How do you ensure content quality?",
      answer:
        "Our community-driven moderation system includes user ratings, peer reviews, and verification from senior students. Low-quality content is automatically flagged and reviewed by our moderation team.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white dark:bg-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl text-white">
              <FaCircleQuestion />
            </div>
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            Everything you need to know about PeerShelf
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-zinc-50 dark:bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors duration-200"
                onClick={() => setOpenItem(openItem === index ? null : index)}
              >
                <span className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openItem === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-blue-600"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </button>
              <AnimatePresence>
                {openItem === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-8 pb-6"
                  >
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
