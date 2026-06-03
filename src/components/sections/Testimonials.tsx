"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "First-time Mother",
    text: "Dr. Era transformed our birth experience completely. We felt informed and confident throughout our journey. Her classes covered everything we needed to know, and her calming approach made all the difference.",
    stars: 5,
  },
  {
    name: "Kavita & Rohit",
    role: "New Parents",
    text: "The breastfeeding support was truly exceptional. I was struggling so much in the first week but Dr. Era helped us figure out the latching issues and gave us the confidence we needed. Highly recommended.",
    stars: 5,
  },
  {
    name: "Ananya Mehta",
    role: "Second-time Mother",
    text: "The parenting classes prepared us beautifully for our baby's arrival. Even as a second-time mom, I learned so much. Dr. Era is knowledgeable, patient and incredibly supportive.",
    stars: 5,
  },
  {
    name: "Deepika & Arun",
    role: "Expecting Couple",
    text: "We enrolled in Dr. Era's birth preparation class at 28 weeks and it was the best decision we made. My husband felt fully included and prepared as a birth partner. Absolutely worth it.",
    stars: 5,
  },
  {
    name: "Sunita Kapoor",
    role: "New Mother",
    text: "I reached out to Dr. Era when my milk supply was low and I was ready to give up breastfeeding. Her personalized plan and encouragement helped me continue for 8 months. I'm so grateful.",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#DDAAA5">
          <path d="M8 1l1.854 3.757 4.146.603-3 2.923.708 4.131L8 10.339l-3.708 1.075.708-4.131-3-2.923 4.146-.603L8 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const { ref, inView } = useAnimateOnScroll(0.1);

  const navigate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
    },
    []
  );

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <section className="section-padding gradient-bg dark:bg-neutral-950 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs text-accent-500 uppercase tracking-[0.2em] font-600 mb-4 block">
            Testimonials
          </span>
          <h2 className="section-heading text-text dark:text-text-dark">
            Stories from{" "}
            <span className="text-gradient italic">Families I&apos;ve Guided</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          {/* Quote icon */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
            <div className="w-12 h-12 rounded-full bg-primary-300 flex items-center justify-center shadow-soft">
              <Quote size={20} className="text-white" fill="white" />
            </div>
          </div>

          {/* Card */}
          <div className="glass-card p-8 pt-12 md:p-12 md:pt-14 min-h-[260px] flex flex-col justify-between shadow-premium">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="flex flex-col gap-5"
              >
                <StarRating count={testimonials[current].stars} />
                <blockquote className="font-display text-xl md:text-2xl font-400 italic text-text dark:text-text-dark leading-relaxed">
                  &ldquo;{testimonials[current].text}&rdquo;
                </blockquote>
                <div>
                  <p className="font-body font-700 text-accent-600">
                    {testimonials[current].name}
                  </p>
                  <p className="font-body text-sm text-text-muted">
                    {testimonials[current].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-primary-400"
                      : "w-2 bg-secondary-300 hover:bg-primary-300"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => navigate(-1)}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-accent-500 hover:bg-primary-100 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => navigate(1)}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-accent-500 hover:bg-primary-100 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
