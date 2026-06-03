"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What is childbirth education?",
    a: "Childbirth education is a structured program that prepares expecting parents for labor, delivery and early parenting. It covers understanding the stages of labor, pain management techniques, breathing exercises, partner support roles, medical interventions, newborn care and breastfeeding basics. As a CAPPA-certified educator, I ensure the information you receive is evidence-based, current and personalized to your birth goals.",
  },
  {
    q: "When should I start lactation consultation?",
    a: "Ideally, prenatal lactation consultation should begin in the third trimester (around 32–36 weeks) to set up the foundation for successful breastfeeding. However, if you're already postpartum and facing challenges — such as latching issues, low milk supply, pain or engorgement — it's never too late. The sooner we address issues, the smoother the journey becomes.",
  },
  {
    q: "Are online consultations available?",
    a: "Yes, absolutely! I offer fully comprehensive online consultations via video call, making expert guidance accessible from anywhere in India. Online sessions are equally effective for birth education classes, lactation consultation, prenatal guidance and postnatal support. Simply reach out via WhatsApp or email to schedule.",
  },
  {
    q: "Can partners attend the sessions?",
    a: "Partners are not just welcome — they are encouraged to attend! Birth is a family experience, and having an informed, prepared birth partner makes a significant difference in the labor and delivery experience. I specifically include partner preparation and support techniques in my classes so your birth partner feels confident and capable.",
  },
  {
    q: "How many sessions are needed?",
    a: "The number of sessions varies based on your needs and goals. A complete birth preparation program typically consists of 4–6 sessions. Lactation consultation may start with 1–2 sessions and continue with follow-ups as needed. During your initial assessment, I'll recommend a plan tailored specifically to your situation. There's no one-size-fits-all approach here.",
  },
  {
    q: "Do you support high-risk pregnancies?",
    a: "Yes, I work with families navigating all types of pregnancies, including those with complications or high-risk factors. My evidence-based approach ensures that education and support are adapted to your specific medical situation, always in coordination with your obstetric care team.",
  },
];

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const { ref, inView } = useAnimateOnScroll(0.1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="border border-secondary-200 dark:border-neutral-700 rounded-2xl overflow-hidden mb-3 transition-all duration-300 hover:border-primary-300"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span
          className={`font-display text-lg font-500 transition-colors duration-200 ${
            isOpen ? "text-accent-600" : "text-text dark:text-text-dark"
          }`}
        >
          {faq.q}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-primary-400 text-white"
              : "bg-secondary-100 text-accent-500 group-hover:bg-primary-100"
          }`}
        >
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5">
              <div className="w-8 h-px bg-primary-200 mb-3" />
              <p className="font-body text-text-muted leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, inView } = useAnimateOnScroll(0.1);

  return (
    <section id="faq" className="section-padding bg-white dark:bg-neutral-900">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="font-body text-xs text-accent-500 uppercase tracking-[0.2em] font-600 mb-4 block">
            FAQs
          </span>
          <h2 className="section-heading mb-4 text-text dark:text-text-dark">
            Questions{" "}
            <span className="text-gradient italic">Families Ask</span>
          </h2>
          <p className="section-subheading">
            Answers to the most common questions about childbirth education and
            lactation support.
          </p>
        </motion.div>

        {/* Accordion */}
        <div>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10 p-8 rounded-2xl glass-card"
        >
          <p className="font-display text-xl font-400 text-text dark:text-text-dark mb-2">
            Still have questions?
          </p>
          <p className="font-body text-sm text-text-muted mb-5">
            I&apos;m happy to answer anything. Reach out directly.
          </p>
          <a href="https://wa.me/919560011192" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
