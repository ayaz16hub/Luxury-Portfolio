import Image from "next/image";

interface Props {
  name: string;
  image: string;
}

export default function SkillCard({ name, image }: Props) {
  return (
    <div
      className="
      group
      rounded-2xl
      border
      border-white/10
      bg-[#0d0d0d]
      p-6
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-red-500
      hover:shadow-[0_0_35px_rgba(239,68,68,.25)]
    "
    >
      <div className="flex flex-col items-center">

        <Image
          src={image}
          alt={name}
          width={55}
          height={55}
          className="mb-5 transition group-hover:scale-110"
        />

        <h3 className="font-semibold text-white">
          {name}
        </h3>

      </div>
    </div>
  );
}