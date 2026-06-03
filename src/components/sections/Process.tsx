"use client";

import { motion } from "framer-motion";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import { Calendar, ClipboardList, Compass, HeartHandshake } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Calendar,
    title: "Book Consultation",
    desc: "Reach out via phone, email or WhatsApp to schedule your initial consultation. We'll find a time that works perfectly for you.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Assessment",
    desc: "We discuss your pregnancy stage, concerns, goals and preferences. This helps me understand your unique situation and design the ideal plan.",
  },
  {
    number: "03",
    icon: Compass,
    title: "Personalized Guidance",
    desc: "Receive a tailored education and support plan — covering birth preparation, breastfeeding, newborn care and everything in between.",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Ongoing Support",
    desc: "Your journey doesn't end after one session. I'm available for follow-up questions and continued support as your family grows.",
  },
];

export default function Process() {
  const { ref: headerRef, inView: headerInView } = useAnimateOnScroll(0.1);

  return (
    <section id="process" className="section-padding bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="font-body text-xs text-accent-500 uppercase tracking-[0.2em] font-600 mb-4 block">
            How It Works
          </span>
          <h2 className="section-heading mb-4 text-text dark:text-text-dark">
            Your Journey in{" "}
            <span className="text-gradient italic">Four Simple Steps</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Getting started is easy. Here&apos;s how we work together to support
            your family through every stage.
          </p>
        </motion.div>

        {/* Steps — desktop horizontal, mobile vertical */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px">
            <div
              className="w-full h-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #DDAAA5 20%, #8C6E63 80%, transparent)",
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary inline-flex"
          >
            <Calendar size={16} />
            Start Your Journey Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const { ref, inView } = useAnimateOnScroll(0.15);
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center group"
    >
      {/* Icon circle */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative w-24 h-24 mb-6"
      >
        {/* Glow ring */}
        <div
          className="absolute inset-0 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"
          style={{
            background: "radial-gradient(circle, #DDAAA5, transparent)",
          }}
        />
        {/* Circle */}
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center shadow-soft transition-all duration-300 group-hover:shadow-soft-lg"
          style={{
            background: "linear-gradient(135deg, #F4ECE7, #DDAAA5)",
          }}
        >
          <Icon size={32} className="text-accent-600" />
        </div>
        {/* Step number badge */}
        <div
          className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm"
          style={{ background: "linear-gradient(135deg, #DDAAA5, #8C6E63)" }}
        >
          {index + 1}
        </div>
      </motion.div>

      <h3 className="font-display text-xl font-500 text-text dark:text-text-dark mb-3">
        {step.title}
      </h3>
      <p className="font-body text-sm text-text-muted leading-relaxed max-w-xs">
        {step.desc}
      </p>
    </motion.div>
  );
}
