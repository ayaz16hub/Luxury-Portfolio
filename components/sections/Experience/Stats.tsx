export default function Stats() {
  const stats = [
    {
      number: "15+",
      title: "Projects",
      color: "text-red-500",
    },
    {
      number: "10+",
      title: "Technologies",
      color: "text-emerald-400",
    },
    {
      number: "2+",
      title: "Years Learning",
      color: "text-red-500",
    },
    {
      number: "100%",
      title: "Passion",
      color: "text-emerald-400",
    },
  ];

  return (
    <div className="space-y-10">
      {/* Heading */}
      <h2 className="text-4xl font-bold">
        My <span className="text-red-500">Stats</span>
      </h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-6">
        {stats.map((item) => (
          <div
            key={item.title}
            className="
              rounded-3xl
              border
              border-white/10
              bg-[#111111]
              p-6
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-red-500
            "
          >
            <h1 className={`text-5xl font-black ${item.color}`}>
              {item.number}
            </h1>

            <p className="mt-3 text-gray-400">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* GitHub Activity */}
      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-[#111111]
          p-8
          overflow-x-auto
        "
      >
        <h3 className="mb-8 text-2xl font-bold">
          GitHub Activity
        </h3>

        <div
          className="grid gap-[4px] w-max"
          style={{
            gridTemplateColumns: "repeat(35, 10px)",
            gridTemplateRows: "repeat(5, 10px)",
          }}
        >
          {Array.from({ length: 245 }).map((_, index) => {
            const random = Math.random();

            let color = "bg-white/5";

            if (random > 0.82) {
              color = "bg-red-500";
            } else if (random > 0.65) {
              color = "bg-emerald-500";
            } else if (random > 0.45) {
              color = "bg-red-500/40";
            }

            return (
              <div
                key={index}
                className={`${color} rounded-[2px] h-[10px] w-[10px]`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}