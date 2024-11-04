import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="flex z-20 flex-col justify-center px-12 py-6 max-w-full text-base font-medium tracking-tight leading-none whitespace-nowrap rounded-[13px] text-slate-300 w-[453px] max-md:px-5 bg-gradient-to-r from-[#04071D] via-[#04071D] to-[#0C0E23] border border-[rgba(105,113,162,0.16)] shadow-lg backdrop-blur-md transition-colors duration-300">
      <ul className="flex gap-8 items-center justify-center">
        <li className="group relative">
          <a href="#about" className="text-slate-300 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 group-hover:after:w-full">
            About
          </a>
        </li>
        <li className="group relative">
          <a href="#projects" className="text-slate-300 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 group-hover:after:w-full">
            Projects
          </a>
        </li>
        <li className="group relative">
          <a href="#testimonials" className="text-slate-300 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 group-hover:after:w-full">
            Testimonials
          </a>
        </li>
        <li className="group relative">
          <a href="#contact" className="text-slate-300 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 group-hover:after:w-full">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;




// import React from 'react';

// const Navigation: React.FC = () => {
//   return (
//     <nav className="flex flex-col justify-center px-12 py-6 max-w-full text-base font-medium tracking-tight leading-none whitespace-nowrap rounded-xl text-slate-300 w-[453px] max-md:px-5 bg-white/10 backdrop-blur-md shadow-lg border border-white/20 transition-colors duration-300 hover:bg-white/20">
//       <ul className="flex gap-8 items-center justify-center">
//         <li className="group relative">
//           <a href="#about" className="text-slate-300 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 group-hover:after:w-full">
//             About
//           </a>
//         </li>
//         <li className="group relative">
//           <a href="#projects" className="text-slate-300 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 group-hover:after:w-full">
//             Projects
//           </a>
//         </li>
//         <li className="group relative">
//           <a href="#testimonials" className="text-slate-300 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 group-hover:after:w-full">
//             Testimonials
//           </a>
//         </li>
//         <li className="group relative">
//           <a href="#contact" className="text-slate-300 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 group-hover:after:w-full">
//             Contact
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navigation;
