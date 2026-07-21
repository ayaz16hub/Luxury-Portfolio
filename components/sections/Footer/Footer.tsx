import FooterLogo from "./FooterLogo";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterSocial from "./FooterSocial";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070707]">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-5">

          <FooterLogo />

          <FooterLinks
            title="Quick Links"
            links={[
              "Home",
              "About",
              "Projects",
              "Experience",
              "Contact",
            ]}
          />

          <FooterLinks
            title="Services"
            links={[
              "Web Development",
              "Flutter Apps",
              "UI/UX Design",
              "AI Projects",
              "Backend APIs",
            ]}
          />

          <FooterLinks
            title="Technologies"
            links={[
              "Next.js",
              "Flutter",
              "React",
              "Firebase",
              "Node.js",
            ]}
          />

          <FooterContact />

        </div>

        <FooterSocial />

      </div>
    </footer>
  );
}