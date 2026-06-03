"use client";

import { motion } from "framer-motion";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import { Award, BookOpen, Heart, Star } from "lucide-react";

const timeline = [
  {
    year: "Certified",
    title: "CAPPA (US) Certification",
    desc: "Internationally recognized Childbirth and Postpartum Professional Association certification.",
    icon: Award,
  },
  {
    year: "Licensed",
    title: "Physiotherapist (PT)",
    desc: "Licensed physiotherapist with specialized knowledge in women's health and perinatal care.",
    icon: BookOpen,
  },
  {
    year: "Expert",
    title: "Lactation Consultant",
    desc: "Specialized training in breastfeeding support, latch assessment and milk supply management.",
    icon: Heart,
  },
  {
    year: "Mission",
    title: "Family-Centered Care",
    desc: "Committed to personalized, evidence-based guidance for every family's unique journey.",
    icon: Star,
  },
];

const credentials = [
  "CAPPA (US) Certified Childbirth Educator",
  "Lactation Consultant",
  "Physiotherapist (PT)",
  "Evidence-Based Practice Advocate",
  "Online & In-Person Consultations",
  "Prenatal & Postnatal Specialist",
];

export default function About() {
  const { ref: sectionRef, inView } = useAnimateOnScroll(0.1);
  const { ref: timelineRef, inView: timelineInView } = useAnimateOnScroll(0.1);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-white dark:bg-neutral-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Profile visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Profile image placeholder */}
            <div className="relative w-full max-w-md mx-auto">
              <div
                className="aspect-[4/5] rounded-3xl overflow-hidden shadow-premium relative"
                style={{
                  background: "linear-gradient(145deg, #F4ECE7, #DDAAA5 50%, #8C6E63)",
                }}
              >
                {/* Replace this div with <Image> when you have the actual photo */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="w-28 h-28 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                      <circle cx="30" cy="22" r="12" fill="rgba(255,255,255,0.9)" />
                      <path
                        d="M8 52 C8 38 52 38 52 52"
                        stroke="rgba(255,255,255,0.9)"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <p className="font-display text-white text-xl font-500 text-center px-4">
                    Dr. Era Kanyal Negi
                  </p>
                  <p className="font-body text-white/80 text-sm text-center px-4">
                    {/* REPLACE: Add /images/dr-era-profile.jpg */}
                    Add your photo here
                  </p>
                </div>

                {/* Decorative overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-accent-800/60 to-transparent" />
              </div>

              {/* Floating credential badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-4 glass-card px-5 py-4 shadow-premium max-w-[200px]"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Award size={16} className="text-accent-500" />
                  <span className="font-body text-xs text-text-muted uppercase tracking-wider">
                    Certified
                  </span>
                </div>
                <p className="font-display text-sm font-600 text-accent-600">
                  CAPPA (US) Certified
                </p>
                <p className="font-body text-xs text-text-muted mt-0.5">
                  Childbirth Educator
                </p>
              </motion.div>
            </div>

            {/* Credential pills */}
            <div className="flex flex-wrap gap-2 mt-12 max-w-md mx-auto">
              {credentials.map((c) => (
                <span key={c} className="floating-badge text-xs">
                  {c}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Content + Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            {/* Section label */}
            <span className="font-body text-xs text-accent-500 uppercase tracking-[0.2em] font-600 mb-4 block">
              About Dr. Era
            </span>

            <h2 className="section-heading mb-6 text-text dark:text-text-dark">
              Guiding Families Through{" "}
              <span className="text-gradient italic">Life&apos;s Most Beautiful</span>{" "}
              Journey
            </h2>

            <p className="section-subheading mb-6">
              Dr. Era Kanyal Negi (PT) is a CAPPA (US) Certified Child Birth
              Educator and Lactation Consultant dedicated to helping parents
              experience a stress-free, informed and beautiful journey from
              pregnancy to parenting.
            </p>

            <p className="font-body text-base text-text-muted leading-relaxed mb-10">
              With a mission to empower families through evidence-based education
              and compassionate support, Dr. Era provides personalized guidance
              that prepares you — mind, body and heart — for the transformative
              experience of welcoming your baby.
            </p>

            {/* Timeline */}
            <div ref={timelineRef} className="relative pl-10">
              <div className="timeline-line" />
              <div className="space-y-8">
                {timeline.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -16 }}
                      animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: i * 0.12 }}
                      className="relative"
                    >
                      <div className="timeline-dot" style={{ top: "2px" }}>
                        <Icon size={12} />
                      </div>
                      <div className="pl-4">
                        <span className="font-body text-xs text-accent-400 uppercase tracking-wider font-600">
                          {item.year}
                        </span>
                        <h4 className="font-display text-lg font-500 text-text dark:text-text-dark mb-1">
                          {item.title}
                        </h4>
                        <p className="font-body text-sm text-text-muted leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
