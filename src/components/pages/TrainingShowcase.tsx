"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CampaignBtn,
  CampaignLabel,
  CampaignReveal,
  MaterialIcon,
} from "@/components/pages/campaign-ui";
import { LoopVideo } from "@/components/services/LoopVideo";
import { SERVICES_HERO_VIDEO } from "@/components/services/service-media";
import { TrainingScrollStory } from "@/components/pages/TrainingScrollStory";
import { TrainingModules } from "@/components/pages/TrainingModules";
import { TrainingMentorship } from "@/components/pages/TrainingMentorship";
import { TrainingDayInside } from "@/components/pages/TrainingDayInside";
import { TrainingWordsMarquee } from "@/components/pages/TrainingWordsMarquee";
import { FOUNDER_MEDIA } from "@/lib/site-data";

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
} as const;

const DAY_STEPS = [
  {
    title: "Theory & Product Knowledge",
    body: "Learn leather types, sneaker construction, chemicals, color matching, and safe handling — the foundation for better craftsmanship.",
    image: IMG.dayMorning,
    categories: ["Leather", "Chemistry", "Materials", "Safety", "Color"],
  },
  {
    title: "Guided Practice",
    body: "Work on real restoration projects under expert supervision — cleaning, repair, recolor, whitening, and premium finishing.",
    image: IMG.dayPractice,
    categories: ["Cleaning", "Repair", "Recolor", "Finishing", "Tools"],
  },
  {
    title: "Strategic Review",
    body: "Review your work with mentors and map branding, pricing, acquisition, and growth systems for a studio that lasts.",
    image: IMG.dayReview,
    categories: ["Branding", "Pricing", "Growth", "Mentorship", "Systems"],
  },
] as const;

function TrainingApplicationForm() {
  const [sent, setSent] = useState(false);
  const field =
    "mt-2 w-full rounded-xl border border-primary-black/10 bg-[#f3f3f3] px-4 py-3.5 text-[15px] text-primary-black outline-none transition-colors placeholder:text-primary-black/35 focus:border-primary-black/25 focus:bg-white";

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div>
        <CampaignLabel>Full Name</CampaignLabel>
        <input
          required
          name="fullName"
          placeholder="Enter your full name"
          className={field}
        />
      </div>

      <div>
        <CampaignLabel>Email Address</CampaignLabel>
        <input
          required
          type="email"
          name="email"
          placeholder="your@email.com"
          className={field}
        />
      </div>

      <div>
        <CampaignLabel>Primary Interest</CampaignLabel>
        <select name="interest" className={`${field} appearance-none`}>
          <option>Training Only</option>
          <option>Consultancy Only</option>
          <option>Training & Consultancy (Full Program)</option>
        </select>
      </div>

      <div>
        <CampaignLabel>Current Experience</CampaignLabel>
        <textarea
          name="experience"
          placeholder="Tell us about your background in footwear or leather restoration..."
          className={`${field} min-h-[88px] resize-none`}
        />
      </div>

      <div>
        <CampaignLabel>Business Goals</CampaignLabel>
        <textarea
          name="goals"
          placeholder="How can we help — launch a studio, grow an existing business, or build a premium restoration brand..."
          className={`${field} min-h-[110px] resize-none`}
        />
      </div>

      <button
        type="submit"
        className="mt-2 w-full rounded-full bg-primary-black py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-opacity hover:opacity-90"
      >
        {sent ? "Application Sent" : "Submit Application"}
      </button>
    </form>
  );
}

export function TrainingShowcase() {
  return (
    <div className="campaign-page overflow-x-clip">
      {/* Hero — oversized headline left, copy + CTAs right */}
      <section className="relative isolate min-h-[min(100svh,48rem)] overflow-hidden bg-primary-black text-white">
        <div className="absolute inset-0" aria-hidden>
          <LoopVideo
            src={SERVICES_HERO_VIDEO}
            poster={IMG.heroMain}
            className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/72 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25" />
        </div>

        <div className="relative z-10 section-pad mx-auto grid max-w-7xl items-end gap-10 pb-16 pt-28 sm:gap-12 sm:pb-20 sm:pt-32 md:pb-24 md:pt-36 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-10 xl:gap-14">
          <CampaignReveal>
            <h1 className="editorial-title text-[clamp(3rem,10vw,6.75rem)] font-semibold uppercase leading-[0.92] tracking-[-0.045em] text-white">
              <span className="block">Master</span>
              <span className="block">the Craft</span>
              <span className="mt-[0.06em] block italic normal-case tracking-[-0.035em] text-white/45">
                Build the business.
              </span>
            </h1>
          </CampaignReveal>

          <CampaignReveal delay={0.12} className="max-w-md lg:justify-self-end lg:pb-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/55">
              Sneakcure Training
            </p>
            <p className="mt-4 text-sm font-medium leading-relaxed text-white/75 sm:text-[15px]">
              Learn directly from India&apos;s premium leather &amp; sneaker restoration experts —
              hands-on craft, real projects, and the systems to run a profitable atelier.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/50">
              Not just training. We build skilled professionals and future business leaders.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#apply"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-black transition-transform hover:scale-[1.03]"
              >
                Apply Today
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="#modules"
                className="inline-flex min-h-11 items-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/15"
              >
                View Curriculum
              </Link>
            </div>
          </CampaignReveal>
        </div>
      </section>

      <TrainingScrollStory
        images={{
          training: IMG.training,
          consultancy: IMG.consultancy,
        }}
      />

      <TrainingWordsMarquee />

      <TrainingModules
        images={{
          main: IMG.modules,
          secondary: IMG.consultancy,
          avatars: [IMG.mentorship, IMG.training, IMG.dayPractice, IMG.dayReview],
        }}
      />

      <TrainingMentorship
        videoSrc={FOUNDER_MEDIA.reel}
        poster={FOUNDER_MEDIA.portrait}
      />

      <TrainingDayInside steps={DAY_STEPS} />

      {/* Application Form */}
      <section id="apply" className="relative overflow-hidden bg-white py-16 text-primary-black sm:py-20 md:py-28">
        <div className="section-pad mx-auto max-w-7xl">
          <div className="mb-10 flex items-center justify-between gap-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-black/40 sm:mb-12">
            <span>Sneakcure Training</span>
            <span>01</span>
          </div>

          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14 xl:gap-20">
            <CampaignReveal className="lg:sticky lg:top-[calc(var(--site-header-offset,5rem)+1.5rem)] lg:pt-2">
              <h2 className="editorial-title text-[clamp(2.75rem,7vw,5.5rem)] font-semibold uppercase leading-[0.9] tracking-[-0.045em] text-primary-black">
                Let&apos;s talk
              </h2>
              <p className="mt-5 max-w-md text-sm font-medium leading-relaxed text-primary-black/55 sm:text-[15px]">
                Share your background, goals, and interests — whether you&apos;re starting out or scaling a studio.
              </p>
              <div className="mt-10 flex items-center gap-3">
                <span className="relative h-12 w-12 overflow-hidden rounded-full bg-[#ececec] ring-1 ring-primary-black/10">
                  <img
                    src={FOUNDER_MEDIA.portrait}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </span>
                <div>
                  <p className="text-sm font-semibold text-primary-black">Ajit Yadav</p>
                  <p className="text-xs text-primary-black/45">Founder, Sneakcure</p>
                </div>
              </div>
            </CampaignReveal>

            <CampaignReveal delay={0.1}>
              <div className="rounded-[1.5rem] border border-primary-black/8 bg-[#f6f6f6] p-6 shadow-[0_16px_50px_rgba(0,0,0,0.05)] sm:rounded-[1.75rem] sm:p-8 md:p-10">
                <TrainingApplicationForm />
              </div>
            </CampaignReveal>
          </div>
        </div>
      </section>

      {/* Final Close */}
      <section className="relative overflow-hidden bg-white py-20 text-primary-black sm:py-24 md:py-32">
        <div className="section-pad mx-auto max-w-7xl">
          <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14 xl:gap-20">
            <CampaignReveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-black/45">
                Closing note
              </p>
              <h2 className="editorial-title mt-4 text-[clamp(2.5rem,6.5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-primary-black">
                Start Building Work
                <span className="mt-1 block italic text-primary-black/40">People remember.</span>
              </h2>

              <div className="mt-8 max-w-xl space-y-5 text-sm font-medium leading-relaxed text-primary-black/60 sm:text-[15px]">
                <p>Anyone can clean a shoe.</p>
                <p>
                  Professionals restore craftsmanship, preserve luxury, and create experiences that customers never
                  forget.
                </p>
                <p>
                  At Sneakcure, you&apos;ll gain the technical expertise, business knowledge, and confidence to build a
                  restoration brand that stands out in the market. Learn the craft, master the business, and create work
                  that people proudly recommend.
                </p>
                <p className="font-semibold text-primary-black">
                  Build skills. Build trust. Build a business with Sneakcure — luxury craftsmanship.
                </p>
              </div>

              <Link
                href="#apply"
                className="mt-10 inline-flex min-h-11 items-center rounded-full bg-primary-black px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-transform hover:scale-[1.03]"
              >
                Apply Today
              </Link>
            </CampaignReveal>

            <CampaignReveal delay={0.12} className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#ececec] sm:rounded-[1.75rem]">
                <img
                  src={IMG.training}
                  alt="Sneakcure craftsmanship"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-5 right-5 text-sm font-semibold leading-snug text-white sm:bottom-6 sm:left-6 sm:right-6">
                  Craft you can stand behind. A brand people recommend.
                </p>
              </div>
            </CampaignReveal>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="pointer-events-none fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 sm:bottom-12 sm:right-12">
        <CampaignBtn
          href="#apply"
          className="pointer-events-auto !h-20 !w-20 !rounded-full !p-0 shadow-2xl md:!h-auto md:!w-auto md:!rounded-none md:!px-10 md:!py-5"
        >
          <span className="md:hidden">
            <MaterialIcon name="school" className="text-3xl" />
          </span>
          <span className="hidden md:inline">Apply Today</span>
        </CampaignBtn>
      </div>
    </div>
  );
}
