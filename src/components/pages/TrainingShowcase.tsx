"use client";

import { useState } from "react";
import {
  CampaignBtn,
  CampaignEyebrow,
  CampaignLabel,
  CampaignMarquee,
  CampaignReveal,
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
  {
    title: "Craft & Repair",
    body: "Master professional cleaning, deep cleaning, repainting, leather repair, color restoration, sole whitening, stitching, suede restoration, bag restoration, and premium finishing techniques.",
  },
  {
    title: "Pricing & Value",
    body: "Understand how to price your services, calculate profits, create premium service packages, and build a business that delivers consistent revenue.",
  },
  {
    title: "Luxury Branding",
    body: "Learn how to build a premium brand that customers trust through social media, Google Business Profile optimization, digital marketing, packaging, and customer experience.",
  },
  {
    title: "Client Relations",
    body: "Develop long-term customer relationships through professional communication, quality service, after-sales support, and repeat business strategies.",
  },
] as const;

const DAY_STEPS = [
  {
    title: "Theory & Product Knowledge",
    body: "Begin with the fundamentals of restoration. Learn about leather types, sneaker construction, restoration chemicals, cleaning solutions, paints, adhesives, color matching, and safe handling practices. A strong foundation leads to better craftsmanship.",
    image: IMG.dayMorning,
    align: "left" as const,
  },
  {
    title: "Guided Practice",
    body: "Apply what you've learned by working on real restoration projects under expert supervision. Practice sneaker cleaning, leather repair, recoloring, sole whitening, bag restoration, and premium finishing using professional tools and equipment.",
    image: IMG.dayPractice,
    align: "right" as const,
  },
  {
    title: "Strategic Review",
    body: "End the day by reviewing your work with mentors while learning how to build a successful restoration business. Topics include branding, customer acquisition, pricing strategies, workflow optimization, and business growth planning.",
    image: IMG.dayReview,
    align: "left" as const,
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
          <CampaignLabel>Full Name</CampaignLabel>
          <input
            required
            placeholder="Enter your full name"
            className="w-full border-0 bg-transparent p-0 text-lg outline-none ring-0 focus:ring-0"
          />
        </div>
        <div className="border-b border-black/10 py-2 focus-within:border-primary-black">
          <CampaignLabel>Email Address</CampaignLabel>
          <input
            required
            type="email"
            placeholder="your@email.com"
            className="w-full border-0 bg-transparent p-0 text-lg outline-none ring-0 focus:ring-0"
          />
        </div>
      </div>
      <div className="border-b border-black/10 py-2 focus-within:border-primary-black">
        <CampaignLabel>Primary Interest</CampaignLabel>
        <select className="w-full appearance-none border-0 bg-transparent p-0 text-lg outline-none ring-0 focus:ring-0">
          <option>Training Only</option>
          <option>Consultancy Only</option>
          <option>Training & Consultancy (Full Program)</option>
        </select>
      </div>
      <div className="border-b border-black/10 py-2 focus-within:border-primary-black">
        <CampaignLabel>Current Experience</CampaignLabel>
        <textarea
          placeholder="Tell us about your background in footwear or leather restoration..."
          className="min-h-[100px] w-full resize-none border-0 bg-transparent p-0 text-lg outline-none ring-0 focus:ring-0"
        />
      </div>
      <div className="border-b border-black/10 py-2 focus-within:border-primary-black">
        <CampaignLabel>Business Goals</CampaignLabel>
        <textarea
          placeholder="Share your goals — launch a studio, grow an existing business, or build a premium restoration brand..."
          className="min-h-[100px] w-full resize-none border-0 bg-transparent p-0 text-lg outline-none ring-0 focus:ring-0"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gloss-black py-6 text-xs font-medium uppercase tracking-[0.15em] text-soft-white transition-opacity hover:opacity-90 sm:text-sm"
      >
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
          <CampaignEyebrow>Sneakcure Training</CampaignEyebrow>
          <CampaignSplitTitle
            as="h1"
            title="Master the Craft"
            accent="Build a Profitable Restoration Business"
            className="mb-8"
          />
          <p className="mb-6 max-w-lg text-lg leading-relaxed text-muted">
            Learn directly from India&apos;s premium leather &amp; sneaker restoration experts. Our hands-on training is
            designed for entrepreneurs, business owners, and passionate professionals who want to build a successful
            restoration business with industry-leading techniques and real-world experience.
          </p>
          <p className="mb-12 max-w-lg text-base leading-relaxed text-primary-black/70">
            Not just training. We build skilled professionals and future business leaders.
          </p>
          <div className="flex w-full flex-col gap-6 sm:w-auto sm:flex-row">
            <CampaignBtn href="#apply">Apply Today</CampaignBtn>
          </div>
        </CampaignReveal>

        <CampaignReveal className="relative h-[min(72vw,380px)] w-full sm:h-[420px] md:h-[700px] md:w-1/2" delay={0.2}>
          <div className="absolute right-0 top-0 z-10 h-[80%] w-3/4 overflow-hidden shadow-2xl">
            <ParallaxImage src={IMG.heroMain} alt="Artisan at work" className="h-full w-full" />
          </div>
          <div className="absolute bottom-0 left-0 z-20 h-1/2 w-1/2 overflow-hidden border-8 border-pearl shadow-xl">
            <ParallaxImage src={IMG.heroSecondary} alt="Mentor and student" className="h-full w-full" />
          </div>
          <div className="absolute -left-8 top-1/4 z-30 hidden rotate-[-90deg] bg-gloss-black px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white md:block">
            TRAIN
          </div>
          <div className="absolute right-1/4 top-1/2 z-30 hidden bg-gloss-black px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white md:block">
            MENTOR
          </div>
          <div className="absolute -right-4 bottom-1/4 z-30 hidden rotate-90 bg-gloss-black px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white md:block">
            BUILD
          </div>
        </CampaignReveal>
      </section>

      <CampaignMarquee text="Sneakcure Training • Craft & Repair • Business Growth • Premium Restoration" />

      {/* The Training & Consultancy */}
      <section className="campaign-section campaign-pad bg-pearl">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2">
          <CampaignReveal className="group flex flex-col">
            <CampaignScrollImage src={IMG.training} alt="The Training" className="mb-8 aspect-[4/5] bg-soft-white" />
            <CampaignSplitTitle as="h2" size="display" title="The Training" accent="Hands-on mastery" className="mb-4" />
            <p className="max-w-md text-base leading-relaxed text-muted">
              Build the skills that premium clients expect. At Sneakcure, you&apos;ll learn professional sneaker, shoe,
              leather, bag, and sofa restoration through practical training—not just theory. Every session is designed
              to help you confidently handle real customer projects using industry-standard techniques and tools.
            </p>
          </CampaignReveal>
          <CampaignReveal className="group mt-0 flex flex-col md:mt-24" delay={0.2}>
            <CampaignScrollImage src={IMG.consultancy} alt="The Consultancy" className="mb-8 aspect-[4/5] bg-soft-white" />
            <CampaignSplitTitle as="h2" size="display" title="The Consultancy" accent="Business architecture" className="mb-4" />
            <p className="max-w-md text-base leading-relaxed text-muted">
              Knowing the craft is only the beginning. We help you turn your skills into a profitable business with
              proven systems for pricing, branding, operations, customer experience, and marketing. Whether you&apos;re
              launching your first restoration studio or expanding an existing business, our consultancy provides a
              clear roadmap for sustainable growth.
            </p>
          </CampaignReveal>
        </div>
      </section>

      {/* The Modules */}
      <section className="flex flex-col bg-white md:flex-row">
        <div className="aspect-square h-[500px] w-full md:sticky md:top-0 md:aspect-auto md:h-screen md:w-1/2">
          <CampaignScrollImage src={IMG.modules} alt="Training modules" className="h-full w-full" />
        </div>
        <div className="flex w-full flex-col justify-center bg-gloss-black p-[max(1.25rem,4vw)] text-white md:w-1/2">
          <CampaignSplitTitle title="The Modules" accent="Four pillars of success" dark className="mb-12" />
          <ul className="divide-y divide-white/10">
            {MODULES.map((item, i) => (
              <CampaignSlide
                key={item.title}
                delay={i * 0.12}
                from="right"
                className="group cursor-default pt-8 first:pt-0"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="min-w-0 flex-1">
                    <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] opacity-50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="editorial-title block text-[clamp(1.5rem,3vw,2.25rem)]">{item.title}</span>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/55">{item.body}</p>
                  </div>
                  <MaterialIcon
                    name="arrow_forward"
                    className="shrink-0 text-3xl opacity-40 transition-transform group-hover:translate-x-2 group-hover:opacity-100"
                  />
                </div>
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
            <p className="mb-6 text-lg leading-relaxed opacity-80">
              Receive one-on-one guidance from experienced restoration professionals throughout your learning journey.
              Get personalized technical feedback, solve business challenges, and gain practical insights from experts
              who restore premium footwear and luxury leather products every day.
            </p>
            <p className="mb-12 text-base leading-relaxed text-white/55">
              Every question matters. Every student gets individual attention.
            </p>
            <div className="group flex cursor-pointer items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 transition-all group-hover:bg-white group-hover:text-primary-black">
                <MaterialIcon name="play_arrow" />
              </div>
              <span className="text-[12px] font-medium uppercase tracking-[0.15em]">Watch the Process</span>
            </div>
          </CampaignReveal>
          <CampaignReveal className="md:col-span-7" delay={0.3}>
            <div className="relative aspect-video w-full bg-soft-white md:aspect-[3/4]">
              <CampaignScrollImage
                src={IMG.mentorship}
                alt="Personal mentorship"
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
        <CampaignReveal className="mb-16 text-center md:mb-24">
          <CampaignSplitTitle title="A Day Inside" accent="The Sneakcure experience" align="center" className="mb-6" />
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted">
            Every training day is carefully structured to combine theory, practical learning, and business development,
            ensuring you leave with both technical expertise and entrepreneurial confidence.
          </p>
        </CampaignReveal>
        <div className="relative mx-auto max-w-7xl space-y-32">
          <CampaignTimelineLine className="absolute bottom-0 left-1/2 top-0 hidden -translate-x-1/2 md:block" />
          {DAY_STEPS.map((step, i) => (
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
                <h4 className="editorial-title mb-4 text-[clamp(1.75rem,3vw,3rem)]">{step.title}</h4>
                <p className={`max-w-sm text-base leading-relaxed text-muted ${step.align === "left" ? "md:ml-auto" : ""}`}>
                  {step.body}
                </p>
              </CampaignSlide>
              <div className={`w-full md:w-1/2 ${step.align === "right" ? "md:pr-24 md:flex md:justify-end" : "md:pl-24"}`}>
                <CampaignScrollImage src={step.image} alt={step.title} className="aspect-square max-w-md bg-soft-white" />
              </div>
            </CampaignReveal>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="campaign-section campaign-pad bg-white">
        <CampaignReveal className="mx-auto max-w-4xl bg-pearl p-8 shadow-sm sm:p-12 md:p-24">
          <CampaignSplitTitle as="h2" size="display" title="Begin Your Transformation" accent="Apply today" className="mb-6" />
          <p className="mb-12 max-w-2xl text-base leading-relaxed text-muted">
            Ready to build a successful restoration business? Complete the application form and tell us about your
            background, goals, and interests. Whether you&apos;re a beginner, entrepreneur, or existing business owner,
            Sneakcure will help you develop the technical skills and business knowledge needed to succeed in the
            premium restoration industry.
          </p>
          <TrainingApplicationForm />
        </CampaignReveal>
      </section>

      {/* Final Close */}
      <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-[max(1.25rem,4vw)] py-24 text-center md:min-h-screen md:py-32">
        <div className="absolute inset-0 z-0 opacity-5">
          <ParallaxImage src={IMG.finalBg} alt="" className="h-full w-full" speed={0.12} />
        </div>
        <CampaignReveal className="relative z-10 mx-auto max-w-3xl">
          <CampaignSplitTitle title="Start Building Work" accent="People remember" align="center" className="mb-10" />
          <div className="space-y-6 text-base leading-relaxed text-muted sm:text-lg">
            <p>Anyone can clean a shoe.</p>
            <p>
              Professionals restore craftsmanship, preserve luxury, and create experiences that customers never forget.
            </p>
            <p>
              At Sneakcure, you&apos;ll gain the technical expertise, business knowledge, and confidence to build a
              restoration brand that stands out in the market. Learn the craft, master the business, and create work
              that people proudly recommend.
            </p>
            <p className="font-medium text-primary-black">
              Build skills. Build trust. Build a business with Sneakcure — luxury craftsmanship.
            </p>
          </div>
        </CampaignReveal>
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
