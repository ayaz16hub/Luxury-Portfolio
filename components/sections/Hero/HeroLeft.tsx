"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function HeroLeft() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex w-full flex-col justify-center lg:w-1/2"
    >
      {/* Badge */}
      <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 backdrop-blur-xl">
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

        <span className="text-sm text-red-400">
          Available for Freelance
        </span>
      </div>

      {/* Small Heading */}
      <p className="mb-3 text-lg font-medium text-gray-300">
        👋 Hello, I'm
      </p>

      {/* Name */}
      <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
        Muhammad
        <br />
        <span className="bg-red-500  bg-clip-text text-transparent">
          Ayaz
        </span>
      </h1>

      {/* Animated Role */}
      <div className="mt-6 h-12">

        <TypeAnimation
          sequence={[
            "Software Engineer",
            2000,

            "Flutter Developer",
            2000,

            "WordPress Developer",
            2000,

            "Next.js Developer",
            2000,

            "Python Developer",
            2000,

            "AI Enthusiast",
            2000,
          ]}
          wrapper="span"
          speed={55}
          repeat={Infinity}
          cursor={true}
          className="
            text-2xl
            font-bold
            text-emerald-400
            md:text-3xl
          "
        />

      </div>

      {/* Description */}
      <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
        I build modern, responsive and high-performance web & mobile
        applications with clean UI, scalable architecture and premium user
        experience that helps businesses grow.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap gap-4">

        <button
          className="
          rounded-2xl
          bg-red-500
         
          px-7
          py-4
          font-semibold
          text-white
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-[0_0_35px_rgba(239,68,68,.45)]
        "
        >
          View Projects 🚀
        </button>

        <button
          className="
          rounded-2xl
          border
          border-emerald-500/40
          px-7
          py-4
          font-semibold
          text-white
          transition-all
          duration-300
          hover:scale-105
          hover:bg-emerald-500/10
        "
        >
          Download CV
        </button>

      </div>

      {/* Stats */}
      <div className="mt-14 flex flex-wrap gap-10">

        <div>
          <h3 className="text-3xl font-black text-red-500">
            15+
          </h3>

          <p className="text-gray-400">
            Projects
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-black text-emerald-400">
            2+
          </h3>

          <p className="text-gray-400">
            Years Learning
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-black text-red-500">
            10+
          </h3>

          <p className="text-gray-400">
            Technologies
          </p>
        </div>

      </div>
    </motion.div>
  );
}