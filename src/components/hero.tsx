import { ArrowUpRight } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative flex flex-col items-center px-4 pt-32 pb-12 mt-0 w-full max-w-[1260px]  max-md:pt-24 max-md:mt-0 max-md:max-w-full">
      {/* Background Image */}
      <Image 
        src="/background.svg" 
        alt="Background"
        layout="fill"
        className="object-cover absolute inset-0 w-full h-full z-10" 
        style={{ objectPosition: 'top', top: '-0px' }} // Сдвигаем изображение вверх на 150 пикселей
      />
      
      {/* Content */}
      <div className="relative z-20 text-center">
        <p className="text-base leading-tight text-indigo-100 uppercase tracking-[4px] max-md:mt-10">
          Dynamic Web Magic with Next.js and React
        </p>
        <h1 className="mt-6 text-7xl font-bold tracking-tighter text-white leading-[72px] max-w-4xl mx-auto max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:leading-8">
          Transforming Concepts into Seamless{" "}
          <span className="text-violet-300">User Experiences</span>
        </h1>
        <p className="mt-8 text-2xl leading-tight text-indigo-100 max-md:text-xl max-sm:text-lg max-sm:leading-7">
          Hi! I&apos;m <span className="text-violet-300">KOJS</span>, a FrontEnd, Javascript, Next.js, React Developer.
        </p>
        <Link
          href="#projects"
          className="inline-flex gap-2.5 justify-center items-center px-10 py-4 mt-8 text-lg font-medium tracking-tight leading-tight text-white rounded-[14px] border border-[rgba(105,113,162,0.4)] bg-gradient-to-r from-[#161A31] to-[#06091F] transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#06091F] hover:to-[#161A31] shadow-lg hover:shadow-xl max-md:px-5 max-sm:px-4"
        >
          See my work
          <ArrowUpRight strokeWidth={1} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;