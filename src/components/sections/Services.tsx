"use client";

import { motion } from "framer-motion";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import { Baby, Heart, BookOpen, Sparkles } from "lucide-react";

const services = [
  {
    icon: Baby,
    title: "Birth & Parenting Classes",
    color: "#DDAAA5",
    colorLight: "rgba(221,170,165,0.1)",
    items: [
      "Childbirth preparation",
      "Labor support techniques",
      "Partner preparation",
      "Hospital readiness",
      "Newborn care basics",
    ],
    description:
      "Comprehensive classes that prepare you and your partner for a confident, informed birth experience.",
  },
  {
    icon: Heart,
    title: "Lactation Consultation",
    color: "#8C6E63",
    colorLight: "rgba(140,110,99,0.1)",
    items: [
      "Breastfeeding guidance",
      "Latching support",
      "Milk supply management",
      "Feeding confidence building",
      "Troubleshooting challenges",
    ],
    description:
      "Personalized lactation support to help you and your baby thrive in your breastfeeding journey.",
  },
  {
    icon: BookOpen,
    title: "Prenatal Education",
    color: "#DDAAA5",
    colorLight: "rgba(221,170,165,0.1)",
    items: [
      "Pregnancy wellness",
      "Nutrition guidance",
      "Birth plan creation",
      "Mental preparation",
      "Comfort techniques",
    ],
    description:
      "Evidence-based education to help you understand your pregnancy and prepare for birth.",
  },
  {
    icon: Sparkles,
    title: "Postnatal Support",
    color: "#8C6E63",
    colorLight: "rgba(140,110,99,0.1)",
    items: [
      "Mother recovery guidance",
      "Baby care essentials",
      "Emotional support",
      "Parenting confidence",
      "Sleep strategies",
    ],
    description:
      "Compassionate support through the fourth trimester — for both mother and baby.",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const { ref, inView } = useAnimateOnScroll(0.1);
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="premium-card group flex flex-col h-full"
      style={{ perspective: "1000px" }}
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ background: service.colorLight }}
      >
        <Icon size={24} style={{ color: service.color }} />
      </div>

      {/* Title */}
      <h3 className="font-display text-2xl font-500 text-text dark:text-text-dark mb-3">
        {service.title}
      </h3>

      {/* Description */}
      <p className="font-body text-sm text-text-muted mb-5 leading-relaxed">
        {service.description}
      </p>

      {/* Items */}
      <ul className="space-y-2.5 flex-1">
        {service.items.map((item) => (
          <li key={item} className="flex items-center gap-2.5">
            <div
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: service.color }}
            />
            <span className="font-body text-sm text-text-muted">{item}</span>
          </li>
        ))}
      </ul>

      {/* Bottom gradient line */}
      <div
        className="mt-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
      />
    </motion.div>
  );
}

export default function Services() {
  const { ref, inView } = useAnimateOnScroll(0.1);

  return (
    <section
      id="services"
      className="section-padding gradient-bg dark:bg-neutral-950"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs text-accent-500 uppercase tracking-[0.2em] font-600 mb-4 block">
            What I Offer
          </span>
          <h2 className="section-heading mb-4 text-text dark:text-text-dark">
            Comprehensive Care for{" "}
            <span className="text-gradient italic">Every Stage</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            From your first prenatal class to postnatal recovery — personalized,
            evidence-based support tailored to your family&apos;s unique journey.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
