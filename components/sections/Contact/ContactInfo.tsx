import Image from "next/image";

export default function ContactInfo() {
  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      bg-[#111111]
      p-8
      lg:p-10
    "
    >
      {/* Heading */}
      <h3 className="text-3xl font-bold text-white">
        Contact Information
      </h3>

      <p className="mt-4 leading-8 text-gray-400">
        I'm always open to discussing freelance work,
        internship opportunities, collaborations or exciting
        software projects.
      </p>

      {/* Contact Items */}
      <div className="mt-10 space-y-6">

        <div className="flex items-center gap-5">
          <div className="rounded-2xl bg-red-500/10 p-3">
            <Image
              src="/icons/gmail.png"
              alt="Email"
              width={26}
              height={26}
            />
          </div>

          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-white">
              muhammadayaz.dev@gmail.com
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="rounded-2xl bg-emerald-500/10 p-3">
            <Image
              src="/icons/phone.png"
              alt="Phone"
              width={26}
              height={26}
            />
          </div>

          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="text-white">
              +92 XXX XXXXXXX
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="rounded-2xl bg-red-500/10 p-3">
            <Image
              src="/icons/location.png"
              alt="Location"
              width={26}
              height={26}
            />
          </div>

          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="text-white">
              Sargodha, Pakistan
            </p>
          </div>
        </div>

      </div>

      {/* Social Icons */}
      <div className="mt-12">

        <h4 className="mb-5 text-lg font-semibold">
          Follow Me
        </h4>

        <div className="flex gap-4">

          

  {/* GitHub */}
  <a href="https://github.com/yourusername" target="_blank">
    <Image
      src="/icons/git.png"
      alt="GitHub"
      width={35}
      height={35}
      className="transition duration-300 hover:scale-110"
    />
  </a>

  {/* LinkedIn */}
  <a href="https://linkedin.com/in/yourusername" target="_blank">
    <Image
      src="/icons/linkedin.png"
      alt="LinkedIn"
      width={35}
      height={35}
      className="transition duration-300 hover:scale-110"
    />
  </a>

  {/* Facebook */}
  <a href="https://facebook.com/yourusername" target="_blank">
    <Image
      src="/icons/facebook.png"
      alt="Facebook"
      width={35}
      height={35}
      className="transition duration-300 hover:scale-110"
    />
  </a>

  {/* Instagram */}
  <a href="https://instagram.com/yourusername" target="_blank">
    <Image
      src="/icons/instagram.png"
      alt="Instagram"
      width={35}
      height={35}
      className="transition duration-300 hover:scale-110"
    />
  </a>

</div>
          
       

      </div>

      {/* Resume Button */}
      <button
        className="
        mt-12
        w-full
        rounded-2xl
        bg-red-500
    p-4
        text-lg
        font-semibold
        text-white
        transition
        hover:scale-[1.02]
      "
      >
        Download Resume
      </button>

    </div>
  );
}