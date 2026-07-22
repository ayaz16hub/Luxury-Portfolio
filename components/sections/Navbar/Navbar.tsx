"use client";
import Image from "next/image";

import Link from "next/link";
import { useEffect, useState } from "react";
import NavbarLink from "./NavbarLink";

const sections = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "testimonials",
  "contact",
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);

      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="
      fixed
      top-5
      left-1/2
      z-50
      -translate-x-1/2
      w-[95%]
      max-w-7xl
    "
    >
      <nav
        className="
        flex
        items-center
        justify-between
        rounded-full
        border
        border-white/10
        bg-white/5
        backdrop-blur-2xl
        px-8
        py-4
      "
      >
        {/* Logo */}


     <Link
  href="#home"
  className="flex items-center gap-3"
>
  <Image
    src="/icons/logo.png"   // <-- Your logo path
    alt="Muhammad Ayaz Logo"
    width={48}
    height={48}
    className="rounded-xl object-contain"
    priority
  />

  <div className="flex flex-col leading-tight">
    <span className="text-lg font-bold text-white">
      Muhammad Ayaz
    </span>

    <span className="text-xs text-gray-400">
      Software Engineer
    </span>
  </div>
</Link>

        

        {/* Links */}

        <div className="hidden gap-8 lg:flex">
          <NavbarLink
            href="#home"
            label="Home"
            active={active === "home"}
          />

          <NavbarLink
            href="#about"
            label="About"
            active={active === "about"}
          />

          <NavbarLink
            href="#skills"
            label="Skills"
            active={active === "about"}
          />

          <NavbarLink
            href="#projects"
            label="Projects"
            active={active === "projects"}
          />

          <NavbarLink
            href="#experience"
            label="Journey"
            active={active === "experience"}
          />

          <NavbarLink
            href="#contact"
            label="Contact"
            active={active === "contact"}
          />
        </div>

        <a
          href="#contact"
          className="
          rounded-full
          bg-red-500
          px-6
          py-3
          text-sm
          font-semibold
          text-white
          transition
          hover:scale-105
        "
        >
          Let's Talk
        </a>
      </nav>
    </header>
  );
}