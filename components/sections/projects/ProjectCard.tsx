"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
type Props = {
  title: string;
  image: string;
  description: string;
  tech: string[];
};

export default function ProjectCard({
  title,
  image,
  description,
  tech,
}: Props) {
  return (
    <div
      className="
      group
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-[#111111]
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-red-500/50
      hover:shadow-[0_0_35px_rgba(239,68,68,.15)]
    "
    >
      {/* Image */}
      <div className="relative overflow-hidden">

        <Image
          src={image}
          alt={title}
          width={600}
          height={350}
          className="
            h-56
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />

        {/* External Icon */}
        <button
          className="
          absolute
          right-4
          top-4
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          bg-black/60
          backdrop-blur-md
          border
          border-white/10
          hover:bg-red-500
          transition
        "
        >
          <ExternalLink size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">

        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-3 text-gray-400 leading-7">
          {description}
        </p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">

          {tech.map((item) => (
            <span
              key={item}
              className="
              rounded-full
              border
              border-red-500/20
              bg-red-500/10
              px-3
              py-1
              text-sm
              text-red-400
            "
            >
              {tech}
            </span>
          ))}

        </div>

        {/* Buttons */}
        <div className="mt-7 flex gap-3">

          <button
            className="
            rounded-xl
            bg-red-500
            px-5
            py-2.5
            font-semibold
            text-white
            transition
            hover:bg-red-600
          "
          >
            Live Demo
          </button>

          <button
            className="
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-white/10
            px-5
            py-2.5
            text-white
            transition
            hover:border-emerald-500
            hover:text-emerald-400
          "
          >
            
            GitHub
          </button>

        </div>

      </div>
    </div>
  );
}