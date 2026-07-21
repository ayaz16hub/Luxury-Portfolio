import Timeline from "./Timeline";
import Stats from "./Stats";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <h2 className="mb-16 text-5xl font-black">
          My <span className="text-red-500">Journey</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <Timeline />
          <Stats />
        </div>

      </div>
    </section>
  );
}