import { About } from "@/components/sections/About";
import { Statistics } from "@/components/sections/Statistics";
import { ScrollRevealServices } from "@/components/sections/ScrollRevealServices";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { BrandsWall } from "@/components/sections/BrandsWall";
import { Process } from "@/components/sections/Process";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Collection } from "@/components/sections/Collection";
import { Testimonials } from "@/components/sections/Testimonials";
import { SocialReels } from "@/components/sections/SocialReels";
import { FAQ } from "@/components/sections/FAQ";
import { BookingCTA } from "@/components/sections/BookingCTA";

export function HomeBelowFold() {
  return (
    <>
      <About />
      <Statistics />
      <ScrollRevealServices />
      <BrandsWall />
      <Process />
      <HowItWorks />
      <WhyChoose />
      <Collection />
      <BeforeAfter />
      <Testimonials />
      <SocialReels />
      <FAQ />
      <BookingCTA />
    </>
  );
}
