import HomeAvailabilityBadge from "./HomeAvailabilityBadge";
import HomeHero from "./HomeHero";
import HomeIsland from "./HomeIsland";
import HomeSelectedWork from "./HomeSelectedWork";
import HomeTestimonials from "./HomeTestimonials";
import HomeTimeLocation from "./HomeTimeLocation";
import SiteFooter from "@/components/SiteFooter";

export default function HomeScreen() {
  return (
    <main className="flex h-dvh overflow-hidden bg-[#f1f1f1] p-1">
      <div className="relative min-w-0 flex-1 overflow-hidden rounded-2xl bg-[#f1f1f1]">
        <div className="relative h-full overflow-x-hidden overflow-y-auto overscroll-contain">
          <div className="relative rounded-2xl bg-[#040404]">
            <div className="pointer-events-none absolute inset-y-0 left-1/2 z-10 w-full max-w-[1128px] -translate-x-1/2 border-x border-[#272729]" aria-hidden="true" />
            <HomeHero />
            <HomeTimeLocation />
            <HomeAvailabilityBadge />
            <HomeSelectedWork />
            <HomeTestimonials />
          </div>
          <SiteFooter />
        </div>
        <HomeIsland />
      </div>
    </main>
  );
}
