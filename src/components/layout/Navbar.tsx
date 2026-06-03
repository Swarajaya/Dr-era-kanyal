"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Phone } from "lucide-react";
import { CONTACT } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why-choose", label: "Why Dr. Era" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = saved === "dark" || (!saved && prefersDark);
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggleDark = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "glass shadow-glass py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
            className="flex flex-col"
          >
            <span className="font-display text-xl font-600 text-accent-500 leading-none">
              Dr. Era Kanyal Negi
            </span>
            <span className="font-body text-xs text-text-muted tracking-widest uppercase">
              Birth Educator · Lactation Consultant
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="font-body text-sm font-500 text-text-muted hover:text-accent-500 transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary-400 group-hover:w-full transition-all duration-300" />
                </button>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Dark mode */}
            <button
              onClick={toggleDark}
              className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-accent-500 hover:bg-secondary-100 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Call button */}
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="hidden md:inline-flex items-center gap-2 btn-primary text-sm py-2.5 px-5"
            >
              <Phone size={14} />
              Call Now
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 rounded-full glass-card flex items-center justify-center text-accent-500"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 lg:hidden pt-20"
          >
            <div className="glass h-full flex flex-col p-8 pt-12">
              <ul className="flex flex-col gap-6 flex-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="font-display text-3xl font-400 text-text hover:text-accent-500 transition-colors"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
              <div className="border-t border-secondary-200 pt-6 mt-6">
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="btn-primary w-full justify-center"
                >
                  <Phone size={16} />
                  {CONTACT.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
