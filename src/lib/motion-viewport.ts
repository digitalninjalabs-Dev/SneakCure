/** Shared Framer Motion viewport — scroll-triggered reveals, once per element */
export const MOTION_VIEWPORT = {
  once: true,
  amount: 0.12,
  margin: "0px 0px -40px 0px",
} as const;

export const MOTION_EASE = [0.22, 1, 0.36, 1] as const;
