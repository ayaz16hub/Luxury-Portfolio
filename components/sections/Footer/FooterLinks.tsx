type LinkItem = {
  name: string;
  href?: string;
};

type Props = {
  title: string;
  links: LinkItem[];
};

export default function FooterLinks({
  title,
  links,
}: Props) {
  return (
    <div>
      <h3 className="mb-6 text-xl font-bold">
        {title}
      </h3>

      <ul className="space-y-3">

        {links.map((item) => (
          <li key={item.name}>

            {item.href ? (
              <a
                href={item.href}
                className="
                  text-gray-400
                  transition
                  duration-300
                  hover:text-red-500
                "
              >
                {item.name}
              </a>
            ) : (
              <span className="text-gray-400">
                {item.name}
              </span>
            )}

          </li>
        ))}

      </ul>
    </div>
  );
}