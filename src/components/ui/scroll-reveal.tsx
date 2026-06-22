"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type MotionProps,
} from "framer-motion";
import { MOTION_EASE, MOTION_VIEWPORT, IMAGE_VIEWPORT } from "@/lib/motion-viewport";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof typeof motion;
} & Omit<HTMLMotionProps<"div">, "children" | "initial" | "whileInView"> &
  Pick<MotionProps, "whileHover">;

/** Lightweight scroll fade — transform + opacity only */
export function FadeIn({
  children,
  className = "",
  delay = 0,
  as = "div",
  ...props
}: FadeInProps) {
  const reduce = useReducedMotion();
  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      data-reveal-motion
      className={className}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={MOTION_VIEWPORT}
      transition={{ duration: 0.5, delay, ease: MOTION_EASE }}
      {...props}
    >
      {children}
    </Component>
  );
}

type ImageRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof typeof motion;
} & Pick<MotionProps, "whileHover" | "style">;

/** Smooth image reveal — outer fade/slide, inner subtle scale (compositor-friendly) */
export function ImageReveal({
  children,
  className = "",
  delay = 0,
  as = "div",
  whileHover,
  style,
}: ImageRevealProps) {
  const reduce = useReducedMotion();
  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      data-reveal-motion
      className={`overflow-hidden ${className}`}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={IMAGE_VIEWPORT}
      transition={{ duration: 0.48, delay, ease: MOTION_EASE }}
      whileHover={whileHover}
      style={style}
    >
      <motion.div
        className="relative h-full w-full will-change-transform"
        initial={reduce ? false : { scale: 1.03 }}
        whileInView={reduce ? undefined : { scale: 1 }}
        viewport={IMAGE_VIEWPORT}
        transition={{ duration: 0.62, delay: delay + 0.02, ease: MOTION_EASE }}
      >
        {children}
      </motion.div>
    </Component>
  );
}
