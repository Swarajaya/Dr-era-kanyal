"use client";

import { useInView } from "react-intersection-observer";

export function useAnimateOnScroll(threshold = 0.15) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  return { ref, inView };
}

export function useScrollY() {
  // Lightweight scroll tracking
  if (typeof window === "undefined") return { scrollY: 0 };
  return { scrollY: window.scrollY };
}
