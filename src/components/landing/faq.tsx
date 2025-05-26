import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { FaCircleQuestion } from "react-icons/fa6";

function FAQItems() {
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
  return (
    <section className="py-14 px-6 bg-white dark:bg-zinc-900">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-3xl font-semibold mb-8 flex items-center gap-2 text-center justify-center">
          <FaCircleQuestion /> Frequently Asked Questions
        </h3>
        <FAQItems />
      </div>
    </section>
  );
}
