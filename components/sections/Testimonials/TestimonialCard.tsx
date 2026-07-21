"use client";

import Image from "next/image";

type Props = {
  name: string;
  role: string;
  image: string;
  review: string;
  rating: number;
};

export default function TestimonialCard({
  name,
  role,
  image,
  review,
  rating,
}: Props) {
  return (
    <div
      className="
      rounded-[28px]
      border
      border-white/10
      bg-[#111111]
      p-8
      transition-all
      duration-500
      hover:border-red-500/40
      hover:-translate-y-2
    "
    >
      {/* Rating */}
      <div className="mb-6 flex gap-1">
        {Array.from({ length: rating }).map((_, index) => (
          <span
            key={index}
            className="text-2xl text-yellow-400"
          >
            ★
          </span>
        ))}
      </div>

      {/* Review */}
      <p className="leading-8 text-gray-300">
        "{review}"
      </p>

      {/* User */}
      <div className="mt-8 flex items-center gap-4">

        <Image
          src={image}
          alt={name}
          width={60}
          height={60}
          className="rounded-full object-cover"
        />

        <div>

          <h3 className="font-bold text-white">
            {name}
          </h3>

          <p className="text-sm text-gray-400">
            {role}
          </p>

        </div>

      </div>
    </div>
  );
}