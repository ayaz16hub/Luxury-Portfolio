import AboutContent from "./AboutContent";
import SkillsGrid from "./SkillsGrid";

export default function About() {
  return (


    
    <section id="about" className="py-28 px-6">
      
      
      
      <div
       className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center overflow-hidden"
      >
        <div className="grid gap-10 lg:grid-cols-2">

          <AboutContent />

          <SkillsGrid />

        </div>
      </div>
    </section>
  );
}