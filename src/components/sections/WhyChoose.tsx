"use client";

import { motion } from "framer-motion";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import CountUp from "react-countup";
import { Shield, User, FlaskConical, Monitor, Users } from "lucide-react";

const stats = [
  { value: 500, suffix: "+", label: "Families Supported" },
  { value: 100, suffix: "%", label: "CAPPA Certified" },
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
];

const features = [
  {
    icon: Shield,
    title: "CAPPA Certified",
    desc: "Internationally recognized certification from the Childbirth and Postpartum Professional Association (USA), ensuring the highest standard of care.",
  },
  {
    icon: User,
    title: "Personalized Care",
    desc: "Every family is unique. I tailor each consultation and class to your specific needs, concerns and birth preferences.",
  },
  {
    icon: FlaskConical,
    title: "Evidence-Based Approach",
    desc: "All guidance is rooted in current research and clinical best practices — so you can trust the information you receive.",
  },
  {
    icon: Monitor,
    title: "Online Consultations",
    desc: "Flexible online sessions so you can access expert guidance from the comfort of your home, wherever you are in India.",
  },
  {
    icon: Users,
    title: "Family Focused Support",
    desc: "I believe birth is a family event. Partners and support persons are welcomed and prepared as active participants.",
  },
];

function StatCard({
  stat,
  index,
  inView,
}: {
  stat: (typeof stats)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="font-display text-5xl md:text-6xl font-300 text-gradient mb-1">
        {inView ? (
          <CountUp end={stat.value} duration={2} delay={index * 0.2} />
        ) : (
          "0"
        )}
        {stat.suffix}
      </div>
      <p className="font-body text-sm text-text-muted uppercase tracking-wider">
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function WhyChoose() {
  const { ref: statsRef, inView: statsInView } = useAnimateOnScroll(0.2);
  const { ref: headerRef, inView: headerInView } = useAnimateOnScroll(0.1);

  return (
    <section id="why-choose" className="section-padding bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs text-accent-500 uppercase tracking-[0.2em] font-600 mb-4 block">
            Why Choose Me
          </span>
          <h2 className="section-heading mb-4 text-text dark:text-text-dark">
            Care You Can{" "}
            <span className="text-gradient italic">Trust Completely</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Expert, certified guidance combined with genuine compassion — because
            your family deserves nothing less.
          </p>
        </motion.div>

        {/* Stats row */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 p-8 rounded-3xl glass-card"
        >
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} inView={statsInView} />
          ))}
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <FeatureCard key={feature.title} feature={feature} Icon={Icon} index={i} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  Icon,
  index,
}: {
  feature: (typeof features)[0];
  Icon: React.ElementType;
  index: number;
}) {
  const { ref, inView } = useAnimateOnScroll(0.1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="premium-card group"
    >
      <div className="w-12 h-12 rounded-2xl bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
        <Icon size={20} className="text-accent-500" />
      </div>
      <h3 className="font-display text-xl font-500 text-text dark:text-text-dark mb-2">
        {feature.title}
      </h3>
      <p className="font-body text-sm text-text-muted leading-relaxed">
        {feature.desc}
      </p>
    </motion.div>
  );
}
