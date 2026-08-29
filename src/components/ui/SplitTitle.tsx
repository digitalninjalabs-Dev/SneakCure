"use client";

import { TitleReveal } from "@/components/ui/TitleReveal";

/** Homepage section title scale — keep About / pages in sync */
const HOME_SECTION =
  "text-[clamp(1.85rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.03em]";

export const SPLIT_TITLE_SIZES = {
  hero: "text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.12] tracking-[-0.03em]",
  page: "text-[clamp(2rem,5.5vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.03em]",
  section: HOME_SECTION,
  display: "text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.12] tracking-[-0.03em]",
  campaign: "text-[clamp(1.75rem,6.5vw,5rem)] font-semibold leading-[1.1] tracking-[-0.03em]",
  md: HOME_SECTION,
  sm: "text-[clamp(1.65rem,3.5vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.03em]",
  cta: HOME_SECTION,
} as const;

export type SplitTitleSize = keyof typeof SPLIT_TITLE_SIZES;

export function parseSplitTitle(title: string, accent?: string) {
  if (accent) {
    const line1 = title;
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
  const accentColor = dark ? "text-white/45" : "text-primary-black/45";

  return (
    <div className={`${alignClass} ${className}`}>
      <TitleReveal delay={delay}>
        <Tag className={`editorial-title text-balance break-words ${sizeClass} ${primaryColor}`}>
          {line1}
          <span className={`mt-1 block italic ${accentColor}`}>{line2}</span>
        </Tag>
      </TitleReveal>
    </div>
  );
}
