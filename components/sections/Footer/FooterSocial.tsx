"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">

        {/* Left */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Muhammad Ayaz
          </h2>

          <p className="mt-2 text-gray-400">
            Software Engineer • Flutter Developer • AI Enthusiast
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5">

          <Link
            href="https://github.com/yourusername"
            target="_blank"
          >
            <Image
              src="/icons/git.png"
              alt="GitHub"
              width={45}
              height={45}
              className="transition duration-300 hover:scale-110"
            />
          </Link>

          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
          >
            <Image
              src="/icons/linkedin.png"
              alt="LinkedIn"
              width={45}
              height={45}
              className="transition duration-300 hover:scale-110"
            />
          </Link>

          <Link
            href="mailto:yourmail@gmail.com"
          >
            <Image
              src="/icons/gmail.png"
              alt="Gmail"
              width={45}
              height={45}
              className="transition duration-300 hover:scale-110"
            />
          </Link>

          <Link
            href="https://facebook.com/yourprofile"
            target="_blank"
          >
            <Image
              src="/icons/facebook.png"
              alt="Facebook"
              width={45}
              height={45}
              className="transition duration-300 hover:scale-110"
            />
          </Link>

        </div>

      </div>
    </footer>
  );
}