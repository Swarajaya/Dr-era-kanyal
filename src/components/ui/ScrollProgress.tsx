"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const spring = useSpring(progress, { stiffness: 200, damping: 40 });

  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? (scrolled / max) * 100 : 0);
    };

    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <motion.div
      className="scroll-progress"
      style={{ width: spring.get() + "%" }}
    />
  );
}
