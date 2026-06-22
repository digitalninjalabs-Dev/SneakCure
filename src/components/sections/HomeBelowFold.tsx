import { About } from "@/components/sections/About";
import { FranchiseHomeBanner } from "@/components/sections/FranchiseHomeBanner";
import { Statistics } from "@/components/sections/Statistics";
import { SustainableCycle } from "@/components/sections/SustainableCycle";
import { ScrollRevealServices } from "@/components/sections/ScrollRevealServices";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { BrandsWall } from "@/components/sections/BrandsWall";
import { Process } from "@/components/sections/Process";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Testimonials } from "@/components/sections/Testimonials";
import { SocialReels } from "@/components/sections/SocialReels";
import { FAQ } from "@/components/sections/FAQ";
import { BookingCTA } from "@/components/sections/BookingCTA";

export function HomeBelowFold() {
  return (
    <>
      <About />
      <Statistics />
      <SustainableCycle />
      <ScrollRevealServices />
      <BrandsWall />
      <Process />
      <HowItWorks />
      <WhyChoose />
      <FranchiseHomeBanner />
      <BeforeAfter />
      <Testimonials />
      <SocialReels />
      <FAQ />
      <BookingCTA />
    </>
  );
}
