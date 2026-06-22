"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

let registered = false;

export function registerGsap() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger, Flip);
  registered = true;
}

/** @deprecated Use registerGsap — kept for existing call sites */
export const registerGsapClient = registerGsap;

export { gsap, ScrollTrigger, Flip, useGSAP };
