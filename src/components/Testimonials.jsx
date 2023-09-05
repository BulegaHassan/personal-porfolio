import { testimonials } from "../data"
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section
      className='py-10 dark:bg-slate-800 dark:text-white dark:border-x-8 dark:border-emerald-400'
      id='testimonials'
    >
      <h2 className='text-center text-4xl font-medium tracking-wider capitalize underline decoration-emerald-300 dark:decoration-dotted'>
        testimonials
      </h2>
      <div className='mx-auto max-w-7xl  px-8 py-8 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {testimonials.map((testimonial) => {
          return <TestimonialCard key={testimonial.id} {...testimonial} />;
        })}
      </div>
    </section>
  );
}
export default Testimonials