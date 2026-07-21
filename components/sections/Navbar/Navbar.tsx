"use client";

import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">

      {/* Background Container */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xl border-b border-white/10" />

      <nav className="relative z-10 mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">

         <div
  className="
  flex
  h-20
  w-20
 
  justify-center
"
>
  <Image
    src="/icons/logo.png"
    alt="Muhammad Ayaz Logo"
    width={60}
    height={60}
    className="h-full w-full "
  />
</div>

          <div className="hidden sm:block">
            <h1 className="font-semibold text-white">
              Muhammad Ayaz
            </h1>

            <p className="text-xs text-gray-400">
              Software Engineer
            </p>
          </div>

        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="
                text-sm
                text-gray-300
                transition
                duration-300
                hover:text-red-400
              "
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Button */}
        <button
          className="
          hidden
          md:block
          rounded-xl
          border
          border-red-500
          px-5
          py-2
          text-white
          transition
          hover:bg-red-500
        "
        >
          Let's Talk ↗
        </button>

      </nav>
    </header>
  );
}