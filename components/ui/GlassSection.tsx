import { ReactNode } from "react";

type Props = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export default function GlassSection({
  id,
  className = "",
  children,
}: Props) {
  return (
    <section
      id={id}
      className={`
        relative
        mx-auto
        max-w-7xl
        rounded-[40px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        px-6
        py-20
        ${className}
      `}
    >
      {children}
    </section>
  );
}