import Link from "next/link";

const links = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Contact",
];

export default function DesktopNav() {
  return (
    <ul className="hidden items-center gap-10 lg:flex">
      {links.map((item) => (
        <li key={item}>
          <Link
            href={`#${item.toLowerCase()}`}
            className="text-sm text-gray-300 transition hover:text-violet-400"
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
}