import { ArrowUpRight } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="flex relative flex-col items-center px-2.5 pt-96 pb-12 mt-0 w-full max-w-[1260px] min-h-[863px] max-md:pt-24 max-md:mt-0 max-md:max-w-full">
      <Image 
        src="/background.svg" 
        alt="Background"
        layout="fill"
        className="object-cover absolute inset-0 size-full" 
        style={{ objectPosition: 'top', top: '-0px' }} // Сдвигаем изображение вверх на 150 пикселей
      />
      <h2 className="relative text-5xl font-bold tracking-tighter leading-10 text-center text-white w-[720px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
        Ready to take <span className="text-violet-300">your</span> digital presence to the next level?
      </h2>
      <p className="relative mt-6 text-base tracking-normal leading-snug text-slate-300 max-md:max-w-full">
        Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
      </p>
      <Link href="https://t.me/artempmbi" target="_blank" className="flex relative gap-2.5 justify-center items-center px-10 py-6 mt-8 text-lg font-medium tracking-tight leading-tight text-white rounded-2xl max-md:px-5">
        Contact Me Now
        <ArrowUpRight strokeWidth={1} />
      </Link>
    </section>
  );
};

export default ContactCTA;