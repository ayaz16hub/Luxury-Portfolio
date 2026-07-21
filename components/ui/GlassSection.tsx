type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassSection({
  children,
  className = "",
}: Props) {
  return (
    <section
      className={`
        relative
        overflow-hidden
        rounded-[36px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        shadow-[0_0_40px_rgba(255,0,0,.08)]
        p-10
        ${className}
      `}
    >
      {children}
    </section>
  );
}