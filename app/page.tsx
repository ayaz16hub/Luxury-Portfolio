import Navbar from "@/components/sections/Navbar/Navbar";
import Hero from "@/components/sections/Hero/Hero";


import Experience from "@/components/sections/Experience/Experience";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import Contact from "@/components/sections/Contact/Contact";
import Footer from "@/components/sections/Footer/Footer";
import Projects from "@/components/sections/projects/Projects";
import About from "@/components/sections/about/About";


export default function Home() {
  return (
    <main>
      <Navbar />

<Hero />

<About />


<Projects />

<Experience />

<Testimonials />

<Contact />

<Footer />
    </main>
  );
}