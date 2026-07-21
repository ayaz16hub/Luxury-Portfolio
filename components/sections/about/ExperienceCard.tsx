export default function ExperienceCard() {
  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      bg-[#0d0d0d]
      p-8
    "
    >
      <div className="space-y-8">

        <div>
          <h2 className="text-5xl font-black text-red-500">
            15+
          </h2>

          <p className="text-gray-400">
            Completed Projects
          </p>
        </div>

        <div>
          <h2 className="text-5xl font-black text-emerald-400">
            2+
          </h2>

          <p className="text-gray-400">
            Years Learning
          </p>
        </div>

        <div>
          <h2 className="text-5xl font-black text-red-500">
            10+
          </h2>

          <p className="text-gray-400">
            Technologies
          </p>
        </div>

      </div>
    </div>
  );
}