import { HomePageMotion } from "@/components/providers/HomePageMotion";
import { Hero } from "@/components/sections/Hero";
import { FranchisePromoBanner } from "@/components/sections/FranchisePromoBanner";
import { HomeBelowFold } from "@/components/sections/HomeBelowFold";

export default function HomePage() {
  return (
    <HomePageMotion>
      <main>
        <Hero />
        <FranchisePromoBanner />
        <HomeBelowFold />
      </main>
    </HomePageMotion>
  );
}
