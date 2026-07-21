import ProjectCard from "./ProjectCard";
import { projects } from "./projectsData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">

          <div>

            <div className="mb-3 flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-red-500" />

              <span className="text-sm uppercase tracking-[0.3em] text-red-400">
                Portfolio
              </span>
            </div>

            <h2 className="text-5xl font-black">
              Featured{" "}
              <span className="text-red-500">
                Projects
              </span>
            </h2>

          </div>

          <button
            className="
            rounded-xl
            border
            border-red-500/30
            px-6
            py-3
            transition
            hover:bg-red-500
            hover:text-white
          "
          >
            View All Projects →
          </button>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-3">

          {projects.map((project) => (

            <ProjectCard
              key={project.title}
              title={project.title}
              image={project.image}
              description={project.description}
              tech={project.tags}
            />

          ))}

        </div>

      </div>
    </section>
  );
}