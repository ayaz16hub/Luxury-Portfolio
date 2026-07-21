type Props = {
  title: string;
  links: string[];
};

export default function FooterLinks({
  title,
  links,
}: Props) {
  return (
    <div>

      <h3 className="mb-5 text-xl font-bold">
        {title}
      </h3>

      <div className="space-y-3">

        {links.map((link) => (
          <p
            key={link}
            className="
            cursor-pointer
            text-gray-400
            transition
            hover:text-red-400
          "
          >
            {link}
          </p>
        ))}

      </div>

    </div>
  );
}