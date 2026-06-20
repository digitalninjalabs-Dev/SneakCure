"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

type MagneticButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "black" | "ghost";
  className?: string;
  type?: "button" | "submit";
};

export function MagneticButton({
  children,
  href,
  variant = "black",
  className = "",
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const base =
    variant === "black"
      ? "bg-gloss-black text-soft-white shine-sweep"
      : "border border-black/10 bg-white/50 text-primary-black backdrop-blur-sm";

  const isFlexChild = className.includes("flex-1");
  const wrapperClass = isFlexChild
    ? "block min-w-0 flex-1"
    : className.includes("w-full")
      ? "block w-full"
      : "inline-block";

  const innerClass = isFlexChild ? `${className} w-full` : className;

  const inner = (
  <motion.span
    className={`relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-xs font-medium tracking-wide transition-shadow sm:px-8 sm:py-4 sm:text-sm ${base} ${innerClass}`}
    whileHover={{ scale: 1.03, boxShadow: "0 20px 50px rgba(0,0,0,0.2)" }}
    whileTap={{ scale: 0.98 }}
    onMouseMove={(e) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
    }}
    onMouseLeave={() => {
      if (ref.current) ref.current.style.transform = "";
    }}
  >
    {children}
  </motion.span>
  );

  if (href) {
    return (
      <a ref={ref} href={href} className={`magnetic-btn ${wrapperClass}`}>
        {inner}
      </a>
    );
  }

  return (
    <button ref={ref} type={type} className={`magnetic-btn ${wrapperClass}`}>
      {inner}
    </button>
  );
}
