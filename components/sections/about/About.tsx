import AboutContent from "./AboutContent";
import SkillsGrid from "./SkillsGrid";

export default function About() {
  return (


    
    <section id="about" className="py-28 px-6">
      
      
      
      <div
        className="
          mx-auto
          max-w-7xl
          rounded-[32px]
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          p-8
        "
      >
        <div className="grid gap-10 lg:grid-cols-2">

          <AboutContent />

          <SkillsGrid />

        </div>
      </div>
    </section>
  );
}