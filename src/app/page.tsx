import { Footer } from "@/components/layout/Footer";
import dynamic from "next/dynamic";
import { HomePageMotion } from "@/components/providers/HomePageMotion";
import { Hero } from "@/components/sections/Hero";

const HomeBelowFold = dynamic(
  () => import("@/components/sections/HomeBelowFold").then((mod) => mod.HomeBelowFold)
);

export default function HomePage() {
  return (
    <HomePageMotion>
      <main>
        <Hero />
        <HomeBelowFold />
      </main>
    </HomePageMotion>
  );
}
