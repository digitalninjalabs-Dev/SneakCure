import { gsap } from "./gsap";

export const BLADE_EASE = "power4.inOut";
export const LUXURY_EASE = "power3.out";

export const bladeClip = {
  hidden: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  visible: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
};

export const bladeClipDiagonal = {
  hidden: "polygon(0% 100%, 0% 100%, 0% 100%, 0% 100%)",
  visible: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
};

export function bladeReveal(
  targets: gsap.TweenTarget,
  options?: { delay?: number; stagger?: number; diagonal?: boolean }
) {
  const clip = options?.diagonal ? bladeClipDiagonal : bladeClip;
  return gsap.fromTo(
    targets,
    {
      clipPath: clip.hidden,
      y: 48,
      autoAlpha: 0,
      filter: "blur(12px)",
    },
    {
      clipPath: clip.visible,
      y: 0,
      autoAlpha: 1,
      filter: "blur(0px)",
      duration: 1.2,
      ease: BLADE_EASE,
      stagger: options?.stagger ?? 0.12,
      delay: options?.delay ?? 0,
    }
  );
}

export function fadeUpReveal(
  targets: gsap.TweenTarget,
  options?: { delay?: number; stagger?: number }
) {
  return gsap.from(targets, {
    y: 60,
    autoAlpha: 0,
    duration: 1,
    ease: LUXURY_EASE,
    stagger: options?.stagger ?? 0.1,
    delay: options?.delay ?? 0,
  });
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
