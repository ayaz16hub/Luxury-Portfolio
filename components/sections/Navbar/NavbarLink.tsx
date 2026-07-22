"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  href: string;
  label: string;
  active: boolean;
};

export default function NavbarLink({
  href,
  label,
  active,
}: Props) {
  return (
    <Link
      href={href}
      className="relative px-2 py-2 text-sm font-medium"
    >
      <span
        className={`transition ${
          active
            ? "text-white"
            : "text-gray-400 hover:text-white"
        }`}
      >
        {label}
      </span>

      {active && (
        <motion.div
          layoutId="active-nav"
          className="
            absolute
            left-0
            -bottom-2
            h-[3px]
            w-full
            rounded-full
            bg-red-500
          "
        />
      )}
    </Link>
  );
}