"use client";

import Link from "next/link";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { LoopVideo } from "@/components/services/LoopVideo";

const ABOUT_INTRO_VIDEO = "/video/herovideo.mp4";

type AboutIntroProps = {
  image: string;
};

export function AboutIntro({ image }: AboutIntroProps) {
  return (
    <section aria-label="About Sneakcure">
      {/* Top band — light, homepage style */}
      <div className="bg-white text-primary-black">
        <div className="section-pad mx-auto grid max-w-7xl gap-6 py-8 sm:py-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:items-end md:gap-10 md:py-12 lg:gap-14 lg:py-14">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary-black/45">
              About Sneakcure
            </p>
            <div className="mt-4">
              <SplitTitle
                title="Empowering culture"
                accent="with lasting craft"
                as="h1"
                size="section"
              />
            </div>
          </div>
          <p className="max-w-md text-sm font-medium leading-relaxed text-primary-black/55 sm:text-base md:justify-self-end md:pb-1 md:text-[15px]">
            With years of atelier experience across sneakers, leather, and luxury goods, our team is
            committed to restoring iconic pieces with precision — and keeping culture wearable.
          </p>
        </div>
      </div>

      {/* Bottom split — video + content */}
      <div className="grid md:grid-cols-2">
        <div className="relative min-h-[18rem] overflow-hidden bg-primary-black sm:min-h-[22rem] md:min-h-[28rem] lg:min-h-[32rem]">
          <LoopVideo
            src={ABOUT_INTRO_VIDEO}
            poster={image}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center bg-[#f3f3f3] px-6 py-12 sm:px-10 sm:py-14 md:px-12 lg:px-16 lg:py-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary-black/45">
            Restore · Repair · Revive
          </p>
          <div className="mt-4">
            <SplitTitle
              title="Craft that moves"
              accent="your pieces forward"
              as="h2"
              size="section"
            />
          </div>
          <p className="mt-4 max-w-md text-sm font-medium leading-relaxed text-primary-black/55 sm:text-[15px]">
            From archival cleaning to color work and structural repair — every restoration is
            documented, insured, and finished to atelier standard.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/services"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-primary-black/15 bg-white px-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-black transition-colors hover:border-primary-black/35"
            >
              View services
            </Link>
            <MagneticButton href="/contact">Book a call</MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
