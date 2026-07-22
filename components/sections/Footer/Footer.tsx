import FooterLogo from "./FooterLogo";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterSocial from "./FooterSocial";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070707]">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-5">

          {/* Logo */}

          <FooterLogo />

          {/* Quick Links */}

          <FooterLinks
            title="Quick Links"
            links={[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
            
              { name: "Projects", href: "#projects" },
              { name: "Journey", href: "#experience" },
              
              { name: "Contact", href: "#contact" },
            ]}
          />

          {/* Services */}

          <FooterLinks
            title="Services"
            links={[
              { name: "Web Development" },
              { name: "Flutter Apps" },
              { name: "UI/UX Design" },
              { name: "AI Projects" },
              { name: "Backend APIs" },
            ]}
          />

          {/* Technologies */}

          <FooterLinks
            title="Technologies"
            links={[
              { name: "Next.js" },
              { name: "Flutter" },
              { name: "React" },
              { name: "Firebase" },
              { name: "Node.js" },
            ]}
          />

          {/* Contact */}

          <FooterContact />

        </div>

        {/* Social */}

        <FooterSocial />

      </div>
    </footer>
  );
}