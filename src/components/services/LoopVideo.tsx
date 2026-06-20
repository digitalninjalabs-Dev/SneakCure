"use client";

import { useEffect, useRef, useState } from "react";

type LoopVideoProps = {
  src: string;
  className?: string;
  poster?: string;
};

export function LoopVideo({ src, className = "", poster }: LoopVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.play().catch(() => {});
    setReady(true);
  }, [src]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      className={`${className} ${ready ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}
    />
  );
}
