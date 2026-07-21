"use client";

export default function Stars() {
  const stars = Array.from({ length: 120 });

  return (
    <>
      {stars.map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white opacity-70"
          style={{
            width: Math.random() * 3 + "px",
            height: Math.random() * 3 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
        />
      ))}
    </>
  );
}