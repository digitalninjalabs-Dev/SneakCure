import { gsap } from "./gsap-client";

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
      y: 24,
      autoAlpha: 0,
    },
    {
      clipPath: clip.visible,
      y: 0,
      autoAlpha: 1,
      duration: 0.8,
      ease: "power3.out",
      stagger: options?.stagger ?? 0.08,
      delay: options?.delay ?? 0,
      force3D: true,
      clearProps: "transform",
    }
  );
}

export function fadeUpReveal(
  targets: gsap.TweenTarget,
  options?: { delay?: number; stagger?: number }
) {
  return gsap.from(targets, {
    y: 28,
    autoAlpha: 0,
    duration: 0.65,
    ease: LUXURY_EASE,
    stagger: options?.stagger ?? 0.08,
    delay: options?.delay ?? 0,
    force3D: true,
    clearProps: "transform",
  });
}

export { prefersReducedMotion } from "./motion";
