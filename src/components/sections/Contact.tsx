"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import { Phone, Mail, MessageCircle, MapPin, Send, Loader2, CheckCircle } from "lucide-react";
import { CONTACT } from "@/lib/utils";

type FormData = {
  name: string;
  email: string;
  phone: string;
  dueDate: string;
  message: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT.phone,
    href: `tel:${CONTACT.phoneRaw}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 9560011192",
    href: CONTACT.whatsapp,
  },
  {
    icon: MapPin,
    label: "Consultation",
    value: "In-Person & Online (All India)",
    href: null,
  },
];

export default function Contact() {
  const { ref, inView } = useAnimateOnScroll(0.1);

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    dueDate: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const errs: Partial<FormData> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      errs.email = "Valid email required";
    if (!form.phone.trim()) errs.phone = "Phone is required";
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
      if (errors[name as keyof FormData]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [errors]
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");

    // Simulate submission — replace with your API/email service
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");

    // Reset after 4 seconds
    setTimeout(() => {
      setForm({ name: "", email: "", phone: "", dueDate: "", message: "" });
      setStatus("idle");
    }, 4000);
  };

  return (
    <section id="contact" className="section-padding gradient-bg dark:bg-neutral-950">
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
            Get In Touch
          </span>
          <h2 className="section-heading mb-4 text-text dark:text-text-dark">
            Begin Your{" "}
            <span className="text-gradient italic">Journey Today</span>
          </h2>
          <p className="section-subheading max-w-xl mx-auto">
            Ready to feel confident and prepared? Reach out and let&apos;s talk
            about how I can support your family.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="glass-card p-8 shadow-premium">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 gap-4 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="font-display text-2xl font-500 text-text dark:text-text-dark">
                    Message Sent!
                  </h3>
                  <p className="font-body text-text-muted">
                    Thank you for reaching out. Dr. Era will be in touch within
                    24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <h3 className="font-display text-2xl font-500 text-text dark:text-text-dark mb-6">
                    Book a Consultation
                  </h3>

                  {/* Name + Email row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field
                      label="Full Name *"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      error={errors.name}
                    />
                    <Field
                      label="Email *"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      error={errors.email}
                    />
                  </div>

                  {/* Phone + Due Date row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field
                      label="Phone *"
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={handleChange}
                      error={errors.phone}
                    />
                    <Field
                      label="Due Date (optional)"
                      name="dueDate"
                      type="date"
                      placeholder=""
                      value={form.dueDate}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-body text-sm font-600 text-text-muted mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell me a little about where you are in your journey and how I can help..."
                      className={`w-full px-4 py-3 rounded-xl border font-body text-sm text-text bg-white/80 dark:bg-neutral-800 placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary-300 transition-all duration-200 resize-none ${
                        errors.message
                          ? "border-red-300"
                          : "border-secondary-200 focus:border-primary-300"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                    whileHover={status !== "submitting" ? { scale: 1.02 } : {}}
                    whileTap={status !== "submitting" ? { scale: 0.98 } : {}}
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  <p className="font-body text-xs text-text-muted text-center">
                    Or reach out directly via WhatsApp for a faster response.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right: Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;
                const content = (
                  <div className="premium-card flex items-start gap-4 h-full">
                    <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-accent-500" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-text-muted uppercase tracking-wider font-600 mb-0.5">
                        {detail.label}
                      </p>
                      <p className="font-body text-sm font-600 text-text dark:text-text-dark">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                );

                return detail.href ? (
                  <a
                    key={detail.label}
                    href={detail.href}
                    target={detail.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      detail.href.startsWith("http") ? "noopener noreferrer" : undefined
                    }
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={detail.label}>{content}</div>
                );
              })}
            </div>

            {/* Map placeholder */}
            <div className="flex-1 rounded-2xl overflow-hidden shadow-soft min-h-[280px] relative">
              {/* 
                REPLACE: Embed your Google Maps iframe here.
                Example:
                <iframe
                  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
                  width="100%" height="100%" style={{border:0}}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              */}
              <div
                className="w-full h-full flex flex-col items-center justify-center gap-3"
                style={{
                  background: "linear-gradient(135deg, #F4ECE7 0%, #e8d8cf 50%, #F4ECE7 100%)",
                  minHeight: "280px",
                }}
              >
                <MapPin size={32} className="text-accent-400" />
                <p className="font-body text-sm text-accent-500 font-600">
                  Google Maps
                </p>
                <p className="font-body text-xs text-text-muted text-center px-6">
                  Replace this with your Google Maps embed
                </p>
              </div>
            </div>

            {/* WhatsApp direct */}
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn w-full justify-center"
              style={{ position: "relative", bottom: "auto", right: "auto" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-body text-sm font-600 text-text-muted mb-1.5"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-xl border font-body text-sm text-text bg-white/80 dark:bg-neutral-800 placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary-300 transition-all duration-200 ${
          error
            ? "border-red-300"
            : "border-secondary-200 focus:border-primary-300"
        }`}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
