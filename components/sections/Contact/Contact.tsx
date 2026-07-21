import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <p className="text-red-500 font-semibold tracking-[0.3em] uppercase">
            Contact
          </p>

          <h2 className="mt-5 text-5xl font-black">
            Let's Build Something
            <span className="text-red-500">
              {" "}Amazing
            </span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-8">
            Have an idea or project?
            I'd love to hear from you.
            Let's create something incredible together.
          </p>

        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-10">

          <ContactInfo />

          <ContactForm />

        </div>

      </div>
    </section>
  );
}