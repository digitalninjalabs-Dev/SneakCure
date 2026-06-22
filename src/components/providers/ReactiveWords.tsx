"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const WORD_ROOM_PX = 12;

/** Split heading — each word shifts with global mouse position */
export function ReactiveWords({
  text,
  className = "",
  strength = 1,
}: {
  text: string;
  className?: string;
  strength?: number;
}) {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothX = useSpring(mouseX, { stiffness: 90, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 90, damping: 22 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  const words = text.split(" ");

  return (
    <span
      className={className}
      data-reactive-words
      style={{
        overflow: "visible",
        display: "inline-block",
        paddingInline: WORD_ROOM_PX,
        marginInline: -WORD_ROOM_PX,
      }}
    >
      {words.map((word, i) => (
        <ReactiveWord key={`${word}-${i}`} word={word} index={i} mx={smoothX} my={smoothY} strength={strength} />
      ))}
    </span>
  );
}

function ReactiveWord({
  word,
  index,
  mx,
  my,
  strength,
}: {
  word: string;
  index: number;
  mx: ReturnType<typeof useSpring>;
  my: ReturnType<typeof useSpring>;
  strength: number;
}) {
  const offset = (index % 3) * 0.08 + 0.04;
  const x = useTransform(mx, [0, 1], [-10 * strength * (1 + offset), 10 * strength * (1 + offset)]);
  const y = useTransform(my, [0, 1], [-6 * strength * (1 + offset), 6 * strength * (1 + offset)]);

  return (
    <motion.span style={{ x, y }} className="mr-[0.28em] inline-block">
      {word}
    </motion.span>
  );
}
