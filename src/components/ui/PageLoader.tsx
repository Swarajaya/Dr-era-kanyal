"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="page-loader flex-col gap-6"
          style={{ zIndex: 9999 }}
        >
          {/* Animated logo mark */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-3"
          >
            {/* Flower SVG */}
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
              <motion.path
                d="M28 10 C28 10 32 18 32 28 C32 38 28 46 28 46 C28 46 24 38 24 28 C24 18 28 10 28 10Z"
                fill="rgba(221,170,165,0.6)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8 }}
              />
              <motion.path
                d="M10 28 C10 28 18 24 28 24 C38 24 46 28 46 28 C46 28 38 32 28 32 C18 32 10 28 10 28Z"
                fill="rgba(221,170,165,0.6)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              />
              <motion.path
                d="M14.1 14.1 C14.1 14.1 19.8 21.3 28 28 C36.2 34.7 41.9 41.9 41.9 41.9 C41.9 41.9 34.7 36.2 28 28 C21.3 19.8 14.1 14.1 14.1 14.1Z"
                fill="rgba(140,110,99,0.5)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <motion.path
                d="M41.9 14.1 C41.9 14.1 36.2 21.3 28 28 C19.8 34.7 14.1 41.9 14.1 41.9 C14.1 41.9 21.3 36.2 28 28 C36.2 19.8 41.9 14.1 41.9 14.1Z"
                fill="rgba(140,110,99,0.5)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <circle cx="28" cy="28" r="4" fill="#DDAAA5" />
            </svg>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-display text-xl text-accent-500"
            >
              Dr. Era Kanyal Negi
            </motion.p>

            {/* Progress bar */}
            <motion.div className="w-32 h-0.5 bg-secondary-200 rounded-full overflow-hidden mt-2">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, #DDAAA5, #8C6E63)" }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
