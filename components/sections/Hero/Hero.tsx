import BackgroundEffects from "@/components/background/Background";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import ScrollIndicator from "@/components/background/ScrollIndicator";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050505]"
    >
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