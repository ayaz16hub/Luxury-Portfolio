"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.8,
      }}
      className="
        absolute
        bottom-8
        left-1/2
        -translate-x-1/2
        flex
        flex-col
        items-center
      "
    >
      {/* Mouse */}
      <div className="flex h-14 w-8 justify-center rounded-full border border-red-500">
        <motion.div
          animate={{
            y: [0, 14, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
          }}
          className="mt-2 h-3 w-3 rounded-full bg-red-500"
        />
      </div>

      {/* Arrow */}
      <motion.div
        animate={{
          y: [0, 6, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="mt-2 text-red-500"
      >
        <ChevronDown size={24} />
      </motion.div>
    </motion.div>
  );
}