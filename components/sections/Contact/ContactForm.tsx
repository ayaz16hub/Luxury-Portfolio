"use client";

export default function ContactForm() {
  return (
    <form
      className="
      rounded-3xl
      border
      border-white/10
      bg-[#111111]
      p-8
      lg:p-10
      space-y-6
    "
    >
      {/* Name */}

      <div>
        <label className="mb-2 block text-sm text-gray-400">
          Full Name
        </label>

        <input
          type="text"
          placeholder="Muhammad Ayaz"
          className="
          w-full
          rounded-2xl
          border
          border-white/10
          bg-[#181818]
          px-5
          py-4
          outline-none
          transition-all
          duration-300
          focus:border-red-500
          focus:ring-2
          focus:ring-red-500/20
        "
        />
      </div>

      {/* Email */}

      <div>
        <label className="mb-2 block text-sm text-gray-400">
          Email Address
        </label>

        <input
          type="email"
          placeholder="your@email.com"
          className="
          w-full
          rounded-2xl
          border
          border-white/10
          bg-[#181818]
          px-5
          py-4
          outline-none
          transition-all
          duration-300
          focus:border-red-500
          focus:ring-2
          focus:ring-red-500/20
        "
        />
      </div>

      {/* Subject */}

      <div>
        <label className="mb-2 block text-sm text-gray-400">
          Subject
        </label>

        <input
          type="text"
          placeholder="Project Discussion"
          className="
          w-full
          rounded-2xl
          border
          border-white/10
          bg-[#181818]
          px-5
          py-4
          outline-none
          transition-all
          duration-300
          focus:border-red-500
          focus:ring-2
          focus:ring-red-500/20
        "
        />
      </div>

      {/* Message */}

      <div>
        <label className="mb-2 block text-sm text-gray-400">
          Message
        </label>

        <textarea
          rows={6}
          placeholder="Write your message..."
          className="
          w-full
          resize-none
          rounded-2xl
          border
          border-white/10
          bg-[#181818]
          px-5
          py-4
          outline-none
          transition-all
          duration-300
          focus:border-emerald-500
          focus:ring-2
          focus:ring-emerald-500/20
        "
        />
      </div>

      {/* Button */}

      <button
        type="submit"
        className="
        w-full
        rounded-2xl
        bg-green-500
       
        py-4
        text-lg
        font-semibold
        text-white
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:shadow-[0_0_35px_rgba(239,68,68,.35)]
      "
      >
        Send Message 🚀
      </button>
    </form>
  );
}