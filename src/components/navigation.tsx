import Link from 'next/link';
import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="flex fixed z-20 flex-col justify-center px-12 py-6 max-w-full text-base font-medium tracking-tight leading-none whitespace-nowrap rounded-[13px] text-slate-300  max-md:px-5 bg-gradient-to-r from-[#04071D] via-[#04071D] to-[#0C0E23] border border-[rgba(105,113,162,0.16)] shadow-lg backdrop-blur-md transition-colors duration-300">
      <ul className="flex gap-8 items-center justify-center">
        <li className="group relative">
          <Link href="#about" className="text-slate-300 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 group-hover:after:w-full">
            About
          </Link>
        </li>
        <li className="group relative">
          <Link href="#projects" className="text-slate-300 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 group-hover:after:w-full">
            Projects
          </Link>
        </li>
        {/* <li className="group relative">
          <a href="#testimonials" className="text-slate-300 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 group-hover:after:w-full">
            Testimonials
          </a>
        </li> */}
        <li className="group relative">
          <Link href="#contact" className="text-slate-300 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 group-hover:after:w-full">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;