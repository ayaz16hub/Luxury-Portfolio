"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import FloatingIcons from "./FloatingIcons";

export default function HeroRight() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
      className="
        relative
        flex
        h-[700px]
        w-full
        items-center
        justify-center
        lg:w-1/2
      "
    >
      
    

      {/* Floating Icons */}
      <FloatingIcons />

      {/* Hero Image */}
      <div className="relative z-20">
        <Image
          src="/images/ayazimg.png"
          alt="Muhammad Ayaz"
          width={670}
          height={800}
          priority
          className="
            w-[340px]
            md:w-[430px]
            lg:w-[560px]
            h-auto
            object-contain
            select-none
            drop-shadow-[0_40px_100px_rgba(255,0,50,.35)]
          "
        />
      </div>
    </motion.div>
  );
}