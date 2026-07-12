"use client";

import { useState } from "react";
import {
  CampaignBtn,
  CampaignEyebrow,
  CampaignGrayscaleImage,
  CampaignHeroParallax,
  CampaignLabel,
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

const ROADMAP = [
  { step: "Apply", body: "Complete your application and tell us about your preferred city and business goals." },
  { step: "Discovery", body: "Meet our franchise experts to understand the business model, investment, and growth potential." },
  { step: "Approval", body: "Finalize your location, complete the agreement, and begin your franchise journey." },
  { step: "Training", body: "Receive expert training in restoration techniques, operations, customer service, and business management." },
  { step: "Launch", body: "Open your Sneakcure store/workshop with complete setup assistance and marketing support." },
  { step: "Grow", body: "Scale your business with ongoing mentorship, marketing strategies, and continuous operational support." },
] as const;

const SYSTEM = [
  {
    icon: "school",
    title: "Training",
    items: [
      "Hands-on Restoration Training",
      "Business & Operations Coaching",
      "Customer Experience Training",
      "Sales & Service Excellence",
    ],
  },
  {
    icon: "terminal",
    title: "Systems",
    items: [
      "Business Operations Platform",
      "Inventory & Workflow Management",
      "Customer Order Tracking",
      "Standard Operating Procedures (SOPs)",
    ],
  },
  {
    icon: "campaign",
    title: "Marketing",
    items: [
      "Local Marketing Strategy",
      "Premium Brand Assets",
      "Social Media Content Support",
      "Grand Launch Campaign Kit",
    ],
  },
  {
    icon: "support",
    title: "Support",
    items: [
      "Dedicated Franchise Assistance",
      "Product & Supply Support",
      "Continuous Business Mentorship",
      "Regular Performance Reviews",
    ],
  },
] as const;

const JOURNEY_STAGES = [
  {
    img: IMG.journey1,
    num: "01",
    title: "Apply for Franchise",
    body: "Submit your application and connect with our franchise team. We'll understand your goals, discuss your city, and evaluate the opportunity together.",
  },
  {
    img: IMG.journey2,
    num: "02",
    title: "Discovery & Approval",
    body: "Meet our experts, review the business model, investment plan, and franchise details. Once approved, your journey officially begins.",
  },
  {
    img: IMG.journey3,
    num: "03",
    title: "Training & Store Setup",
    body: "Receive hands-on training while we assist with store/workshop planning, branding, equipment selection, and operational setup for a successful launch.",
  },
  {
    img: IMG.journey4,
    num: "04",
    title: "Grand Launch & Growth",
    body: "Open your Sneakcure store/workshop with marketing support, business guidance, and continuous mentorship to help you grow your customer base.",
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
        <CampaignReveal className="mb-6">
          <CampaignSplitTitle size="display" title="The Journey" accent="From application to grand opening" />
          <p className="mt-4 text-base leading-relaxed text-muted">
            Launching a Sneakcure franchise is simple and fully guided. Our team supports you at every stage from your
            first conversation to opening your premium restoration store/workshop.
          </p>
        </CampaignReveal>
        <div className="mt-8 space-y-10">
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
          <CampaignSplitTitle size="display" title="The Journey" accent="From application to grand opening" />
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            Launching a Sneakcure franchise is simple and fully guided. Our team supports you at every stage from your
            first conversation to opening your premium restoration store/workshop.
          </p>
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
          <input
            required
            placeholder="Enter your full name"
            className="w-full border-0 border-b border-black/10 bg-transparent px-0 py-3 outline-none transition-colors placeholder:text-black/20 focus:border-primary-black focus:ring-0"
          />
        </div>
        <div className="space-y-2">
          <CampaignLabel>Phone Number</CampaignLabel>
          <input
            required
            type="tel"
            placeholder="+91 00000 00000"
            className="w-full border-0 border-b border-black/10 bg-transparent px-0 py-3 outline-none transition-colors placeholder:text-black/20 focus:border-primary-black focus:ring-0"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-2">
          <CampaignLabel>Target City</CampaignLabel>
          <input
            required
            placeholder="Delhi, Lucknow, Kanpur, or your city"
            className="w-full border-0 border-b border-black/10 bg-transparent px-0 py-3 outline-none transition-colors placeholder:text-black/20 focus:border-primary-black focus:ring-0"
          />
        </div>
        <div className="space-y-2">
          <CampaignLabel>Investment Range</CampaignLabel>
          <select className="w-full border-0 border-b border-black/10 bg-transparent px-0 py-3 outline-none focus:border-primary-black focus:ring-0">
            <option>₹8L - ₹15L</option>
            <option>₹15L - ₹25L</option>
            <option>₹25L+</option>
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <CampaignLabel>Business Background</CampaignLabel>
        <textarea
          rows={4}
          placeholder="Tell us about your experience, goals, and why you want to partner with Sneakcure..."
          className="w-full resize-none border-0 border-b border-black/10 bg-transparent px-0 py-3 outline-none transition-colors placeholder:text-black/20 focus:border-primary-black focus:ring-0"
        />
      </div>
      <button
        type="submit"
        className="mt-8 w-full bg-gloss-black py-6 text-xs font-medium uppercase tracking-[0.3em] text-soft-white transition-all hover:bg-gloss-black/90 sm:text-sm"
      >
        {sent ? "Application Sent" : "Apply Today"}
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
            <CampaignEyebrow>Sneakcure Franchise</CampaignEyebrow>
            <CampaignSplitTitle
              as="h1"
              title="Build India's Next Premium Restoration Studio"
              accent="Own Your City"
              className="mb-4"
            />
            <p className="mb-6 text-lg font-medium leading-relaxed text-primary-black/80">
              Lead the Luxury Care Revolution.
            </p>
            <p className="mb-12 max-w-lg text-lg leading-relaxed text-muted">
              Launch your own premium shoe and leather restoration business with Sneakcure. We provide expert
              mentorship, operational framework, and ongoing dedicated success manager support.
            </p>
            <div className="mb-16">
              <CampaignBtn href="#application">Apply for Franchise</CampaignBtn>
            </div>
            <div className="grid grid-cols-2 gap-8 border-t border-black/5 pt-10 md:grid-cols-4">
              {[
                ["Launch Support", "Dedicated Team"],
                ["Training", "Professional"],
                ["Brand", "Premium"],
                ["Operations", "Business"],
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
          <ParallaxImage
            src={IMG.hero}
            alt="Sneakcure franchise studio"
            className="h-full min-h-[420px] w-full opacity-80 md:min-h-full"
            speed={0.1}
          />
          <div className="pointer-events-none absolute inset-0 flex items-end justify-center p-4 md:items-center md:p-12">
            <div className="relative flex w-full max-w-lg flex-col gap-3 md:block md:h-full">
              <CampaignScale
                delay={0.3}
                className="border border-white/20 bg-white/90 p-4 shadow-2xl backdrop-blur-md md:absolute md:left-0 md:top-10 md:p-6"
              >
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-primary-black">Support</p>
                <h3 className="editorial-title text-xl md:text-2xl">Launch Ready</h3>
              </CampaignScale>
              <CampaignScale
                delay={0.45}
                className="border border-white/10 bg-gloss-black/95 p-4 text-white shadow-2xl md:absolute md:bottom-40 md:right-0 md:p-8"
              >
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest opacity-60">Territories</p>
                <h3 className="editorial-title text-2xl md:text-3xl">Limited Cities</h3>
              </CampaignScale>
              <CampaignScale
                delay={0.6}
                className="border border-white/10 bg-white/10 p-4 text-white shadow-2xl backdrop-blur-xl md:absolute md:bottom-10 md:left-20 md:p-6"
              >
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest opacity-70">Standard</p>
                <h3 className="editorial-title text-xl md:text-2xl">Premium Care</h3>
              </CampaignScale>
            </div>
          </div>
        </CampaignHeroParallax>
      </section>

      {/* The Opportunity */}
      <section className="campaign-section campaign-pad mx-auto max-w-[1440px]">
        <div className="flex flex-col items-center gap-20 md:flex-row">
          <CampaignReveal className="w-full md:w-5/12">
            <CampaignEyebrow>The Opportunity</CampaignEyebrow>
            <CampaignSplitTitle size="display" title="A business built on premium care" accent="Not just shoe cleaning" className="mb-6" />
            <p className="mb-8 text-base leading-relaxed text-muted">
              India&apos;s premium footwear and luxury leather market is growing rapidly. Sneakcure helps you build a
              high-value restoration business backed by expert training, standardized processes, and a trusted premium
              brand.
            </p>
            <div className="space-y-8">
              {[
                {
                  icon: "autorenew",
                  title: "High Customer Retention",
                  body: "Customers don't visit just once. Sneakers, leather shoes, handbags, and accessories require regular professional care, creating repeat business and long-term customer relationships.",
                },
                {
                  icon: "workspace_premium",
                  title: "Premium Brand Positioning",
                  body: "Sneakcure focuses on quality over discounts. Our premium services, expert craftsmanship, and luxury experience allow franchise partners to build a profitable business with strong customer trust.",
                },
                {
                  icon: "groups",
                  title: "Growing Customer Community",
                  body: "Built through exceptional craftsmanship, premium service, and long-term customer relationships.",
                },
              ].map((item, i) => (
                <CampaignSlide key={item.title} delay={i * 0.1} from="left" className="flex gap-6">
                  <MaterialIcon name={item.icon} className="shrink-0 text-4xl text-primary-black" />
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
                <CampaignScrollImage src={IMG.why1} alt="Sneakcure artisan at work" className="h-[min(400px,70vw)] w-full md:h-[400px]" />
              </CampaignReveal>
              <CampaignScale delay={0.4} className="bg-gloss-black p-8 text-white sm:p-12">
                <p className="editorial-title mb-4 text-4xl sm:text-6xl">Premium</p>
                <p className="text-[12px] font-medium uppercase tracking-widest opacity-70">Restoration Standard</p>
              </CampaignScale>
            </div>
            <CampaignReveal delay={0.3}>
              <CampaignScrollImage src={IMG.why2} alt="Professional restoration toolkit" className="h-[min(480px,85vw)] w-full md:h-[600px]" />
            </CampaignReveal>
          </div>
        </div>
      </section>

      {/* The Sneakcure Advantage */}
      <section className="campaign-section bg-gloss-black px-[max(1.25rem,4vw)] text-white">
        <div className="mx-auto max-w-[1440px]">
          <CampaignReveal className="mx-auto mb-20 max-w-3xl text-center">
            <CampaignSplitTitle size="display" title="The Sneakcure Advantage" accent="Why partner with us" dark className="mb-6" />
            <p className="text-lg opacity-70">
              More than a franchise — we help you build a premium restoration business with growth blueprint, expert
              guidance, and long-term growth support.
            </p>
          </CampaignReveal>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {[
              {
                img: IMG.advantage1,
                title: "Trusted Brand Presence",
                body: "Build your business under the Sneakcure name—a premium brand known for quality craftsmanship, luxury care, and customer trust. Start with credibility that takes years to build independently.",
              },
              {
                img: IMG.advantage2,
                title: "Complete Business Training",
                body: "Receive hands-on training in sneaker restoration, leather repair, luxury bag care, customer service, pricing strategies, and daily operations. No prior experience is required.",
              },
              {
                img: IMG.advantage3,
                title: "Proven Business Operations",
                body: "Run your franchise with confidence using our standardized operating procedures, marketing support, business tools, and continuous guidance designed for sustainable growth.",
              },
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

      {/* Your Sneakcure Store */}
      <section className="campaign-section">
        <div className="mx-auto max-w-[1440px] campaign-pad">
          <CampaignReveal className="mb-12 md:mb-20">
            <CampaignSplitTitle size="display" title="Your Sneakcure Store" accent="Built for success" />
            <p className="mt-4 max-w-2xl text-lg text-muted">
              Launch a professionally designed workspace equipped with the right tools, branding, and operational
              systems to deliver premium restoration services from day one.
            </p>
          </CampaignReveal>
          <CampaignGrayscaleImage src={IMG.studio} alt="Sneakcure franchise store" className="h-[min(520px,85vh)] w-full md:h-[716px]" />
        </div>
      </section>

      <FranchiseJourneyMobile />
      <FranchiseJourneyDesktop />

      {/* Your Path to Success */}
      <section className="campaign-section campaign-pad mx-auto max-w-[1440px]">
        <CampaignReveal className="mb-12 text-center md:mb-20">
          <CampaignSplitTitle size="display" title="Your Path to Success" accent="Six simple steps" />
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted">
            A structured franchise journey designed to help you launch and grow your Sneakcure business with confidence.
          </p>
        </CampaignReveal>
        <div className="relative">
          <CampaignTimelineLine horizontal className="absolute left-0 top-1/2 hidden w-full -translate-y-1/2 md:block" />
          <div className="relative grid grid-cols-1 gap-12 md:grid-cols-6">
            {ROADMAP.map((item, i) => (
              <CampaignScale key={item.step} delay={i * 0.1} className="bg-pearl p-6">
                <div className="relative z-10 mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gloss-black text-white">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h4 className="mb-2 text-center font-bold">{item.step}</h4>
                <p className="text-center text-sm leading-relaxed text-muted">{item.body}</p>
              </CampaignScale>
            ))}
          </div>
        </div>
      </section>

      {/* The Sneakcure System */}
      <section className="campaign-section bg-deep-black px-[max(1.25rem,4vw)] text-white">
        <div className="mx-auto max-w-[1440px]">
          <CampaignReveal className="mb-16">
            <CampaignSplitTitle size="display" title="The Sneakcure System" accent="Everything you need" dark />
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/55">
              From training to technology, marketing to ongoing support — every system is designed to help you launch,
              operate, and grow a successful premium restoration business.
            </p>
          </CampaignReveal>
          <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {SYSTEM.map((block, i) => (
              <CampaignReveal key={block.title} delay={i * 0.1} className="bg-deep-black p-8 sm:p-12">
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

      {/* Is Sneakcure Right for You? */}
      <section className="campaign-section campaign-pad mx-auto max-w-[1440px]">
        <CampaignReveal className="mb-12 text-center md:mb-20">
          <CampaignSplitTitle size="display" title="Is Sneakcure Right for You?" accent="Built for ambitious entrepreneurs" />
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Whether you&apos;re starting your first business or expanding an existing one, Sneakcure is designed for
            individuals who value quality, long-term growth, and premium customer experiences.
          </p>
        </CampaignReveal>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {[
            {
              img: IMG.match1,
              title: "The Entrepreneur",
              body: "Visionaries ready to build a premium brand with a scalable business model. If you're driven by growth, innovation, and creating something meaningful, Sneakcure gives you the platform to succeed.",
            },
            {
              img: IMG.match2,
              title: "The Business Owner",
              body: "Retailers, boutique owners, laundry operators, or established businesses looking to expand with a high-value service. Add a premium restoration vertical that strengthens your brand and increases profitability.",
            },
          ].map((card, i) => (
            <CampaignScale key={card.title} delay={i * 0.2} className="group relative aspect-[16/9] overflow-hidden">
              <CampaignScrollImage src={card.img} alt={card.title} className="absolute inset-0 h-full w-full" />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-8 text-white sm:p-12">
                <h3 className="editorial-title mb-4 text-2xl sm:text-3xl">{card.title}</h3>
                <p className="max-w-sm text-sm leading-relaxed opacity-80 sm:text-base">{card.body}</p>
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
              <CampaignSplitTitle size="display" title="Exclusive Territories" accent="Limited cities available" />
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                Secure exclusive rights to represent Sneakcure in your city. We partner with only one franchise per
                territory to ensure long-term growth and market leadership.
              </p>
              <p className="mt-2 text-lg font-medium text-primary-black">Delhi · Lucknow · Kanpur — One franchise. One city.</p>
            </div>
            <a
              href="https://www.google.com/maps/search/Sneakcure+Gomti+Nagar+Lucknow"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 border-b border-primary-black pb-2 text-[12px] font-medium uppercase tracking-widest"
            >
              View Territory Map
            </a>
          </CampaignReveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {FRANCHISE_EXCLUSIVE_TERRITORIES.map((city, i) => (
              <CampaignReveal key={city.name} delay={i * 0.1} className="border border-black/5 bg-white p-8 sm:p-10">
                <div className="mb-6 flex items-start justify-between gap-3">
                  <h4 className="text-2xl font-bold uppercase tracking-tighter">{city.name}</h4>
                  <span className={`shrink-0 px-3 py-1 text-[9px] font-bold uppercase tracking-widest sm:text-[10px] ${city.statusClass}`}>
                    {city.status}
                  </span>
                </div>
                <p className="mb-6 text-sm leading-relaxed text-muted">{city.desc}</p>
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
          <CampaignScrollImage src={IMG.applySide} alt="Sneakcure master artisan" className="h-full min-h-screen w-full" />
        </div>
        <div className="flex w-full flex-col justify-center campaign-pad py-20 md:w-7/12">
          <div className="mx-auto w-full max-w-xl">
            <CampaignReveal>
              <CampaignEyebrow>Franchise Application</CampaignEyebrow>
              <CampaignSplitTitle size="display" title="Bring Premium Restoration" accent="To your city" className="mb-6" />
              <p className="mb-12 text-base leading-relaxed text-muted">
                Create a legacy. Complete your application and our franchise team will connect with you to discuss your
                city, goals, and the Sneakcure partnership opportunity.
              </p>
              <FranchiseApplicationForm />
            </CampaignReveal>
          </div>
        </div>
      </section>

      {/* Final Close */}
      <section className="campaign-section bg-pearl px-[max(1.25rem,4vw)] text-center">
        <CampaignReveal className="mx-auto max-w-4xl">
          <CampaignSplitTitle title="Bring Premium Restoration to Your City" accent="Create a legacy" align="center" className="mb-12" />
          <CampaignBtn href="#application" className="hover:scale-105">
            Apply Today
          </CampaignBtn>
        </CampaignReveal>
      </section>
    </div>
  );
}
