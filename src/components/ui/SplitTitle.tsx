"use client";

import { TitleReveal } from "@/components/ui/TitleReveal";

export const SPLIT_TITLE_SIZES = {
  hero: "text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.12]",
  page: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]",
  section: "text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.1]",
  display: "text-[clamp(2rem,4vw,3rem)] leading-[1.12]",
  campaign: "text-[clamp(1.75rem,6.5vw,5rem)] leading-[1.1]",
  md: "text-3xl md:text-4xl lg:text-5xl leading-[1.12]",
  sm: "text-3xl leading-[1.12]",
  cta: "text-3xl sm:text-4xl md:text-5xl leading-[1.1]",
} as const;

export type SplitTitleSize = keyof typeof SPLIT_TITLE_SIZES;

export function parseSplitTitle(title: string, accent?: string) {
  if (accent) {
    const line1 = title.endsWith(".") ? title : `${title}.`;
    const line2 = accent.endsWith(".") ? accent : `${accent}.`;
    return { line1, line2 };
  }

  const parts = title.split(/\.\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return {
      line1: `${parts[0]}.`,
      line2: `${parts.slice(1).join(". ").replace(/\.$/, "")}.`,
    };
  }

  return {
    line1: title.endsWith(".") ? title : `${title}.`,
    line2: "One Sneakcure standard.",
  };
}

export function SplitTitle({
  title,
  accent,
  as = "h2",
  size = "section",
  align = "left",
  dark = false,
  delay = 0,
  className = "",
}: {
  title: string;
  accent?: string;
  as?: "h1" | "h2" | "h3";
  size?: SplitTitleSize;
  align?: "left" | "center";
  dark?: boolean;
  delay?: number;
  className?: string;
}) {
  const { line1, line2 } = parseSplitTitle(title, accent);
  const Tag = as;
  const sizeClass = SPLIT_TITLE_SIZES[size];
  const alignClass = align === "center" ? "text-center" : "text-left";
  const primaryColor = dark ? "text-soft-white" : "text-primary-black";
  const accentColor = dark ? "text-white/35" : "text-primary-black/35";

  return (
    <div className={`${alignClass} ${className}`}>
      <TitleReveal delay={delay}>
        <Tag className={`editorial-title text-balance break-words ${sizeClass} ${primaryColor}`}>{line1}</Tag>
      </TitleReveal>
      <TitleReveal delay={delay + 0.08}>
        <Tag className={`editorial-title text-balance break-words ${sizeClass} italic ${accentColor}`}>{line2}</Tag>
      </TitleReveal>
    </div>
  );
}
