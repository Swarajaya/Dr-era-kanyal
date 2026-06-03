"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on desktop
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mouseX + "px";
        dotRef.current.style.top = mouseY + "px";
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ringX + "px";
        ringRef.current.style.top = ringY + "px";
      }
      animId = requestAnimationFrame(animate);
    };

    const onEnterLink = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = "translate(-50%,-50%) scale(1.8)";
        ringRef.current.style.borderColor = "rgba(221,170,165,0.8)";
        ringRef.current.style.background = "rgba(221,170,165,0.05)";
      }
    };

    const onLeaveLink = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = "translate(-50%,-50%) scale(1)";
        ringRef.current.style.borderColor = "rgba(221,170,165,0.5)";
        ringRef.current.style.background = "transparent";
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    animId = requestAnimationFrame(animate);

    const links = document.querySelectorAll("a, button, [role='button']");
    links.forEach((el) => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animId);
      links.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterLink);
        el.removeEventListener("mouseleave", onLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring hidden md:block" aria-hidden="true" />
    </>
  );
}
