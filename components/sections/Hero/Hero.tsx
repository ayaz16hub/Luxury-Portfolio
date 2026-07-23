import BackgroundEffects from "@/components/background/Background";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import ScrollIndicator from "@/components/background/ScrollIndicator";

export default function Hero() {
  return (
    <section
      id="home"
       className="mt-14 grid grid-cols-3 gap-6 text-center sm:flex sm:flex-wrap sm:justify-start sm:text-left">
    
      <BackgroundEffects />

      {/* Red Glow */}
      <div className="absolute left-[-180px] top-[-120px] h-[500px] w-[500px] rounded-full bg-red-600/20 blur-[170px]" />

      {/* Green Glow */}
      <div className="absolute bottom-[-200px] right-[-150px] h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[170px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between px-6 pt-28 lg:flex-row">

        <HeroLeft />

        <HeroRight />

      </div>

      <ScrollIndicator />
    </section>
  );
}