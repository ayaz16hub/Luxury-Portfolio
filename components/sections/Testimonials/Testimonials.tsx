import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonialsData";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-red-500">
            Testimonials
          </p>

          <h2 className="mt-5 text-5xl font-black">
            What Clients
            <span className="text-red-500">
              {" "}Say
            </span>
          </h2>

        </div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (
            <TestimonialCard
              key={item.name}
              {...item}
            />
          ))}

        </div>

      </div>
    </section>
  );
}