import Image from "next/image";

type Props = {
  year: string;
  title: string;
  company: string;
  description: string;
  image: string;
};

export default function TimelineCard({
  year,
  title,
  company,
  description,
  image,
}: Props) {
  return (
    <div className="relative pl-16 pb-16">

      {/* Line */}
      <div className="absolute left-7 top-0 h-full w-[2px] bg-white/10" />

      {/* Dot */}
      <div className="absolute left-3 top-4 h-8 w-8 rounded-full bg-red-500 shadow-[0_0_25px_#ff3333]" />

      {/* Icon */}
      <div
        className="
        absolute
        left-0
        top-0
        h-14
        w-14
        rounded-2xl
        border
        border-white/10
        bg-[#121212]
        flex
        items-center
        justify-center
      "
      >
        <Image
          src={image}
          alt={title}
          width={34}
          height={34}
        />
      </div>

      <span className="text-red-500 text-sm">
        {year}
      </span>

      <h3 className="mt-2 text-2xl font-bold">
        {title}
      </h3>

      <p className="text-emerald-400">
        {company}
      </p>

      <p className="mt-3 text-gray-400 leading-8">
        {description}
      </p>

    </div>
  );
}