"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Phone, Calendar, Award, Mail, ChevronDown } from "lucide-react";
import { CONTACT } from "@/lib/utils";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-64 h-64 rounded-full bg-primary-200/30 animate-pulse-soft" />
    </div>
  ),
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 1.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden gradient-bg"
    >
      {/* Background decorative circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #DDAAA5 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #8C6E63 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-[calc(100vh-6rem)]">
          {/* Left: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="floating-badge">
                <Award size={14} className="text-accent-500" />
                CAPPA (US) Certified Professional
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-400 leading-[1.05] mb-6 text-text dark:text-text-dark"
            >
              Expert Guidance for{" "}
              <span className="text-gradient italic">
                Pregnancy, Birth
              </span>{" "}
              &amp; Parenthood
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="section-subheading max-w-lg mb-8"
            >
              Certified Child Birth Educator &amp; Lactation Consultant helping
              families navigate pregnancy, childbirth, breastfeeding and early
              parenting with confidence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <motion.button
                onClick={scrollToContact}
                className="btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Calendar size={16} />
                Book Consultation
              </motion.button>
              <motion.a
                href={`tel:${CONTACT.phoneRaw}`}
                className="btn-secondary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone size={16} />
                Call Now
              </motion.a>
            </motion.div>

            {/* Contact info pills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 flex-wrap"
            >
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-flex items-center gap-2 text-sm text-accent-600 hover:text-accent-500 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                  <Phone size={13} className="text-accent-500" />
                </div>
                {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-2 text-sm text-accent-600 hover:text-accent-500 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                  <Mail size={13} className="text-accent-500" />
                </div>
                {CONTACT.email}
              </a>
            </motion.div>
          </motion.div>

          {/* Right: 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[420px] lg:h-[580px] flex items-center justify-center"
          >
            {/* Soft glow ring */}
            <div
              className="absolute inset-0 rounded-full opacity-40 animate-pulse-soft"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(221,170,165,0.4) 0%, transparent 65%)",
              }}
            />

            {/* 3D canvas */}
            <div className="w-full h-full">
              <HeroScene />
            </div>

            {/* Floating info cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 left-0 glass-card px-4 py-3 shadow-soft"
            >
              <p className="font-body text-xs text-text-muted">Certification</p>
              <p className="font-display text-sm font-600 text-accent-500">
                CAPPA (US) Certified
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-12 right-0 glass-card px-4 py-3 shadow-soft"
            >
              <p className="font-body text-xs text-text-muted">Speciality</p>
              <p className="font-display text-sm font-600 text-accent-500">
                Lactation Consultant
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-32 left-4 glass-card px-4 py-3 shadow-soft"
            >
              <p className="font-body text-xs text-text-muted">Focus</p>
              <p className="font-display text-sm font-600 text-accent-500">
                Birth Educator
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="flex justify-center"
        >
          <motion.button
            onClick={() =>
              document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
            }
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1 text-text-muted hover:text-accent-500 transition-colors"
            aria-label="Scroll down"
          >
            <span className="font-body text-xs tracking-widest uppercase">
              Scroll
            </span>
            <ChevronDown size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
