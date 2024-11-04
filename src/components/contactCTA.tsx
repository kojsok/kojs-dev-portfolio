import React from 'react';

const ContactCTA: React.FC = () => {
  return (
    <section className="flex relative flex-col items-center px-2.5 pt-96 pb-12 mt-0 w-full max-w-[1260px] min-h-[863px] max-md:pt-24 max-md:mt-0 max-md:max-w-full">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/17a5f675e6b3c631274041dc85c60077b12cd02984a28477cd22f94fcece5add?placeholderIfAbsent=true&apiKey=c687a0b9d8324d0290cb353cef7469d8" alt="" className="object-cover absolute inset-0 size-full" />
      <h2 className="relative text-5xl font-bold tracking-tighter leading-10 text-center text-white w-[720px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
        Ready to take <span className="text-violet-300">your</span> digital presence to the next level?
      </h2>
      <p className="relative mt-6 text-base tracking-normal leading-snug text-slate-300 max-md:max-w-full">
        Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
      </p>
      <a href="#contact" className="flex relative gap-2.5 justify-center items-center px-10 py-6 mt-8 text-lg font-medium tracking-tight leading-tight text-white rounded-2xl max-md:px-5">
        Contact Me Now
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa527fb723cd7d7f456db48cbed6cc0cfa890552371b03dfb72afbea00df1784?placeholderIfAbsent=true&apiKey=c687a0b9d8324d0290cb353cef7469d8" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[11px]" />
      </a>
    </section>
  );
};

export default ContactCTA;