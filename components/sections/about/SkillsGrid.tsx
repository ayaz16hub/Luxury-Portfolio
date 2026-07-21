import { skills } from "@/data/skills";
import SkillCard from "./SkillCard";

export default function SkillsGrid() {
  return (
    <div>
      {/* Heading */}
      <h3 className="mb-8  text-3xl font-bold text-red-500">
        My Skills
      </h3>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            image={skill.image}
          />
        ))}
      </div>
    </div>
  );
}