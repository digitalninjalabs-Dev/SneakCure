"use client";

import { useState } from "react";
import {
  CampaignBtn,
  CampaignEyebrow,
  CampaignLabel,
  CampaignMarquee,
  CampaignReveal,
  CampaignRevealClip,
  CampaignScale,
  CampaignScrollImage,
  CampaignSlide,
  CampaignSplitTitle,
  CampaignTimelineLine,
  MaterialIcon,
  ParallaxImage,
} from "@/components/pages/campaign-ui";
const IMG = {
  heroMain:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDJc0ZAO3fIjkRZEYm0RsiMSMltxAzX5IzS2WatuJGIZZZbs8jfWZxlIfhht3GRdf6Pgek3-6pKiM0ujmoT2vo0-eO26qar810tK9b_HdAw8yYX3G36wG9Q0E28mG6l0QPz3DOlZSuxgrW48IjXsx6o_oUtHuqmvRvdpDOjJOfFADENaQ1hSa4lhsLf0kUeASVJOMiBhNyYmB5b5Ruz_lkZqA9fzUwVEcmkdkv4USxmPH-HbEj9hblqmrIR7LBIALxt6xEksB8jWJA",
  heroSecondary:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCgNcp-7u_JWX6HeAtiwmnNLqROegnN07BcqQWTqArUEMTUfV5-i8uItMDErJD5Zg94poCjXgS-IvbpJQx6tqcCm45xi6MRM4tgq47OkgdxLrGkDT0QWORPI6O4acayeNhGTYhMi7qukyC8Re4v6AgYhnbr19phM_djGGFfO3DbuCZFsf8naVXHqnAjrVDuht18mjqmZjgT-oTggxyy_FWUKtl2y1px3xYVLvjNQIYCt9Jk7MNrk6sH2C68UPxPi5tGxjOOLoIpCWQ",
  training:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBvZfrDlDh_KmtRKjqWsWg11SCWsjox0UEMQT4abPe9s_jZQ7rNt7fi0ozuEOVr4pAOsxjAMQ-Cr9h4urbk2FL18nc26M2A61uvkA-Ab_ht7SvK65T8CzBJCgYjbUlJuG0XG8MX5HljKwfru6FZwOt7BV0fRcHpiWis-xEylbW_lkX7t5kXdAW72_HX-oHFIqsc5-NH8qpUCo0Va1iUEdE9Ez9tUnTsRh7CXhe3Da1Y1wFBveH8ttTdH4V-twZT-vDHCQgwTREQNCM",
  consultancy:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDxDVBise5OqLSKi8K0AZLHBWjISgMEyFiOqRKF_TKKN6ermlvrHKrXMuxi6Hp7NezQvzZQKfw4zDO4uD5vdKgnBmksAAUwDEoiNOAA8luKGFQwqmEoTyE5TQa3JeuUynednCfiWgoqfvybDx4QR2PMVLmQi8gipuRJgdK4Rq9fbEc3FRYVkxEOXfxT7bBv-Qq3pS9r4H2f3dUycgobH-fsxa4wlY_qmhDrWdCby-XGv81LKyTur2mBXSL8_SwS-ftJimTDABPOk0I",
  modules:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBQyOh0IGLsCAkCRTqBw01IEevbs1hZ4fnilQfct89zsS7jlEhgtxSYzClxYxCQZl0FeFbyENp0wOCPhGgcqhb9T2iGpd2eUrMVNxXmVQndlh1_aqRQ1GsZpXOYIo1VP2r9bsI4jUV3zKGMa0Ix-T297Cgv3aWTxAWPI0oJKjK7ggK3S9dQ40lwFg5xKXl7pE75FFSERCKxpQd08W1x90pHQFahvCoPPGeVSHwA5L0J82fvv-JMYrlga1MJhyHXuyb26QgJyojMV68",
  mentorship:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDO3AbpxeyVVSwhP9zjUIvT3ZErflQU1P2-X9K9LyaXb3RPscw1zcC7ePFDnQl63B_VPThv1jkcchHvV0fLOkxzBy3DHwgZ9l6mfLVhR5QfTAQ50NIPwBOEVEsGlKPqUewZEykC5_6MAdOekUUYbBX5eNTplFaDAY0VVIN9dq1gF7dcacCz_utNloJ3Cqui7dmgdCjlTosOu0oSdPD-kYhgY7fNW6llHL0yoPci1mLF4RYar-MDt-Bl77nWsugfo2C4cfGReMHByeg",
  dayMorning:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDbVLeezzTCXybX1qx8l8GwBHFdU28WlERuF4OUnL69eK0XEdsEu60tn2RzvwG5XK84ZRwK9ARQRnNXP6E_bIT8BV0OUEbowt_5dPRxG-VzGT3t30LuGCLCd2x3niuxb14OPp02wAWekPaKue879XYN_XP53rWnbwKWonuwTFn3lZE1deS2WqTON2Mrvsvo0IGOZ3MVoKiCcH7va0H2RmBfIthhz8K-pPV6rMP1yQgyIZ_E2TS5WEHrPqm9P8d0A4lddEVz63J84xA",
  dayPractice:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBIuGs-tU_6K3lYajgrwNiwLqNrmBRMtufJyYLBAE2iFLDDqRt-dDkpJs00QtuwvQyUGxAqxr1NkrVXtHDAsK8bfOp3GK3M4ye8LwoNBM2ajzgmuu4TVL6b-gAKBdTpZiADRCjF-STp_TBDHN46RJjhjR4LoK8tSfZwkODgXScQsxliDesrXvrNoxAMRT4nqthYE5EQwzAld2LqU8emqxWEJdXXCwQANfQjd-v-OlZ_qHqUxr59L9lDZMj7QLDqkBf2S2s3YHPwO9A",
  dayReview:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD6ltZ09ZbDwQMMbzkvo0NGeMmMHDwWWhNEm4lepigN2n-SVN-Zu6k5q3Co0iSkOE4DSJMcjwUxKiTjaFyuVY2RNIovtdT-C14MAAh95Go6KKwpa1uSOnBVo73jjD4qckzWIeOpJfq_nX_89X-v8jjVKG7BygNwFOQ-r8UbV13s3lSxR2JxkhJ1lxPV5pGJaQwY90pjg53QrAD_6_wg-hOSizM1CXZ_beGpfAEXuB2JPZKR9dOjr_T1WC2tNHL4fSUyP6uLysQ2JDc",
  finalBg:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC2ZIS5R_M9ODK4b3jvi_teyIDQ4goeimVhLG0UfgrQThMpP8hzL-Qf_PfsFay9-v7sPAPPa32njcuEtyMCiv58kcW54LE7U7ZnDOg4PHgqnZR5TRHYFhhVV9HVlXnRRY1zM3yBhbMlAUNAt66eD8M6SLnKHa_mPbWjCPbB_MxtQ15-aHICxDXJ2YTugS9f-sC51TukZKFUhExgP3H8uxtTSPvcRmb3mTpt4XGRhfvGCJNEA2AR4QRTuFVTpJd6_9K9IU6OgW4HzBk",
} as const;

const MODULES = [
  "Craft & Repair",
  "Pricing & Value",
  "Luxury Branding",
  "Client Relations",
] as const;

const TESTIMONIALS = [
  {
    quote:
      "SneakCure didn't just teach me how to fix shoes; they taught me how to value my time and my talent. My business tripled in 6 months.",
    name: "Marco Rossi",
    role: "Founder, Milan Restoration",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDXyCPfFQAwB2b7S6028iCPvaFdXk7FiqDcnY6ChyPja4bTuA1Ulu1TVm_rRaAkH5AIPp5nFvy7XBDBl_bAwR6wvRMevZWsrqbggUHYO96cYdjm71VIv3st-k_rBoLtkWkJdYQIAZC5FwNk_SvGtnylOBHIl3eKgzKwuPO2tnpBQTzNXbOuIeruL4putzaaiT-Vk1NvwdaNvPQH2VjCjsetkVCjIXMRp3GYypW-rAEoi7__Zx9v4h2oCSrGbo35D2TPhKKOBvyywfw",
  },
  {
    quote:
      "The level of technical detail is unmatched. I finally feel like an expert in materials I used to be afraid to touch.",
    name: "Sarah Chen",
    role: "Sole Artistry Lab",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB0ZcLKHpKRNVEhu0xDVTeB5NeCKP9Fi7Xde7o-SMzo2gBWYUI7EDWa9YbhYUMr464_CAkHCtR5cSWEXOfHhnDSfwBgAZUJnTz6JTy8zvOewffZKXomIG3ZtizKZ2lLn9Y7g2Wxe5BLiKIbwpOnvsgY4vSM3z1cU3whO7a1Kpv0dqJmUGFOTm1vxM_35ycW2gAy4pfB__zfQnqW75Z2C2ilpVtXDSsKn75Q3bXAOFapqiFaQmWUmih5vJZKVgUtUDQfy4ZvOj76Io8",
  },
  {
    quote: "Coming here was the best investment I ever made. The networking alone was worth twice the tuition.",
    name: "Julian Pierce",
    role: "The Kick Curator",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB2L6PyDM9Xbjf_1Kej7giDMY35xZ21m9lY1H0pHQ61lafdoesM3QkXLR9uHIkl03HmDS6MRwggmy6-9kYkNZ-LICjRwcxt5Aw_1-lTp9_lZ_r6EXNL5Tzh_39slBz2dSRstGSYlqkmQ2rlESPBmlPGGOtw8N6o_UeTgvh9iOXaQjL6Co0VVT9lFVRyp-T3EaA1gqjRqRzexqlm8dVJNPWNjajzlFaWYR6g4U4oPfw2WhiKBUot1Ta3loyOU_run6LN9ekIVpV3c-A",
  },
] as const;

function TrainingApplicationForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="space-y-12"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="border-b border-black/10 py-2 focus-within:border-primary-black">
          <CampaignLabel>Name</CampaignLabel>
          <input required placeholder="Enter your full name" className="w-full border-0 bg-transparent p-0 text-lg outline-none ring-0 focus:ring-0" />
        </div>
        <div className="border-b border-black/10 py-2 focus-within:border-primary-black">
          <CampaignLabel>Email</CampaignLabel>
          <input required type="email" placeholder="your@email.com" className="w-full border-0 bg-transparent p-0 text-lg outline-none ring-0 focus:ring-0" />
        </div>
      </div>
      <div className="border-b border-black/10 py-2 focus-within:border-primary-black">
        <CampaignLabel>Primary Interest</CampaignLabel>
        <select className="w-full appearance-none border-0 bg-transparent p-0 text-lg outline-none ring-0 focus:ring-0">
          <option>Training Only</option>
          <option>Consultancy Only</option>
          <option>The Full Academy Experience (Both)</option>
        </select>
      </div>
      <div className="border-b border-black/10 py-2 focus-within:border-primary-black">
        <CampaignLabel>Your Current Experience</CampaignLabel>
        <textarea placeholder="Tell us about your background in footwear..." className="min-h-[100px] w-full resize-none border-0 bg-transparent p-0 text-lg outline-none ring-0 focus:ring-0" />
      </div>
      <button type="submit" className="w-full bg-gloss-black py-6 text-xs font-medium uppercase tracking-[0.15em] text-soft-white transition-opacity hover:opacity-90 sm:text-sm">
        {sent ? "Application Sent" : "Submit Application"}
      </button>
    </form>
  );
}

export function TrainingShowcase() {
  return (
    <div className="campaign-page overflow-x-hidden">
      {/* Hero */}
      <section className="campaign-hero flex flex-col items-center gap-12 overflow-hidden campaign-pad pb-16 pt-4 md:flex-row md:items-start md:pb-20 md:pt-6">
        <CampaignReveal className="flex w-full flex-col items-start md:w-1/2">
          <CampaignEyebrow>SneakCure Academy</CampaignEyebrow>
          <CampaignSplitTitle as="h1" title="Learn the craft" accent="Build the future" className="mb-8" />
          <p className="mb-12 max-w-lg text-lg leading-relaxed text-muted">
            Hand-on mastery and strategic mentorship for the next generation of footwear artisans. We don&apos;t just teach
            restoration; we teach legacy.
          </p>
          <div className="flex w-full flex-col gap-6 sm:w-auto sm:flex-row">
            <CampaignBtn href="#apply">Apply To Academy</CampaignBtn>
            <CampaignBtn href="#apply" variant="secondary">
              Book Consultation
            </CampaignBtn>
          </div>
        </CampaignReveal>

        <CampaignReveal className="relative h-[500px] w-full md:h-[700px] md:w-1/2" delay={0.2}>
          <div className="absolute right-0 top-0 z-10 h-[80%] w-3/4 overflow-hidden shadow-2xl">
            <ParallaxImage src={IMG.heroMain} alt="Artisan at work" className="h-full w-full" />
          </div>
          <div className="absolute bottom-0 left-0 z-20 h-1/2 w-1/2 overflow-hidden border-8 border-pearl shadow-xl">
            <ParallaxImage src={IMG.heroSecondary} alt="Mentor and student" className="h-full w-full" />
          </div>
          <div className="absolute -left-8 top-1/4 z-30 rotate-[-90deg] bg-gloss-black px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
            TRAIN
          </div>
          <div className="absolute right-1/4 top-1/2 z-30 bg-gloss-black px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
            MENTOR
          </div>
          <div className="absolute -right-4 bottom-1/4 z-30 rotate-90 bg-gloss-black px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
            BUILD
          </div>
        </CampaignReveal>
      </section>

      <CampaignMarquee text="SneakCure Academy • Future of Footwear • Mastery • Mentorship" />

      {/* The Experience */}
      <section className="campaign-section campaign-pad bg-pearl">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2">
          <CampaignReveal className="group flex flex-col">
            <CampaignScrollImage src={IMG.training} alt="The Training" className="mb-8 aspect-[4/5] bg-soft-white" />
            <CampaignSplitTitle as="h3" size="display" title="The Training" accent="Hands-on mastery" className="mb-4" />
            <p className="max-w-md text-base leading-relaxed text-muted">
              Master the alchemy of restoration. From chemical cleaning to leather reconstruction, we provide the
              foundational skills required for world-class artisans.
            </p>
          </CampaignReveal>
          <CampaignReveal className="group mt-0 flex flex-col md:mt-24" delay={0.2}>
            <CampaignScrollImage src={IMG.consultancy} alt="The Consultancy" className="mb-8 aspect-[4/5] bg-soft-white" />
            <CampaignSplitTitle as="h3" size="display" title="The Consultancy" accent="Business architecture" className="mb-4" />
            <p className="max-w-md text-base leading-relaxed text-muted">
              Architecture for your business. We help you scale from a hobbyist to a global luxury service provider with
              proven operational blueprints.
            </p>
          </CampaignReveal>
        </div>
      </section>

      {/* The Modules */}
      <section className="flex flex-col bg-white md:flex-row">
        <div className="aspect-square h-[500px] w-full md:sticky md:top-0 md:aspect-auto md:h-screen md:w-1/2">
          <CampaignScrollImage src={IMG.modules} alt="Modules" className="h-full w-full" />
        </div>
        <div className="flex w-full flex-col justify-center bg-gloss-black p-[max(1.25rem,4vw)] text-white md:w-1/2">
          <CampaignSplitTitle title="The Modules" accent="Four core pillars" dark className="mb-12" />
          <ul className="divide-y divide-white/10">
            {MODULES.map((item, i) => (
              <CampaignSlide key={item} delay={i * 0.12} from="right" className="group flex cursor-default items-end justify-between pt-8">
                <div className="flex flex-col">
                  <span className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] opacity-50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="editorial-title text-[clamp(1.75rem,3vw,3rem)]">{item}</span>
                </div>
                <MaterialIcon name="arrow_forward" className="text-4xl transition-transform group-hover:translate-x-2" />
              </CampaignSlide>
            ))}
          </ul>
        </div>
      </section>

      {/* Personal Mentorship */}
      <section className="campaign-section overflow-hidden bg-deep-black px-[max(1.25rem,4vw)] text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 md:grid-cols-12">
          <CampaignReveal className="flex flex-col items-start md:col-span-5">
            <CampaignSplitTitle title="Personal Mentorship" accent="Direct access" dark className="mb-8" />
            <p className="mb-12 text-lg leading-relaxed opacity-80">
              Direct access to industry pioneers. Your journey is uniquely yours, and our mentorship calls ensure your
              path is straight and your standard is impeccable.
            </p>
            <div className="group flex cursor-pointer items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 transition-all group-hover:bg-white group-hover:text-primary-black">
                <MaterialIcon name="play_arrow" />
              </div>
              <span className="text-[12px] font-medium uppercase tracking-[0.15em]">Watch the process</span>
            </div>
          </CampaignReveal>
          <CampaignReveal className="md:col-span-7" delay={0.3}>
            <div className="relative aspect-video w-full bg-soft-white md:aspect-[3/4]">
              <CampaignScrollImage
                src={IMG.mentorship}
                alt="Mentorship"
                className="h-full w-full"
                imgClassName="opacity-80 contrast-125 grayscale"
              />
              <div className="pointer-events-none absolute inset-0 m-8 border-[20px] border-deep-black/20" />
            </div>
          </CampaignReveal>
        </div>
      </section>

      {/* A Day Inside */}
      <section className="campaign-section campaign-pad">
        <CampaignReveal className="mb-24 text-center">
          <CampaignSplitTitle title="A Day Inside" accent="The academy workflow" align="center" className="mb-4" />
          <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-muted">The Academy Workflow</p>
        </CampaignReveal>
        <div className="relative mx-auto max-w-7xl space-y-32">
          <CampaignTimelineLine className="absolute bottom-0 left-1/2 top-0 hidden -translate-x-1/2 md:block" />
          {[
            {
              time: "08:00 — 10:00",
              title: "Theory & Rituals",
              body: "Coffee and curriculum. Understanding material science and the chemistry of restoration before a single brush is touched.",
              image: IMG.dayMorning,
              align: "left" as const,
            },
            {
              time: "10:00 — 14:00",
              title: "Guided Practice",
              body: "Live restoration. Under the watchful eye of a master, you execute complex reconstructions on archived pieces.",
              image: IMG.dayPractice,
              align: "right" as const,
            },
            {
              time: "16:00 — 18:00",
              title: "Strategic Review",
              body: "Business development sessions. Reviewing your specific market positioning and client growth strategies for the next quarter.",
              image: IMG.dayReview,
              align: "left" as const,
            },
          ].map((step, i) => (
            <CampaignReveal
              key={step.title}
              delay={i * 0.1}
              className={`flex flex-col items-center gap-12 md:flex-row ${step.align === "right" ? "md:flex-row-reverse" : ""}`}
            >
              <CampaignSlide
                from={step.align === "left" ? "left" : "right"}
                delay={i * 0.08}
                className={`w-full md:w-1/2 ${step.align === "left" ? "md:pr-24 md:text-right" : "md:pl-24 md:text-left"}`}
              >
                <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">{step.time}</span>
                <h4 className="editorial-title mb-4 text-[clamp(1.75rem,3vw,3rem)]">{step.title}</h4>
                <p className={`max-w-sm text-base leading-relaxed text-muted ${step.align === "left" ? "md:ml-auto" : ""}`}>{step.body}</p>
              </CampaignSlide>
              <div className={`w-full md:w-1/2 ${step.align === "right" ? "md:pr-24 md:flex md:justify-end" : "md:pl-24"}`}>
                <CampaignScrollImage src={step.image} alt={step.title} className="aspect-square max-w-md bg-soft-white" />
              </div>
            </CampaignReveal>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="campaign-section campaign-pad bg-soft-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <CampaignScale key={t.name} delay={i * 0.15} className="flex h-full flex-col bg-pearl p-12">
              <MaterialIcon name="format_quote" filled className="mb-8 text-primary-black" />
              <p className="editorial-title mb-12 flex-1 text-[clamp(1.5rem,2.5vw,2rem)] italic leading-snug">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-auto flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-soft-white">
                  <img src={t.avatar} alt={t.name} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div>
                  <span className="block text-[12px] font-medium uppercase tracking-wider">{t.name}</span>
                  <span className="text-xs text-muted">{t.role}</span>
                </div>
              </div>
            </CampaignScale>
          ))}
        </div>
      </section>

      {/* Limited Intake */}
      <CampaignReveal className="campaign-section px-[max(1.25rem,4vw)] text-center">
        <CampaignSplitTitle title="Small batches" accent="Maximum attention" align="center" className="mb-6" />
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted">
          We strictly limit our academy to 8 students per quarter to ensure every artisan receives the technical feedback
          and strategic guidance they deserve.
        </p>
        <div className="mt-16 flex items-center justify-center gap-12">
          <div className="text-left">
            <span className="editorial-title block text-[clamp(2rem,4vw,3rem)]">Q3</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">Current Intake</span>
          </div>
          <div className="h-12 w-px bg-black/10" />
          <div className="text-left">
            <span className="editorial-title block text-[clamp(2rem,4vw,3rem)]">2/8</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">Spots Left</span>
          </div>
        </div>
      </CampaignReveal>

      {/* Application Form */}
      <section id="apply" className="campaign-section campaign-pad bg-white">
        <CampaignReveal className="mx-auto max-w-4xl bg-pearl p-12 shadow-sm md:p-24">
          <CampaignSplitTitle as="h3" size="display" title="Begin your transformation" accent="Apply today" className="mb-12" />
          <TrainingApplicationForm />
        </CampaignReveal>
      </section>

      {/* Final Close */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-[max(1.25rem,4vw)] text-center">
        <CampaignSplitTitle title="Start building work" accent="People remember" align="center" className="relative z-10 mb-12" />
        <div className="absolute inset-0 z-0 opacity-5">
          <ParallaxImage src={IMG.finalBg} alt="" className="h-full w-full" speed={0.12} />
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="pointer-events-none fixed bottom-12 right-12 z-40">
        <CampaignBtn href="#apply" className="pointer-events-auto !h-20 !w-20 !rounded-full !p-0 shadow-2xl md:!h-auto md:!w-auto md:!rounded-none md:!px-10 md:!py-5">
          <span className="md:hidden">
            <MaterialIcon name="school" className="text-3xl" />
          </span>
          <span className="hidden md:inline">Inquire Now</span>
        </CampaignBtn>
      </div>
    </div>
  );
}
