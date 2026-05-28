type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  dark = false,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-10 sm:mb-14 md:mb-20 ${align === "center" ? "text-center mx-auto max-w-3xl px-1" : "max-w-4xl"}`}
      data-scroll-reveal
    >
      {eyebrow && (
        <p
          className={`mb-4 text-xs font-medium uppercase tracking-[0.2em] ${dark ? "text-muted" : "text-muted"}`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`editorial-title text-3xl sm:text-4xl md:text-6xl lg:text-7xl ${dark ? "text-soft-white" : "text-primary-black"}`}
        data-blade
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-balance ${dark ? "text-muted" : "text-muted"}`}
          data-fade-up
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
