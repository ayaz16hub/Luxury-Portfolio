import {
  User,
  MapPin,
  Mail,
  BadgeCheck,
} from "lucide-react";

export default function AboutContent() {
  return (
    <div
      className="
      rounded-3xl
      border border-white/10
      bg-[#111111]
      p-10
      mx-auto
max-w-7xl
rounded-[32px]
border border-white/10
bg-white/[0.03]
backdrop-blur-xl
p-8
overflow-hidden
    "
    >
      <p className="text-red-500 font-semibold uppercase tracking-widest">
        About Me
      </p>

      <h2 className="mt-4 text-5xl font-black leading-tight">
        Software Engineer
      </h2>

      <p className="mt-8 text-gray-400 leading-9">
        I'm Muhammad Ayaz, a passionate Software Engineer
        who enjoys building modern web applications,
        Flutter apps, AI projects and beautiful user
        interfaces with clean architecture.
      </p>

      {/* Information */}

      <div className="mt-10 space-y-5">

        <div className="flex items-center gap-4">
          <User className="text-red-500" size={20} />

          <span className="text-gray-400 w-28">
            Name
          </span>

          <span className="text-white">
            Muhammad Ayaz
          </span>
        </div>

        <div className="flex items-center gap-4">
          <MapPin className="text-red-500" size={20} />

          <span className="text-gray-400 w-28">
            Location
          </span>

          <span className="text-white">
            Pakistan
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Mail className="text-red-500" size={20} />

          <span className="text-gray-400 w-28">
            Email
          </span>

          <span className="text-white">
            ayaz.dev@gmail.com
          </span>
        </div>

        <div className="flex items-center gap-4">
          <BadgeCheck
            className="text-emerald-400"
            size={20}
          />

          <span className="text-gray-400 w-28">
            Availability
          </span>

          <span className="text-emerald-400 font-semibold">
            Open To Work
          </span>
        </div>
      </div>

      <button
        className="
        mt-10
        rounded-xl
        border
        border-red-500/30
        px-6
        py-3
        text-white
        hover:bg-red-500
        transition
      "
      >
        More About Me →
      </button>
    </div>
  );
}