"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Heart } from "lucide-react";
import { CONTACT } from "@/lib/utils";

const footerLinks = {
  services: [
    "Birth & Parenting Classes",
    "Lactation Consultation",
    "Prenatal Education",
    "Postnatal Support",
    "Online Consultations",
  ],
  quickLinks: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-accent-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl font-500 text-primary-300 mb-2">
              Dr. Era Kanyal Negi
            </h3>
            <p className="text-sm text-accent-200 mb-4">
              CAPPA (US) Certified Child Birth Educator & Lactation Consultant
            </p>
            <p className="text-sm text-accent-300 leading-relaxed">
              Helping families navigate pregnancy, childbirth, breastfeeding and
              early parenting with confidence.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body font-700 text-sm uppercase tracking-widest text-primary-300 mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((s) => (
                <li key={s}>
                  <span className="text-sm text-accent-300 hover:text-primary-300 transition-colors cursor-default">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body font-700 text-sm uppercase tracking-widest text-primary-300 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-accent-300 hover:text-primary-300 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-700 text-sm uppercase tracking-widest text-primary-300 mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="flex items-center gap-2 text-sm text-accent-300 hover:text-primary-300 transition-colors"
                >
                  <Phone size={14} />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2 text-sm text-accent-300 hover:text-primary-300 transition-colors"
                >
                  <Mail size={14} />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-accent-300 hover:text-primary-300 transition-colors"
                >
                  <MessageCircle size={14} />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-accent-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-accent-400 flex items-center gap-1">
            © {new Date().getFullYear()} Dr. Era Kanyal Negi. Made with{" "}
            <Heart size={12} className="text-primary-400 fill-current" /> for
            growing families.
          </p>
          <p className="text-xs text-accent-500">
            CAPPA (US) Certified · Evidence-Based Care · Trusted Expertise
          </p>
        </div>
      </div>
    </footer>
  );
}
