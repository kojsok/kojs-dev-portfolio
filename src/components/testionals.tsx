import React from 'react';
import TestimonialCard from './testimonialCard';


const testimonials = [
  {
    content: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    author: "Michael Johnson",
    position: "Director of AlphaStream Technologies",
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/39b6499414131f23ad836eb6cbd306aa79b90afa19366b6633f041749446805b?placeholderIfAbsent=true&apiKey=c687a0b9d8324d0290cb353cef7469d8"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="mt-36 w-full max-md:mt-10 max-md:max-w-full">
      <h2 className="text-5xl font-bold tracking-tighter leading-none text-center text-white max-md:max-w-full max-md:text-4xl">
        Kind words from{" "}
        <span className="text-violet-300">satisfied clients</span>
      </h2>
      <div className="mt-14 flex gap-5 max-md:flex-col">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;