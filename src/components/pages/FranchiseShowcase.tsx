"use client";

import { useState } from "react";
import {
  CampaignBtn,
  CampaignEyebrow,
  CampaignGrayscaleImage,
  CampaignHeroParallax,
  CampaignLabel,
  CampaignMarquee,
  CampaignReveal,
  CampaignScale,
  CampaignScrollImage,
  CampaignSlide,
  CampaignSplitTitle,
  CampaignTimelineLine,
  MaterialIcon,
  ParallaxImage,
} from "@/components/pages/campaign-ui";
import { FRANCHISE_EXCLUSIVE_TERRITORIES } from "@/lib/site-data";

const IMG = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9bjaskSLC0EPreQVMT7hNpwyQvW3ndEjKZEZyUaK6FFhfVaYFD5-d8YMWKu_GBWxob2NeubM1bXfwIDxPgR4rYZN2a4Y5gk91vlcaieDCrLj4Fy_nYHXDQPcSWFs_gLMV6KfFBMOwQ39MFx7c26pcTox2ViC9mXe50ird35808AHzUOsB4c5Ms4tZ2QCjyk5vercZLO-Nj_gzLMa-XiIyrRc2B5g-0H7pjkBgXtXbeSDBrE1WzbU6RXroKc2FD4_Tcjt7H6yvSFk",
  why1: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgtipPd0onU9T6ND3b9zhPXavpDjRogJIfD7dYBVUxx2puijFMQSPl5iVVxp4v7qCgp4Gb4bAzIhEX-nVx0ZoXyaJWXQiFfOkujtLj-DQDSfrrjq-u4SlEm59-0F2AT3KzEFRpNQJhRa3i3HohF95CYT7Q1ZeiyFSOTZGULqmkKpnJLI6bbNcXRdwbaBQHb6QJyQUNa167jq7Fd8rZ8GgTC2-nwg2USbnSas6zkosWsKakADXUi0Kj30Ba9xmA8sFMQFZ5VM3sCAw",
  why2: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDQqrVp6bMn2b_SNiPFXMdq2nmat9tagl7egR5ybuyloKLIxmpzkE_Pj1Bl2Hzf5pzjXcJhY1SKK0fPmhr4bB8-HY3nuz6Y5GQA8etQJORhhmX8PU9-g3HYV-oWvLM1gkOOg6Dv_GeumTlEB5yGBIIhmdcrUOMOEFl0frEFHFT32Krbv3Ve8eBoQX7kH74DpXLVbpnn86miXr7-sP2fPlQeqsV250A80E2NSgiU-oWiE2m7jNH089ssRE4fClFozixEK_8QaEmB8Q",
  advantage1: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0jt9Jy2erODT_0rLBlj43m5d9ynTWl84HA1mocpYIX7yxIUvJCl8bErj6PT5xUMeyZ0st2uITyTslNMnS3p70tWmA9zw9MwqU6pB1kSAgy8U4lsubi67gnnNGdbe3ZaZhta5BqVUk384xtupZplyJoxgwF0aAVwKlo3F7fdbAUZB1a22DpVMpO59MFQzIPHD4JZeWn0rH891CrOK82HkyJEHzBkJpW6aGFWkihKggcK7iJFtP1WQsFkaaSLijU77nmbICduvAxEM",
  advantage2: "https://lh3.googleusercontent.com/aida-public/AB6AXuAolJwCCIGzmXyKFA-LxPHHOEmutHVaVFmxYZogxo_j-ry5v8U4lx2AFzDKjqH9rTKEU7u5woC_TNmQqDbxhaPILTJiu4FMbqWfW9t_Vc1Zlhz3-uGl2aDUqrJKQQ3u1aEoc8aolb32quQ0mWVyAsy7GC3sXb4QkhbfA_1ug8u5q3Hs3N87R5dCTCeOV68PQIH5hrwY7T1tZpG7aVbNH0oAF3Y5L2NHij01JbE0sH3xXfVVr91l3h8HKc3RUL2gX5hL0aNjX2wsQ5k",
  advantage3: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKf7Yt0GackwJzAHlKbFGDGfss_5WVCKGHogac7lNKgf-7W01bnK1MyFcOrABVF7h1x4oWF70JhdVj_JT4G9kL27EGy4U_EHoebhZs_3fkKhFsiZ2rKh3rOBEPd-uocoAfWdcjgQPuVL1qqRYSODTTqMCXwqg6VUjLpZzh9PVbGdeTBTOH7hq43Kbz4B5j9EHfedHve4VtEtp4pEMIAAxWg91qtvVybxFJ4_0oM-T4W1ukQHC_G8divn3flvX9EMOr4YR7hXMO3eg",
  studio: "https://lh3.googleusercontent.com/aida-public/AB6AXuC63WQcWdPWICp7H-PBnleVHosYEqVDRiVwe5O2Q0Nm4S3Yww-39oJQmVhjD3KWfdiB96Ei8EEnu-hFxc7QFvkUP1aIR9OECJaXLftPfRQ23QYoWZcA-iepTysFZkJSZkHxx12Ad9r-iiYdVebgbhAPbH9fq2XgGpgztSBUCuhhRw3D9ldgSA8yKHZqpivYWfkEsjp7ZeAlDqou9zEdK5tfbl1KrKYWsCwhFZjm7O4XzClkU9al8Bh1sPJ0KPLx-eky48T0JcqMbfo",
  journey1: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOz8weQgtn5TzSnRVQqnu1qraoNxUUqRf8D4xPqjWLnhIfMqHUIfPEWWas1dZKV3Yuns24EASjdec6T7St0Esa7TqTEAlF972ZQ_g2lwQDRsUrbfxn15LPhT4DMq5WZTC3haGqYuXlpyo66-8u9rwLfFrkBrW31ONyiSvzZ1paHPMPQefLNOQBWm4SgMKyoEk6MPHoWYPIoBCc_zpsy050OeFbydCbH9MrQD62xUlfPuEmDdqgrl-VNxFOlYKllkV0150dZD-rZfc",
  journey2: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYVmx13ydRAmb7tKKk5BUOG0HBxYuRb-8jbTM33cPnJ0_fsEDmlL703bGxNUcl1SCRM8LiIx869cEckhtLWj14UQzal9ZsigYIwRAOW8HUyTGLNKQ4wzN1bhrDN5Ip-dg0fdZEukVe5u9XpTq9KaNEtNYAA9u3YLkcNeN5TQ07BzDk8G9wsDrvNA97D0VbnNnka9YnvOc_zNBE6VwKF6eBGTrT0iB43YdIHqAg1aohAN20R7hSTMp8Lkzzn1MGtIXX8FOCSR0K_CM",
  journey3: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkwjwMEaw9x1yCbI6AlQqQSHoyJD604nQw33OscBQbxnB7wVALP4d5xhhThZYega6WtLep6Tv5Kj8RuibMfODPBSH3KSR3kS8lMX8R60amqLHfVwDeMpgg8IGhoI_PbHC8miK30l412cBRQ4yUZTbjeUzBLuGFrI90lFtVPl6jYaC-gtjsNJHjFsGXQGmZ2-Rb2HmW4pc5iDjtcWLTrUJ-ums1zQwXTZHu-QULwBkt3NO5gBMjiFFeORDQsQrytxilH5ENeTSI-dU",
  journey4: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMA17kx5H3XzX7iC3xClB305EG-R-MsoQR539LTYB0VJRTT7BNY1Z3TFDStlQo37oOc0FbgwtIGpN0llTgUiZqIYliyfp5vzFPCjyfQjldYi3fqCA6aOKeQnTawzuGdEvtVURcD8rnfXHYH5J11IHiM3fviCzo-hzsUn_Ykt-7zs-NXUSvnw-m4vvZOtAswn0XkTbyvq36aRAZdFIkDa8yHMXldoBCNUvP_pG8YVxMoXKUwcJDlTehtz7hsRv3ErfQ1xb2mD2fo54",
  match1: "https://lh3.googleusercontent.com/aida-public/AB6AXuAV_agK1Dog2SD1f_LcZzUDRRvmuOjwL5rwOstiENrC82klSiLMboBWLO1s04LjFdNr_FMLM27l893X_8AfACsuMGyB_1YX8jxFEQKzkrNMhLJk99xqDiFF6AWakjWULvAS0RuUZNOA7AEdPrBg5F57slFmxuCehvqE-PQ_Q9yqTg5rwbIoHzMuZfAB4tbp4cGLeYXPsakJYVWVWngYDdI_PgaoYGFK5PZUoCtJU5Ec4EPkqx4aHHwsoxH5vzqN-jvXDOZATD0EPxQ",
  match2: "https://lh3.googleusercontent.com/aida-public/AB6AXuAo2KKmD0j9qr2iSpfYcve6bxmIjjhkCzZDVPMYDiEH5u9CYpVmH0eref0ggHi2v8gPHxMM6tAwllBx9Q4d29qpZHwMiju7yEZR_9q6dnmkezO3e5b2W1e3c7RvXmgLTfuufuphYpYnTK3UME2gcgU9RWa8tDSlE6dc2czdgF6wyfGFsZ8D6vLjx0LeHn-avb9TDPCVOUOekFdM1Aj3ExUdXI5rHWB8b6ZV9_AGhKiNxm2ka-7zrNUd5iAQIMh5kJ0vFVvNcWCRRR8",
  applySide: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFQrZM7A5mhGh--30P7Hr-d1u-_Af2giBwKRfb0K8WvUiQNn4X0OMc7jK0seUUn_D0ju2nZKsUuFCoGKlRdXjfJaBYvQepyjuqVxZkNyA6yv2Gmuy3jmSr5OfO2pmK27iJZEGjFD7HWq65bZsN-QGDDOig2jtKq-IyNlCZ-N6m7RvWT1bfAcaidUXhkjVptReUvXKRa2Ew3lnw1iXM_VnDBGvWfK_1ne7fSBBBGI0fpWXKM3xBkekrMCLImBSjFZ9lXn5wuynhMqI",
} as const;

const ROADMAP = ["Apply", "Discovery", "Approval", "Training", "Launch", "Grow"] as const;

const SYSTEM = [
  { icon: "school", title: "Training", items: ["Master Artisan Certification", "Sales & Service Training", "Management Coaching"] },
  { icon: "terminal", title: "Systems", items: ["Sneakcure OS Dashboard", "Inventory Management", "Automated Client Updates"] },
  { icon: "campaign", title: "Marketing", items: ["Local Digital Strategies", "Premium Brand Assets", "PR & Launch Media Kit"] },
  { icon: "support", title: "Support", items: ["24/7 Technical Hotline", "Supply Chain Access", "Annual Brand Summit"] },
] as const;

const JOURNEY_STAGES = [
  {
    img: IMG.journey1,
    num: "01",
    title: "Secure Digital Booking",
    body: "Clients book through our encrypted platform, uploading high-res photos for initial appraisal.",
  },
  {
    img: IMG.journey2,
    num: "02",
    title: "White-Glove Collection",
    body: "Premium logistics partner or in-studio drop-off with detailed condition mapping.",
  },
  {
    img: IMG.journey3,
    num: "03",
    title: "Precision Restoration",
    body: "The craft happens. Clients receive real-time status updates and behind-the-scenes footage.",
  },
  {
    img: IMG.journey4,
    num: "04",
    title: "The Reveal",
    body: "Delivered in archival-grade packaging with a digital certificate of restoration.",
  },
] as const;

function FranchiseJourneyStage({
  stage,
  imageClassName = "aspect-[4/3] w-full bg-white",
}: {
  stage: (typeof JOURNEY_STAGES)[number];
  imageClassName?: string;
}) {
  return (
    <>
      <CampaignScrollImage src={stage.img} alt={stage.title} className={imageClassName} />
      <div className="flex gap-4">
        <span className="editorial-title shrink-0 text-3xl text-primary-black/10 sm:text-4xl">{stage.num}</span>
        <div className="min-w-0">
          <h3 className="text-lg font-bold uppercase leading-tight tracking-tighter sm:text-xl">{stage.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{stage.body}</p>
        </div>
      </div>
    </>
  );
}

function FranchiseJourneyMobile() {
  return (
    <section className="campaign-section overflow-x-hidden bg-soft-white md:hidden">
      <div className="campaign-pad">
        <CampaignReveal className="mb-8">
          <CampaignSplitTitle size="display" title="The Journey" accent="From apply to launch" />
        </CampaignReveal>
        <div className="space-y-10">
          {JOURNEY_STAGES.map((stage, i) => (
            <CampaignReveal key={stage.num} delay={i * 0.08} className="space-y-4">
              <FranchiseJourneyStage stage={stage} />
            </CampaignReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FranchiseJourneyDesktop() {
  return (
    <section className="campaign-section hidden overflow-hidden bg-soft-white md:block">
      <div className="mx-auto mb-16 max-w-[1440px] campaign-pad">
        <CampaignReveal>
          <CampaignSplitTitle size="display" title="The Journey" accent="From apply to launch" />
        </CampaignReveal>
      </div>
      <div className="flex snap-x snap-mandatory gap-8 overflow-x-auto pb-12 campaign-pad [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {JOURNEY_STAGES.map((stage, i) => (
          <CampaignReveal
            key={stage.num}
            delay={i * 0.1}
            className="w-[min(85vw,400px)] shrink-0 snap-start space-y-6"
          >
            <FranchiseJourneyStage stage={stage} imageClassName="aspect-square w-full bg-white" />
          </CampaignReveal>
        ))}
      </div>
    </section>
  );
}

function FranchiseApplicationForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="space-y-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-2">
          <CampaignLabel>Full Name</CampaignLabel>
          <input required placeholder="Alexander McQueen" className="w-full border-0 border-b border-black/10 bg-transparent px-0 py-3 outline-none transition-colors placeholder:text-black/20 focus:border-primary-black focus:ring-0" />
        </div>
        <div className="space-y-2">
          <CampaignLabel>Phone Number</CampaignLabel>
          <input required type="tel" placeholder="+1 000 000 000" className="w-full border-0 border-b border-black/10 bg-transparent px-0 py-3 outline-none transition-colors placeholder:text-black/20 focus:border-primary-black focus:ring-0" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-2">
          <CampaignLabel>Target City</CampaignLabel>
          <input required placeholder="Delhi, Lucknow, or Kanpur" className="w-full border-0 border-b border-black/10 bg-transparent px-0 py-3 outline-none transition-colors placeholder:text-black/20 focus:border-primary-black focus:ring-0" />
        </div>
        <div className="space-y-2">
          <CampaignLabel>Liquidity / Investment Range</CampaignLabel>
          <select className="w-full border-0 border-b border-black/10 bg-transparent px-0 py-3 outline-none focus:border-primary-black focus:ring-0">
            <option>?8L - ?15L</option>
            <option>?15L - ?25L</option>
            <option>?25L+</option>
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <CampaignLabel>Relevant Experience</CampaignLabel>
        <textarea rows={4} placeholder="Briefly describe your business background..." className="w-full resize-none border-0 border-b border-black/10 bg-transparent px-0 py-3 outline-none transition-colors placeholder:text-black/20 focus:border-primary-black focus:ring-0" />
      </div>
      <button type="submit" className="mt-8 w-full bg-gloss-black py-6 text-xs font-medium uppercase tracking-[0.3em] text-soft-white transition-all hover:bg-gloss-black/90 sm:text-sm">
        {sent ? "Application Sent" : "Submit Application"}
      </button>
    </form>
  );
}

export function FranchiseShowcase() {
  return (
    <div className="campaign-page overflow-x-hidden bg-pearl text-primary-black">
      {/* Hero */}
      <section className="campaign-hero flex flex-col items-stretch md:flex-row">
        <div className="flex w-full flex-col justify-start campaign-pad pb-12 md:w-1/2 md:pb-16">
          <CampaignReveal>
            <CampaignEyebrow>Sneakcure FRANCHISE</CampaignEyebrow>
            <CampaignSplitTitle as="h1" title="Launch a premium restoration business" accent="Own your city" className="mb-8" />
            <p className="mb-12 max-w-lg text-lg leading-relaxed text-muted">
              Become part of the world&apos;s most exclusive footwear and leather care ecosystem. We provide the craft, the
              technology, and the prestige.
            </p>
            <div className="mb-16 flex flex-wrap gap-6">
              <CampaignBtn href="#application">Apply For Franchise</CampaignBtn>
              <CampaignBtn href="#application" variant="secondary">
                Download Franchise Deck
              </CampaignBtn>
            </div>
            <div className="grid grid-cols-2 gap-8 border-t border-black/5 pt-10 md:grid-cols-4">
              {[
                ["Support", "Launch Team"],
                ["Knowledge", "Full Training"],
                ["Prestige", "Global Brand"],
                ["Scale", "Operations"],
              ].map(([label, value], i) => (
                <CampaignSlide key={label} delay={0.15 + i * 0.08} from="left">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#77777b]">{label}</p>
                  <p className="text-base font-semibold">{value}</p>
                </CampaignSlide>
              ))}
            </div>
          </CampaignReveal>
        </div>
        <CampaignHeroParallax className="relative w-full overflow-hidden bg-deep-black md:w-1/2">
          <ParallaxImage src={IMG.hero} alt="Franchise studio" className="h-full min-h-[420px] w-full opacity-80 md:min-h-full" speed={0.1} />
          <div className="pointer-events-none absolute inset-0 flex items-end justify-center p-4 md:items-center md:p-12">
            <div className="relative flex w-full max-w-lg flex-col gap-3 md:block md:h-full">
              <CampaignScale delay={0.3} className="border border-white/20 bg-white/90 p-4 shadow-2xl backdrop-blur-md md:absolute md:left-0 md:top-10 md:p-6">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-primary-black">Status</p>
                <h3 className="editorial-title text-xl md:text-2xl">Ready To Launch</h3>
              </CampaignScale>
              <CampaignScale delay={0.45} className="border border-white/10 bg-gloss-black/95 p-4 text-white shadow-2xl md:absolute md:bottom-40 md:right-0 md:p-8">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest opacity-60">Availability</p>
                <h3 className="editorial-title text-2xl md:text-3xl">Limited Cities</h3>
              </CampaignScale>
              <CampaignScale delay={0.6} className="border border-white/10 bg-white/10 p-4 text-white shadow-2xl backdrop-blur-xl md:absolute md:bottom-10 md:left-20 md:p-6">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest opacity-70">Expertise</p>
                <h3 className="editorial-title text-xl md:text-2xl">Premium Service</h3>
              </CampaignScale>
            </div>
          </div>
        </CampaignHeroParallax>
      </section>

      {/* Why This Business */}
      <section className="campaign-section campaign-pad mx-auto max-w-[1440px]">
        <div className="flex flex-col items-center gap-20 md:flex-row">
          <CampaignReveal className="w-full md:w-5/12">
            <CampaignEyebrow>The Opportunity</CampaignEyebrow>
            <CampaignSplitTitle size="display" title="A market of appreciation" accent="Not just utility" className="mb-8" />
            <div className="space-y-8">
              {[
                { icon: "trending_up", title: "High Market Growth", body: "The luxury resale and care market is projected to reach $50B by 2030. Own the local hub for care." },
                { icon: "group", title: "Elite Retention", body: "Our customers don't just visit once. Sneaker collectors and luxury owners return 4-6 times per year." },
                { icon: "workspace_premium", title: "Premium Positioning", body: "Avoid the race to the bottom. We command premium pricing through unparalleled artisanal quality." },
              ].map((item, i) => (
                <CampaignSlide key={item.title} delay={i * 0.1} from="left" className="flex gap-6">
                  <MaterialIcon name={item.icon} className="text-4xl text-primary-black" />
                  <div>
                    <h4 className="mb-2 text-lg font-bold">{item.title}</h4>
                    <p className="text-muted">{item.body}</p>
                  </div>
                </CampaignSlide>
              ))}
            </div>
          </CampaignReveal>
          <div className="grid w-full grid-cols-2 items-end gap-6 md:w-7/12">
            <div className="space-y-6">
              <CampaignReveal delay={0.2}>
                <CampaignScrollImage src={IMG.why1} alt="Artisan" className="h-[min(400px,70vw)] w-full md:h-[400px]" />
              </CampaignReveal>
              <CampaignScale delay={0.4} className="bg-gloss-black p-12 text-white">
                <p className="editorial-title mb-4 text-6xl">92%</p>
                <p className="text-[12px] font-medium uppercase tracking-widest opacity-70">Client Retention Rate</p>
              </CampaignScale>
            </div>
            <CampaignReveal delay={0.3}>
              <CampaignScrollImage src={IMG.why2} alt="Toolkit" className="h-[min(480px,85vw)] w-full md:h-[600px]" />
            </CampaignReveal>
          </div>
        </div>
      </section>

      {/* Why Sneakcure */}
      <section className="campaign-section bg-gloss-black px-[max(1.25rem,4vw)] text-white">
        <div className="mx-auto max-w-[1440px]">
          <CampaignReveal className="mx-auto mb-20 max-w-2xl text-center">
            <CampaignSplitTitle size="display" title="The Sneakcure Advantage" accent="Why partner with us" dark className="mb-6" />
            <p className="text-lg opacity-70">We don&apos;t just sell franchises; we build restoration institutions.</p>
          </CampaignReveal>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {[
              { img: IMG.advantage1, title: "Brand Credibility", body: "Instant association with the world's leading name in luxury sneaker care." },
              { img: IMG.advantage2, title: "Rigorous Training", body: "12-week intensive masterclasses covering every material from suede to exotic leathers." },
              { img: IMG.advantage3, title: "Operational Excellence", body: "Proprietary CRM and inventory systems designed specifically for the restoration workflow." },
            ].map((card, i) => (
              <CampaignReveal key={card.title} delay={i * 0.2} className="group">
                <CampaignScrollImage src={card.img} alt={card.title} className="mb-8 aspect-[4/5]" />
                <h3 className="editorial-title mb-4 text-2xl">{card.title}</h3>
                <p className="text-base opacity-60">{card.body}</p>
              </CampaignReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Studio */}
      <section className="campaign-section">
        <div className="mx-auto max-w-[1440px] campaign-pad">
          <CampaignReveal className="mb-20">
            <CampaignSplitTitle size="display" title="Your Flagship Studio" accent="Designed for prestige" />
            <p className="mt-4 max-w-xl text-lg text-muted">A meticulously designed space that balances clinical precision with artisanal warmth.</p>
          </CampaignReveal>
          <div className="group relative cursor-crosshair">
            <CampaignGrayscaleImage src={IMG.studio} alt="Studio" className="h-[min(520px,85vh)] w-full md:h-[716px]" />
            {[
              { top: "30%", left: "20%", title: "Concierge Reception", body: "A personalized intake experience where we assess every item under museum-grade lighting.", align: "left" },
              { top: "50%", left: "55%", title: "The Restoration Lab", body: "Custom-built ergonomic workstations equipped with our proprietary toolsets.", align: "left" },
              { top: "auto", bottom: "20%", right: "15%", left: "auto", title: "Final Inspection", body: "Temperature-controlled curing and QC area ensuring every pair meets the Sneakcure seal.", align: "right" },
            ].map((spot) => (
              <div
                key={spot.title}
                className="group/hotspot absolute"
                style={{ top: spot.top, left: spot.left, right: spot.right, bottom: spot.bottom }}
              >
                <div className="absolute h-4 w-4 animate-ping rounded-full bg-white" />
                <div className="relative z-10 h-4 w-4 rounded-full bg-white" />
                <div
                  className={`absolute w-64 bg-white p-6 opacity-0 shadow-2xl transition-all group-hover/hotspot:translate-y-0 group-hover/hotspot:opacity-100 ${spot.align === "right" ? "bottom-8 right-0 text-right" : "left-0 top-8 translate-y-2"}`}
                >
                  <h4 className="mb-2 font-bold">{spot.title}</h4>
                  <p className="text-sm opacity-70">{spot.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FranchiseJourneyMobile />
      <FranchiseJourneyDesktop />

      {/* Launch Roadmap */}
      <section className="campaign-section campaign-pad mx-auto max-w-[1440px]">
        <CampaignReveal className="mb-20 text-center">
          <CampaignSplitTitle size="display" title="Your Path to Launch" accent="Six clear stages" />
        </CampaignReveal>
        <div className="relative">
          <CampaignTimelineLine horizontal className="absolute left-0 top-1/2 hidden w-full -translate-y-1/2 md:block" />
          <div className="relative grid grid-cols-1 gap-12 md:grid-cols-6">
            {ROADMAP.map((step, i) => (
              <CampaignScale key={step} delay={i * 0.1} className="bg-pearl p-6">
                <div className="relative z-10 mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gloss-black text-white">{i + 1}</div>
                <h4 className="mb-2 text-center font-bold">{step}</h4>
                <p className="text-center text-sm text-muted">
                  {step === "Apply" && "Submit your credentials and preferred city location."}
                  {step === "Discovery" && "Deep dive session with our executive franchise team."}
                  {step === "Approval" && "Site selection and formal agreement finalization."}
                  {step === "Training" && "Technical and business training at Headquarters."}
                  {step === "Launch" && "Grand opening with our launch support squad."}
                  {step === "Grow" && "Scaling your studio with ongoing marketing."}
                </p>
              </CampaignScale>
            ))}
          </div>
        </div>
      </section>

      {/* Sneakcure System */}
      <section className="campaign-section bg-deep-black px-[max(1.25rem,4vw)] text-white">
        <div className="mx-auto max-w-[1440px]">
          <CampaignReveal className="mb-16">
            <CampaignSplitTitle size="display" title="The Sneakcure System" accent="Everything included" dark />
          </CampaignReveal>
          <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {SYSTEM.map((block, i) => (
              <CampaignReveal key={block.title} delay={i * 0.1} className="bg-deep-black p-12">
                <MaterialIcon name={block.icon} className="mb-8 text-4xl opacity-50" />
                <h3 className="mb-4 text-xl font-bold">{block.title}</h3>
                <ul className="space-y-3 text-sm opacity-60">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CampaignReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="campaign-section campaign-pad mx-auto max-w-[1440px]">
        <CampaignReveal className="mb-20 text-center">
          <CampaignSplitTitle size="display" title="Are You a Match" accent="Ideal partner traits" />
        </CampaignReveal>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {[
            { img: IMG.match1, title: "The Entrepreneur", body: "Strategic thinkers looking to dominate a niche luxury market with high barriers to entry." },
            { img: IMG.match2, title: "The Retail Owner", body: "Existing luxury multi-brand store owners looking to add a vertical high-margin service." },
          ].map((card, i) => (
            <CampaignScale key={card.title} delay={i * 0.2} className="group relative aspect-[16/9] overflow-hidden">
              <CampaignScrollImage src={card.img} alt={card.title} className="absolute inset-0 h-full w-full" />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-12 text-white">
                <h3 className="editorial-title mb-4 text-3xl">{card.title}</h3>
                <p className="max-w-sm opacity-70">{card.body}</p>
              </div>
            </CampaignScale>
          ))}
        </div>
      </section>

      {/* Exclusive Territories */}
      <section className="campaign-section bg-pearl px-[max(1.25rem,4vw)]">
        <div className="mx-auto max-w-[1440px]">
          <CampaignReveal className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <CampaignSplitTitle size="display" title="Exclusive Territories" accent="Limited cities open" />
              <p className="mt-2 text-lg text-muted">Delhi · Lucknow · Kanpur — one studio per city.</p>
            </div>
            <a
              href="https://www.google.com/maps/search/Sneakcure+Gomti+Nagar+Lucknow"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-primary-black pb-2 text-[12px] font-medium uppercase tracking-widest"
            >
              View on map
            </a>
          </CampaignReveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {FRANCHISE_EXCLUSIVE_TERRITORIES.map((city, i) => (
              <CampaignReveal key={city.name} delay={i * 0.1} className="border border-black/5 bg-white p-10">
                <div className="mb-8 flex items-start justify-between">
                  <h4 className="text-2xl font-bold uppercase tracking-tighter">{city.name}</h4>
                  <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${city.statusClass}`}>{city.status}</span>
                </div>
                <p className="mb-6 text-sm text-muted">{city.desc}</p>
                <div className="h-40 overflow-hidden bg-soft-white">
                  <CampaignScrollImage src={city.image} alt={city.name} className="h-full w-full" imgClassName="opacity-50 grayscale" />
                </div>
              </CampaignReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application */}
      <section id="application" className="flex min-h-screen flex-col items-stretch bg-white md:flex-row">
        <div className="relative hidden w-5/12 md:block">
          <CampaignScrollImage src={IMG.applySide} alt="Master artisan" className="h-full min-h-screen w-full" />
        </div>
        <div className="flex w-full flex-col justify-center campaign-pad py-20 md:w-7/12">
          <div className="mx-auto w-full max-w-xl">
            <CampaignReveal>
              <CampaignEyebrow>Join the House</CampaignEyebrow>
              <CampaignSplitTitle size="display" title="Start Your Application" accent="Take the first step" className="mb-12" />
              <FranchiseApplicationForm />
            </CampaignReveal>
          </div>
        </div>
      </section>

      {/* Final Close */}
      <section className="campaign-section bg-pearl px-[max(1.25rem,4vw)] text-center">
        <CampaignReveal className="mx-auto max-w-4xl">
          <CampaignSplitTitle title="Bring premium restoration" accent="To your city" align="center" className="mb-12" />
          <CampaignBtn href="#application" className="hover:scale-105">
            Start Application
          </CampaignBtn>
        </CampaignReveal>
      </section>
    </div>
  );
}
