import Stars from "./Stars";

export default function BackgroundEffects() {
  return (
    <>
      <Stars />

      {/* Red Glow */}
      <div className="absolute left-[-180px] top-[-150px] h-[550px] w-[550px] rounded-full bg-red-500/20 blur-[180px]" />

      {/* Green Glow */}
      <div className="absolute right-[-220px] bottom-[-180px] h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-[220px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
          linear-gradient(#ffffff22 1px, transparent 1px),
          linear-gradient(90deg,#ffffff22 1px,transparent 1px)
        `,
          backgroundSize: "55px 55px",
        }}
      />
    </>
  );
}