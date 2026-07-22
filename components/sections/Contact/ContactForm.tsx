"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      alert("✅ Message sent successfully!");

      setFormData({
        from_name: "",
        from_email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("❌ Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={sendEmail}
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
          name="from_name"
          value={formData.from_name}
          onChange={handleChange}
          required
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
          name="from_email"
          value={formData.from_email}
          onChange={handleChange}
          required
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
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
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
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
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
        disabled={loading}
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
        hover:shadow-[0_0_35px_rgba(16,185,129,.35)]
        disabled:opacity-60
      "
      >
        {loading ? "Sending..." : "Send Message 🚀"}
      </button>
    </form>
  );
}