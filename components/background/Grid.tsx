export default function Grid() {
  return (
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  );
}